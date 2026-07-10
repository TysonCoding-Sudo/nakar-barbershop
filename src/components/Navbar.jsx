import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Scissors, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-soft-black no-underline min-h-[48px]">
            <img src="/images/nakar-logo.jpg" alt="NAKAR BARBERSHOP" className="h-9 w-auto rounded-lg object-cover" />
            <span className="font-bold text-lg tracking-tight">NAKAR</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium px-4 py-2.5 rounded-lg transition-colors duration-200 no-underline min-h-[48px] flex items-center ${
                    isActive
                      ? 'text-soft-black bg-gray-100'
                      : 'text-muted hover:text-soft-black hover:bg-gray-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 bg-charcoal text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-soft-black active:scale-95 no-underline min-h-[48px] flex items-center"
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-soft-black cursor-pointer active:scale-95 transition-transform"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-70 shadow-xl flex flex-col transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-line">
          <div className="flex items-center gap-3">
            <img src="/images/nakar-logo.jpg" alt="NAKAR BARBERSHOP" className="h-8 w-auto rounded-lg object-cover" />
            <span className="font-bold text-lg tracking-tight text-soft-black">NAKAR</span>
          </div>
          <button
            className="min-w-[48px] min-h-[48px] flex items-center justify-center text-soft-black cursor-pointer active:scale-95 transition-transform"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <div className="flex flex-col p-5 gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium py-3.5 px-4 rounded-lg transition-colors duration-200 no-underline min-h-[48px] flex items-center ${
                  isActive
                    ? 'bg-gray-100 text-soft-black'
                    : 'text-body hover:bg-gray-50 hover:text-soft-black active:bg-gray-100'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto p-5 border-t border-line">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-charcoal text-white text-sm font-semibold px-5 py-3.5 rounded-full transition-all duration-200 hover:bg-soft-black active:scale-[0.97] no-underline"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  )
}

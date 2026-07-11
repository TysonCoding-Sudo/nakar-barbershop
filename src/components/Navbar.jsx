import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import MediaViewer from './MediaViewer'

const logoItem = [
  { type: 'image', src: '/images/nakar-logo.jpg', label: 'NAKAR BARBERSHOP' },
]

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [viewLogo, setViewLogo] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-page/80 backdrop-blur-lg border-b border-line">
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <div
              onClick={(e) => { e.stopPropagation(); e.preventDefault(); setViewLogo(true) }}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setViewLogo(true) } }}
              aria-label="View logo"
            >
              <img src="/images/nakar-logo.jpg" alt="NAKAR BARBERSHOP" className="h-9 w-auto rounded-lg object-cover" />
            </div>
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 no-underline ${
                    pathname === link.to
                      ? 'text-soft-black bg-card'
                      : 'text-muted hover:text-soft-black hover:bg-card/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex bg-charcoal text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-soft-black active:scale-[0.97] no-underline"
          >
            Book Now
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-soft-black cursor-pointer"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-line bg-page/95 backdrop-blur-lg">
            <div className="px-5 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 no-underline ${
                    pathname === link.to
                      ? 'text-soft-black bg-card'
                      : 'text-muted hover:text-soft-black hover:bg-card/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="px-5 pb-5">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-charcoal text-white text-sm font-semibold px-5 py-3.5 rounded-full transition-all duration-200 hover:bg-soft-black active:scale-[0.97] no-underline"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {viewLogo && (
        <MediaViewer
          items={logoItem}
          currentIndex={0}
          onClose={() => setViewLogo(false)}
          onChangeIndex={() => {}}
        />
      )}
    </>
  )
}

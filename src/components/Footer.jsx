import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Scissors, MapPin, Clock, Camera, Globe } from 'lucide-react'
import MediaViewer from './MediaViewer'

const logoItem = [
  { type: 'image', src: '/images/nakar-logo.jpg', label: 'NAKAR BARBERSHOP', insta: 'https://www.instagram.com/nakarbarbershop?igsh=cW8wcXU5czZqcTk1' },
]

export default function Footer() {
  const [viewLogo, setViewLogo] = useState(false)
  return (
    <>
    <footer className="bg-charcoal border-t border-line py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div
              onClick={() => setViewLogo(true)}
              className="flex items-center gap-3 mb-4 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setViewLogo(true) }}
              aria-label="View logo"
            >
              <img src="/images/nakar-logo.jpg" alt="NAKAR BARBERSHOP" className="h-10 w-auto rounded-lg object-cover" />
              <span className="text-lg font-bold text-soft-black">NAKAR</span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Premium barbershop in Mamelodi West. Fresh cuts, sharp lines, clean vibes.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/nakarbarbershop?igsh=cW8wcXU5czZqcTk1"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center bg-card rounded-full text-muted hover:text-soft-black hover:bg-line transition-all duration-200"
                aria-label="Instagram"
              >
                <Camera size={18} />
              </a>
              <a
                href="#"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center bg-card rounded-full text-muted hover:text-soft-black hover:bg-line transition-all duration-200"
                aria-label="Facebook"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-soft-black mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((label) => (
                <Link
                  key={label}
                  to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                  className="text-sm text-muted hover:text-soft-black transition-colors duration-200 no-underline"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-soft-black mb-4 uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <span>Classic Fade</span>
              <span>Skin Fade</span>
              <span>Bald Fade</span>
              <span>Kids Cuts</span>
              <span>Beard Trim</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-soft-black mb-4 uppercase tracking-wider">Visit Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Mamelodi West, Pretoria<br />South Africa</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Mon — Sat: 8AM – 7PM<br />Sun: 9AM – 3PM</span>
              </div>
              <div className="flex items-start gap-3">
                <Scissors size={16} className="mt-0.5 shrink-0" />
                <span>Walk-ins & Appointments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50 max-w-6xl mx-auto px-5 mt-10 py-5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} NAKAR BARBERSHOP. All rights reserved.
      </div>
    </footer>

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

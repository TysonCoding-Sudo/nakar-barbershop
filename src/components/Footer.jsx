import { Link } from 'react-router-dom'
import { Scissors, MapPin, Phone, Clock, Camera, Video } from 'lucide-react'

const mapsUrl = 'https://www.google.com/maps?q=41+Nkwane+Street+Mamelodi+West+Pretoria+0122+South+Africa'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300 md:pb-0">
      <div className="max-w-6xl mx-auto px-5 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scissors size={20} className="text-gray-400" />
            <span className="font-bold text-lg text-white tracking-tight">NAKAR</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Premium barbershop serving fresh cuts, sharp lines, and clean vibes. Walk in or book ahead.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="flex flex-col gap-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/services', label: 'Services' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-gray-400 hover:text-white transition-colors no-underline min-h-[40px] flex items-center"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Hours</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <div className="flex justify-between">
              <span>Mon – Fri</span>
              <span>9 AM – 6 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>8 AM – 6 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>10 AM – 4 PM</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors no-underline min-h-[40px]"
            >
              <MapPin size={15} />
              <span>41 Nkwane Street, Mamelodi West, Pretoria, 0122</span>
            </a>
            <a href="tel:+27714705376" className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors no-underline min-h-[40px]">
              <Phone size={15} />
              <span>071 470 5376</span>
            </a>
            <div className="flex items-center gap-2.5 min-h-[40px]">
              <Clock size={15} />
              <span>Walk-ins welcome</span>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.instagram.com/nakarbarbershop?igsh=cW8wcXU5czZqcTk1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white active:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg active:bg-gray-700/50"
              aria-label="Instagram"
            >
              <Camera size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white active:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg active:bg-gray-700/50" aria-label="YouTube">
              <Video size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50 max-w-6xl mx-auto px-5 py-5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} NAKAR BARBERSHOP. All rights reserved.
      </div>
    </footer>
  )
}

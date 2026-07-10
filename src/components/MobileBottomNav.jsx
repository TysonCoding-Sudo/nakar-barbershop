import { useLocation } from 'react-router-dom'
import { Home, User, Image, Phone } from 'lucide-react'

const items = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/about', icon: User, label: 'About' },
  { to: '/gallery', icon: Image, label: 'Gallery' },
  { to: '/contact', icon: Phone, label: 'Contact' },
]

export default function MobileBottomNav() {
  const { pathname } = useLocation()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-lg border-t border-line safe-area-bottom">
      <div className="flex items-center justify-around h-14">
        {items.map((item) => {
          const isActive = pathname === item.to
          const Icon = item.icon
          return (
            <a
              key={item.to}
              href={item.to}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[48px] min-h-[48px] px-3 rounded-lg transition-colors duration-200 no-underline ${
                isActive
                  ? 'text-charcoal'
                  : 'text-muted hover:text-body active:text-charcoal'
              }`}
            >
              <Icon size={18} />
              <span className="text-[10px] font-medium leading-none">{item.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

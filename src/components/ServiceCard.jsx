import { useRef } from 'react'
import { Clock, DollarSign } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, price, duration, index = 0 }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={cardRef}
      className="bg-card rounded-2xl border border-line p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 active:scale-[0.98] active:shadow-sm group service-card-tilt"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-charcoal transition-colors duration-300">
        {Icon && <Icon size={22} className="text-accent-slate group-hover:text-white transition-colors duration-300" />}
      </div>
      <h3 className="text-lg font-bold text-soft-black mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-5">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-line">
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1 text-lg font-bold text-soft-black">
          <DollarSign size={16} />
          <span>{price}</span>
        </div>
      </div>
    </div>
  )
}

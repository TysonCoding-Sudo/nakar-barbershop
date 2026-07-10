import ScrollReveal from '../components/ScrollReveal'
import ServiceCard from '../components/ServiceCard'
import { Scissors, Maximize2, Sparkles, Eye, Beaker, ShowerHead, BadgePercent } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Classic Haircut', description: 'Precision scissor & clipper cut tailored to your style.', price: 35, duration: '30 min' },
  { icon: Maximize2, title: 'Fade / Taper', description: 'Smooth blends from skin to soft — zero hard lines.', price: 40, duration: '35 min' },
  { icon: Scissors, title: 'Haircut + Beard Trim', description: 'Full grooming: fresh cut + lined-up beard.', price: 55, duration: '45 min' },
  { icon: Sparkles, title: 'Hot Towel Shave', description: 'Classic straight-razor shave with hot towel finish.', price: 45, duration: '40 min' },
  { icon: Eye, title: 'Eyebrow Shape-Up', description: 'Clean brow arching and shaping.', price: 15, duration: '10 min' },
  { icon: Beaker, title: 'Hair Treatment', description: 'Deep conditioning scalp treatment for healthy hair.', price: 30, duration: '25 min' },
  { icon: ShowerHead, title: 'Shampoo + Style', description: 'Wash, blow-dry, and product styling.', price: 25, duration: '20 min' },
  { icon: BadgePercent, title: 'Student Cut', description: 'Full haircut at a discount with valid student ID.', price: 25, duration: '30 min' },
]

export default function Services() {
  return (
    <div className="pt-24">
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">Pricing</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-soft-black mt-3 mb-4">
                Services & Prices
              </h1>
              <p className="text-body max-w-lg mx-auto">
                Transparent pricing, top-tier quality. What you see is what you get.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={i}>
                <ServiceCard {...s} index={i} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 text-center bg-card rounded-2xl border border-line p-8">
              <p className="text-sm text-muted mb-2">
                Prices may vary based on hair length and complexity.
              </p>
              <p className="text-sm text-body">
                <span className="font-semibold text-soft-black">First time?</span> Mention this site and get 10% off your first cut.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

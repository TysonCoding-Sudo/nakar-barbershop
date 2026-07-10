import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { Scissors, Sparkles, User } from 'lucide-react'

const features = [
  {
    icon: Scissors,
    title: 'Expert Cuts',
    desc: 'Our barbers stay sharp with the latest trends and classic techniques.',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    desc: 'We use only top-tier products to keep your hair and beard looking fresh.',
  },
  {
    icon: User,
    title: 'Personalized Style',
    desc: 'Every cut is tailored to your face shape, hair type, and vibe.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 bg-page">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mt-3">
                More Than Just a Haircut
              </h2>
              <p className="text-body mt-3 max-w-lg mx-auto">
                We bring the full experience — from the moment you walk in to the moment you check your reflection.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card rounded-2xl border border-line p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 active:scale-[0.98]">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                    <f.icon size={26} className="text-accent-slate" />
                  </div>
                  <h3 className="text-xl font-bold text-soft-black mb-3">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <ScrollReveal>
            <span className="text-xs font-semibold text-muted uppercase tracking-widest">NAKAR in Numbers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mt-3 mb-12">
              Built by Barbers, For the Culture
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { target: 5000, suffix: '+', label: 'Cuts Done' },
              { target: 9, suffix: '', decimals: 0, prefix: '4.', label: 'Avg Rating' },
              { target: 8, suffix: '+', label: 'Years Open' },
              { target: 50, suffix: '+', label: 'Styles Mastered' },
            ].map((s, i) => (
              <ScrollReveal key={i}>
                <div className="text-3xl sm:text-4xl font-bold text-soft-black">
                  <AnimatedCounter target={s.target} suffix={s.suffix} decimals={s.decimals || 0} prefix={s.prefix || ''} />
                </div>
                <div className="text-sm text-muted mt-1">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-page">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mb-4">
              Ready for a Fresh Look?
            </h2>
            <p className="text-body mb-8 max-w-md mx-auto">
              Book your appointment in seconds. Walk-ins also welcome — just drop by.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-charcoal text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-soft-black hover:scale-105 active:scale-95 no-underline shadow-lg shadow-black/10 min-h-[48px]"
            >
              Book Your Cut Now
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Testimonials />
    </>
  )
}

import ScrollReveal from '../components/ScrollReveal'
import TeamCard from '../components/TeamCard'
import { Scissors } from 'lucide-react'

const team = [
  { name: 'Marco N.', role: 'Master Barber & Founder' },
  { name: 'Jay R.', role: 'Senior Barber' },
  { name: 'Dre T.', role: 'Fade Specialist' },
  { name: 'Luis C.', role: 'Beard & Lineup Expert' },
]

export default function About() {
  return (
    <div className="pt-24">
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="left">
              <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <Scissors size={48} className="text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-400">NAKAR BARBERSHOP Interior</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">Our Story</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-soft-black mt-3 mb-6 leading-tight">
                Where Craft Meets Culture
              </h1>
              <div className="space-y-4 text-body leading-relaxed">
                <p>
                  NAKAR BARBERSHOP was born from a simple belief: a great haircut changes everything. 
                  Founded in 2020, we set out to build a space where style, skill, and good energy come together.
                </p>
                <p>
                  Our barbers aren't just trained — they're artists. Every fade, every line, every shape-up 
                  is done with precision and passion. We stay on top of trends so you don't have to.
                </p>
                <p>
                  Whether you're here for a classic cut or something bold, you're family at NAKAR.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">The Team</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mt-3">
                Meet the Barbers
              </h2>
              <p className="text-body mt-3 max-w-lg mx-auto">
                Skilled, passionate, and always ready to make you look your best.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((barber, i) => (
              <ScrollReveal key={i}>
                <TeamCard {...barber} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-page">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <span className="text-xs font-semibold text-muted uppercase tracking-widest">Our Vibe</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mt-3 mb-6">
              More Than a Shop. A Vibe.
            </h2>
            <p className="text-body leading-relaxed max-w-xl mx-auto">
              Good music, good conversation, and great cuts. That's what NAKAR is about. 
              We've built a space where you can kick back, relax, and leave feeling like a million bucks.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

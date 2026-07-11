import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import TeamCard from '../components/TeamCard'
import MediaViewer from '../components/MediaViewer'
import { Music, Sparkles, Users } from 'lucide-react'

const team = [
  { name: 'Marco N.', role: 'Master Barber & Founder' },
  { name: 'Jay R.', role: 'Senior Barber' },
  { name: 'Dre T.', role: 'Fade Specialist' },
  { name: 'Luis C.', role: 'Beard & Lineup Expert' },
]

const aboutVideos = [1, 2, 3]
const aboutMediaItems = aboutVideos.map((n) => ({
  type: 'video',
  src: `/videos/gallery/gallery-video-0${n}.mp4`,
  label: `NAKAR in Action ${n}`,
}))

export default function About() {
  const [activeVideo, setActiveVideo] = useState(null)
  return (
    <div className="pt-24">
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="left">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-charcoal to-soft-black flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-6xl mb-4">💈</p>
                  <p className="text-sm text-gray-400 font-medium">Est. 2020 — Mamelodi West, Pretoria</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">Mams</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-soft-black mt-3 mb-6 leading-tight">
                Where Mams Meets Style
              </h1>
              <div className="space-y-4 text-body leading-relaxed">
                <p>
                  Mamelodi. Mams. Mother of Melodies. A township built on resilience, shaped by struggle, 
                  and driven by a creative energy that refuses to be boxed in. From the streets of Phase 3 
                  to the buzz of Denlyn Mall — this place breathes culture.
                </p>
                <p>
                  NAKAR BARBERSHOP was born right here in Mamelodi West in 2020. Not because we wanted 
                  to open just any shop — but because this community deserved a space where looking fresh 
                  meets feeling at home. Where the clippers running and the conversation is flowing.
                </p>
                <p>
                  In Mams, a barbershop has never been just about haircuts. It's where you walk in for a 
                  shape-up and walk out with advice, a laugh, a debate about Sundowns' last match, or the 
                  latest beat dropping in the township. It's where young kings get their crowns — and their confidence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">The Culture</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mt-3 mb-4">
                Born From the Streets of Mams
              </h2>
              <p className="text-body max-w-xl mx-auto">
                Mamelodi doesn't follow trends. It sets them. From Bacardi house to Bojwa dance, 
                from Captain Play streetwear to the Mamelodi BLVD movement — this township creates.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Music,
                title: 'Music & Movement',
                desc: 'Kwaito, Bacardi house, hip-hop — Mams moves to its own rhythm. This is where Moretele Park shakes and Bojwa dancers take over the streets.',
              },
              {
                icon: Sparkles,
                title: 'Style & Swag',
                desc: 'From the Amakipkip to the Smarteez, township fashion has always been bold. We carry that same energy in every cut, fade, and lineup.',
              },
              {
                icon: Users,
                title: 'Community & Pride',
                desc: 'Crowns of Confidence. Building from humble roots. In Mams, we look out for each other — and a fresh cut is how we show up ready.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-page rounded-2xl border border-line p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-charcoal flex items-center justify-center mx-auto mb-5">
                    <item.icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-soft-black mb-3">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">In Action</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mt-3 mb-3">
                NAKAR in Action
              </h2>
              <p className="text-body max-w-lg mx-auto">
                See what goes down in the chair. Fresh cuts, good energy, Mams style.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {aboutVideos.map((n, i) => (
              <ScrollReveal key={n}>
                <div
                  className="relative aspect-video bg-charcoal rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setActiveVideo(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveVideo(i) }}
                >
                  <video
                    src={`/videos/gallery/gallery-video-0${n}.mp4`}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="#1a1b1d" className="ml-1">
                        <polygon points="8,5 19,12 8,19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {activeVideo !== null && (
            <MediaViewer
              items={aboutMediaItems}
              currentIndex={activeVideo}
              onClose={() => setActiveVideo(null)}
              onChangeIndex={(i) => setActiveVideo(i)}
            />
          )}
        </div>
      </section>

      <section className="py-20 bg-page">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">The Team</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mt-3">
                Meet the Barbers
              </h2>
              <p className="text-body mt-3 max-w-lg mx-auto">
                Skilled hands. Good hearts. These are the guys keeping Mams fresh.
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

      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Our Vibe</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              The Living Room of Mams
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">
              Walk into NAKAR and you'll hear the music before you see the chair. This is where 
              conversations start, where jokes fly, where the energy is always right. Whether you're 
              here for a zero fade, a taper with beard, or just to catch up — the door is open. 
              That's the Mams way.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

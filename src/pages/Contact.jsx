import ScrollReveal from '../components/ScrollReveal'
import ContactForm from '../components/ContactForm'
import { MapPin, Phone, Clock, Camera } from 'lucide-react'

const mapsUrl = 'https://www.google.com/maps?q=41+Nkwane+Street+Mamelodi+West+Pretoria+0122+South+Africa'

const details = [
  {
    icon: MapPin,
    label: 'Address',
    value: (
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-soft-black hover:text-accent-slate transition-colors no-underline"
      >
        41 Nkwane Street, Mamelodi West, Pretoria, 0122
      </a>
    ),
  },
  { icon: Phone, label: 'Phone', value: '071 470 5376' },
  { icon: Clock, label: 'Walk-ins', value: 'Always welcome — no appointment needed' },
  {
    icon: Camera,
    label: 'Instagram',
    value: (
      <a
        href="https://www.instagram.com/nakarbarbershop?igsh=cW8wcXU5czZqcTk1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-soft-black hover:text-accent-slate transition-colors no-underline"
      >
        @nakarbarbershop
      </a>
    ),
  },
]

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">Get in Touch</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-soft-black mt-3 mb-4">
                Come See Us
              </h1>
              <p className="text-body max-w-lg mx-auto">
                Drop by the shop, give us a call, or DM us on Instagram.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal variant="left">
              <div className="bg-card rounded-2xl border border-line p-8">
                <h2 className="text-xl font-bold text-soft-black mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="right">
              <div className="space-y-5">
                {details.map((d, i) => (
                  <div key={i} className="bg-card rounded-2xl border border-line p-5 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                      <d.icon size={18} className="text-accent-slate" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">{d.label}</p>
                      {typeof d.value === 'string' ? (
                        <p className="text-sm font-medium text-soft-black">{d.value}</p>
                      ) : (
                        d.value
                      )}
                    </div>
                  </div>
                ))}

                <a
                  href="https://www.instagram.com/nakarbarbershop?igsh=cW8wcXU5czZqcTk1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-charcoal rounded-2xl p-6 text-center no-underline hover:bg-soft-black transition-colors"
                >
                  <Camera size={24} className="text-white mx-auto mb-3" />
                  <p className="text-white font-semibold text-lg">@nakarbarbershop</p>
                  <p className="text-gray-400 text-sm mt-1">DM us to book or ask anything</p>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-12 bg-card rounded-2xl border border-line p-5 overflow-hidden">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[21/9] rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors no-underline"
              >
                <div className="text-center text-muted">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p className="text-sm font-medium">41 Nkwane Street, Mamelodi West, Pretoria, 0122</p>
                  <p className="text-xs mt-1">Click to open in Google Maps</p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

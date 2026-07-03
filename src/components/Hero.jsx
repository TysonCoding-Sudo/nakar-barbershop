import { Link } from 'react-router-dom'
import { Scissors, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-page via-white to-gray-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-soft-black tracking-tight leading-none mb-6 glow-ambient-blue">
          NAKAR<br />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">BARBERSHOP</span>
        </h1>

        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-line px-4 py-2 rounded-full text-sm text-muted mb-8 animate-fade-in">
          <Scissors size={14} />
          <span>Premium Barbershop — Est. 2020</span>
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-soft-black leading-[1.05] tracking-tight mb-6">
          Fresh Fades.
          <br />
          <span className="text-body">Sharp Lines.</span>
          <br />
          Clean Vibes.
        </h2>

        <p className="text-lg sm:text-xl text-body max-w-xl mx-auto mb-10 leading-relaxed">
          Level up your look at NAKAR. Walk in for a cut or book your appointment — either way, you're walking out fresh.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-charcoal text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-soft-black hover:scale-105 active:scale-95 no-underline shadow-lg shadow-black/10 min-h-[48px] flex items-center justify-center"
          >
            Book Your Cut
          </Link>
          <Link
            to="/services"
            className="text-body text-base font-medium px-8 py-3.5 rounded-full border border-line transition-all duration-300 hover:bg-white hover:border-muted active:bg-gray-50 active:scale-[0.98] no-underline min-h-[48px] flex items-center justify-center"
          >
            View Services
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-soft-black">5K+</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Happy Clients</div>
          </div>
          <div className="w-px h-10 bg-line" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-soft-black">8+</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Years Experience</div>
          </div>
          <div className="w-px h-10 bg-line" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-soft-black">50+</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Styles Mastered</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-muted" />
      </div>
    </section>
  )
}

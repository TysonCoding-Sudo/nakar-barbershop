import { useState, useEffect, useRef } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex M.',
    text: "Best fade I've ever had. The attention to detail is unreal. Been coming here for two years and never been disappointed.",
  },
  {
    name: 'Jordan K.',
    text: 'NAKAR is the only spot I trust with my hair. Clean shop, dope vibes, and the barbers actually listen to what you want.',
  },
  {
    name: 'Marcus T.',
    text: 'Walked in for a quick trim, walked out looking like a whole new person. The team here knows their craft. Highly recommend.',
  },
  {
    name: 'Chris L.',
    text: "Booking is easy, the wait is short, and the results are fire. This is what a modern barbershop should be like.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [paused, setPaused] = useState(false)
  const dragStart = useRef(0)
  const dragEnd = useRef(0)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      if (!dragging) setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [dragging, paused])

  const goTo = (i) => setCurrent((i + testimonials.length) % testimonials.length)
  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  const handleTouchStart = (e) => {
    dragStart.current = e.touches[0].clientX
    setDragging(true)
  }
  const handleTouchMove = (e) => {
    dragEnd.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    const diff = dragStart.current - dragEnd.current
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
    setDragging(false)
  }

  return (
    <section className="py-20 bg-white" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="max-w-3xl mx-auto px-5 text-center">
        <span className="text-xs font-semibold text-muted uppercase tracking-widest">Testimonials</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-soft-black mt-3 mb-12">
          What Our Clients Say
        </h2>

        <div className="relative select-none">
          <Quote size={32} className="text-gray-200 mx-auto mb-6" />

          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full px-4">
                  <p className="text-lg sm:text-xl text-body leading-relaxed italic mb-8 px-2">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="font-semibold text-soft-black">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full border border-line transition-all duration-200 active:bg-gray-100 active:scale-95 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={18} className="text-body" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer min-w-[auto] min-h-[auto] ${
                    i === current ? 'bg-charcoal w-6 h-2' : 'bg-gray-300 w-2 h-2'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full border border-line transition-all duration-200 active:bg-gray-100 active:scale-95 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={18} className="text-body" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

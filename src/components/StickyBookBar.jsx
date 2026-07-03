import { Scissors, Phone } from 'lucide-react'

export default function StickyBookBar() {
  return (
    <div className="md:hidden fixed bottom-14 left-0 right-0 z-40 bg-white border-t border-line shadow-lg shadow-black/10">
      <div className="flex items-center gap-2 px-4 py-2.5">
        <a
          href="tel:+27714705376"
          className="flex items-center justify-center gap-2 flex-1 text-sm font-semibold text-body border border-line rounded-xl py-3 transition-all duration-200 active:scale-[0.97] active:bg-gray-50 no-underline min-h-[48px]"
        >
          <Phone size={16} />
          Call
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 flex-[2] text-sm font-semibold text-white bg-charcoal rounded-xl py-3 transition-all duration-200 active:scale-[0.97] active:bg-soft-black no-underline shadow-sm min-h-[48px]"
        >
          <Scissors size={16} />
          Book Now
        </a>
      </div>
    </div>
  )
}

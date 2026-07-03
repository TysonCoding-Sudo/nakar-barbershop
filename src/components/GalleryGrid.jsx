import { useState, useEffect, useRef, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

function buildItems(folder, labels) {
  return labels.map((label, i) => ({
    id: `${folder}-${i}`,
    label,
    category: folder.toUpperCase().replace('-', ' '),
    image: `/images/gallery/${folder}/${(i + 1).toString().padStart(2, '0')}.jpg`,
  }))
}

const galleryItems = [
  ...buildItems('high-fade', [
    'Classic Fade', 'Skin Fade', 'Bald Fade', 'High Top', 'Drop Fade',
    'Temple Fade', 'Shadow Fade',
  ]),
  ...buildItems('stay-shining', [
    'Pompadour', 'Slick Back', 'Curly Top', 'Sponge Twist', 'Dread Styles',
    'Cornrows', 'Silk Press',
  ]),
  ...buildItems('clbs', [
    'Caesar Cut', 'Box Fade', 'Waves', '360 Waves', 'Flat Top', 'Burst Fade',
  ]),
  ...buildItems('ladies', [
    'Bob Cut', 'Braids', 'Pixie Cut', 'Layered Cut', 'Faux Hawk', 'Cornrow Updo',
  ]),
  ...buildItems('kids', [
    'Kids Fade', 'School Cut', 'Mohawk', 'Design Cut', 'Taper Fade', 'Buzz Cut',
  ]),
  ...buildItems('taper', [
    'Taper Fade', 'Low Taper', 'Mid Taper', 'High Taper', 'Taper with Beard', 'Skin Taper',
  ]),
]

export default function GalleryGrid({ category = 'ALL' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [visible, setVisible] = useState(false)
  const prevCategory = useRef(category)
  const touchStart = useRef(0)

  const filtered = category === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === category)

  useEffect(() => {
    if (prevCategory.current !== category) {
      setVisible(false)
      const timer = setTimeout(() => setVisible(true), 50)
      prevCategory.current = category
      return () => clearTimeout(timer)
    } else {
      setVisible(true)
    }
  }, [category])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') goTo(lightboxIndex - 1)
      if (e.key === 'ArrowRight') goTo(lightboxIndex + 1)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  const goTo = useCallback((i) => {
    if (i < 0) setLightboxIndex(filtered.length - 1)
    else if (i >= filtered.length) setLightboxIndex(0)
    else setLightboxIndex(i)
  }, [filtered.length])

  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(lightboxIndex + 1) : goTo(lightboxIndex - 1)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer active:scale-[0.97] transition-all duration-300 group"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
              transitionDelay: `${i * 40}ms`,
            }}
            onClick={() => setLightboxIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(i) }}
          >
            <img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-soft-black/0 md:group-hover:bg-soft-black/40 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white text-sm font-semibold drop-shadow-sm">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {lightboxIndex + 1} / {filtered.length}
          </div>

          {filtered.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goTo(lightboxIndex - 1) }}
                className="absolute left-2 sm:left-4 min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
                aria-label="Previous"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goTo(lightboxIndex + 1) }}
                className="absolute right-2 sm:right-4 min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
                aria-label="Next"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          <div
            className="max-h-[85vh] max-w-[90vw] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].label}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {filtered[lightboxIndex].label}
          </p>
        </div>
      )}
    </>
  )
}

import { useState, useEffect, useCallback } from 'react'
import MediaViewer from './MediaViewer'

const galleryItems = [
  { id: 'hf-0', label: 'Classic Fade', image: '/images/gallery/all/high-fade-01.jpg' },
  { id: 'hf-1', label: 'Skin Fade', image: '/images/gallery/all/high-fade-02.jpg' },
  { id: 'hf-2', label: 'Bald Fade', image: '/images/gallery/all/high-fade-03.jpg' },
  { id: 'hf-3', label: 'High Top', image: '/images/gallery/all/high-fade-04.jpg' },
  { id: 'hf-4', label: 'Drop Fade', image: '/images/gallery/all/high-fade-05.jpg' },
  { id: 'hf-5', label: 'Temple Fade', image: '/images/gallery/all/high-fade-06.jpg' },
  { id: 'hf-6', label: 'Shadow Fade', image: '/images/gallery/all/high-fade-07.jpg' },
  { id: 'ss-0', label: 'Pompadour', image: '/images/gallery/all/stay-shining-01.jpg' },
  { id: 'ss-1', label: 'Slick Back', image: '/images/gallery/all/stay-shining-02.jpg' },
  { id: 'ss-2', label: 'Curly Top', image: '/images/gallery/all/stay-shining-03.jpg' },
  { id: 'ss-3', label: 'Sponge Twist', image: '/images/gallery/all/stay-shining-04.jpg' },
  { id: 'ss-4', label: 'Dread Styles', image: '/images/gallery/all/stay-shining-05.jpg' },
  { id: 'ss-5', label: 'Cornrows', image: '/images/gallery/all/stay-shining-06.jpg' },
  { id: 'ss-6', label: 'Silk Press', image: '/images/gallery/all/stay-shining-07.jpg' },
  { id: 'cl-0', label: 'Caesar Cut', image: '/images/gallery/all/clbs-01.jpg' },
  { id: 'cl-1', label: 'Box Fade', image: '/images/gallery/all/clbs-02.jpg' },
  { id: 'cl-2', label: 'Waves', image: '/images/gallery/all/clbs-03.jpg' },
  { id: 'cl-3', label: '360 Waves', image: '/images/gallery/all/clbs-04.jpg' },
  { id: 'cl-4', label: 'Flat Top', image: '/images/gallery/all/clbs-05.jpg' },
  { id: 'cl-5', label: 'Burst Fade', image: '/images/gallery/all/clbs-06.jpg' },
  { id: 'la-0', label: 'Bob Cut', image: '/images/gallery/all/ladies-01.jpg' },
  { id: 'la-1', label: 'Braids', image: '/images/gallery/all/ladies-02.jpg' },
  { id: 'la-2', label: 'Pixie Cut', image: '/images/gallery/all/ladies-03.jpg' },
  { id: 'la-3', label: 'Layered Cut', image: '/images/gallery/all/ladies-04.jpg' },
  { id: 'la-4', label: 'Faux Hawk', image: '/images/gallery/all/ladies-05.jpg' },
  { id: 'la-5', label: 'Cornrow Updo', image: '/images/gallery/all/ladies-06.jpg' },
  { id: 'ki-0', label: 'Kids Fade', image: '/images/gallery/all/kids-01.jpg' },
  { id: 'ki-1', label: 'School Cut', image: '/images/gallery/all/kids-02.jpg' },
  { id: 'ki-2', label: 'Mohawk', image: '/images/gallery/all/kids-03.jpg' },
  { id: 'ki-3', label: 'Design Cut', image: '/images/gallery/all/kids-04.jpg' },
  { id: 'ki-4', label: 'Taper Fade', image: '/images/gallery/all/kids-05.jpg' },
  { id: 'ki-5', label: 'Buzz Cut', image: '/images/gallery/all/kids-06.jpg' },
  { id: 'ta-0', label: 'Taper Fade', image: '/images/gallery/all/taper-01.jpg' },
  { id: 'ta-1', label: 'Low Taper', image: '/images/gallery/all/taper-02.jpg' },
  { id: 'ta-2', label: 'Mid Taper', image: '/images/gallery/all/taper-03.jpg' },
  { id: 'ta-3', label: 'High Taper', image: '/images/gallery/all/taper-04.jpg' },
  { id: 'ta-4', label: 'Taper with Beard', image: '/images/gallery/all/taper-05.jpg' },
  { id: 'ta-5', label: 'Skin Taper', image: '/images/gallery/all/taper-06.jpg' },
]

const mediaItems = galleryItems.map((item) => ({
  type: 'image',
  src: item.image,
  label: item.label,
  id: item.id,
}))

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const handleChangeIndex = useCallback((i) => {
    setLightboxIndex(i)
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {galleryItems.map((item, i) => (
          <div
            key={item.id}
            className="relative aspect-square bg-charcoal rounded-xl overflow-hidden cursor-pointer active:scale-[0.97] transition-all duration-300 group touch-manipulation"
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
            <div className="absolute inset-0 bg-soft-black/0 md:group-hover:bg-soft-black/40 transition-all duration-300 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white text-sm font-semibold drop-shadow-sm">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <MediaViewer
          items={mediaItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={handleChangeIndex}
        />
      )}
    </>
  )
}

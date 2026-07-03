import { useState } from 'react'

const galleryItems = [
  { id: 1, label: 'Classic Fade', category: 'HIGH FADE' },
  { id: 2, label: 'Skin Fade', category: 'HIGH FADE' },
  { id: 3, label: 'Bald Fade', category: 'HIGH FADE' },
  { id: 4, label: 'Pompadour', category: 'STAY SHINING' },
  { id: 5, label: 'Slick Back', category: 'STAY SHINING' },
  { id: 6, label: 'Curly Top', category: 'STAY SHINING' },
  { id: 7, label: 'Caesar Cut', category: 'CLBs' },
  { id: 8, label: 'Box Fade', category: 'CLBs' },
  { id: 9, label: 'Waves', category: 'CLBs' },
  { id: 10, label: 'Bob Cut', category: 'LADIES' },
  { id: 11, label: 'Braids', category: 'LADIES' },
  { id: 12, label: 'Pixie Cut', category: 'LADIES' },
  { id: 13, label: 'Kids Fade', category: 'KIDS' },
  { id: 14, label: 'School Cut', category: 'KIDS' },
  { id: 15, label: 'Mohawk', category: 'KIDS' },
  { id: 16, label: 'Taper Fade', category: 'TAPER' },
  { id: 17, label: 'Low Taper', category: 'TAPER' },
  { id: 18, label: 'Mid Taper', category: 'TAPER' },
]

export default function GalleryGrid({ category = 'ALL' }) {
  const [tapped, setTapped] = useState(null)

  const filtered = category === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === category)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {filtered.map((item) => {
        const isTapped = tapped === item.id
        return (
          <div
            key={item.id}
            className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer active:scale-[0.97] transition-transform duration-150"
            onClick={() => setTapped(isTapped ? null : item.id)}
            onMouseEnter={() => setTapped(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setTapped(isTapped ? null : item.id) }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl">💈</span>
              </div>
            </div>
            <div
              className={`absolute inset-0 flex items-end p-4 transition-all duration-300 ${
                isTapped ? 'bg-soft-black/40' : 'bg-soft-black/0 md:group-hover:bg-soft-black/40'
              }`}
            >
              <span
                className={`text-white text-sm font-medium transition-all duration-300 ${
                  isTapped
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0'
                }`}
              >
                {item.label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

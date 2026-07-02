import { useState } from 'react'

const placeholders = [
  { id: 1, label: 'Classic Fade' },
  { id: 2, label: 'Textured Crop' },
  { id: 3, label: 'Pompadour' },
  { id: 4, label: 'Buzz Cut' },
  { id: 5, label: 'Mohawk Fade' },
  { id: 6, label: 'Line Up' },
  { id: 7, label: 'Taper Fade' },
  { id: 8, label: 'Curly Top' },
]

export default function GalleryGrid() {
  const [tapped, setTapped] = useState(null)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {placeholders.map((item) => {
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

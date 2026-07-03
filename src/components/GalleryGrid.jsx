import { useState } from 'react'

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
            className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer active:scale-[0.97] transition-transform duration-150 group"
            onClick={() => setTapped(isTapped ? null : item.id)}
            onMouseEnter={() => setTapped(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setTapped(isTapped ? null : item.id) }}
          >
            <img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                isTapped ? 'bg-soft-black/50' : 'bg-soft-black/0 md:group-hover:bg-soft-black/40'
              }`}
            >
              <div
                className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  isTapped
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0'
                }`}
              >
                <p className="text-white text-sm font-semibold drop-shadow-sm">{item.label}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

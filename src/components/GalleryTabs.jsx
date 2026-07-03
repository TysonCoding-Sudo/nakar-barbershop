const tabs = [
  { key: 'ALL', label: 'All' },
  { key: 'HIGH FADE', label: 'High Fade' },
  { key: 'STAY SHINING', label: 'Stay Shining' },
  { key: 'CLBs', label: 'CLBs' },
  { key: 'LADIES', label: 'Ladies' },
  { key: 'KIDS', label: 'Kids' },
  { key: 'TAPER', label: 'Taper' },
]

const counts = {
  'ALL': 38,
  'HIGH FADE': 7,
  'STAY SHINING': 7,
  'CLBs': 6,
  'LADIES': 6,
  'KIDS': 6,
  'TAPER': 6,
}

export default function GalleryTabs({ active, onChange }) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-5 px-5 mb-8">
      <div className="flex gap-2 min-w-max pb-2 relative">
        {tabs.map((tab) => {
          const isActive = active === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => onChange(tab.key)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 min-h-[44px] cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-charcoal text-white shadow-sm'
                  : 'bg-white text-body border border-line hover:bg-gray-50 active:bg-gray-100'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[11px] leading-none px-1.5 py-0.5 rounded-full ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-muted'
              }`}>
                {counts[tab.key]}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

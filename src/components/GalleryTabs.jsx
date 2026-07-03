const tabs = ['ALL', 'HIGH FADE', 'STAY SHINING', 'CLBs', 'LADIES', 'KIDS', 'TAPER']

export default function GalleryTabs({ active, onChange }) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-5 px-5 mb-8">
      <div className="flex gap-2 min-w-max pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 min-h-[44px] cursor-pointer ${
              active === tab
                ? 'bg-charcoal text-white shadow-sm'
                : 'bg-white text-body border border-line hover:bg-gray-50 active:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

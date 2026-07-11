import { useState, useEffect, useCallback } from 'react'
import MediaViewer from './MediaViewer'

const videoItems = Array.from({ length: 8 }, (_, i) => ({
  id: `vid-${i}`,
  label: `Video ${i + 1}`,
  video: `/videos/gallery/gallery-video-${(i + 1).toString().padStart(2, '0')}.mp4`,
}))

const mediaItems = videoItems.map((item) => ({
  type: 'video',
  src: item.video,
  label: item.label,
  id: item.id,
}))

export default function VideoGrid() {
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
        {videoItems.map((item, i) => (
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
            <video
              src={item.video}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              preload="metadata"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#1a1b1d" className="ml-1">
                  <polygon points="8,5 19,12 8,19" />
                </svg>
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

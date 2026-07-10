import { useState, useEffect, useRef, useCallback } from 'react'
import { Play } from 'lucide-react'
import VideoPlayerModal from './VideoPlayerModal'

const videoItems = Array.from({ length: 8 }, (_, i) => ({
  id: `vid-${i}`,
  label: `Video ${i + 1}`,
  video: `/videos/gallery/gallery-video-${(i + 1).toString().padStart(2, '0')}.mp4`,
}))

export default function VideoGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [visible, setVisible] = useState(false)
  const touchStart = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const goTo = useCallback((i) => {
    if (i < 0) setLightboxIndex(videoItems.length - 1)
    else if (i >= videoItems.length) setLightboxIndex(0)
    else setLightboxIndex(i)
  }, [])

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
        {videoItems.map((item, i) => (
          <div
            key={item.id}
            className="relative aspect-square bg-charcoal rounded-xl overflow-hidden cursor-pointer active:scale-[0.97] transition-all duration-300 group"
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
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                <Play size={24} className="text-soft-black ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <VideoPlayerModal
          src={videoItems[lightboxIndex].video}
          index={lightboxIndex}
          total={videoItems.length}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => goTo(lightboxIndex - 1)}
          onNext={() => goTo(lightboxIndex + 1)}
          hasPrev={true}
          hasNext={true}
        />
      )}
    </>
  )
}

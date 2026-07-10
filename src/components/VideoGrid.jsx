import { useState, useEffect, useRef, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

const videoItems = Array.from({ length: 8 }, (_, i) => ({
  id: `vid-${i}`,
  label: `Video ${i + 1}`,
  video: `/videos/gallery/gallery-video-${(i + 1).toString().padStart(2, '0')}.mp4`,
}))

export default function VideoGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [visible, setVisible] = useState(false)
  const touchStart = useRef(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

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
            <video
              src={item.video}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              preload="metadata"
            />
            <div className="absolute inset-0 bg-soft-black/20 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                <Play size={24} className="text-soft-black ml-1" />
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
            {lightboxIndex + 1} / {videoItems.length}
          </div>

          {videoItems.length > 1 && (
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
            <video
              ref={videoRef}
              src={videoItems[lightboxIndex].video}
              className="max-h-full max-w-full rounded-lg shadow-2xl"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </>
  )
}

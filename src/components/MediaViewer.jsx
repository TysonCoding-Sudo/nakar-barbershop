import { useEffect, useCallback, useRef } from 'react'

export default function MediaViewer({ items, currentIndex, onClose, onChangeIndex }) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const touchStart = useRef(0)
  const touchMoved = useRef(false)

  const item = items[currentIndex]

  const goTo = useCallback((i) => {
    if (i < 0) onChangeIndex(items.length - 1)
    else if (i >= items.length) onChangeIndex(0)
    else onChangeIndex(i)
  }, [items.length, onChangeIndex])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cancelled = false

    const enterFullscreen = async () => {
      try {
        if (el.requestFullscreen) await el.requestFullscreen()
        else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen()
      } catch {} 
    }

    const lockOrientation = async () => {
      try {
        if (screen.orientation?.lock) await screen.orientation.lock('portrait-primary')
      } catch {} 
    }

    enterFullscreen()
    lockOrientation()

    const handleChange = () => {
      if (cancelled) return
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        onClose()
      }
    }

    document.addEventListener('fullscreenchange', handleChange)
    document.addEventListener('webkitfullscreenchange', handleChange)

    document.body.style.overflow = 'hidden'

    return () => {
      cancelled = true
      document.removeEventListener('fullscreenchange', handleChange)
      document.removeEventListener('webkitfullscreenchange', handleChange)
      document.body.style.overflow = ''

      try {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          if (document.exitFullscreen) document.exitFullscreen()
          else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
        }
      } catch {} 

      try { if (screen.orientation?.unlock) screen.orientation.unlock() } catch {}
    }
  }, [onClose])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goTo(currentIndex - 1)
      if (e.key === 'ArrowRight') goTo(currentIndex + 1)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, currentIndex, goTo])

  useEffect(() => {
    const el = videoRef.current
    if (el && item.type === 'video') {
      el.play().catch(() => {})
    }
    return () => {
      if (el && item.type === 'video') el.pause()
    }
  }, [currentIndex, item.type])

  const handleBgClick = useCallback((e) => {
    if (touchMoved.current) { touchMoved.current = false; return }
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  const handleTouchStart = (e) => {
    touchMoved.current = false
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      touchMoved.current = true
      if (diff > 0) goTo(currentIndex + 1)
      else goTo(currentIndex - 1)
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col"
      onClick={handleBgClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 shrink-0">
        <div className="text-white/60 text-sm font-medium">
          {currentIndex + 1} / {items.length}
        </div>
        <button
          onClick={onClose}
          className="min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-2 relative min-h-0">
        {items.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goTo(currentIndex - 1) }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goTo(currentIndex + 1) }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        <div
          className="flex items-center justify-center max-h-full w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {item.type === 'video' ? (
            <video
              ref={videoRef}
              src={item.src}
              className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl"
              controls
              autoPlay
              muted
              playsInline
              webkit-playsinline
            />
          ) : (
            <img
              src={item.src}
              alt={item.label}
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
              draggable={false}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col items-center pb-4 shrink-0 gap-1.5">
        <p className="text-white/70 text-sm font-medium">
          {item.label}
        </p>
        {item.insta && (
          <a
            href={item.insta}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white text-xs font-medium cursor-pointer no-underline"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @nakarbarbershop
          </a>
        )}
      </div>
    </div>
  )
}

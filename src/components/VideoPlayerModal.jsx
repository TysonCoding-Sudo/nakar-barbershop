import { useEffect, useRef, useCallback } from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

export default function VideoPlayerModal({ src, onClose, onPrev, onNext, hasPrev, hasNext, index, total }) {
  const playerRef = useRef(null)
  const plyrRef = useRef(null)

  useEffect(() => {
    if (!playerRef.current) return
    const player = new Plyr(playerRef.current, {
      controls: [
        'play-large', 'play', 'progress', 'current-time', 'duration',
        'mute', 'volume', 'settings', 'fullscreen',
      ],
      settings: ['speed'],
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
      keyboard: { focused: true, global: true },
      tooltips: { controls: true, seek: true },
    })
    plyrRef.current = player
    return () => { player.destroy() }
  }, [src])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) { e.preventDefault(); onPrev() }
      if (e.key === 'ArrowRight' && hasNext) { e.preventDefault(); onNext() }
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  const handleBgClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col animate-fade-in"
      onClick={handleBgClick}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 shrink-0">
        <div className="text-white/60 text-sm font-medium">
          {index + 1} / {total}
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

      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-2 relative">
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        <div className="w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
          <video
            ref={playerRef}
            src={src}
            className="w-full rounded-lg shadow-2xl"
            playsInline
          />
        </div>
      </div>
    </div>
  )
}

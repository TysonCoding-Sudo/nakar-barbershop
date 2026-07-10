import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function LogoViewer({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 min-w-[48px] min-h-[48px] flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer z-10"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <div
        className="max-h-[85vh] max-w-[90vw] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  )
}

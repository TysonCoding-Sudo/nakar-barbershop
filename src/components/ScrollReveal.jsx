import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '', variant = 'up' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const variantClass =
    variant === 'left' ? 'scroll-reveal-left' :
    variant === 'right' ? 'scroll-reveal-right' :
    'scroll-reveal'

  return (
    <div ref={ref} className={`${variantClass} ${className}`}>
      {children}
    </div>
  )
}

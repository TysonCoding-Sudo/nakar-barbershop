import ScrollReveal from '../components/ScrollReveal'
import GalleryGrid from '../components/GalleryGrid'
import VideoGrid from '../components/VideoGrid'
import { Camera, Video } from 'lucide-react'

export default function Gallery() {
  return (
    <div className="pt-24">
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest">Lookbook</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-soft-black mt-3 mb-4">
                Our Work
              </h1>
              <p className="text-body max-w-lg mx-auto">
                Browse our full collection of cuts and styles.
              </p>
            </div>
          </ScrollReveal>

          <h2 className="flex items-center gap-2 text-lg font-semibold text-soft-black mb-4">
            <Camera size={20} />
            Photos
          </h2>
          <GalleryGrid />

          <div className="mt-16">
            <ScrollReveal>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-soft-black mb-4">
                <Video size={20} />
                Videos
              </h2>
            </ScrollReveal>
            <VideoGrid />
          </div>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <a
                href="https://www.instagram.com/nakarbarbershop?igsh=cW8wcXU5czZqcTk1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-body hover:text-soft-black transition-colors no-underline border border-line rounded-full px-6 py-3 hover:border-muted"
              >
                <Camera size={16} />
                @nakarbarbershop on Instagram
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

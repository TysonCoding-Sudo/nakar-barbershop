import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import MobileBottomNav from './components/MobileBottomNav'
import StickyBookBar from './components/StickyBookBar'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageTransition({ children }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(timer)
  }, [])
  return (
    <div
      className="transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      {children}
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pb-28 md:pb-0">
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </main>
      <BackToTop />
      <StickyBookBar />
      <MobileBottomNav />
      <Footer />
    </>
  )
}

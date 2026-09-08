import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Certifications } from './components/Certifications'
import { ServicesGrid } from './components/ServicesGrid'
import { PaymentSolutions } from './components/PaymentSolutions'
import { Mission } from './components/Mission'
import { ContactSection } from './components/ContactSection'
import { PreFooterCTA } from './components/PreFooterCTA'
import { Footer } from './components/Footer'

import { ContactPage } from './pages/ContactPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { PolicyPage } from './pages/PolicyPage'

// Scroll to top or anchor on route/hash change
const ScrollToHashElement: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

const HomePage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Certifications Trust Bar */}
      <Certifications />

      {/* 9 Core Services Grid (3 per row) */}
      <ServicesGrid />

      {/* 20,000+ BBPS Payment Solutions & Biller Matrix */}
      <PaymentSolutions />

      {/* Mission, Values & Footprint */}
      <Mission onOpenContactModal={() => {}} />

      {/* In-Page Contact Form & Office Address */}
      <ContactSection />

      {/* Pre-Footer Action Banner */}
      <PreFooterCTA />
    </main>
  )
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div className="min-h-screen bg-white font-sans text-retro-navy selection:bg-retro-orange selection:text-white flex flex-col justify-between">
        {/* Sticky Header */}
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
            <Route path="/policy/:type" element={<PolicyPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

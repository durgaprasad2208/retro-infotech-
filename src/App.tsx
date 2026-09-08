import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Certifications } from './components/Certifications'
import { ServicesGrid, ServiceItem } from './components/ServicesGrid'
import { PaymentSolutions } from './components/PaymentSolutions'
import { Mission } from './components/Mission'
import { ContactSection } from './components/ContactSection'
import { PreFooterCTA } from './components/PreFooterCTA'
import { Footer } from './components/Footer'
import { ContactModal } from './components/ContactModal'
import { ServiceDetailModal } from './components/ServiceDetailModal'
import { PolicyModal, PolicyType } from './components/PolicyModal'

export const App: React.FC = () => {
  // Modal states
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [initialServiceForModal, setInitialServiceForModal] = useState('')
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null)
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null)

  const handleOpenContactModal = (serviceName = '') => {
    setInitialServiceForModal(serviceName)
    setContactModalOpen(true)
  }

  const handleSelectService = (service: ServiceItem) => {
    if (service.id === 'pos') {
      // For POS, open contact directly
      handleOpenContactModal('POS Terminals & Smart Retail')
    } else {
      setSelectedServiceForDetail(service)
    }
  }

  const handleSelectSolutionItem = (itemTitle: string) => {
    handleOpenContactModal(`Utility / Recharge: ${itemTitle}`)
  }

  return (
    <div className="min-h-screen bg-white font-sans text-retro-navy selection:bg-retro-orange selection:text-white">
      {/* Sticky Header */}
      <Header onOpenContactModal={() => handleOpenContactModal('General Inquiry')} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenContactModal={() => handleOpenContactModal('Get Started - Merchant Network')} />

        {/* Certifications Trust Bar */}
        <Certifications />

        {/* 9 Core Services Grid */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* 20,000+ BBPS Payment Solutions & Biller Matrix */}
        <PaymentSolutions onSelectItem={handleSelectSolutionItem} />

        {/* Mission, Values & Footprint */}
        <Mission onOpenContactModal={() => handleOpenContactModal('Retail Agent Partnership')} />

        {/* In-Page Contact Form & Office Address */}
        <ContactSection />

        {/* Pre-Footer Action Banner */}
        <PreFooterCTA onOpenContactModal={() => handleOpenContactModal('Join Today - Priority Desk')} />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenPolicy={(policy) => setActivePolicy(policy)}
        onOpenContactModal={() => handleOpenContactModal('Footer Inquiry')}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={initialServiceForModal}
      />

      <ServiceDetailModal
        service={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onRequestAccess={(serviceTitle) => handleOpenContactModal(serviceTitle)}
      />

      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  )
}

export default App

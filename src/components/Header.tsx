import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

interface HeaderProps {
  onOpenContactModal: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Active section spy
      const sections = ['hero', 'about', 'services', 'solutions', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-2'
          : 'bg-white/90 backdrop-blur-sm py-3 lg:py-4'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
          >
            <img
              src="/logo.png"
              alt="Retro Infotech"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative text-[16px] lg:text-[17px] font-medium transition-colors py-1 ${
                    isActive
                      ? 'text-retro-orange font-semibold'
                      : 'text-retro-navy hover:text-retro-cyan'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-retro-cyan to-retro-orange rounded-full"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Contact Us CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-retro-blue via-retro-cyan to-retro-orange p-[1px] transition-transform hover:scale-105 shadow-brand"
            >
              <span className="flex items-center gap-2 rounded-full bg-retro-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-transparent">
                Contact Us
                <ArrowRight className="w-4 h-4 text-retro-orange" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-retro-navy hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg px-2 py-4 space-y-2 overflow-hidden shadow-lg rounded-b-xl"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-4 py-2.5 text-base font-medium rounded-lg text-retro-navy hover:bg-slate-50 hover:text-retro-cyan transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenContactModal()
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-retro-blue to-retro-orange px-4 py-3 text-sm font-semibold text-white shadow-brand hover:opacity-95 transition-opacity"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

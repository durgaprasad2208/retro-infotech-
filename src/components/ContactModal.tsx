import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, Phone, Mail, MapPin, Sparkles } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const getCleanForm = (service = initialService) => ({
    name: '',
    email: '',
    phone: '',
    service: service || 'Retail Agent Partnership',
    message: '',
  })

  const [formData, setFormData] = useState(getCleanForm())
  const [submittedService, setSubmittedService] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  React.useEffect(() => {
    if (isOpen) {
      setFormData(getCleanForm(initialService))
      setIsSubmitted(false)
    }
  }, [isOpen, initialService])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittedService(formData.service)
    setFormData(getCleanForm(initialService))
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData(getCleanForm(initialService))
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden z-10 my-8 border border-slate-100"
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-retro-navy via-retro-deepBlue to-retro-blue p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-retro-orange mb-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Retro Infotech Partner Network</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {isSubmitted ? 'Message Received!' : "Let's Connect & Get Started"}
                </h3>
              </div>
              <button
                onClick={handleReset}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              /* Success confirmation state */
              <div className="text-center py-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                <h4 className="text-2xl font-extrabold text-retro-navy mb-2">Thank You!</h4>
                <p className="text-base font-semibold text-retro-blue mb-4">
                  Our Team Will Get Back To You Shortly
                </p>
                <p className="text-sm text-slate-500 max-w-sm mx-auto mb-8">
                  We have received your details for <strong>{submittedService || 'Retail Agent Partnership'}</strong>. A dedicated onboarding manager will contact you within 2 business hours.
                </p>
                <button
                  onClick={handleReset}
                  className="rounded-lg bg-gradient-to-r from-retro-blue to-retro-cyan px-8 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition-opacity"
                >
                  Return to Website
                </button>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@business.com"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                    >
                      <option value="Retail Agent Partnership">Retail Agent Partnership</option>
                      <option value="POS Hardware Machine">POS Hardware Machine</option>
                      <option value="BBPS Utility Payment Switch">BBPS Utility Payment Switch</option>
                      <option value="Travel Ticketing (Bus/Train/Flight)">Travel Ticketing (Bus/Train/Flight)</option>
                      <option value="General & Life Insurance">General & Life Insurance</option>
                      <option value="Retro Education Courses">Retro Education Courses</option>
                      <option value="Digital Software Licensing">Digital Software Licensing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                    Your Requirements / Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your store, business volume, or specific requirements..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-[11px] text-slate-500">
                    🔒 Zero spam guarantee. 100% confidential.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-retro-orange to-amber-500 px-6 py-3 text-sm font-bold text-white shadow-orange-glow hover:opacity-95 transition-all"
                  >
                    Submit Request
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Quick Contact Footnote */}
            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-retro-cyan shrink-0" />
                <span>Direct: +91 9154037469</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-retro-orange shrink-0" />
                <span>support@retroinfotech.co.in</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

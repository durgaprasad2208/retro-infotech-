import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ArrowRight, Shield, Zap } from 'lucide-react'
import { ServiceItem } from './ServicesGrid'

interface ServiceDetailModalProps {
  service: ServiceItem | null
  onClose: () => void
  onRequestAccess: (serviceTitle: string) => void
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestAccess,
}) => {
  if (!service) return null

  const Icon = service.icon

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
          {/* Header */}
          <div className="relative bg-gradient-to-r from-retro-navy via-retro-deepBlue to-retro-blue p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-retro-orange shadow-inner">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    {service.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {/* Service Image Banner */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              {service.badge && (
                <span className="absolute bottom-3 left-3 rounded-md bg-retro-orange px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                  {service.badge}
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Key Advantages */}
            <h4 className="text-sm font-bold text-retro-navy uppercase tracking-wider mb-3">
              Platform Features & Agent Advantages
            </h4>
            <div className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-retro-orange shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-slate-500 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-retro-cyan" />
                <span>Encrypted API Gateway</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-retro-orange" />
                <span>Instant Confirmation SLA</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose()
                  onRequestAccess(service.title)
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-retro-blue to-retro-cyan px-6 py-3.5 text-sm font-bold text-white shadow-brand hover:opacity-95 transition-all"
              >
                <span>Request Agent Access & Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onClose}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

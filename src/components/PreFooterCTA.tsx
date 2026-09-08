import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

interface PreFooterCTAProps {
  onOpenContactModal: () => void
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({ onOpenContactModal }) => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-retro-navy via-retro-deepBlue to-retro-blue p-8 sm:p-12 text-white shadow-xl"
        >
          {/* Ambient Glows */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-retro-orange/25 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-retro-cyan/25 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-retro-orange mb-3 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Scale Your Business With Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                Join the Growing Retro Infotech Family
              </h2>
              <p className="text-sm sm:text-base text-slate-200 max-w-xl">
                Start offering fast, secure utility bill payments, recharges, and travel ticketing from your counter today.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-retro-orange to-amber-500 px-8 py-4 text-base font-bold text-white shadow-orange-glow hover:scale-105 transition-all"
              >
                <span>Join Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import {
  CreditCard,
  GraduationCap,
  Bus,
  Train,
  ShieldCheck,
  Ship,
  Plane,
  Building2,
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

import { ServiceItem, servicesData } from '../data/servicesData'
export type { ServiceItem }

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const regularServices = servicesData.filter((s) => !s.fullWidth)
  const fullWidthService = servicesData.find((s) => s.fullWidth)

  return (
    <section id="services" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-retro-cyan/10 blur-3xl" />
        <div className="absolute bottom-10 -left-20 h-96 w-96 rounded-full bg-retro-orange/10 blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-retro-orange bg-orange-50 px-3 py-1 rounded-full border border-retro-orange/20">
            Our Core Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-retro-navy mt-3 mb-4">
            Comprehensive Digital & Payment Services
          </h2>
          <p className="text-base text-slate-600">
            Everything your business needs to process payments, serve customers, and scale revenue on a single, unified switch.
          </p>
        </div>

        {/* 8 Regular Grid Cards (2 columns on md/lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {regularServices.map((service, index) => {
            const Icon = service.icon
            const isButton = service.ctaVariant === 'button'

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-retro-cyan/50 hover:shadow-card-hover"
              >
                {/* Top Image Banner with Overlay Icon and Badge */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

                  {/* Icon floating badge */}
                  <div className="absolute top-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-retro-blue shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-retro-blue" />
                  </div>

                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-retro-navy shadow-sm backdrop-blur-md">
                      {service.badge}
                    </span>
                  )}

                  {/* Category Pill on image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-md bg-retro-navy/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-retro-navy mb-2 group-hover:text-retro-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom CTA Row (Buttons kept without external redirection) */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-retro-cyan hover:underline"
                    >
                      View Features & Specs
                    </button>

                    {isButton ? (
                      <button
                        onClick={() => onSelectService(service)}
                        className="inline-flex items-center justify-center rounded-lg border-2 border-retro-blue px-5 py-2 text-sm font-semibold text-retro-navy hover:bg-gradient-to-r hover:from-retro-blue hover:to-retro-cyan hover:border-transparent hover:text-white transition-all duration-200 shadow-sm"
                      >
                        {service.ctaLabel}
                      </button>
                    ) : (
                      <button
                        onClick={() => onSelectService(service)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-retro-blue hover:text-retro-orange transition-colors group/btn"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 9th Full Width Card: Digital Tools */}
        {fullWidthService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl border border-slate-200/80 bg-gradient-to-r from-slate-900 via-retro-navy to-retro-deepBlue p-6 sm:p-8 lg:p-10 text-white shadow-xl overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-retro-orange/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-retro-cyan/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left description */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-retro-orange mb-3 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{fullWidthService.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {fullWidthService.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {fullWidthService.description}
                </p>

                {/* Bullets */}
                {fullWidthService.bullets && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {fullWidthService.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-retro-orange shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(fullWidthService)}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-retro-orange to-amber-500 px-7 py-3.5 text-base font-bold text-white shadow-orange-glow hover:opacity-95 transition-all transform hover:scale-105"
                  >
                    <span>{fullWidthService.ctaLabel}</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Right image illustration */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/20 shadow-2xl group/img">
                  <img
                    src={fullWidthService.image}
                    alt="Digital tools suite"
                    className="h-64 sm:h-72 w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                    <span className="font-semibold">Enterprise License Suite</span>
                    <span className="rounded bg-retro-orange/90 px-2 py-0.5 font-bold">Genuine Commercial Keys</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

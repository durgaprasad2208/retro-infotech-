import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users2, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react'

interface MissionProps {
  onOpenContactModal: () => void
}

export const Mission: React.FC<MissionProps> = ({ onOpenContactModal }) => {
  const stats = [
    { value: '10,000+', label: 'Active Retail Partners' },
    { value: '28+', label: 'States & UTs Covered' },
    { value: '₹1,500+ Cr', label: 'Annual Switch Volume' },
    { value: '99.99%', label: 'Infrastructure Uptime' },
  ]

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Trust & Data Sovereignty',
      desc: 'Bank-grade compliance protecting every single transaction in real-time.',
    },
    {
      icon: Users2,
      title: 'Offline-to-Online Financial Inclusion',
      desc: 'Empowering local retailers and kirana merchants with FinTech power.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Retail Support',
      desc: 'Round-the-clock merchant troubleshooting and prompt dispute settlements.',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-retro-blue mb-4 border border-retro-cyan/20">
              <Target className="h-3.5 w-3.5 text-retro-orange" />
              <span>Our Vision & Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-retro-navy mb-6 leading-tight">
              Driving Digital Financial Inclusion Across India
            </h2>

            <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-4">
              To revolutionize utility bill payments and switching infrastructure by creating an accessible, seamless, and high-availability ecosystem through relentless innovation, trust, and a nationwide retail network.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              At <strong className="font-semibold text-retro-navy">Retro Infotech</strong>, we empower grassroots retail merchants, MSMEs, and digital enterprises with unified utility billing, ticketing switches, and banking correspondent solutions—bringing high-speed financial services right to the doorstep of every Indian citizen.
            </p>

            {/* Core Pillars */}
            <div className="space-y-4 mb-8">
              {pillars.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-retro-cyan mt-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-retro-navy">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 rounded-lg bg-retro-navy px-6 py-3 text-sm font-semibold text-white hover:bg-retro-blue transition-colors shadow-sm"
            >
              Partner With Retro Infotech
              <CheckCircle2 className="h-4 w-4 text-retro-orange" />
            </button>
          </motion.div>

          {/* Right Column: Statistics & India Map Callout */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col items-center"
          >
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-slate-900 via-retro-navy to-retro-deepBlue p-8 text-white shadow-xl relative overflow-hidden">
              {/* Background ambient accents */}
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-retro-orange/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-retro-cyan/20 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-retro-orange font-bold">Network Reach</span>
                    <h3 className="text-lg font-bold text-white">Nationwide Footprint</h3>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Made in India</span>
                  </div>
                </div>

                {/* 2x2 Stats Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                      <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-retro-orange">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-300 mt-1 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom Quote Banner */}
                <div className="rounded-lg bg-gradient-to-r from-retro-blue/30 to-retro-orange/30 p-3.5 border border-white/10 text-xs text-slate-200 leading-relaxed">
                  "Enabling the next wave of 100,000 retail merchants with smart switching, automated reconciliation, and instant settlement infrastructure."
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

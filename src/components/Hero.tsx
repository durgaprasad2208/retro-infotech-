import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Clock, Zap, CheckCircle2, TrendingUp, CreditCard, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

interface HeroProps {
  onOpenContactModal?: () => void
}

export const Hero: React.FC<HeroProps> = () => {
  const trustFeatures = [
    { icon: ShieldCheck, label: 'Secure & Trusted Platform' },
    { icon: Clock, label: '24/7 Enterprise Support' },
    { icon: Zap, label: 'Instant Switch & Settlement' },
  ]

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-36 lg:pb-24">
      {/* Clean Background */}
      <div className="section-container relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading, Pitch, CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left lg:col-span-7"
          >
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-retro-cyan/30 bg-blue-50/70 px-4 py-1.5 text-xs sm:text-sm font-semibold text-retro-blue mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-retro-orange" />
              <span>Next-Generation FinTech & Utility Switch</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-[32px] font-bold leading-[1.15] text-retro-navy sm:text-[44px] lg:text-[54px]">
              <span className="font-semibold text-slate-800">The Ultimate</span>{' '}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-retro-deepBlue via-retro-cyan to-retro-orange bg-clip-text text-transparent font-extrabold text-[38px] sm:text-[50px] lg:text-[60px]">
                Payment Switch
              </span>{' '}
              <br />
              <span className="text-[22px] font-semibold text-slate-700 sm:text-[28px] lg:text-[34px]">
                By{' '}
                <span className="relative inline-block font-extrabold text-retro-navy">
                  Retro Infotech
                  {/* Decorative underline */}
                  <svg
                    className="pointer-events-none absolute -bottom-2.5 left-0 h-[16px] w-[115%]"
                    viewBox="0 0 220 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9.8C38 5.2 72 3.8 110 5.6C148 7.4 182 5.4 214 8.4C216.5 8.7 215 10.6 210.5 10.8C178 8.6 142 10.2 110 8.8C74 7.2 38 9.6 8 11.2C4 11.5 3 10.2 6 9.8Z"
                      fill="#FF6B00"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="mx-auto mb-8 max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              <strong className="font-semibold text-retro-navy">Retro Infotech</strong> empowers businesses,
              retailers, and entrepreneurs across India with high-speed, secure utility bill payment switches,
              recharges, POS infrastructure, and automated settlement solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="/contact?service=Merchant+Network+Get+Started"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-retro-blue via-retro-cyan to-retro-orange px-8 py-3.5 text-base font-semibold text-white shadow-brand hover:opacity-95 hover:shadow-orange-glow transition-all transform hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-retro-cyan/70 bg-white px-7 py-3.5 text-base font-semibold text-retro-navy hover:bg-slate-50 hover:border-retro-orange transition-all"
              >
                Services
                <ArrowRight className="w-4 h-4 text-retro-cyan" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start pt-2 border-t border-slate-100">
              {trustFeatures.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-retro-cyan">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column: FinTech Switch Artwork & Card Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:col-span-5"
          >
            {/* Interactive Switch Hub Card Graphic */}
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-retro-deepBlue to-retro-blue text-white shadow-md">
                      <CreditCard className="h-5 w-5 text-retro-orange" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-retro-navy">Retro Switch Gateway</h3>
                      <p className="text-xs text-slate-500">BBPS & Multi-Rail Routing</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    99.99% Live
                  </span>
                </div>

                {/* Simulated Virtual Card Graphic */}
                <div className="my-5 relative overflow-hidden rounded-xl bg-gradient-to-tr from-retro-navy via-retro-deepBlue to-retro-blue p-5 text-white shadow-lg">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-retro-orange/20 blur-xl" />
                  <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-retro-cyan/20 blur-lg" />
                  
                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] font-medium tracking-widest text-slate-300 uppercase">Enterprise Switch</p>
                      <p className="text-sm font-bold text-white tracking-wider">RETRO INFOTECH</p>
                    </div>
                    <div className="h-6 w-9 rounded bg-amber-400/80 border border-amber-300" />
                  </div>

                  <p className="relative z-10 font-mono text-sm tracking-widest text-slate-100 mb-4">
                    4920 •••• •••• 8842
                  </p>

                  <div className="relative z-10 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <span className="block text-[9px] text-slate-400">STATUS</span>
                      <span className="font-semibold text-white">ACTIVE SWITCH</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-slate-400">LATENCY</span>
                      <span className="font-semibold text-retro-orange">&lt; 120ms</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Stats inside card */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                      <TrendingUp className="h-3.5 w-3.5 text-retro-cyan" />
                      <span>Daily Processing</span>
                    </div>
                    <p className="text-base font-bold text-retro-navy">₹ 15+ Cr / Day</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-retro-orange" />
                      <span>Success Ratio</span>
                    </div>
                    <p className="text-base font-bold text-retro-navy">99.85%</p>
                  </div>
                </div>

                {/* Live Activity pill */}
                <div className="mt-4 flex items-center justify-between rounded-lg bg-blue-50/60 px-3.5 py-2 text-xs text-retro-blue font-medium">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-retro-orange" />
                    <span>Auto-Routing to lowest latency provider</span>
                  </span>
                  <span className="font-bold text-retro-orange">Zero Downtime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

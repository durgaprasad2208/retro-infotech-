import React, { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, MessageCircle } from 'lucide-react'
import { PolicyType } from './PolicyModal'

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void
  onOpenContactModal: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onOpenContactModal }) => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 4000)
    }
  }

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Contact Us', href: '#contact' },
  ]

  const serviceLinks = [
    'POS Terminal Switch',
    'BBPS Utility Bill Payment',
    'Mobile & DTH Recharge',
    'Travel & Rail Reservations',
    'Retro Education Academy',
    'Software & Digital Hub',
  ]

  const policyLinks: { label: string; type: PolicyType }[] = [
    { label: 'Privacy Policy', type: 'privacy' },
    { label: 'Terms & Conditions', type: 'terms' },
    { label: 'Refund Policy', type: 'refund' },
    { label: 'Grievance Officer', type: 'grievance' },
    { label: 'Regulatory Information', type: 'regulatory' },
  ]

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800 pt-16 pb-12">
      <div className="section-container">
        {/* Top Newsletter & Channels Row */}
        <div className="mb-14 pb-12 border-b border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Stay Ahead with Important FinTech Updates & Offers
            </h3>
            <p className="text-sm text-slate-400">
              Subscribe to the Retro Infotech newsletter for commission updates, new biller integrations, and retail alerts.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5 text-emerald-400 text-sm font-medium">
                <CheckCircle className="h-5 w-5 shrink-0" />
                <span>Thank you! You are now subscribed to Retro Infotech news.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/80 pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-retro-cyan focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-retro-orange to-amber-500 px-6 py-3 text-sm font-bold text-white shadow-orange-glow hover:opacity-95 transition-opacity shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-sm">
              <img src="/logo.png" alt="Retro Infotech" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              <strong>Retro Infotech</strong> is India’s next-generation financial switching platform powering retail agents, merchants, and institutions with BBPS billing, recharges, travel ticketing, and digital software infrastructure.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-retro-orange shrink-0 mt-0.5" />
                <span>1-187 Chandragupta Colony, Lunani Nagar, Komadavole Rural, AP 534005</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-retro-cyan shrink-0" />
                <a href="tel:+919121404929" className="hover:text-retro-cyan transition-colors">
                  +91 9121404929
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-retro-blue shrink-0" />
                <a href="mailto:retroinfotech1@gmail.com" className="hover:text-retro-cyan transition-colors">
                  retroinfotech1@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className="text-slate-400 hover:text-retro-cyan transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Platform Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={onOpenContactModal}
                    className="text-slate-400 hover:text-retro-cyan transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Regulatory Policies */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Compliance & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              {policyLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onOpenPolicy(item.type)}
                    className="text-slate-400 hover:text-retro-orange transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RETRO INFOTECH PVT LTD. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onOpenPolicy('privacy')} className="hover:text-slate-300 transition-colors">
              Privacy
            </button>
            <button onClick={() => onOpenPolicy('terms')} className="hover:text-slate-300 transition-colors">
              Terms
            </button>
            <button onClick={() => onOpenPolicy('grievance')} className="hover:text-slate-300 transition-colors">
              Grievance
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

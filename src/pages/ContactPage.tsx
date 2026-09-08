import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Send, CheckCircle2, Phone, Mail, MapPin, Sparkles, Clock, MessageSquare, ShieldCheck } from 'lucide-react'

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const serviceParam = searchParams.get('service') || 'Retail Agent Partnership'

  const initialForm = {
    name: '',
    email: '',
    phone: '',
    service: serviceParam,
    message: '',
  }

  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submittedContact, setSubmittedContact] = useState({ email: '', phone: '' })

  useEffect(() => {
    window.scrollTo(0, 0)
    if (serviceParam) {
      setForm((prev) => ({ ...prev, service: serviceParam }))
    }
  }, [serviceParam])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittedContact({ email: form.email, phone: form.phone })
    setForm(initialForm)
    setSubmitted(true)
  }

  const handleSendAnother = () => {
    setForm(initialForm)
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="section-container">
        {/* Back navigation button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-retro-navy hover:bg-slate-100 hover:text-retro-blue transition-all shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        </div>

        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-retro-blue mb-3 border border-retro-cyan/20">
            <Sparkles className="h-3.5 w-3.5 text-retro-orange" />
            <span>Retro Infotech Partner Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-retro-navy mb-4">
            Let's Connect & Build Together
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Connect directly with our onboarding specialists. Inquire about payment switch integration, retail agent registration, POS hardware, or API partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-retro-navy mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-retro-cyan" />
                <span>Head Office & Helpdesk</span>
              </h2>

              <div className="space-y-6 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-retro-orange shrink-0 mt-1" />
                  <div>
                    <strong className="block text-retro-navy font-semibold text-base mb-0.5">Corporate Office:</strong>
                    <span className="leading-relaxed">
                      RETRO INFOTECH PVT LTD<br />
                      1-187 Chandragupta Colony, Lunani Nagar, Komadavole Rural, Andhra Pradesh – 534005, India.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-retro-cyan shrink-0 mt-1" />
                  <div>
                    <strong className="block text-retro-navy font-semibold text-base mb-0.5">Support Helpline:</strong>
                    <a
                      href="tel:+919121404929"
                      className="text-base font-bold text-retro-blue hover:underline block"
                    >
                      +91 9121404929
                    </a>
                    <span className="text-xs text-slate-400">Available Mon – Sat, 9:00 AM – 8:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-retro-blue shrink-0 mt-1" />
                  <div>
                    <strong className="block text-retro-navy font-semibold text-base mb-0.5">Official Email:</strong>
                    <a
                      href="mailto:retroinfotech1@gmail.com"
                      className="text-retro-navy hover:text-retro-blue font-medium block"
                    >
                      retroinfotech1@gmail.com
                    </a>
                    <span className="text-xs text-slate-400">Direct response within 2 business hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-retro-navy font-semibold text-base mb-0.5">Operational Hours:</strong>
                    <p>Monday – Saturday: 9:00 AM – 8:00 PM IST</p>
                    <p className="text-xs text-emerald-600 font-medium">24/7 Automated Switch Monitoring Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Highlight Box */}
            <div className="rounded-2xl bg-gradient-to-br from-retro-navy to-retro-deepBlue p-6 sm:p-7 text-white shadow-md">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-retro-orange font-bold mb-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Instant Retailer Enablement</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Are you an existing retail partner?</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Access your terminal diagnostics, switch transaction logs, or commission statements anytime with dedicated phone support.
              </p>
              <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-retro-cyan">
                <span>Priority Agent Desk: +91 9121404929</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Registration Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shadow-inner">
                    <CheckCircle2 className="h-12 w-12 animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-retro-navy mb-2">Thank You!</h3>
                  <p className="text-lg font-bold text-retro-blue mb-3">
                    Your Inquiry Has Been Logged Successfully
                  </p>
                  <p className="text-sm text-slate-500 max-w-md mx-auto mb-8">
                    Our team will contact you at <strong>{submittedContact.email || submittedContact.phone}</strong> within 2 business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={handleSendAnother}
                      className="rounded-xl bg-retro-navy px-6 py-3 text-sm font-semibold text-white hover:bg-retro-blue transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                    <Link
                      to="/"
                      className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-retro-navy mb-1">Send a Message</h3>
                    <p className="text-xs text-slate-500">Fill in the form below and our team will get back to you promptly.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-retro-navy uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-retro-navy uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-retro-navy uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@business.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-retro-navy uppercase tracking-wider mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                      >
                        <option value="Retail Agent Partnership">Retail Agent Partnership</option>
                        <option value="POS Terminals & Smart Retail">POS Terminals & Smart Retail</option>
                        <option value="AePS & Micro-ATM Cash Point">AePS & Micro-ATM Cash Point</option>
                        <option value="BBPS Utility Payment Switch">BBPS Utility Payment Switch</option>
                        <option value="Travel Ticketing (Bus/Train/Flight/Ferry)">Travel Ticketing (Bus/Train/Flight/Ferry)</option>
                        <option value="General & Life Insurance">General & Life Insurance</option>
                        <option value="Hotel & Resort Stays">Hotel & Resort Stays</option>
                        <option value="Retro Education Courses">Retro Education Courses</option>
                        <option value="Digital Tools & Software Hub">Digital Tools & Software Hub</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-retro-navy uppercase tracking-wider mb-1.5">
                      Your Message / Business Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your store, business location, daily transaction volume, or any specific questions..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                      🔒 Zero spam. 100% confidential business communication.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-retro-orange to-amber-500 px-8 py-3.5 text-sm font-bold text-white shadow-orange-glow hover:opacity-95 transition-all w-full sm:w-auto"
                    >
                      <span>Submit Request</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

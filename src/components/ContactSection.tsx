import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react'

export const ContactSection: React.FC = () => {
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: '',
  }

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [submittedContact, setSubmittedContact] = useState({ email: '', phone: '' })

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
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-10 h-80 w-80 rounded-full bg-retro-cyan/10 blur-3xl" />
        <div className="absolute bottom-10 -left-10 h-80 w-80 rounded-full bg-retro-orange/10 blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-retro-orange bg-orange-50 px-3 py-1 rounded-full border border-retro-orange/20">
            Reach Out To Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-retro-navy mt-3 mb-4">
            Let's Talk & Build Together
          </h2>
          <p className="text-base text-slate-600">
            Have questions about our payment switch, retail agent registration, or API partnerships? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-bold text-retro-navy mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-retro-cyan" />
                <span>Head Office & Helpdesk</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-retro-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-retro-navy font-semibold">Corporate Office:</strong>
                    <span>
                      Plot No 16, 3rd Floor, Rukmini Estates, Sagar Enclave, Main Road, Chinthal, Quthbullapur, Medchal–Malkajgiri District, HMT Township, Hyderabad, Telangana – 500054, India.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-retro-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-retro-navy font-semibold">Support Helplines:</strong>
                    <div className="space-y-0.5">
                      <p>+91 91540 37469</p>
                      <p>+91 91540 37470</p>
                      <p>+91 91540 37472</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-retro-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-retro-navy font-semibold">Email Assistance:</strong>
                    <p>support@retroinfotech.co.in</p>
                    <p>grievance@retroinfotech.co.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-retro-navy font-semibold">Operational Hours:</strong>
                    <p>Monday – Saturday: 9:00 AM – 8:00 PM IST</p>
                    <p className="text-xs text-slate-400">24/7 Automated Switch Monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Support Box */}
            <div className="rounded-xl bg-gradient-to-br from-retro-navy to-retro-deepBlue p-6 text-white shadow-md">
              <span className="text-xs uppercase tracking-wider text-retro-orange font-bold">Fast Settlement</span>
              <h4 className="text-base font-bold mt-1 mb-2">Are you an existing retail partner?</h4>
              <p className="text-xs text-slate-300 mb-4">
                Access your terminal diagnostics, transaction ledger queries, or commission statements anytime.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-retro-cyan">
                <span>Priority Agent Desk Available On Call</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-retro-navy mb-2">Thank You!</h3>
                  <p className="text-base font-semibold text-retro-blue mb-3">
                    Our Team Will Get Back To You Soon
                  </p>
                  <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                    Your inquiry has been successfully logged. An executive will reach out to <strong>{submittedContact.email}</strong> or <strong>{submittedContact.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleSendAnother}
                    className="rounded-lg bg-retro-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-retro-blue transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-xl font-bold text-retro-navy mb-2">Send an Instant Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
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
                        value={form.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                        Requirement Type
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="New Retailer Partnership">New Retailer Partnership</option>
                        <option value="POS Machine Request">POS Machine Request</option>
                        <option value="Utility Billing Switch Integration">Utility Billing Switch Integration</option>
                        <option value="Travel Booking Portal Access">Travel Booking Portal Access</option>
                        <option value="Education Program Inquiry">Education Program Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-retro-navy mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your query or describe how we can assist your business..."
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-retro-blue focus:outline-none focus:ring-2 focus:ring-retro-cyan/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-retro-blue via-retro-cyan to-retro-orange px-8 py-3.5 text-sm font-bold text-white shadow-brand hover:opacity-95 transition-all w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

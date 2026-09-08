import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Award, CheckCircle } from 'lucide-react'

export const Certifications: React.FC = () => {
  const certs = [
    {
      icon: Shield,
      title: 'ISO 27001 & 9001',
      badge: 'Certified',
      desc: 'Global standards for enterprise data security and quality management systems.',
    },
    {
      icon: Lock,
      title: 'PCI-DSS Compliant',
      badge: 'Level 1 Ready',
      desc: 'Bank-grade encryption protecting card and transactional switching pipelines.',
    },
    {
      icon: Award,
      title: 'BBPS Operating Unit',
      badge: 'Standards Aligned',
      desc: 'Unified integration with NPCI Bharat BillPay switch network nationwide.',
    },
    {
      icon: CheckCircle,
      title: '99.99% Uptime SLA',
      badge: 'High Reliability',
      desc: 'Redundant distributed server clusters ensuring zero transaction dropouts.',
    },
  ]

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-retro-orange">
            Enterprise Compliance & Trust
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-retro-navy mt-1">
            Built On Bank-Grade Infrastructure & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {certs.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm hover:shadow-md transition-all group"
              >
                {/* Accent top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-retro-blue via-retro-cyan to-retro-orange opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-retro-cyan group-hover:bg-orange-50 group-hover:text-retro-orange transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-retro-navy">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-retro-navy mb-1.5">{cert.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{cert.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

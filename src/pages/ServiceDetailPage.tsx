import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ArrowRight, Shield, Zap, Sparkles, ExternalLink } from 'lucide-react'
import { servicesData } from '../data/servicesData'

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const service = servicesData.find((s) => s.id === id)

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md text-center bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-retro-navy mb-2">Service Not Found</h2>
          <p className="text-sm text-slate-500 mb-6">The requested service could not be found.</p>
          <Link
            to="/#services"
            className="rounded-xl bg-retro-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-retro-blue transition-colors inline-block"
          >
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="section-container">
        {/* Back Button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-retro-navy hover:bg-slate-100 hover:text-retro-blue transition-all shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>

          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-retro-orange to-amber-500 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-orange-glow hover:opacity-95 transition-opacity"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm max-w-5xl mx-auto">
          {/* Hero Banner */}
          <div className="relative bg-gradient-to-r from-retro-navy via-retro-deepBlue to-retro-blue p-8 sm:p-12 text-white">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md text-retro-orange shadow-inner">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-retro-orange uppercase tracking-wider mb-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{service.category}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">{service.title}</h1>
                </div>
              </div>

              {service.badge && (
                <span className="self-start md:self-auto rounded-full bg-retro-orange px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                  {service.badge}
                </span>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {/* Image Banner */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl mb-10 shadow-md">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-semibold">
                <span>Enterprise Service Suite</span>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg">Instant Retail Enablement</span>
              </div>
            </div>

            {/* Overview */}
            <div className="max-w-3xl mb-10">
              <h2 className="text-xl font-bold text-retro-navy mb-3">Service Overview</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bullet Points if any */}
            {service.bullets && (
              <div className="mb-10 rounded-2xl bg-blue-50/50 p-6 border border-retro-cyan/20">
                <h3 className="text-sm font-bold text-retro-navy uppercase tracking-wider mb-4">
                  Key Software Applications Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-retro-orange shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Platform Features & Specs */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-retro-navy mb-4">Platform Features & Agent Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-retro-orange shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 text-sm">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-retro-cyan shrink-0" />
                <span className="font-semibold text-retro-navy">Bank-Grade TLS Encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-retro-orange shrink-0" />
                <span className="font-semibold text-retro-navy">Instant Switch Settlement</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="font-semibold text-retro-navy">99.99% Guaranteed SLA</span>
              </div>
            </div>

            {/* Bottom Actions CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-slate-100">
              <Link
                to="/#services"
                className="text-sm font-semibold text-retro-cyan hover:underline"
              >
                ← Explore All Services
              </Link>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-retro-blue via-retro-cyan to-retro-orange px-8 py-4 text-sm font-bold text-white shadow-brand hover:opacity-95 transition-all"
                >
                  <span>Request Agent Access & Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, ShieldAlert, FileText, Scale, RotateCcw, UserCheck, Sparkles } from 'lucide-react'

export const PolicyPage: React.FC = () => {
  const { type } = useParams<{ type: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [type])

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: ShieldAlert,
          body: (
            <div className="space-y-6 text-base text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-slate-800">
                <strong>RETRO INFOTECH PVT LTD</strong> ("We", "Our", "Company") respects the privacy of its users, merchants, and retail partners. This Privacy Policy details how we collect, handle, and protect personal and transactional data across our payment switches and portal services.
              </p>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">1. Information Collection</h2>
                <p>
                  We collect information provided during merchant KYC, terminal onboarding, customer utility bill inquiries, and payment checkout. This may include business names, contact details, identification documents, and device metadata required for fraud prevention.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">2. Data Security & Encryption</h2>
                <p>
                  All data transmission between the client terminal and the Retro Infotech switch is protected using TLS 1.3 encryption and stored in compliant, secure cloud clusters in accordance with RBI cyber security guidelines.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">3. Cookies & Analytical Tools</h2>
                <p>
                  We employ session cookies to maintain secure authenticated sessions and monitor transaction latency. No sensitive financial information is stored inside client-side cookies.
                </p>
              </div>
            </div>
          ),
        }
      case 'terms':
        return {
          title: 'Terms & Conditions',
          icon: FileText,
          body: (
            <div className="space-y-6 text-base text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-slate-800">
                By accessing or using the switching infrastructure, website, or APIs provided by <strong>RETRO INFOTECH PVT LTD</strong>, you agree to comply with and be bound by the following terms.
              </p>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">1. Permitted Use</h2>
                <p>
                  The platform is licensed solely for lawful utility bill collection, travel reservations, retail banking facilitation, and authorized financial services. Any attempt to reverse engineer, disrupt, or bypass authentication triggers immediate termination and statutory action.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">2. Merchant Responsibilities</h2>
                <p>
                  Merchants agree to obtain necessary customer consents before initiating bill pulls or financial recharges. Receipts generated through the Retro Infotech switch must be provided to the paying customer in physical or digital form.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">3. Governing Law & Jurisdiction</h2>
                <p>
                  All disputes arising out of the use of this service shall be governed exclusively by the laws of India, subject to the jurisdiction of the competent courts located in Andhra Pradesh, India.
                </p>
              </div>
            </div>
          ),
        }
      case 'refund':
        return {
          title: 'Return & Refund Policy',
          icon: RotateCcw,
          body: (
            <div className="space-y-6 text-base text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-slate-800">
                <strong>RETRO INFOTECH PVT LTD</strong> is dedicated to prompt and fair resolution of failed transactions and refund claims across all utility and travel rails.
              </p>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">1. Failed Utility Transactions</h2>
                <p>
                  In cases where funds are debited from the customer’s account but the utility biller fails to acknowledge the bill payment within the standard settlement window, the amount is automatically reconciled and returned to the source within T+2 working days.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">2. Travel Ticketing Cancellations</h2>
                <p>
                  Bus, flight, and train cancellations follow the underlying transport operator and IRCTC fare cancellation guidelines. Approved refund amounts are credited directly back to the original payment instrument.
                </p>
              </div>
            </div>
          ),
        }
      case 'grievance':
        return {
          title: 'Grievance Officer Details',
          icon: UserCheck,
          body: (
            <div className="space-y-6 text-base text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-slate-800">
                In accordance with the Information Technology Act 2000 and the consumer protection rules thereunder, the details of the designated Grievance Officer are published below:
              </p>
              <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200 space-y-3 text-retro-navy">
                <p><strong>Designated Officer:</strong> Grievance Redressal Cell</p>
                <p><strong>Company:</strong> RETRO INFOTECH PVT LTD</p>
                <p><strong>Corporate Address:</strong> 1-187 Chandragupta Colony, Lunani Nagar, Komadavole Rural, Andhra Pradesh – 534005, India.</p>
                <p><strong>Official Email:</strong> <a href="mailto:retroinfotech1@gmail.com" className="text-retro-blue hover:underline">retroinfotech1@gmail.com</a></p>
                <p><strong>Helpline:</strong> <a href="tel:+919121404929" className="text-retro-blue hover:underline">+91 9121404929</a></p>
                <p><strong>Turnaround Time:</strong> Acknowledgment within 48 hours; resolution within 15 business days.</p>
              </div>
            </div>
          ),
        }
      case 'regulatory':
      default:
        return {
          title: 'Regulatory & Compliance Information',
          icon: Scale,
          body: (
            <div className="space-y-6 text-base text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-slate-800">
                <strong>RETRO INFOTECH PVT LTD</strong> operates as a compliant technology switch and billing entity adhering to:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Bharat Bill Payment System (BBPS):</strong> Operational standards mandated by NPCI Bharat BillPay Limited (NBBL).</li>
                <li><strong>PCI DSS Certification:</strong> Rigorous vulnerability and penetration audits ensuring card data integrity.</li>
                <li><strong>Information Security Management:</strong> Aligned with ISO/IEC 27001 data protection protocols.</li>
                <li><strong>Merchant Settlement Discipline:</strong> Standardized T+1 / T+2 escrow-backed bank transfers.</li>
              </ul>
            </div>
          ),
        }
    }
  }

  const { title, icon: Icon, body } = getContent()

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="section-container max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-retro-navy hover:bg-slate-100 hover:text-retro-blue transition-all shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>

          <Link
            to="/"
            className="text-xs font-semibold text-retro-cyan hover:underline"
          >
            ← Return to Homepage
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-retro-navy via-retro-deepBlue to-retro-blue p-8 sm:p-10 text-white flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-retro-orange shadow-inner shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <span className="text-xs font-semibold text-retro-orange uppercase tracking-wider">RETRO INFOTECH PVT LTD</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold">{title}</h1>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {body}

            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs text-slate-400">Last updated: September 2026</p>
              <Link
                to="/"
                className="rounded-xl bg-retro-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-retro-blue transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

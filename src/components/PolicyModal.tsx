import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldAlert, FileText, Scale, RotateCcw, UserCheck } from 'lucide-react'

export type PolicyType = 'privacy' | 'terms' | 'refund' | 'grievance' | 'regulatory'

interface PolicyModalProps {
  type: PolicyType | null
  onClose: () => void
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: ShieldAlert,
          body: (
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>RETRO INFOTECH</strong> ("We", "Our", "Company") respects the privacy of its users, merchants, and retail partners. This Privacy Policy details how we collect, handle, and protect personal and transactional data across our payment switches and portal services.
              </p>
              <h5 className="font-bold text-retro-navy text-base pt-2">1. Information Collection</h5>
              <p>
                We collect information provided during merchant KYC, terminal onboarding, customer utility bill inquiries, and payment checkout. This may include business names, contact details, identification documents, and device metadata required for fraud prevention.
              </p>
              <h5 className="font-bold text-retro-navy text-base pt-2">2. Data Security & Encryption</h5>
              <p>
                All data transmission between the client terminal and the Retro Infotech switch is protected using TLS 1.3 encryption and stored in compliant, secure cloud clusters in accordance with RBI cyber security guidelines.
              </p>
              <h5 className="font-bold text-retro-navy text-base pt-2">3. Cookies & Analytical Tools</h5>
              <p>
                We employ session cookies to maintain secure authenticated sessions and monitor transaction latency. No sensitive financial information is stored inside client-side cookies.
              </p>
            </div>
          ),
        }
      case 'terms':
        return {
          title: 'Terms & Conditions',
          icon: FileText,
          body: (
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                By accessing or using the switching infrastructure, website, or APIs provided by <strong>Retro Infotech</strong>, you agree to comply with and be bound by the following terms.
              </p>
              <h5 className="font-bold text-retro-navy text-base pt-2">1. Permitted Use</h5>
              <p>
                The platform is licensed solely for lawful utility bill collection, travel reservations, retail banking facilitation, and authorized financial services. Any attempt to reverse engineer, disrupt, or bypass authentication triggers immediate termination and statutory action.
              </p>
              <h5 className="font-bold text-retro-navy text-base pt-2">2. Merchant Responsibilities</h5>
              <p>
                Merchants agree to obtain necessary customer consents before initiating bill pulls or financial recharges. Receipts generated through the Retro Infotech switch must be provided to the paying customer in physical or digital form.
              </p>
              <h5 className="font-bold text-retro-navy text-base pt-2">3. Governing Law & Jurisdiction</h5>
              <p>
                All disputes arising out of the use of this service shall be governed exclusively by the laws of India, subject to the jurisdiction of the competent courts located at Hyderabad, Telangana.
              </p>
            </div>
          ),
        }
      case 'refund':
        return {
          title: 'Return & Refund Policy',
          icon: RotateCcw,
          body: (
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Retro Infotech is dedicated to prompt and fair resolution of failed transactions and refund claims across all utility and travel rails.
              </p>
              <h5 className="font-bold text-retro-navy text-base pt-2">1. Failed Utility Transactions</h5>
              <p>
                In cases where funds are debited from the customer’s account but the utility biller fails to acknowledge the bill payment within the standard settlement window, the amount is automatically reconciled and returned to the source within T+2 working days.
              </p>
              <h5 className="font-bold text-retro-navy text-base pt-2">2. Travel Ticketing Cancellations</h5>
              <p>
                Bus, flight, and train cancellations follow the underlying transport operator and IRCTC fare cancellation guidelines. Approved refund amounts are credited directly back to the original payment instrument.
              </p>
            </div>
          ),
        }
      case 'grievance':
        return {
          title: 'Grievance Officer Details',
          icon: UserCheck,
          body: (
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                In accordance with the Information Technology Act 2000 and the consumer protection rules thereunder, the details of the designated Grievance Officer are published below:
              </p>
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-2 text-retro-navy">
                <p><strong>Designated Officer:</strong> Balu / Grievance Redressal Cell</p>
                <p><strong>Company:</strong> Retro Infotech</p>
                <p><strong>Corporate Address:</strong> Plot No 16, 3rd Floor, Rukmini Estates, Sagar Enclave, Main Road, Chinthal, Quthbullapur, Medchal–Malkajgiri District, Hyderabad, Telangana – 500054, India.</p>
                <p><strong>Email:</strong> grievance@retroinfotech.co.in</p>
                <p><strong>Turnaround Time:</strong> Acknowledgment within 48 hours; resolution within 15 business days.</p>
              </div>
            </div>
          ),
        }
      case 'regulatory':
        return {
          title: 'Regulatory & Compliance Information',
          icon: Scale,
          body: (
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Retro Infotech operates as a compliant technology switch and billing entity adhering to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Bharat Bill Payment System (BBPS):</strong> Operational standards mandated by NPCI Bharat BillPay Limited (NBBL).</li>
                <li><strong>PCI DSS Certification:</strong> Rigorous vulnerability and penetration audits ensuring data integrity.</li>
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden z-10 my-8 border border-slate-100"
        >
          <div className="bg-gradient-to-r from-retro-navy via-retro-deepBlue to-retro-blue p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-retro-orange">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
            {body}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-lg bg-retro-navy px-6 py-2 text-sm font-semibold text-white hover:bg-retro-blue transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

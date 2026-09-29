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
                <strong>RETRO INFOTECH PVT LTD</strong> ("we", "us", or "our") provides a merchant panel through which onboarded merchants can manage credit card bill payments, digital wallet services, fund transfers, payment links, and related financial services (the "Services"). This Privacy Policy explains what information we collect through the Retro Infotech Merchant Panel, how we use and share it, and the choices available to you.
              </p>
              <p>
                By registering for or using the Services, you agree to the collection and use of information as described here.
              </p>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">1. Introduction</h2>
                <p>
                  This Privacy Policy applies to all users of the Retro Infotech Merchant Panel, including onboarded merchants and their authorized personnel.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">2. Information We Collect</h2>
                <p className="mb-3">We collect the following categories of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity &amp; KYC information:</strong> name, gender, email address, mobile number, photograph, PAN, Aadhaar, and any documents submitted during merchant onboarding and verification.</li>
                  <li><strong>Business information:</strong> shop/business name, merchant type, merchant code, and registered business address.</li>
                  <li><strong>Financial information:</strong> bank account number, IFSC code, cancelled cheque images, wallet balance, and transaction history.</li>
                  <li><strong>Beneficiary information:</strong> details of bank accounts you add as beneficiaries for disbursements, including account holder name, account number, and IFSC code.</li>
                  <li><strong>Location information:</strong> approximate device location captured at login, used for account security and fraud prevention.</li>
                  <li><strong>Device &amp; usage information:</strong> IP address, browser type, device identifiers, log data, and session activity within the Merchant Panel.</li>
                  <li><strong>Support &amp; communication data:</strong> messages, attachments, and other information you provide through support tickets, live chat, or when contacting us directly.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To verify your identity and complete merchant onboarding (KYC/AML compliance).</li>
                  <li>To create and maintain your merchant account, wallet, and transaction history.</li>
                  <li>To process bill payments, fund loads, disbursements, and payment link transactions you initiate.</li>
                  <li>To detect, prevent, and investigate fraud, unauthorized access, and security incidents.</li>
                  <li>To provide customer support, respond to your queries, and resolve tickets or chats you raise.</li>
                  <li>To send you service-related communications, including transaction confirmations and account alerts.</li>
                  <li>To comply with applicable legal, regulatory, and reporting obligations.</li>
                  <li>To improve and maintain the reliability, security, and performance of the Merchant Panel.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">4. Sharing of Information</h2>
                <p className="mb-3">We do not sell your personal information. We share information only where necessary, including with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment gateway and payment processing partners, to authorize and settle transactions you initiate.</li>
                  <li>Banking partners and payment networks, to complete disbursements and fund transfers to your beneficiaries.</li>
                  <li>Identity verification and KYC service providers, to validate the documents you submit.</li>
                  <li>Card networks and other billers, to process the credit card bill payments you make through the platform.</li>
                  <li>Regulators, law enforcement, or courts, where required by applicable law or a valid legal process.</li>
                  <li>Service providers who support our infrastructure (e.g. hosting, communications), under confidentiality obligations.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">5. Data Security</h2>
                <p>
                  We use administrative, technical, and physical safeguards designed to protect your information, including encrypted transmission, access controls, MPIN-based authentication, and session monitoring. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">6. Data Retention</h2>
                <p>
                  We retain your information for as long as your merchant account is active and for a reasonable period thereafter to comply with legal, regulatory, accounting, and dispute-resolution requirements. KYC records in particular may be retained for the period mandated by applicable regulations.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">7. Your Rights &amp; Choices</h2>
                <p className="mb-3">Subject to applicable law, you may:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review the personal and business information associated with your merchant account.</li>
                  <li>Request correction of inaccurate or outdated information via your Account Settings or our support team.</li>
                  <li>Request deletion of your account, subject to our legal and regulatory retention obligations.</li>
                  <li>Withdraw consent for optional communications at any time.</li>
                </ul>
                <p className="mt-3">To exercise any of these rights, contact us using the details at the bottom of this page.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">8. Cookies &amp; Similar Technologies</h2>
                <p>
                  We use cookies and similar technologies to keep you signed in, remember your preferences (such as language), and understand how the Merchant Panel is used, so we can improve it. You can control cookies through your browser settings, though disabling them may affect certain features.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">9. Children's Privacy</h2>
                <p>
                  The Services are intended for use by merchants and their authorized personnel who are at least 18 years old. We do not knowingly collect information from children.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will revise the "Last updated" date above when we do, and material changes will be communicated through the Merchant Panel or another appropriate channel.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-retro-navy mb-2">11. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or how we handle your information, contact us at{' '}
                  <a href="mailto:retroinfotech1@gmail.com" className="text-retro-blue hover:underline">retroinfotech1@gmail.com</a>{' '}
                  or call{' '}
                  <a href="tel:+919121404929" className="text-retro-blue hover:underline">+91 9121404929</a>.
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

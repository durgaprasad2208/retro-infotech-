import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Tv,
  PhoneCall,
  Gauge,
  CreditCard,
  Radio,
  Zap,
  Droplet,
  Flame,
  Fuel,
  Wifi,
  GraduationCap,
  Landmark,
  Building,
  Home,
  HeartPulse,
  Car,
  Users,
  Key,
  ShieldAlert,
  ShieldCheck,
  Bus,
  Train,
  Plane,
  Hotel,
} from 'lucide-react'

interface SolutionCategory {
  id: string
  title: string
  description: string
  items: {
    title: string
    subtitle: string
    icon: React.ElementType
  }[]
}

const solutionsData: SolutionCategory[] = [
  {
    id: 'recharges',
    title: 'Recharges',
    description: 'Mobile, DTH, Fastag and digital entertainment recharge services',
    items: [
      { title: 'Mobile Prepaid', subtitle: 'Instant Recharge', icon: Smartphone },
      { title: 'DTH Recharges', subtitle: 'All Providers', icon: Tv },
      { title: 'FASTag Recharge', subtitle: 'Toll Services', icon: Car },
      { title: 'Landline Postpaid', subtitle: 'Bill Payment', icon: PhoneCall },
      { title: 'Prepaid Meter', subtitle: 'Smart Meters', icon: Gauge },
      { title: 'NCMC Card', subtitle: 'Transit Mobility', icon: CreditCard },
      { title: 'Cable TV', subtitle: 'Cable Subscriptions', icon: Radio },
    ],
  },
  {
    id: 'utilities',
    title: 'Utilities',
    description: 'Pay all household and industrial utility bills with lightning speed',
    items: [
      { title: 'Electricity Bill', subtitle: 'State & Private Boards', icon: Zap },
      { title: 'Water Bill', subtitle: 'Municipal Corporations', icon: Droplet },
      { title: 'Piped Gas', subtitle: 'Gas Utilities', icon: Flame },
      { title: 'LPG Cylinder', subtitle: 'Refill Booking', icon: Fuel },
      { title: 'Broadband', subtitle: 'High-Speed Fiber', icon: Wifi },
    ],
  },
  {
    id: 'financial',
    title: 'Fees & Financial',
    description: 'Secure payment routing for statutory, loan, and financial needs',
    items: [
      { title: 'Education Fees', subtitle: 'Schools & Colleges', icon: GraduationCap },
      { title: 'Loan EMI', subtitle: 'Banks & NBFCs', icon: Landmark },
      { title: 'Municipal Tax', subtitle: 'Property & Water Tax', icon: Building },
      { title: 'Housing Society', subtitle: 'Maintenance Dues', icon: Home },
      { title: 'Hospital & Pathology', subtitle: 'Medical Invoices', icon: HeartPulse },
      { title: 'Credit Card Bill', subtitle: 'Instant Pay', icon: CreditCard },
    ],
  },
  {
    id: 'insurance',
    title: 'Rental & Insurance',
    description: 'Protect assets, life, and manage commercial rentals seamlessly',
    items: [
      { title: 'Rental Payments', subtitle: 'Commercial & Home', icon: Key },
      { title: 'Clubs & Associations', subtitle: 'Membership Dues', icon: Users },
      { title: 'Life Insurance', subtitle: 'Premium Collection', icon: ShieldCheck },
      { title: 'Health Insurance', subtitle: 'Policy Renewal', icon: ShieldAlert },
      { title: 'NPS Pension', subtitle: 'National Pension Scheme', icon: Landmark },
    ],
  },
  {
    id: 'travel',
    title: 'Travel Services',
    description: 'Seamless travel reservations across all modes of transportation',
    items: [
      { title: 'Bus Bookings', subtitle: 'Interstate Routes', icon: Bus },
      { title: 'Train Bookings', subtitle: 'IRCTC Authorized', icon: Train },
      { title: 'Flight Bookings', subtitle: 'Domestic & Global', icon: Plane },
      { title: 'Hotel Bookings', subtitle: 'Verified Stays', icon: Hotel },
    ],
  },
]

interface PaymentSolutionsProps {
  onSelectItem: (itemTitle: string) => void
}

export const PaymentSolutions: React.FC<PaymentSolutionsProps> = ({ onSelectItem }) => {
  const [activeTab, setActiveTab] = useState<string>('all')

  const filteredCategories =
    activeTab === 'all'
      ? solutionsData
      : solutionsData.filter((cat) => cat.id === activeTab)

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-retro-orange bg-orange-50 px-3 py-1 rounded-full border border-retro-orange/20">
            BBPS Enabled Switching
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-retro-navy mt-3 mb-4">
            Pay Your Bills in Seconds
          </h2>
          <p className="text-base text-slate-600">
            Over 20,000+ billers integrated across India with instant BBPS confirmation and automated receipts.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-retro-navy text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Categories
          </button>
          {solutionsData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-retro-blue to-retro-cyan text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Blocks */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/70 shadow-sm">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-retro-navy">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500">{category.description}</p>
                </div>
                <span className="self-start sm:self-auto text-xs font-semibold text-retro-cyan bg-blue-50 px-3 py-1 rounded-full">
                  {category.items.length} Billers & Options
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -4, scale: 1.02 }}
                      onClick={() => onSelectItem(item.title)}
                      className="cursor-pointer group flex flex-col items-center justify-center text-center p-4 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-retro-cyan/40 hover:shadow-md transition-all"
                    >
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-blue-50 text-retro-blue group-hover:from-retro-blue group-hover:to-retro-cyan group-hover:text-white transition-all shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-retro-navy group-hover:text-retro-blue transition-colors">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500 group-hover:text-retro-orange transition-colors">
                        {item.subtitle}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

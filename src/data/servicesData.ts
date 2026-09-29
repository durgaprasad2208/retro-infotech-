import React from 'react'
import {
  CreditCard,
  Bus,
  Train,
  ShieldCheck,
  Ship,
  ShoppingCart,
  Building2,
  Cpu,
  Banknote,
} from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  category: string
  description: string
  icon: React.ElementType
  image: string
  badge?: string
  ctaLabel: string
  ctaVariant: 'button' | 'link'
  bullets?: string[]
  fullWidth?: boolean
  features: string[]
}

export const servicesData: ServiceItem[] = [
  {
    id: 'pos',
    title: 'POS Terminals & Smart Retail',
    category: 'Hardware & Payments',
    description: 'Powering seamless transactions anytime, anywhere with next-gen smart Android POS hardware.',
    icon: CreditCard,
    image: '/services/pos.jpg',
    badge: 'Merchant Solutions',
    ctaLabel: 'Contact us',
    ctaVariant: 'link',
    features: [
      'Multi-mode payments: Chip, Tap & Pay (NFC), QR Code & UPI',
      'Instant settlement options with real-time digital receipts',
      'Integrated inventory and billing software onboard',
      'Durable battery life with 4G LTE and WiFi connectivity',
    ],
  },
  {
    id: 'bus',
    title: 'Bus Ticket Booking',
    category: 'Travel & Mobility',
    description: 'Direct bus ticket reservations across 100,000+ national and regional routes.',
    icon: Bus,
    image: '/services/bus.jpg',
    badge: 'Live Seat Switch',
    ctaLabel: 'Book now',
    ctaVariant: 'button',
    features: [
      'Real-time seat availability across government & private operators',
      'Instant cancellation and automated refund processing',
      'Live GPS bus tracking and automated boarding alerts',
      'Zero convenience fee promos for verified retail agents',
    ],
  },
  {
    id: 'train',
    title: 'Train Ticket Booking',
    category: 'Rail Services',
    description: 'IRCTC authorized ticketing portal powering high-speed railway bookings anytime.',
    icon: Train,
    image: '/services/train.jpg',
    badge: 'IRCTC Integrated',
    ctaLabel: 'Book now',
    ctaVariant: 'button',
    features: [
      'Fast Tatkal and general quota booking engine',
      'PNR status lookup and coach confirmation predictions',
      'Instant refund guarantee into merchant wallet on waitlist drop',
      'Multi-lingual booking support for regional retail outlets',
    ],
  },
  {
    id: 'insurance',
    title: 'General & Life Insurance',
    category: 'Financial Protection',
    description: 'Complete health, motor, shopkeeper, and life insurance policies for total peace of mind.',
    icon: ShieldCheck,
    image: '/services/insurance.jpg',
    badge: 'IRDAI Compliant',
    ctaLabel: 'Book now',
    ctaVariant: 'button',
    features: [
      'Instant policy issuance with paperless digital KYC',
      'Comprehensive two-wheeler, commercial vehicle & car coverage',
      'Cashless hospital networks with top insurance partners',
      'Attractive retail commissions with automated recurring payouts',
    ],
  },
  {
    id: 'ferry',
    title: 'Ferry & Marine Ticketing',
    category: 'Coastal Transport',
    description: 'Ferry ticket bookings across islands, river routes, and coastal waterways.',
    icon: Ship,
    image: '/services/ferry.jpg',
    badge: 'Waterway Rail',
    ctaLabel: 'Book now',
    ctaVariant: 'button',
    features: [
      'Exclusive booking access for Andaman, Goa, Kerala & Mumbai routes',
      'Passenger & vehicle transport slot confirmations',
      'Weather advisory alerts and flexible reschedule policies',
      'Group and charter booking discounts for corporate travel',
    ],
  },
  {
    id: 'grocery',
    title: 'Grocery & Daily Essentials',
    category: 'Retail & FMCG',
    description: 'Wholesale grocery and daily essentials supply chain for retail partners at competitive rates.',
    icon: ShoppingCart,
    image: '/services/grocery.png',
    badge: 'Retail Partners',
    ctaLabel: 'Order now',
    ctaVariant: 'button',
    features: [
      'Direct wholesale sourcing of groceries, staples & daily essentials',
      'Bulk order discounts with flexible credit terms for retail agents',
      'Doorstep delivery with real-time order & stock tracking',
      'Wide catalog of FMCG brands with seasonal offers and margins',
    ],
  },
  {
    id: 'hotel',
    title: 'Hotel & Resort Stays',
    category: 'Hospitality',
    description: 'Handpicked hotels, homestays, and luxury resorts across India at preferred rates.',
    icon: Building2,
    image: '/services/hotel.jpg',
    badge: 'Coming Soon',
    ctaLabel: 'Book now',
    ctaVariant: 'button',
    features: [
      'Over 200,000+ domestic and international verified properties',
      'Zero booking deposit & pay-at-hotel flexibilities',
      'Dedicated helpline for check-in assistance and room upgrades',
      'Seasonal festive coupons and retailer margin buffers',
    ],
  },
  {
    id: 'micro-atm',
    title: 'AePS & Micro-ATM Cash Point',
    category: 'Banking & Cash Withdrawal',
    description: 'Transform your retail counter into a mini-bank branch with Aadhaar biometric withdrawals & balance enquiry.',
    icon: Banknote,
    image: '/services/micro-atm.jpg',
    badge: 'NPCI Certified',
    ctaLabel: 'Book now',
    ctaVariant: 'button',
    features: [
      'Aadhaar-enabled Biometric Cash Withdrawal (AePS) across all banks',
      'Micro-ATM debit card cash dispense with high transaction approval rates',
      'Instant mini-statement and real-time bank balance inquiry',
      'Attractive per-transaction agent commissions credited instantly to wallet',
    ],
  },
  {
    id: 'digital-tools',
    title: 'Digital Tools & Software Hub',
    category: 'Enterprise Productivity',
    description: 'Official enterprise software licenses and cloud tool subscriptions to supercharge digital efficiency.',
    icon: Cpu,
    image: '/services/digital-tools.jpg',
    badge: 'Authorized Hub',
    ctaLabel: 'View more',
    ctaVariant: 'link',
    fullWidth: true,
    bullets: [
      'Adobe Photoshop & Creative Cloud',
      'Adobe Illustrator',
      'Autodesk Fusion 360',
      'Microsoft Office 365 Professional',
    ],
    features: [
      '100% Genuine, authorized commercial software license keys',
      'Instant digital delivery with cloud activation assistance',
      'Multi-seat business subscriptions with centralized billing',
      'Tiered bulk discounts for educational and commercial institutions',
    ],
  },
]

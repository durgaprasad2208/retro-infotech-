# Retro Infotech — Next-Gen FinTech & Utility Switch Platform

A modern, high-performance web platform built for **Retro Infotech**, inspired by the architecture, layout, and visual richness of PaySwitch.

---

## 🎨 Theme & Brand Identity

The website is styled using color tokens derived from the **Retro Infotech** logo:
* **Deep Cyber Navy (`#0B192C`)**: Core contrast, text, and luxury dark panels.
* **Electric Blue (`#0047AB`) & Vivid Cyan (`#0080FF`)**: Primary actions, glow badges, and brand highlights.
* **Radiant Orange (`#FF6B00`)**: Energetic accents, primary action gradient highlights, and trust indicators.
* **Clean Light Slate (`#F8FAFC`)**: Soft background transitions for readability and visual balance.

---

## 🚀 Key Features & Button Architecture

Per instructions, all buttons are preserved from the original inspiration, but instead of routing to external or broken subdomains, they trigger interactive in-page experiences:
* **"Get Started" / "Join Today" / "Contact Us" Buttons**:
  Opens an interactive **Partner & Retail Consultation Modal** with form validation and animated confirmation feedback.
* **"Book Now" / "View More" Buttons (on Service Cards)**:
  Opens an interactive **Service Detail Preview Modal** with comprehensive specifications, feature lists, and instant inquiry action.
* **Utility & Payment Solutions Grid**:
  Categorized tab view covering 20,000+ BBPS utility billers (Mobile, DTH, Electricity, Gas, Water, EMI, Taxes, Insurance). Clicking any biller triggers a direct inquiry.
* **Newsletter Signup Form**:
  Instant confirmation feedback with validation.
* **Compliance & Legal Modals**:
  Privacy Policy, Terms & Conditions, Return & Refund Policy, Grievance Officer, and Regulatory Information are accessible via popups.

---

## 🛠 Tech Stack

* **Framework:** React 18 (TypeScript)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v3
* **Animations:** Framer Motion (slide-in reveals, sticky glassmorphism, mobile drawer, interactive modals)
* **Icons:** Lucide React
* **Typography:** Archivo (Google Fonts)

---

## 💻 Running the Application

### Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port printed in the terminal).

### Build for Production
```bash
npm run build
```
Generates production-ready, minified static files in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

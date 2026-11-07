# AuditDesk Enterprise Security

# Role & Task
You are an expert full-stack developer and UI/UX designer. Your task is to build the official marketing and solutions website for **AuditDesk**—a modern enterprise cybersecurity, telemetry, and compliance platform.

---

## 1. Design System & Theme Inheritance (CRITICAL)
- **Codebase Reference:** I have attached/provided the **ScholarDesk** codebase files to this project. Inspect the styling configurations (`tailwind.config.js`, global CSS variables, typography setups, and UI component patterns) from ScholarDesk.
- **Visual Aesthetic:** Strictly adopt the **flat design language**, minimal aesthetics, color palette, typography hierarchy, button styles, borders, and spacing tokens used in **ScholarDesk** and **AssessDesk**.
- **No Gradients / Minimal Skeuomorphism:** Keep cards, containers, and badges flat with solid background tones, clean border strokes (1px), subtle hover states, and crisp grid alignments. Maintain visual continuity across the product family.

---

## 2. Page Structure & Navigation
Build a fully responsive, modern single-page or multi-route site with the following layout:

### A. Navigation Bar (Header)
- **Brand Logo:** `AuditDesk` (flat typography logo matching ScholarDesk style).
- **Nav Links:** 
  - Solutions (Dropdown or jump link)
  - Compliance Standards
  - Features
  - About
- **Call to Action (CTA):** Prominent flat CTA button: `Contact Sales` (scrolls smoothly to or opens a modern contact modal).

### B. Hero Section
- **Headline:** Bold, enterprise-grade value statement (e.g., *"Automated SIEM, Log Management & Data Compliance for the Enterprise"*).
- **Sub-headline:** Clean overview of how AuditDesk guarantees CBK & ODPC regulatory compliance, continuous telemetry, and privileged access security.
- **CTAs:** 
  - Primary: `Contact Sales`
  - Secondary: `Explore Solutions`

### C. Enterprise Solutions Suite (Core Showcase)
Display the AuditDesk Enterprise Suite in a clean 2x2 or 4-column flat grid with distinct, modular cards. Each card must feature an icon, badge, clear value proposition, target customer, and a `Learn More` interactive preview state:

1. **Log Management & SIEM:** Centralized log parsing, continuous incident monitoring, real-time alert triage, and historical log retention.
2. **Database Activity Monitoring (DAM):** Real-time SQL query auditing, unauthorized access detection, and data leakage safeguards.
3. **PIM / PAM (Privileged Access):** Zero-standing-privileges access control, SSH/DB session recording, and multi-factor authorization for engineering teams.
4. **Observability & APM:** System metrics, service latency tracking, uptime monitoring, and proactive alert filtering.

### D. Compliance & Audit Readiness Section
- Highlight out-of-the-box alignment with statutory data regulations (**ODPC Data Protection Act 2019**, **CBK Cybersecurity Guidelines**, PCI-DSS, and ISO 27001).
- Include an interactive preview component: *"One-Click Automated Audit Trail PDF Export"*.

### E. Modern "Contact Sales" Section (High-Converting Conversion Point)
- Design an executive-friendly, low-friction B2B contact interface:
  - Form fields: Full Name, Work Email, Company / Organization, Solution Interest (Multi-select dropdown for Log/SIEM, DAM, PIM/PAM, APM), Message.
  - Secondary option: *"Need an immediate compliance assessment? Schedule a 15-min call with our engineering team."*
  - Flat, interactive submission feedback with clear validation states.

### F. Footer
- Minimal flat footer with navigation links, compliance badges, copyright info, and placeholder legal links (Privacy Policy, Terms of Service, Security Disclosures).

---

## 3. Search Engine Optimization (SEO) & Metadata
Configure heightened SEO throughout the app structure:
- **Meta Tags:** Title tag (*"AuditDesk | Enterprise SIEM, Log Management & Data Compliance Solutions"*), Meta Description, OpenGraph (OG) card tags, and Twitter Cards.
- **Semantic HTML:** Strict usage of `<header>`, `<main>`, `<section>`, `<article>`, `<h1>`-`<h3>`, and `<footer>`.
- **Keywords Embedded:** *SIEM Kenya, Log Management, ODPC Compliance, CBK Cybersecurity Guidelines, Database Activity Monitoring East Africa, Enterprise PIM PAM, Automated Audit Logs*.
- **Structured Data (Schema.org):** Add JSON-LD schema for `Organization` and `SoftwareApplication`.

---

## 4. Technical Execution Guidelines
- **Framework:** React + Vite + Tailwind CSS + Lucide React (Icons).
- **State Management:** Clean, lightweight local state for modals, navigation dropdowns, and form submissions.
- **Responsiveness:** Full breakpoint coverage (Mobile-first, Tablet, Desktop) with flat cards stacking gracefully on smaller screens.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f81d5f0e-7254-4b18-94db-d9c5aea727b9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

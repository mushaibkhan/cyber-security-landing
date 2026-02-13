# SFDSPM - Strategic Data Protection for the Modern Enterprise

![SFDSPM Logo](./public/logo.png)

## Overview

**SFDSPM** delivers outcome-driven **Data Loss Prevention (DLP)** and **Data Security Posture Management (DSPM)** consulting. We specialize in **Microsoft Purview Migration & Consolidation**, helping organizations modernize their data protection strategy and align with global regulatory frameworks.

Our services are engineered to provide visibility, control, and measurable risk reduction across cloud, SaaS, endpoint, and hybrid environments.

## Core Capabilities

-   **Microsoft Purview Migration**: Expertly transition from legacy DLP platforms to a streamlined Purview environment.
-   **Data Security Posture Assessment**: Evaluate configurations, identify policy gaps, and map controls to PCI, HIPAA, and NIST.
-   **Sensitive Data Discovery**: Build a centralized inventory of PII, PHI, and IP across multi-cloud and SaaS environments.
-   **Data Classification & Governance**: Implement automated labeling and enforce unified protection policies.
-   **DLP Policy Optimization**: Consolidate legacy logic to reduce false positives and modernization enforcement.

## Technology Stack

Built with a premium, modern web stack for maximum performance and aesthetics:

-   **Framework**: [Next.js 16 (Turbopack)](https://nextjs.org/)
-   **Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Email Service**: [EmailJS](https://www.emailjs.com/)

## Getting Started

### Prerequisites

-   Node.js 20+ installed
-   An EmailJS account (for the contact form)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/sfdspm-landing.git
    cd sfdspm-landing
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure EmailJS:**
    Update `src/components/sections/Contact.tsx` with your credentials from the [EmailJS Dashboard](https://dashboard.emailjs.com/).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Build for Production:**
    ```bash
    npm run build
    ```

## Project Structure

```
src/
├── app/          # App Router (layouts, metadata, globals)
├── components/   # UI components, page sections, and layouts
│   ├── layout/   # Shared Navbar, Footer
│   ├── sections/ # Modular home page sections (Hero, Features, etc.)
│   └── ui/       # Reusable UI primitives (Logo, etc.)
└── lib/          # Utility functions and shared helpers
```

## License

All rights reserved © 2026 SecureFrame Technologies LLC.

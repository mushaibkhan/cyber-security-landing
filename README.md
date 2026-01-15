# SFDSPM - Strategic Data Protection for the Modern Enterprise

![SFDSPM Shield](./src/app/icon.png)

## Overview

**SFDSPM** delivers outcome-driven **Data Loss Prevention (DLP)** and **Data Security Posture Management (DSPM)** consulting. We help CISOs reduce data exposure, enforce governance, and align with regulatory frameworks across hybrid environments.

Our services are engineered to provide visibility, control, and measurable risk reduction across cloud, SaaS, endpoint, and on-prem data flows.

## Core Capabilities

-   **Data Security Posture Assessment**: Evaluate configurations, telemetry, and policy gaps.
-   **Sensitive Data Discovery**: Scan AWS, Azure, GCP, SaaS, and endpoints for PII, PHI, PCI.
-   **Data Classification & Governance**: Automate tagging and enforce retention/encryption policies.
-   **Monitoring & Enforcement**: Detect and block exfiltration via email, web, USB, and cloud.
-   **Regulatory Compliance Alignment**: Map controls to PCI DSS, HIPAA, NIST, ISO 27001, etc.
-   **DLP Policy Optimization**: Consolidate legacy policies and modernize enforcement.

## Technology Stack

This project is built with the latest modern web technologies:

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Email Service**: [EmailJS](https://www.emailjs.com/)

## Getting Started

### Prerequisites

-   Node.js 18+ installed
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
    # Ensure @emailjs/browser is installed
    npm install @emailjs/browser
    ```

3.  **Configure EmailJS:**
    Open `src/components/sections/Contact.tsx` and replace the placeholder keys with your actual credentials from the [EmailJS Dashboard](https://dashboard.emailjs.com/):
    ```typescript
    emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
    )
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout & SEO metadata
│   ├── page.tsx         # Main landing page composition
│   └── globals.css      # Tailwind imports & custom utilities
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Features, Trust, Process, Contact, etc.
│   └── ui/              # Reusable UI atoms
└── lib/                 # Utility functions
```

## License

All rights reserved © 2026 Origin Softwares.

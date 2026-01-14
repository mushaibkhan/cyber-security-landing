import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sfdspm.com"), // Placeholder URL, update when deployed
  title: "SecureFrame Data Security Posture Management | SFDSPM Excellence",
  description: "SecureFrame Data Security Posture Management (SFDSPM) - Your strategic partner for Data Loss Prevention (DLP) and DSPM consulting. Protect sensitive PII, PHI, and PCI data.",
  keywords: ["SFDSPM", "Data Security", "DSPM", "DLP", "Cyber Security", "Consulting", "Data Protection", "Compliance", "GDPR", "HIPAA", "PCI DSS"],
  openGraph: {
    title: "SecureFrame Data Security Posture Management | SFDSPM Excellence",
    description: "Your strategic partner for Data Loss Prevention (DLP) and DSPM consulting.",
    url: "https://sfdspm.com",
    siteName: "SFDSPM",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SFDSPM Excellence",
    description: "Data Security Posture Management and DLP Consulting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}


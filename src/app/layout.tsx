import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNavbar from "@/components/main-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gradenext",
  description: "Innovative educational technology platform for modern learning",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />
        {children}
        {/* Calendly badge widget */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (typeof Calendly !== 'undefined') {
                  Calendly.initBadgeWidget({
                    url: 'https://calendly.com/nextgradeinfo/30min?hide_gdpr_banner=1',
                    text: 'Book A Call',
                    color: '#9b4095',
                    textColor: '#ffffff'
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
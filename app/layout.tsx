import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk as grotesk } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

import "./globals.css";
import { ScreenProvider } from "@/context/ScreenSizeContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotestk",
});

export const metadata: Metadata = {
  title: "CARE",
  description: "XCare is a SaaS platform that helps you manage data.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} custom-scrollbar`}
      >
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ScreenProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </ScreenProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

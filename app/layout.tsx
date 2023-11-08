import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Sans as IbmPlexSans } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";
import { FullscreenProvider } from "@/context/ScreenSizeProvider";

import "./globals.css";
import { SidebarProvider } from "@/context/SideBarProvider";

const ibmPlexSans = IbmPlexSans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "X-CARE",
  description: "XCare is a SaaS platform that helps you manage data.",
  icons: {
    icon: "/assets/images/aexis.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable}  custom-scrollbar`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient",
            },
          }}
        >
          <ThemeProvider>
            <SidebarProvider>
              <FullscreenProvider>{children}</FullscreenProvider>
            </SidebarProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PersonJsonLd, WebSiteJsonLd } from "../lib/seo";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { Header } from "../components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacob Darling – Marketing Director Portfolio",
  description: "Where marketing vision meets technical reality. Case studies, stack, and results.",
  openGraph: {
    title: "Jacob Darling – Marketing Director Portfolio",
    description: "Director-level martech leadership, automation, and analytics.",
    url: "https://your-domain.com",
    images: [
      { url: "/og/og-default.png", width: 1200, height: 630, alt: "Jacob Darling Portfolio" }
    ]
  },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <PersonJsonLd />
          <WebSiteJsonLd />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

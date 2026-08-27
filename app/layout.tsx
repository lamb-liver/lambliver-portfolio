import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeToggle";
import { site } from "@/lib/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.nameEn}`,
    template: `%s · ${site.nameEn}`,
  },
  description: `羊肝的作品集：網站、小工具與攤位結帳 App。`,
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.nameEn}`,
    description: `羊肝的作品集：網站、小工具與攤位結帳 App。`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.nameEn}`,
    description: `羊肝的作品集：網站、小工具與攤位結帳 App。`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full bg-canvas font-sans antialiased">
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

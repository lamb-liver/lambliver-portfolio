import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeToggle";
import { site } from "@/lib/site";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  preload: true,
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
      className={`${firaCode.variable} h-full`}
    >
      <body className="min-h-full bg-canvas font-sans antialiased">
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

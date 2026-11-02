import type { Metadata, Viewport } from "next";
import { Bitter, Atkinson_Hyperlegible } from "next/font/google";
import { Header, Footer, MobilZavolat } from "@/components/Chrome";
import { JsonLd, firmaSchema } from "@/components/Seo";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tepelná čerpadla Šenov | servis a montáž Fujitsu | Jiří Vrlík",
    template: "%s | Tepelná čerpadla Vrlík, Šenov",
  },
  description:
    "Servis, návrh a montáž tepelných čerpadel Fujitsu vzduch-voda v Šenově, Ostravě a okolí. Jiří Vrlík, v oboru od roku 1992. Tel. 603 179 972.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Tepelná čerpadla Vrlík",
    images: [{ url: "/foto/jednotka-novostavba.jpg", width: 1280, height: 958 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1b2124",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${bitter.variable} ${atkinson.variable} antialiased`}>
      <body>
        <JsonLd data={firmaSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobilZavolat />
      </body>
    </html>
  );
}

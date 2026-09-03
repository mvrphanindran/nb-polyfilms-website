import type { Metadata } from "next";
import { Archivo, Inter, Inter_Tight } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const siteUrl = "https://www.nbpolyfilms.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NB Polyfilms | Flexible Packaging Solutions",
  description:
    "NB Polyfilms is a flexible packaging converter established in 2003, delivering high-performance laminates, pouches, rollstock and barrier packaging for a wide range of industries.",
  openGraph: {
    title: "NB Polyfilms | Flexible Packaging Solutions",
    description:
      "Flexible packaging solutions for a better tomorrow. Laminates, pouches, rollstock, high barrier packaging and shrink sleeves engineered for performance.",
    url: siteUrl,
    siteName: "NB Polyfilms",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/nb-polyfilms-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

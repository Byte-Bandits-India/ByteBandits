import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollButton from "@/components/ui/ScrollButton";
import LenisScroll from "@/components/ui/LenisScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Byte Bandits | Custom Software, Web, Mobile & Cloud Solutions",
  description:
    "At Byte Bandits, we turn bold ideas into powerful digital products. Web development, mobile apps, SEO, cloud scaling, branding & more. Let’s build success together.",
  icons: {
    icon: "/fav1.png", // path to your favicon
  },
  openGraph: {
    title: "Byte Bandits | Custom Software, Web, Mobile & Cloud Solutions",
    description:
      "At Byte Bandits, we turn bold ideas into powerful digital products. Web development, mobile apps, SEO, cloud scaling, branding & more.",
    url: "https://bytebandits.com", // replace with your domain if available
    siteName: "Byte Bandits",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Byte Bandits | Custom Software, Web, Mobile & Cloud Solutions",
    description:
      "We turn bold ideas into powerful digital products. Let's build success together.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body className="font-sans">
        <Header />
        <div style={{ minHeight: "100vh" }}>
          <LenisScroll />
          {children}
          <ScrollButton />
        </div>
        <Footer />
      </body>
    </html>
  );
}

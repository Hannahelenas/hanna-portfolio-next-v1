import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif, Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";

// Fonts
const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanna-klang-eriksson-portfolio.vercel.app"),
  title: "Hanna Klang Eriksson",
  description: `Hanna Klang Eriksson — frontend developer dedicated to creating
   accessible, inclusive and user-friendly web experiences.`,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Hanna Klang Eriksson — Frontend Developer",
    description: `Accessible, inclusive and user-friendly web experiences. 
      Portfolio by Hanna Klang Eriksson.`,
    url: "https://hanna-klang-eriksson-portfolio.vercel.app/",
    siteName: "Hanna Klang Eriksson",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hanna Klang Eriksson Portfolio",
      },
    ],
  },
  verification: {
    google: "MUGuSNHQMYz3QemvIM_UHQIlgFawFA3FPGnAO6xMrCQ",
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
        className={`${notoSans.variable} ${notoSerifDisplay.variable} 
        ${notoSerif.variable} font-sans antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

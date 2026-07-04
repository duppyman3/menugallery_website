import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://menugallery.app"),
  title: "MenuGallery — Photograph a menu, see the dishes",
  description:
    "MenuGallery reads a photo of any restaurant menu and shows every dish as an appetizing image with prices and estimated calories, carbs and protein. Sort by course, price or macros. Coming soon to the App Store and Google Play.",
  openGraph: {
    siteName: "MenuGallery",
    type: "website",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F4F2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased">
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}

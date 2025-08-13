import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Humidor Hub',
  description: 'Elevate Your Cigar Experience',
  keywords: ['cigar', 'humidor', 'hub', 'cigar community', 'cigar management'],
  authors: [{ name: 'Shawn Miller (hereiamnow@gmail.com)', url: 'https://humidorhub.io' }],
  creator: 'Shawn Miller (hereiamnow@gmail.com)',
  publisher: 'Shawn Miller (hereiamnow@gmail.com)',
  robots: 'index, follow',
  // Add Open Graph and Twitter metadata
  openGraph: {
    title: 'Humidor Hub',
    description: 'Elevate Your Cigar Experience',
    url: 'https://humidorhub.io',
    siteName: 'Humidor Hub',
    images: [
      {
        url: 'https://humidorhub.io/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humidor Hub',
    description: 'Elevate Your Cigar Experience',
    // creator: '@yourtwitterhandle', // Optional: add your Twitter handle
    images: ['https://humidorhub.io/og-image.png'], // Replace with your actual OG image URL
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

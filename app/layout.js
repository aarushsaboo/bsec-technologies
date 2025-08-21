import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crop Monitoring & Smart Farming Solutions | BSEC Technologies",
  description: "BSEC Technologies offers cutting-edge software solutions for smart farming, crop monitoring, and secure contract farming.",
  openGraph: {
    title: "Crop Monitoring & Smart Farming Solutions | BSEC Technologies",
    description: "BSEC Technologies offers cutting-edge software solutions for smart farming, crop monitoring, and secure contract farming.",
    url: "https://bsec-technologies.vercel.app/platforms",
    images: [
      {
        url: "https://bsec-technologies.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "BSEC Technologies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crop Monitoring & Smart Farming Solutions | BSEC Technologies",
    description: "BSEC Technologies offers cutting-edge software solutions for smart farming, crop monitoring, and secure contract farming.",
    images: ["https://bsec-technologies.vercel.app/images/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SX5WP86CJ8"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SX5WP86CJ8');
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
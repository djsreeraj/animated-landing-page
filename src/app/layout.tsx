import type { Metadata } from "next";
import { Six_Caps, Poppins } from "next/font/google";
import "./globals.css";


const six_caps = Six_Caps({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-six-caps',
  weight: '400', 
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '700'], 
})

export const metadata: Metadata = {
  title: "Montoya – Creative Portfolio Theme",
  description: "Animated Landing Page using Next JS, Tailwind CSS, Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${six_caps.variable} ${poppins.variable}`}>
      <body className={poppins.className} bg-black-700>{children}</body>
    </html>
  );
}

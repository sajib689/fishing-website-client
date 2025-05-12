import { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Add Satoshi font (via CDN method)
export const metadata: Metadata = {
  title: "Fishing Tripper",
  description: "Rent Boat For Fishing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        />
      </head>
      <body>
      
        {children}
      
      </body>
    </html>
  );
}

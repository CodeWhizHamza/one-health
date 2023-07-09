import "./globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-inter",
}); 

export const metadata = {
  title: "Molecular Parasitolgy & One Health Lab",
  description: "Molecular Parasitolgy & One Health Lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-200`} style={{
        overflowX: "hidden",
      }}>
        {children}
      </body>
    </html>
  );
}
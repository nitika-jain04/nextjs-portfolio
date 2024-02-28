import { Inter } from "next/font/google";
import { openGraphImage } from "../data.js";
import "../utils/aos-init.js";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nitika Jain",
  openGraph: {
    ...openGraphImage,
    title: "Nitika Jain",
  },
  description: "Portfolio website, built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

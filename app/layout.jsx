import { Inter } from "next/font/google";
import "../utils/aos-init.js";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Nitika Jain",
    default: "Nitika Jain",
  },
  description: "Portfolio website, built with Next.js",
  creator: "Nitika Jain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/public/opengraph-Img.png" />
        <meta property="og:title" content="Nitika Jain Portfolio" />
        <meta
          property="og:description"
          content="Portfolio website, built with Next.js"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

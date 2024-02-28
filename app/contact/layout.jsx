import Navbar from "@/components/Navbar";
import { openGraphImage } from "@/data.js";

export const metadata = {
  title: "Contact | Nitika Jain",
  openGraph: {
    ...openGraphImage,
    title: "Contact | Nitika Jain",
  },
  description: "Portfolio website, built with Next.js",
};

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <section>{children}</section>
    </div>
  );
}

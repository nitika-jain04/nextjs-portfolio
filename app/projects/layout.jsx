import Navbar from "@/components/Navbar";
import { openGraphImage } from "@/data.js";

export const metadata = {
  title: "Projects | Nitika Jain",
  openGraph: {
    ...openGraphImage,
    title: "Projects | Nitika Jain",
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

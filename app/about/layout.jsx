import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About",
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

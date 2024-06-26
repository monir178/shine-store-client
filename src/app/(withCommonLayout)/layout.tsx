import type { Metadata } from "next";
import CommonNavbar from "./components/shared/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shine Store",
  description: "Your one-stop shop for all cleaning supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CommonNavbar></CommonNavbar>
      <div className="mx-auto container">{children}</div>
      <div className="mx-auto container">
        <Footer />
      </div>
    </div>
  );
}

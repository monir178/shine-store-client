import type { Metadata } from "next";
import CommonNavbar from "./components/shared/Navbar";

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
    </div>
  );
}

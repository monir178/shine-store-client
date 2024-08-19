import type { Metadata } from "next";
import CommonNavbar from "./components/shared/Navbar";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export const metadata: Metadata = {
  title: "Shine Store",
  description: "Your one-stop shop for all cleaning supplies",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <CommonNavbar session={session}></CommonNavbar>
      <div className="mx-auto container">{children}</div>
      <div className="mx-auto container">
        <Footer />
      </div>
    </div>
  );
}

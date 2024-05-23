import type { Metadata } from "next";
import DashboardSidebar from "./components/sidebar/DashboardSidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Your one-stop shop for all cleaning supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
}

"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import {
  Home,
  LayoutDashboard,
  MenuSquareIcon,
  TableProperties,
} from "lucide-react";
import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <div className="border-r-2">
      <Disclosure as="nav">
        <DisclosureButton className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset  group md:hidden">
          <MenuSquareIcon className="block h-6 w-6" aria-hidden="true" />
        </DisclosureButton>
        <div className="p-6 w-1/2 h-screen z-20 fixed top-0 bg-gray-900 -left-96 transition-all ease-out delay-150 duration-200 lg:w-60 peer-focus:left-0 peer:md:left-0 md:static md:w-60 md:left-0">
          <div className="flex flex-col justify-start items-center">
            <ThemeSwitcher />
            <Link href="/">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 rounded-md group cursor-pointer mt-4 text-white hover:shadow-lg m-auto border-b border-gray-100 pb-4 w-full">
                <Home className="text-2xl text-green-400" />
                <h3 className="font-semibold">Home Page</h3>
              </div>
            </Link>
            <h1 className="text-green-400  cursor-pointer text-center font-bold uppercase border-b border-gray-100 pb-4 mt-4 w-full">
              Admin Dashboard
            </h1>

            <div className="my-4 border-b text-white border-gray-100 pb-4 ">
              <Link href="/dashboard">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 rounded-md group cursor-pointer pb-2 hover:shadow-lg m-auto">
                  <LayoutDashboard className="text-2xl text-green-400" />
                  <h3 className="font-semibold">Dashboard</h3>
                </div>
              </Link>
              <Link href="/dashboard/all-products">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 rounded-md group cursor-pointer pb-2 hover:shadow-lg m-auto">
                  <TableProperties className="2xl text-green-400" />
                  <h3 className="font-semibold">All Products</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default DashboardSidebar;

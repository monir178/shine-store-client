"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import shine from "../../../../../public/shine.png";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import { signOut } from "next-auth/react";

type TUserProps = {
  user?: {
    name?: string | undefined | null;
    email?: string | undefined | null;
    image?: string | undefined | null;
  };
};

const CommonNavbar = ({ session }: { session: TUserProps | null }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "All Products", path: "/products" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      className="py-0 lg:py-2"
      maxWidth="2xl"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden md:flex lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Small Device */}
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <ThemeSwitcher />
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={shine}
                alt="Shine Store Logo"
                width={50}
                height={50}
              />
              <p className="font-semibold text-lg ms-2 text-green-400">
                Shine Store
              </p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* for large device */}
      <NavbarContent className="hidden sm:flex justify-between w-full">
        <NavbarContent justify="start">
          <NavbarBrand className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={shine}
                  alt="Shine Store Logo"
                  width={50}
                  height={50}
                />
                <p className="font-semibold ms-3 text-medium lg:text-2xl text-green-400">
                  Shine Store
                </p>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent justify="end">
        {menuItems.map((item) => (
          <NavbarItem className="hidden lg:flex" key={item.path}>
            <Link href={item.path} color="foreground" className="font-semibold">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {!session?.user ? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button color="success" variant="shadow">
              <Link href="/login" className=" font-semibold">
                Login
              </Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button
              variant="shadow"
              onClick={() => signOut()}
              className="bg-red-500 text-white font-semibold">
              Logout
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full font-semibold"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
              onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}

        {!session?.user ? (
          <NavbarMenuItem>
            <Button
              onClick={() => setIsMenuOpen(false)}
              color="success"
              variant="shadow">
              <Link href="/login" className=" font-semibold text-white ">
                Login
              </Link>
            </Button>
          </NavbarMenuItem>
        ) : (
          <NavbarMenuItem>
            <Button
              variant="shadow"
              onClick={() => {
                setIsMenuOpen(false);
                signOut();
              }}
              className="bg-red-500 text-white font-semibold">
              Logout
            </Button>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default CommonNavbar;

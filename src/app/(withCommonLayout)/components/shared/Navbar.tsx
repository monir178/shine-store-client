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
import { useSession } from "next-auth/react";

const CommonNavbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

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
        <NavbarContent justify="end">
          {menuItems.map((item) => (
            <NavbarItem className="hidden lg:flex" key={item.path}>
              <Link
                href={item.path}
                color="foreground"
                className="font-semibold">
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {user ? (
            <NavbarItem className="hidden lg:flex">
              <Button
                onClick={() => signOut({ callbackUrl: "/" })}
                variant="flat"
                className="font-semibold text-green-400">
                Logout
              </Button>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Link href="/login" className="font-semibold text-green-400">
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <Button
                  as={Link}
                  href="/register"
                  variant="flat"
                  className="font-semibold text-green-400">
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </NavbarContent>

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
        {user ? (
          <NavbarMenuItem>
            <Button
              className="w-full font-semibold text-green-400"
              onClick={() => {
                signOut({ callbackUrl: "/" });
                setIsMenuOpen(false);
              }}>
              Logout
            </Button>
          </NavbarMenuItem>
        ) : (
          <>
            <NavbarMenuItem>
              <Link
                className="w-full font-semibold text-green-400"
                href="/login"
                onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button
                className="w-full font-semibold text-green-400"
                as={Link}
                href="/register"
                size="lg"
                onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Button>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default CommonNavbar;

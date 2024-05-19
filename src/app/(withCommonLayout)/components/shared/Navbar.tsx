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

const CommonNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Flash Sale", path: "/flash-sale" },
    { label: "All Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      className="py-0 lg:py-2"
      maxWidth="full"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden md:flex lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden  justify-end pr-3" justify="center">
        <NavbarBrand>
          <ThemeSwitcher />
          <Image src={shine} alt="Shine Store Logo" width={50} height={50} />
          <p className="font-semibold  text-lg ms-2 text-green-400">
            Shine Store
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-between w-full">
        <NavbarContent justify="start">
          <NavbarBrand className="flex items-center">
            <Image src={shine} alt="Shine Store Logo" width={50} height={50} />
            <p className="font-semibold  ms-3 text-medium lg:text-2xl text-green-400">
              Shine Store
            </p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          {menuItems.map((item) => (
            <NavbarItem className="hidden lg:flex" key={item.path}>
              <Link
                href={item.path}
                color="foreground"
                className=" font-semibold">
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className=" font-semibold text-green-400">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              href="#"
              variant="flat"
              className=" font-semibold text-green-400">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full  font-semibold"
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
        <NavbarMenuItem>
          <Link
            className="w-full  font-semibold text-green-400"
            href="#"
            onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            className="w-full  font-semibold text-green-400"
            href="#"
            size="lg"
            onClick={() => setIsMenuOpen(false)}>
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default CommonNavbar;

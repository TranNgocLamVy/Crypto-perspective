"use client";
import Logo from "@/src/components/Logo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function PrivateNavbar() {
  return (
    <Navbar maxWidth="full" className="bg-[#DCF0FF]">
      <NavbarBrand>
        <Logo className="w-32" />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="primary"
            href="/signin"
            variant="flat"
            radius="sm"
            className="font-bold">
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/signup"
            variant="solid"
            radius="sm"
            className="text-white bg-primary-500 font-bold">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

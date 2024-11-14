"use client";
import Logo from "@/src/components/Logo";
import { useAuth } from "@/src/provider/AuthProvider";
import UserProfileModal from "@/src/views/UserProfileModal";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from "@nextui-org/react";
import { SignOut, User } from "@phosphor-icons/react";
import Link from "next/link";

export default function PrivateNavbar() {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Logo className="w-32" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link href="/markets" className="text-lg font-medium hover:underline">
            Markets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/alerts" className="text-lg font-medium hover:underline">
            Alerts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Dropdown>
          <DropdownTrigger>
            <Avatar src="/user.svg" isBordered color="default" />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              onClick={() => onOpenChange()}
              startContent={<User />}>
              Profile
            </DropdownItem>
            <DropdownItem
              color="danger"
              className="text-error-500"
              startContent={<SignOut />}>
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <UserProfileModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </Navbar>
  );
}

"use client";
import Container from "@/src/components/Container";
import PrivateNavbar from "@/src/layouts/PrivatePage/Navbar";
import { AuthOperation } from "@/src/libs";
import { Button } from "@nextui-org/react";

export default function Page() {
  const test = () => {
    const auth = new AuthOperation();
    auth.refreshToken();
  };

  return (
    <Container className="bg-background">
      <PrivateNavbar />
      <Button onClick={test}>Test</Button>
    </Container>
  );
}

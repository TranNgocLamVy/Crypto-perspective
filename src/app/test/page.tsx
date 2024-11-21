"use client";
import Container from "@/src/components/Container";
import PrivateNavbar from "@/src/layouts/PrivatePage/Navbar";
import { Button } from "@nextui-org/react";
import axios from "axios";

function Test(payload: any) {
  axios.post("/api/test", payload);
}

export default function Page() {
  return (
    <Container className="bg-background">
      <PrivateNavbar />
      <Button onClick={() => Test({ bla: "bla" })}>TEST</Button>
    </Container>
  );
}

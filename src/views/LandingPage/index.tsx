"use client";

import Container from "@/src/components/Container";
import Footer from "@/src/layouts/PublicPage/Footer";
import Navbar from "@/src/layouts/PublicPage/Navbar";
import HeroSection from "@/src/views/LandingPage/HeroSection";

export default function LandingPage() {
  return (
    <Container className="bg-[#DCF0FF] gap-12">
      <Navbar />
      <HeroSection />
      <Footer />
    </Container>
  );
}

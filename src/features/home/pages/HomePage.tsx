"use client";

import Header from "@/src/shared/components/ui/header";
import Banner from "../components/banner";
import TimeTogetherCounter from "../components/timeTogether";
import MemoryGame from "../components/memoryGame";
import Footer from "@/src/shared/components/ui/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <TimeTogetherCounter />
      <MemoryGame />
      <Footer />
    </>
  );
}

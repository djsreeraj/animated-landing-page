"use client"
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <main className="bg-darkgray px-20 py-12 hide-scrollbar overflow-y-scroll  h-screen">
        <PageLoader />
        <Header />
        <HeroSection />

    </main>
  );
}

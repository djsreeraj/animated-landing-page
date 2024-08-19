"use client"
import { BannerCards } from "@/components/BannerCards";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection";
import PageLoader from "@/components/PageLoader";
import Cursor from "@/components/UI/Cursor";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main >
        <PageLoader loading={loading} setLoading={setLoading}  />
        {!loading && <div className={"bg-darkgray px-20 py-12 hide-scrollbar overflow-y-scroll  h-screen"}>
          <Header />
          <HeroSection />
          <Cursor />
          <BannerCards />
        </div>
}

    </main>
  );
}

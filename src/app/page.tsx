"use client"
import { BannerCards } from "@/components/BannerCards";
import ContactSection from "@/components/ContactSection";
import { Footer } from "@/components/Footer/Footer";
import FooterHero from "@/components/Footer/FooterHero";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection";
import PageLoader from "@/components/PageLoader";
import SkillSection from "@/components/Skills/SkillSection";
import { SubTitle } from "@/components/SubTitle";
import ButtonPrimary from "@/components/UI/ButtonPrimary";
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
      
           <div className="flex mt-xl flex-col justify-center items-center gap-10" >

            <SubTitle 
              text={"CRAFTING WEBSITES WHERE THE ELEGANCE <br/> OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS."}
            />

              <ButtonPrimary text={"See All works"}/>
           </div>

           <SkillSection />
           <ContactSection />
           <FooterHero />
           <Footer />

           

</div>
}

    </main>
  );
}

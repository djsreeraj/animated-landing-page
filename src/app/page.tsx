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
import { ReactLenis } from '@/libs/lenis'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scollDuration, setScrollDuration] = useState<number>(1.5);

  return (
    <main >
    <ReactLenis root options={{ 
      // lerp: 0.9, 
      duration: scollDuration }}>
    <PageLoader loading={loading} setLoading={setLoading}  />
        {!loading && <div className={"bg-darkgray sm:px-4 md:px-8 lg:px-12 xl:px-20 py-12 hide-scrollbar"}>

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

           <SkillSection setScrollDuration={setScrollDuration} />
           <ContactSection />
           <FooterHero />
           <Footer />
      </div>
      }

      </ReactLenis>


    </main>
  );
}

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const SkillSection = ({setScrollDuration} : {setScrollDuration: (value: number) => void}) => {
  const skills = [
        "WEB DESIGN",
        "MOBILE APP DEVELOPMENT",
        "UI/UX DESIGN",
        "SEO OPTIMIZATION",
        "SOCIAL MEDIA MANAGEMENT",
        "DATA ANALYTICS",
        "CONTENT CREATION"
      ];

      const titleRef = useRef(null);
      const skillsRef = useRef(null);
      const [isSticky, setIsSticky] = useState(false);

      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsSticky(!entry.isIntersecting);
          },
          {
            root: null, // viewport
            threshold: 1.0,
            rootMargin: '-1px 0px 0px 0px', 
          }
        );
    
        if (titleRef.current) {
          observer.observe(titleRef.current);
        }
    
        return () => {
          if (titleRef.current) {
            observer.unobserve(titleRef.current);
          }
        };
      }, []);
      
  return (
    <div className='flex flex-col  items-center mt-[4rem]'>
        <motion.div 
         ref={titleRef}

         initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        viewport={{
            margin: "0% 0% -90% 0%"
        }} 
        
        id="title"          
        className={`relative text-xs bg-black ${isSticky ? 'sticky -top-8 z-68' : '' }`}
>
            <p>OUR SKILLS COVER</p>
        </motion.div>

        <motion.div         ref={skillsRef}
 id="skills" className='flex z-60 flex-col justify-start align-top items-center mt-[7rem]'>
        {
                skills.map((s) => <Skill key ={s} title={s}/>)
            }
        </motion.div>
        

    </div>
  )
}

export default SkillSection


function Skill({title}: {title: string}){
    return <>
                <motion.p   
                     initial={{
                        opacity: 0.2
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{
                        margin: "0% 0% -55% 0%"
                    }}  
                    className={`text-white sm:-mt-4 md:-mt-8 lg:-mt-12 xl:-mt-16 font-caps xs:text-[8rem]
                       sm:text-[8rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem]`}
                    
                    >
                        
                        {title} 
                    
                </motion.p>

    </>
}
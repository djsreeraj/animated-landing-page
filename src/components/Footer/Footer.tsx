import React from 'react'
import { motion } from 'framer-motion';
import { IconChevronUp, IconShare } from '@tabler/icons-react';
import SlideText from '../UI/SlideText';

export const Footer = () => {
  return (
    <div className="min-h-[4rem] flex items-center justify-between mt-[12rem] bottom-0 left-0 right-0  w-full 
    box-border cursor-pointer  z-10 px-4">
        <div className="flex items-center text-[1rem] min-w-[10rem]">
            <div
            className="w-full h-full pointer-events-auto scale: hover:scale-130 transition-transform"
            onClick={() =>
                window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
                })
            }
            >
                <IconChevronUp />
            </div>

            <SlideText text="Back Top" styleClass={"footer"}/>

 
        </div>

        <div className="text-center text-[0.9rem]  mt-1 tracking-tighter ">
        {new Date().getFullYear()} &copy; &nbsp;
        <motion.span
            initial="initial"
            whileHover="hovered"
            variants={{
             initial: { textDecoration: "none" },
             hovered: { textDecoration: "underline" },
            }}
        >
            ClaPat
        </motion.span>
        . All rights reserved.
        </div>

        {/* <motion.div >ClatPat
      <motion.span
        className="w-full h-0.5 bg-white"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      >
      
      </motion.span>
    </motion.div> */}

        <motion.div
            initial="initial"
             whileHover="hovered"
             className="flex flex-col items-center text-sm"
        >
        <motion.div
            variants={{
            initial: { translateY: 0 },
            hovered: { translateX: 50, translateY: -30 },
            }}
            className="flex items-center justify-end"
        >
            <span className="mr-6 text-[1rem] mt-1 tracking-tight ">Follow Us</span>

            <motion.span   variants={{
                initial: { opacity: 1 },
                hovered: { opacity: 0 },
            }}>
                <IconShare />
            </motion.span>
        </motion.div>

        <motion.div
            variants={{
            initial: { opacity: 0, height: 0 },
            hovered: { opacity: 1, height: "auto", translateY: -20 },
            }}
            className="flex mt-2"
        >
            {["In", "Fb", "Be", "Tw", "Db"].map((e) => (
                <p key={e} className="mr-8 text-[0.9rem] mt-1 tracking-tight ">{e}</p>
            ))}
        </motion.div>
        </motion.div>
  </div>
  )
}

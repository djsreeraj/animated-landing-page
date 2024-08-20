import React from 'react'
import { SubTitle } from '../SubTitle'
import Title from '../Title'
import { motion } from 'framer-motion';

const FooterHero = () => {
  return (
    <motion.div

    initial={{
        opacity: 0.2
    }}
    whileInView={{
        opacity: 1
    }}
    viewport={{
        margin: "0% 0% -50% 0%"
    }} 
    
    className='mt-[12rem]'>
        
        <SubTitle text={`EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN.`} />

        <div>
            <Title text="OUR-STUDIO" scalePivot={"top center"} />
            </div>

    </motion.div>
  )
}

export default FooterHero
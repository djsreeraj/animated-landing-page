import React from 'react'
import { SubTitle } from '../SubTitle'
import Title from '../Title'
import { motion } from 'framer-motion';
import { useAppContext } from '@/contexts/AppContext';

const FooterHero = () => {
  const {  setCursorType } = useAppContext();

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

    onMouseEnter={() => setCursorType("aboutSection")}
		onMouseLeave={() => setCursorType("normal")}
    
    className='mt-[12rem]'>
        
        <SubTitle text={`EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN.`} />

        <div>
            <Title text="OUR-STUDIO" scalePivot={"top center"} />
            </div>

    </motion.div>
  )
}

export default FooterHero
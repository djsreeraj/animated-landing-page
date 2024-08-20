'use client'
import { motion, Variants } from 'framer-motion';

const Title = ({ text, scalePivot } : {text : string, scalePivot: string}) => {
    const textVariants : Variants = {
        initial: {
            scale: 1,
            fontSize: 'calc(1rem + 24vw)',
            lineHeight: 'calc(1rem + 22vw)',
            fontWeight: 500,
            textTransform: 'lowercase',
            opacity: 1,
            display: 'flex',
            justifyContent: 'center',
        },
        whileHover: {
            scaleY: 1.25,
        }
    };

  return (
    <motion.div className="flex items-center justify-center text-xl" >
      {text.split('').map((e : string, index: number) => (
        <motion.span
          className="cursor-pointer font-caps inline-block overflow-hidden"
          style={{ transformOrigin: scalePivot }}
          key={index}
          initial="initial"
          whileHover="whileHover"
          variants={textVariants}
          transition={{  stiffness: 300 }}
        >
          {e === '-' ? ' ' : e}
          
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Title;

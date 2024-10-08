'use client'
import React from 'react';
import { motion } from 'framer-motion';
import SlideText from './UI/SlideText';
import StickyCursor from './UI/StickyCursor';

interface MenuToggleProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isActive: boolean) => void;
  }

const MenuToggle = ({isMenuOpen, setIsMenuOpen} : MenuToggleProps) => {
  const topLineVariants = {
    closed: {
      rotate: 0,
      translateY: -5,
      height: "3px"
    },
    open: {
      rotate: 45,
      translateY: 1,
      height: "2px"
    }
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      translateY: 5
    },
    open: {
      rotate: -45,
      translateY: 2
    }
  };

  return (
    <div className='flex cursor-pointer gap-10 text-[0.9rem] ' 
    onClick={() => setIsMenuOpen(!isMenuOpen)}
>

       <SlideText text="Menu" />

      <StickyCursor>
        <motion.div
            id="menuHam"
            className='pointer-events-none'
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
                cursor: 'pointer',
                width: '1.2rem',
                height: '1 rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0'
            }}
            >
            <motion.span
                variants={topLineVariants}
                style={{
                originX: 0.5,
                originY: 0.5,
                height: '3px',
                width: '100%',
                backgroundColor: 'white',
                display: 'block',
                margin: '0px',
                padding: '0px',
                }}
            />
            <motion.span
                variants={bottomLineVariants}
                style={{
                originX: 0.5,
                originY: 0.5,
                height: '2px',
                width: '100%',
                backgroundColor: 'white',
                display: 'block',
                marginTop: '-3px',
                padding: '0px',
                }}
            />
            </motion.div>
      </StickyCursor>
    </div>
   
  );
};

export default MenuToggle;
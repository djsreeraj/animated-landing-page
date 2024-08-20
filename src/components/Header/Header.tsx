import { AnimatePresence, motion, Variants } from 'framer-motion'
import { Logo } from '../../../public/images/images'
import MenuToggle from '../Hamburger'
import { useEffect, useState } from 'react';
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuList = ['PORTFOLIO', 'ABOUT', 'STORIES', 'CONTACT', 'MORE']
    const [hoveredIndex, setHoveredIndex] = useState<null| number>(null);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
      }, [isMenuOpen]);

    const menuVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i : any) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
          }
        })
      }
      const textVariants : Variants = {
        initial: {
          y: 30, 
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 0.1
          }
        },
        hovered: {
          y: -30, 
          opacity: 0,
          transition: {
            duration: 0.2,
          }
        },
      };

      const textVariants2 : Variants = {
        initial: {
          y: 30, 
          opacity: 0
        },
        visible: {
          y: 30,
          opacity: 0,
          transition: {
            type: 'tween',
            duration: 0.1
          }
        },
        hovered: {
          y: 0, 
          opacity: 1,
          transition: {
            duration: 0.2,
          }
        },
      };


  return (
    <>
        <nav className="flex justify-between items-center fixed top-8 left-16 right-16 px-4 pt-2 z-50">
        <Logo />
        <MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </nav>
    
    <div className='relative mt-16'>
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="menu fixed bg-darkgray w-full h-full z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
         <motion.ul id="menu__main" className="menu with-js opacity sm-screen">
            {menuList.map((menu, index) => (
              <motion.li
                key={menu}
                className="justify-start relative"
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                whileHover="hovered"
                onHoverStart={() => setHoveredIndex(index)}
                 onHoverEnd={() => setHoveredIndex(null)}
              >
                <a href="#" className=" menu__title">
                  <motion.span 
                    className="font-caps block overflow-hidden"
                    variants={textVariants}
                    style={{ color: hoveredIndex === index ? 'inherit' :  hoveredIndex ? 'gray' : 'white' }}
                  >
                    {menu}
                  </motion.span>
                </a>

                <a href="#" className="menu__title absolute inset-0">
                  <motion.span 
                    className="font-caps block overflow-hidden"
                    variants={textVariants2}
                    style={{ color: hoveredIndex === index ? 'inherit' : hoveredIndex ? 'gray' : 'white' }}
                  >
                    {menu}
                  </motion.span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
</>
  )
}

export default Header
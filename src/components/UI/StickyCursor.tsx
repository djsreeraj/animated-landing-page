import { useAppContext } from '@/contexts/AppContext';
import { useMotionValue, useSpring, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Magnetic from './MagneticEffect';

interface StickyCursorProps {
  children: React.ReactNode;
}

const StickyCursor: React.FC<StickyCursorProps> = ({ children }) => {
    const stickyRef = useRef<any>(null);
    const [isHovered, setIsHovered] = useState(false)
    const {  setCursorType } = useAppContext();


    const cursorSize =  isHovered ? 50 :20;

    const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};


	const controls = { damping: 20, stiffness: 200, mass: 0.5 };
	const animatedMouse = {
		x: useSpring(mouse.x, controls),
		y: useSpring(mouse.y, controls),
	};

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        mouse.x.set(clientX - cursorSize/2 );
        mouse.y.set(clientY - cursorSize/2);

        const { left, top, width, height } =  stickyRef?.current?.getBoundingClientRect();

        const center = {x: left + width /2, y: top + height /2};
        const distance  = {x: clientX + center.x, y: clientY - center.y};

        if(isHovered){
            mouse.x.set((center.x - cursorSize /2) + distance.x * 0.1)
            mouse.y.set((center.y - cursorSize /2 ) + distance.y  * 0.1)

        }{
            mouse.x.set(clientX - cursorSize /2)
            mouse.y.set(clientY - cursorSize /2)
        }

    };

	useEffect(() => {
	
		window.addEventListener("mousemove", manageMouseMove);

		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
		};
	}, [mouse ]);

    useEffect(() => {
      if(isHovered){
        setCursorType("")
      }else{
        setCursorType("normal")
      }
    }, [isHovered])
    
    

    return <div className='relative'  onMouseLeave={() => setIsHovered(false)}   onMouseEnter={() => setCursorType("")}
    >

            <motion.div 
                className={`${isHovered ? 'rotate-0 rounded-full sticky__cursor -mt-[1.2rem] -ml-[0.4rem] ' : ''}`}
                style={{left: animatedMouse.x, top: animatedMouse.y}}
                animate={{width: cursorSize, height: cursorSize}}          
                
            ></motion.div>
<Magnetic>
           <div ref={stickyRef}  className={`sticky__cursor__bounds p-8 -mx-8 -mt-4  `}    onMouseEnter={() => setIsHovered(true)}> </div>
            <div   className={`${isHovered ? '-mt-[2.3rem] ml-4 ' : '-mt-2' }`}
            >
                    {children}
            </div>

            </Magnetic>

            
    </div>
                

        
        
};

export default StickyCursor;

import React, { useEffect } from 'react'
import './CursorMask'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useAppContext } from '@/contexts/AppContext';

const CursorMask = () => {

	const cursorPosition = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
    const { showCursor, cursorType } = useAppContext();

    const cursorRadius = cursorType !=='normal' ? 110 : 50;

	const controls = { damping: 20, stiffness: 200, mass: 0.5 };
	const animatedMouse = {
		x: useSpring(cursorPosition.x, controls),
		y: useSpring(cursorPosition.y, controls),
	};

	useEffect(() => {
		const onCursorChange = (e: MouseEvent) => {
			cursorPosition.x.set(e.clientX - ((cursorRadius / 2) - 16) );
			cursorPosition.y.set(e.clientY - ((cursorRadius / 2) - 16));
		};

		window.addEventListener("mousemove", onCursorChange);
		return () => {
			window.removeEventListener("mousemove", onCursorChange);
		};
	}, [cursorRadius, cursorPosition, cursorType ]);
    

  return (
    <div className="hidden md:block">
			{showCursor && (
				<motion.div
					style={{
						left: animatedMouse.x,
						top: animatedMouse.y,
						transition: "transform 0.3s ease",
					}}
					className={`fixed pointer-events-none rotate-0 rounded-full transition 
                        z-[600] ${cursorType !== '' ? ( cursorType!== 'normal' ? "cursor__large" : "cursor__normal") : ''	}`}
                        
                >

					{cursorType !== '' ? (cursorType !== 'normal' ? (cursorType !== "aboutSection" ? "[ OPEN ]": "[ About Us ]"): "") : ''}

				</motion.div>
			)}
		</div>
  )
}

export default CursorMask

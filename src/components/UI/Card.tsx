import React, {
	useRef,
} from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

type ICardProps = {
    title: string;
	imgUrl: string;
    video?: boolean;
};

export const Card = ({ title, imgUrl, video }: ICardProps) => {
		const ref = useRef<HTMLDivElement>(null);
		const { scrollYProgress } = useScroll({
			target: ref,
			offset: ["0.5 1", "1.33 1"],
		});

		return (
	<motion.div ref={ref}
		// style={{
		// 	scale: scrollYProgress,
		// 	opacity: scrollYProgress
		// }}
		className="relative h-[80vh] w-[90vw] overflow-hidden rounded-xl bg-inherit">
			{/* Card content */}
			<div className="relative h-full">
				{/* Image */}
					<Image
						src={imgUrl}
						alt={title}
						fill
						className="object-cover h-full w-full"
						sizes="90vw"
					/>
				
				{/* Footer */}
				<div className="absolute  -bottom-12 left-16 right-16  bg-opacity-75  px-8 flex justify-between items-center">
					<span id="badge" className="ml px-3 py-1 bg-neutral-500 rounded-2xl text-sm">2024</span>
					<h1 className={`${video ? "text-black" : "text-white"} font-caps text-[10rem] pb-16`}>{title} </h1>
					<span id="badge" className="px-3 py-1 bg-neutral-500 rounded-2xl text-sm">{video ? 'Video' : 'Photo' }</span>
				</div>
			</div>
	</motion.div>

		);
	}

export default Card;

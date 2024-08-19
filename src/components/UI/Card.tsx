import React, {
	useEffect,
	useRef,
	useState,
	forwardRef,
} from "react";
import { useInView, useScroll } from "framer-motion";
import Image from "next/image";

type ICardProps = {
    title: string;
	imgUrl: string;
    video?: boolean;
};

export const Card = forwardRef<HTMLDivElement, ICardProps>(
	({ title, imgUrl, video }, ref) => {
		const vertMargin = 10;
		const containerRef = useRef<HTMLDivElement | null>(null);
		const [maxScrollY, setMaxScrollY] = useState<number>(Infinity);
		const { scrollY } = useScroll({
			target: containerRef,
			offset: ["start end", "end start"],
		});
		const isInView = useInView(containerRef, {
			margin: `0px 0px -${100 - vertMargin}% 0px`,
			once: true,
		});
		const [dynamicStyles, setDynamicStyles] = useState({
			scale: 1,
			filter: 0,
		});

        useEffect(() => {
			if (isInView) {
				setMaxScrollY(scrollY.get());
			}
		}, [isInView, scrollY]);

		useEffect(() => {
			if (ref && containerRef.current) {
				if (typeof ref === "function") {
					ref(containerRef.current);
				} else {
					(
						ref as React.MutableRefObject<HTMLDivElement | null>
					).current = containerRef.current;
				}
			}
		}, [ref]);

		useEffect(() => {
			const handleScroll = () => {
				let animationValue = 1;
				if (scrollY.get() > maxScrollY) {
					animationValue = Math.max(
						0,
						1 - (scrollY.get() - maxScrollY) / 10000,
					);
				}

				setDynamicStyles({
					scale: animationValue,
					filter: (1 - animationValue) * 100,
				});
			};

			const unsubscribe = scrollY.on("change", handleScroll);
			return () => {
				unsubscribe();
			};
		}, [scrollY, maxScrollY]);

		return (
<div className="relative h-[80vh] w-[90vw] overflow-hidden rounded-xl bg-inherit">
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
</div>

		);
	},
);
Card.displayName = "BannerCard";
export default Card;

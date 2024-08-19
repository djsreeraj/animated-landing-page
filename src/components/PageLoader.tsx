'use client'
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

type PageLoaderProps = {
    loading: boolean;
    setLoading: (isActive: boolean) => void;
  };

const PageLoader = ({loading, setLoading } : PageLoaderProps) => {

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4500); 
        return () => clearTimeout(timer);
    }, [loading, setLoading ]);

    const rectangleVariants : Variants = {
        initial: {
            height: "10vh",
            width: "25vw",
            backgroundColor: "#fff",
            position: "absolute",
            top: "calc(50vh - 5vh)",
            left: "calc(50vw - 12.5vw)"
        },
        animate: {
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0,
            transition: { delay: 1, duration: 0.5, ease: "easeInOut" }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    return (
        <AnimatePresence>
            {loading && (
                <>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={rectangleVariants}
                        className="overflow-hidden relative z-50"
                        onAnimationComplete={definition => {
                            if (definition === 'animate') {
                                setLoading(false);  
                            }
                        }}
                    />
                    <motion.div
                        initial={{
                           opacity: 10,
                        }}
                        animate={{
                           opacity: 0,
                        }}
                        transition={{
                          duration: 2.2,
                          ease: 'backInOut'
                        }}
                       
                        className="fixed bottom-10 w-full text-center text-neutral-500 text-md font-medium z-50"
                    >
                        Please wait, content is loading
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;

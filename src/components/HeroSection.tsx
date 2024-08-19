import React from 'react'
import Title from './Title'
import { IconChevronDown } from '@tabler/icons-react'
import { animate } from 'framer-motion';

const HeroSection = () => {

    const scrollToElement = () => {
        const element = document.getElementById('bannercards');
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
  return (

    <div id="top" className="flex flex-col justify-evenly h-screen ">

        <div>
            <div>
            <Title text="MONTOYA" scalePivot={"bottom center"} />
            </div>

            <div className="flex flex-col items-center justify-center mt-8 ">
                <p className="mt-4 text-neutral-500 font-medium tracking-tight text-lg leading-6 text-center ">
                    WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING <br/>
                    DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION <br/>
                    OF DESIGN AND TECHNOLOGY. 
                </p>
            </div>

        </div>
        

        <div className='flex justify-between pb-12'>
            <div className='flex gap-7'>
                <p className='text-sm font-medium'>Scroll to Explore</p>

                <IconChevronDown style={{cursor: 'pointer'}} onClick={scrollToElement} color="white" size={24}  className='-mt-1'/>
                    
            </div>
            <div>
                <p className='text-sm font-medium'>Featured Projects</p>
            </div>
        </div>


    </div>

  )
}

export default HeroSection
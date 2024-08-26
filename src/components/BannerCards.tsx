import React from 'react'
import Card from './UI/Card';
import { bannerCards } from '../../public/images/banners/banner';
import { useAppContext } from '@/contexts/AppContext';

export const BannerCards = () => {
    const {  setCursorType } = useAppContext();
return (
    <section id="bannercards" className="flex flex-col gap-[10vh] relative py-[5vh]"    
     onMouseEnter={() => setCursorType("bannerSection")}
     onMouseLeave={() => setCursorType("normal")}>
        {bannerCards?.map((item,i) => (
            <Card
                key={item.title}
                imgUrl={`/images/banners/${item.image}`}
                title={item.title}
                video={i===3 ? true : false}
            />
        ))}
    </section>
);
}

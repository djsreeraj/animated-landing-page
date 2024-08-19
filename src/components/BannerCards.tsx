import React from 'react'
import Card from './UI/Card';
import { bannerCards } from '../../public/images/banners/banner';

export const BannerCards = () => {

return (
    <section id="bannercards" className="flex flex-col gap-[10vh] relative py-[10vh]">
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

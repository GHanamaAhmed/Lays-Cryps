import React, { useState,useEffect } from 'react'
import Card from './card'
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Pagination, Scrollbar, Navigation } from "swiper"
import 'swiper/css';
import 'swiper/css/pagination';

export default function Popular() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth((prev) => window.innerWidth)
        })

    });
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            let span = "<span class='" + className + " h-1 w-10 bg-black'></span>";
            return span
        },
    };
    return (
        <div className='w-full'>
            <div className='grid grid-cols-2 justify-items-center mt-10'>
                <p className='col-span-2 text-2xl font font-semibold font-serif md:col-span-3'>Our Popular Crisps</p>
                <Swiper className='col-span-2 px-5 w-full'
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={windowWidth <= 767 ? 1 : 2}
                    pagination={pagination}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide className='flex justify-center'>
                        <Card label={"LAY’S® Wavy Ondulees Salt & Vinegar"} union={"./icons/Intersect-0.png"} background={"bg-green-50"} lays={"./icons/Images33.png"} />
                    </SwiperSlide>
                    <SwiperSlide className='justify-center'>
                        <Card label={"LAY’S® Beers and Cigar"} union={"./icons/Intersect-2.png"} background={"bg-red-50"} lays={"./icons/image32.png"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

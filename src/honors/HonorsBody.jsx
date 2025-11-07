import React from 'react'
import './honorsBody.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { imageSlides } from '../data/Data';


const HonorsBody = () => {
  return (
    <>
        
        <div className="absolute inset-0 bg-[url('./assets/bookshelf.jpg')] bg-no-repeat bg-cover">
            

            <div className="honorsBg flex justify-center items-center mt-[10rem] inset-0 bg-black/60 rounded-md 
                overflow-y-scroll
                sm:overflow-y-hidden
                h-[24.5rem]
                sm:h-[38rem] 
                w-[25rem] 
                sm:w-[46rem] 
                mx-auto"
            >
            <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}

            pagination={{
                el: '.swiper-pagination', 
                clickable: true,
            }}
            navigations
            breakpoints={{
                390: {slidesPerView: 1},
                412: {slidesPerView: 1},
                712: {slidesPerView: 1},
                768: {slidesPerView: 1},
                844: {slidesPerView: 1},
                915: {slidesPerView: 1},
                1024: {slidesPerView: 1},
                1440: {slidesPerView: 1},
                1500: {slidesPerView: 1},
            }}
             keyboard={{
                enabled: true
            }}
            mousewheel={{
                thresholdDelta: 70
            }}
            
            modules={[Pagination, Navigation]}
            className="honorsSwiper"
            >
                {imageSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                    <h2 className="imgTitle text-white text-2xl text-center font-semibold items-center mb-2 label">
                        {slide.title}
                    </h2>
                    <img
                        src={slide.url}
                        alt={slide.alt || slide.title}
                        className="z-50 mx-auto w-[23rem] sm:w-[28rem] md:w-[35rem] lg:w-[40rem] xl:w-[45rem] rounded shadow-md"
                    />
                    </SwiperSlide>
                ))}
            </Swiper>
            

            </div>
        </div>
    </>
  )
}

export default HonorsBody
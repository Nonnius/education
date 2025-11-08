import React from 'react'
import './honorsBody.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { imageSlides } from '../data/Data';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import bookshelf from '../assets/bookshelf.jpg';




const HonorsBody = () => {
  return (
    <>
        <div className="min-h-screen relative">
            <div 
            className="eduBg fixed inset-0 w-full h-full bg-no-repeat bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${bookshelf})`}}
            >
                <div className="absolute inset-0 bg-black/40"/>
            </div>
            <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
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
                navigation={true}
                breakpoints={{
                    320: {slidesPerView: 1},
                    768: {slidesPerView: 1},
                    1024: {slidesPerView: 1}
                }}
                keyboard={{
                    enabled: true
                }}
                mousewheel={{
                    thresholdDelta: 70
                }}
            
                modules={[Pagination, Navigation]}
                className="honorsSwiper w-full max-w-7xl mx-auto"
                >
                    {imageSlides.map((slide, index)=>(
                        <SwiperSlide key={index} className='p-4 sm:p-6 lg:p-8'>
                            <h2 className="imgTitle text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-4 sm:mb-6 tracking-wide">
                                {slide.title}
                            </h2>
                            <img
                                src={slide.url}
                                alt={slide.alt || slide.title}
                                className="eduImg z-50 mx-auto w-[45rem] max-w-full rounded-lg shadow-xl"
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
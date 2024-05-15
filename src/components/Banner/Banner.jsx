import { Typewriter } from "react-simple-typewriter";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { SwiperSlide } from "swiper/react";
import { Scrollbar } from 'swiper/modules';
import { Swiper as SwiperComponent } from 'swiper/react';
import banner1 from '../../../public/images/banner1.jpg';
import banner2 from '../../../public/images/banner2.jpg';
import banner3 from '../../../public/images/banner3.jpg';
import banner4 from '../../../public/images/banner4.jpg';

const Banner = () => {
    return (
        <div className="relative flex flex-col lg:flex-row gap-12 items-center justify-center mx-auto lg:pb-12 md:py-6 px-16 bg-green-100 rounded-lg lg:pt-8 pt-8">
            <img className='absolute' src={``} alt="" />
            <div className='flex flex-col items-start  flex-wrap'>
                <p className='text-[#1284bd] font-semibold text-xl pb-[10px] lg:pb-[20px]'>Masterpiece</p>
                <h1 className='font-bold text-left text-[35px] lg:text-[60px] pb-[10px] lg:pb-[15px] text-black animate__bounceIn white-space-wrap' >Discover Your Next <span style={{ color: 'black', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Masterpiece', 'Work of Art', 'Splendor', 'Marvel']}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={2000}
                    />
                </span></h1>

                <p className='font-normal text-base text-left text-[#808080] white-space-wrap'>Discover your dream home in our exclusive collection of luxurious residences. Our contemporary properties offer spacious layouts, elegant designs, and modern amenities, creating a tranquil and stylish living experience. Explore our diverse selection of homes and find the perfect blend of comfort and sophistication today.</p>
            </div>
            <div>
                <SwiperComponent
                    className='h-[300px] w-[400px] md:h-[350px] md:w-[630px] lg:h-[550px] lg:w-[800px] mySwiper rounded-2xl'
                    navigation={true}
                    loop={true}
                    modules={[Scrollbar]}
                    style={{
                        '--swiper-navigation-color': 'navy',
                        '--swiper-pagination-color': 'navy',
                        'font-weight': 'bold'
                    }}>
                    <SwiperSlide>
                        <div className='slide'>
                            <img className='' src={banner1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide'>
                            <img className='' src={banner2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide'>
                            <img className='' src={banner3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide'>
                            <img className='' src={banner4} alt="" />
                        </div>
                    </SwiperSlide>
                </SwiperComponent>
            </div>
        </div>
    );
};

export default Banner;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner1 from '../../../public/images/banner1.jpg';
import banner2 from '../../../public/images/banner2.jpg';
import banner3 from '../../../public/images/banner3.jpg';
import banner4 from '../../../public/images/banner4.jpg';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="bg-blue-100">
            <div className="relative flex flex-col lg:flex-row gap-12 items-center justify-center mx-auto lg:pb-12 md:py-6 px-16 bg-green-100 rounded-lg lg:pt-8 pt-8">
                <div className='flex flex-col items-start  flex-wrap'>
                    <p className='text-[#34cfbf] font-semibold text-xl pb-[10px] lg:pb-[20px]'>Rooted Revelations</p>
                    <h1 className='font-bold text-left text-[35px] lg:text-[60px] pb-[10px] lg:pb-[15px] text-black animate__bounceIn white-space-wrap' >Blossoming Botanica: Unveiling Nature&#39;s Grace <span style={{ color: 'black', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Beauty', 'Grace', 'Splendor', 'Elegance']}
                            loop={100}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={70}
                            delaySpeed={2000}
                        />
                    </span></h1>

                    <p className='font-normal text-base text-left text-[#808080] white-space-wrap'>Welcome to our green haven! Dive into a world where every leaf tells a story. Discover expert tips, care advice, and inspiring tales to nurture your passion for plants. Join our community of enthusiasts, explore new species, and let nature&#39;s beauty inspire you to create your own botanical paradise.</p>
                </div>
                <div>
                    <Swiper
                        className='h-[300px] w-[400px] md:h-[350px] md:w-[630px] lg:h-[550px] lg:w-[800px] mySwiper'
                        navigation={true}
                        loop={true}
                        modules={[Navigation]}
                        style={{
                            '--swiper-navigation-color': '#34cfbf',
                            '--swiper-pagination-color': '#34cfbf',
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
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;
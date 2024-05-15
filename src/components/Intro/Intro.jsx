import React from 'react';

const Intro = () => {
    return (
        <div className="flex flex-col lg:flex-row pt-4 lg:pt-20 pb-4 lg:pb-12">
            <div className="flex flex-col px-6 lg:px-12 lg:mx-8 lg:w-1/2">
                <div className="flex flex-col text-left pb-6 lg:pb-12 lg:pt-4">
                    <p className="text-[#34cfbf] font-semibold text-xl pb-[20px]">WHO ARE WE</p>
                    <h1 className="font-bold text-[30px] lg:text-[45px] pb-4">Assisting individuals in locating the appropriate painting.</h1>
                    <p className="font-normal text-base text-[#808080]">We seamlessly blend modern sophistication with comfort, crafting pieces that not only adorn your walls but elevate your living environment. Each painting in our collection is meticulously curated to inspire and evoke emotion, ensuring your space reflects your unique style and personality.</p>
                </div>
                {/* intro card */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-row items-center rounded-xl shadow-md border p-4 lg:p-6 w-[350px] lg:w-[450px]" data-aos="zoom-in-right">
                        <div>
                            <img src="./images/introic1.png" alt="" />
                        </div>
                        <div className="flex flex-col items-start pl-4">
                            <h1 className="text-[#34cfbf] font-medium text-lg lg:text-xl">Marvelous Art</h1>
                            <h1 className="text-base font-normal text-left">Find Desired art with Our Canvas Creation website</h1>
                        </div>
                    </div>
                    <div className="flex flex-row items-center rounded-xl shadow-md border p-4 lg:p-6 w-[350px] lg:w-[450px]" data-aos="zoom-in-right">
                        <div>
                            <img src="./images/introic2.png" alt="" />
                        </div>
                        <div className="flex flex-col items-start pl-4">
                            <h1 className="text-[#34cfbf] font-medium text-lg lg:text-xl">Listing Luminary</h1>
                            <h1 className="text-base font-normal text-left">Discover experts on Our Painting Platform</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center items-center md:pt-8 lg:flex-row gap-8">
                <div className="pt-4 flex flex-col">
                    <img src="./images/intro1.jpg" className="h-[450px] w-[300px] md:h-[550px] md:w-[320px] lg:h-[550px] lg:w-[340px] rounded-2xl" alt="" />
                </div>
                <div className="flex flex-col gap-8">
                    <div className='flex flex-col'><img src="./images/intro2.jpg" className="h-[200px] w-[300px] md:h-[250px] md:w-[280px] lg:h-[340px] lg:w-[337px] rounded-2xl" alt="" /></div>
                    <div className='flex flex-col '><img src="./images/intro3.jpg" className="h-[200px] w-[300px] md:h-[250px] md:w-[280px] lg:h-[240px] lg:w-[337px] rounded-2xl" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
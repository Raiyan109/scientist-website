import React from 'react';
import cardImg1 from '../assets/sammy-scientist-with-glasses-is-working-on-a-vaccine.png'
import cardImg2 from '../assets/looney-brain-with-idea-bulb-and-flying-screens.png'
import cardImg3 from '../assets/folks-business-coach-explains-the-material-to-the-woman-1.png'
import Typewriter from 'typewriter-effect';

const BuildingTheScientist = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl lg:text-6xl font-medium title-font mb-4 text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-900">Experience You Can Trust</h1>
                        {/* <Typewriter
                            className="sm:text-3xl lg:text-6xl font-medium title-font mb-4 text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-900"
                            onInit={(typewriter) => {
                                typewriter.typeString('<span >Hello World!</span>')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                            }}
                        /> */}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className='text-white max-w-lg max-h-66 my-auto mx-auto  p-4 py-5 px-5 rounded-tl-[24px] rounded-br-[24px] bg-gradient-to-r from-blue-800 to-fuchsia-900 border-4 border-none '>
                                {/*  */}
                                <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                                    <div class="w-full h-30 md:w-2/5 flex flex-col items-center justify-center">
                                        <img src={cardImg1} alt='card' />
                                    </div>
                                    <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                                        <div class="flex flex-col justify-center">
                                            <h1 class="text-center md:text-left text-2xl font-bold text-white">Learn from future scientists</h1>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className='text-white max-w-lg max-h-66 my-auto mx-auto  p-4 py-5 px-5 rounded-tl-[24px] rounded-br-[24px] bg-gradient-to-r from-blue-800 to-fuchsia-900 border-4 border-none '>
                                {/*  */}
                                <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                                    <div class="w-full h-30 md:w-2/5 flex flex-col items-center justify-center">
                                        <img src={cardImg2} alt='card' />
                                    </div>
                                    <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                                        <div class="flex flex-col justify-center">
                                            <h1 class="text-center md:text-left text-2xl font-bold text-white">Think Like a Scientist</h1>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className='text-white max-w-lg max-h-66 my-auto mx-auto  p-4 py-5 px-5 rounded-tl-[24px] rounded-br-[24px] bg-gradient-to-r from-blue-800 to-fuchsia-900 border-4 border-none '>
                                {/*  */}
                                <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                                    <div class="w-full h-30 md:w-2/5 flex flex-col items-center justify-center">
                                        <img src={cardImg3} alt='card' />
                                    </div>
                                    <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                                        <div class="flex flex-col justify-center">
                                            <h1 class="text-center md:text-left text-2xl font-bold text-white">Personal Mentorship</h1>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BuildingTheScientist;
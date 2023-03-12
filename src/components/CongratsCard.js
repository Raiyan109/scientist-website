import React from 'react';
import congratsImg1 from '../assets/player-4.png'
import congratsImg2 from '../assets/player-5.png'

const CongratsCard = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
            <div className="flex justify-center items-center lg:p-20 ">
                <div
                    className="flex justify-center items-center rounded-lg bg-white shadow-lg  md:flex-row">
                    <div className='flex flex-col justify-center items-center lg:w-72 '>
                        <img
                            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-8"
                            src={congratsImg1}
                            alt="" />
                        <h1 className='mb-5'>Faraz Ahmad</h1>
                    </div>
                    <div className="flex flex-col justify-start p-6">
                        <h5
                            className="mb-2 text-3xl font-medium text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-900 font-DancingScript">
                            Congratulations!
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Rank-1 (Dhaka Board)
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-20">
                <div
                    className="flex justify-center items-center rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <div className='flex flex-col justify-center items-center w-72'>
                        <img
                            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-8"
                            src={congratsImg2}
                            alt="" />
                        <h1 className='mb-5'>Farabi Ahmad</h1>
                    </div>
                    <div className="flex flex-col justify-start p-6">
                        <h5
                            className="mb-2 text-3xl font-medium text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-900 font-DancingScript">
                            Congratulations!
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Rank-1 (Bogra Board)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CongratsCard;
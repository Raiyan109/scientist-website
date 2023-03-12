import React from 'react';

const Statistic = () => {
    return (
        <div className='text-white p-4 py-5 px-5  bg-gradient-to-r from-blue-800 to-fuchsia-900'>
            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl">2.7K</h2>
                            <p className="leading-relaxed">Community</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl">1.8K</h2>
                            <p className="leading-relaxed">Subscribes</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl">350 +</h2>
                            <p className="leading-relaxed">Mock Tests</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl">427 +</h2>
                            <p className="leading-relaxed">Live Classes</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Statistic;
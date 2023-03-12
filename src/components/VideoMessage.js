import React from 'react';

const VideoMessage = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <iframe width="410" height="413" src="https://www.youtube.com/embed/oKkzVII_wHQ" title="The Computer Scientist Taking on Big Tech: Privacy, Lies and AI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-900">Dan Yohav's Message
                        </h1>
                        <p className="mb-8 leading-relaxed">A good teacher is like a candle, it consumes itself to light the way for others.</p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoMessage;
import React from 'react';

const Home = () => {
    return (
        <div>
            <header>
                <nav
                    className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
                    data-te-navbar-ref>
                    <div className="flex w-full flex-wrap items-center justify-between px-6">
                        <div className="flex items-center">
                            <button
                                className="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                                type="button"
                                data-te-collapse-init
                                data-te-target="#navbarSupportedContentX"
                                aria-controls="navbarSupportedContentX"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="[&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div
                            className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                            id="navbarSupportedContentX"
                            data-te-collapse-item>
                            <ul
                                className="mr-auto flex flex-col lg:flex-row"
                                data-te-navbar-nav-ref>
                                <li data-te-nav-item-ref>
                                    <a
                                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                        href="#!"
                                        data-te-nav-link-ref
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >Home</a
                                    >
                                </li>
                                <li data-te-nav-item-ref>
                                    <a
                                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                        href="#!"
                                        data-te-nav-link-ref
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >Features</a
                                    >
                                </li>
                                <li data-te-nav-item-ref>
                                    <a
                                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                        href="#!"
                                        data-te-nav-link-ref
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >Pricing</a
                                    >
                                </li>
                                <li data-te-nav-item-ref>
                                    <a
                                        className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                                        href="#!"
                                        data-te-nav-link-ref
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >About</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    style={{
                        backgroundPosition: '50%',
                        backgroundImage: `url('https://tecdn.b-cdn.net/img/new/slides/146.webp')`,
                        height: '350px'
                    }}>
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <div class="text-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="mx-auto mb-4 w-32 rounded-lg"
                                        alt="Avatar" />

                                </div>
                                <h1 className="mb-6 text-5xl font-bold">Raiyan Kabir</h1>
                                <h3 className="mb-8 text-3xl font-bold">Genetic Scientist</h3>
                                <button
                                    type="button"
                                    className="inline-block rounded border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;
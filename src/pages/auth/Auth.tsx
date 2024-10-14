import { Outlet } from "react-router-dom"

const Auth = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full overflow-auto">
            <div className="bg-white h-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20">
                <div className="flex items-center gap-2">
                    <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_35_1245)">
                            <path d="M18 36V25.8337C18 18.7463 23.8208 13 31 13V23.1663C31 30.2537 25.1792 36 18 36Z" fill="#FF8600" />
                            <path d="M15 29V14.2899C15 6.39776 8.28432 0 0 0V14.7131C0 22.6052 6.71568 29 15 29Z" fill="#FFB800" />
                            <path d="M27.9075 7.42358C28.5548 4.73908 26.9001 2.0515 24.2117 1.42071C21.5232 0.789919 18.8192 2.45478 18.1719 5.13928C17.5247 7.82378 19.1794 10.5114 21.8678 11.1422C24.5562 11.7729 27.2603 10.1081 27.9075 7.42358Z" fill="#3B3B45" />
                        </g>
                        <defs>
                            <clipPath id="clip0_35_1245">
                                <rect width="31" height="36" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h5 className="text-[#3B3B45] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Buddy</h5>
                </div>

                <div className="flex flex-col gap-3 sm:gap-5 md:gap-7 lg:gap-9 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
                    <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#FF8600" />
                            <path d="M7.3335 12L10.6668 15.3334L17.3335 8.66669" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-[#5B6871] flex-1 text-sm md:text-base lg:text-lg">Track real-time overview of company’s financial performance.</p>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#FF8600" />
                            <path d="M7.3335 12L10.6668 15.3334L17.3335 8.66669" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-[#5B6871] flex-1 text-sm md:text-base lg:text-lg">Track created projects budget against actual revenue and expenses.</p>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#FF8600" />
                            <path d="M7.3335 12L10.6668 15.3334L17.3335 8.66669" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-[#5B6871] flex-1 text-sm md:text-base lg:text-lg">Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.</p>
                    </div>
                </div>

                <p className="text-[#84919A] text-[0.6rem] md:text-xs lg:text-sm mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24">&copy; {new Date().getFullYear()} Revvex. All rights reserved</p>
            </div>
            <div className="h-full md:overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default Auth
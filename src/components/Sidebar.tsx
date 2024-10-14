import { NavLink } from "react-router-dom"

type Properties = {
    className?: string,
    navItems: Array<{
        id: number,
        imgSrc: string,
        navText: string,
        navUrl: string,
    }>,
    active?: boolean,
    setPageTitle: any
}

const Sidebar = ({ className, navItems, active, setPageTitle }: Properties) => {
    return (
        <div className={'bg-white h-full py-4 sm:py-5 md:py-6 2xl:py-7 hidden lg:block ' + className}>
            {/* <img src={Logo} alt="logo" /> */}
            <div className="flex items-center gap-2 justify-center px-2 md:px-4 2xl:px-6">
                <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_52)">
                        <path d="M18 36V25.8337C18 18.7463 23.8208 13 31 13V23.1663C31 30.2537 25.1792 36 18 36Z" fill="#FF8600" />
                        <path d="M15 29V14.2899C15 6.39776 8.28432 0 0 0V14.7131C0 22.6052 6.71568 29 15 29Z" fill="#FFB800" />
                        <path d="M27.9075 7.42358C28.5548 4.73908 26.9001 2.0515 24.2117 1.42071C21.5232 0.789919 18.8192 2.45478 18.1719 5.13928C17.5247 7.82378 19.1794 10.5114 21.8678 11.1422C24.5562 11.7729 27.2603 10.1081 27.9075 7.42358Z" fill="#3B3B45" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_52">
                            <rect width="31" height="36" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <h5 className="text-[#3B3B45] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Buddy</h5>
            </div>

            <ul className="flex flex-col mt-6 md:mt-8 2xl:mt-10">
                {navItems.map((navItem) => (
                    <NavLink
                        to={navItem.navUrl}
                        onClick={() => setPageTitle(navItem.navText)}
                        key={navItem.id}
                        className={({ isActive, isPending }) => `md:py-2.5 2xl:py-3.5 flex items-center gap-2 cursor-pointer text-xs md:text-sm text-[#818187] hover:text-[#FF8600] ${isActive ? "!text-[#FF8600]" : ""} ${isPending ? "" : ""}`}
                    >
                        <span>
                            <img src={navItem.imgSrc} alt={navItem.navText} />
                        </span>
                        <span>{navItem.navText}</span>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
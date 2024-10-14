import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import Avartar2 from "../assets/images/avartar2.svg";
import { Button } from "./ui/button";

type Properties = {
  className?: string;
  navItems: Array<{
    id: number;
    icon: ({ color }: { color?: string }) => JSX.Element;
    navText: string;
    navUrl: string;
  }>;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
  setSidebarStatus: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarStatus: boolean;
};

export const Sidebar = ({
  className,
  navItems,
  setPageTitle,
  setSidebarStatus,
  sidebarStatus,
}: Properties) => {
  return (
    <>
      {/* Large screen */}
      <div
        className={
          "bg-white h-full flex-col justify-between gap-4 py-4 sm:py-5 md:py-6 2xl:py-7 hidden lg:flex " +
          className
        }
      >
        <SidebarContents navItems={navItems} setPageTitle={setPageTitle} />
        <SidebarFooter />
      </div>

      {/* Small screen */}
      <div
        className={`bg-white flex flex-col justify-between gap-4 py-4 sm:py-5 md:py-6 2xl:py-7 transition-all absolute top-0 left-0 bottom-0 z-50 lg:hidden shadow-lg h-screen overflow-auto ${className} ${
          sidebarStatus ? "ml-0" : "-ml-72"
        }`}
      >
        <div>
          <div className="flex justify-end mr-3 mb-5">
            <svg
              className="w-5 h-5 text-gray-800 cursor-pointer"
              onClick={() => setSidebarStatus(false)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </div>

          <SidebarContents navItems={navItems} setPageTitle={setPageTitle} />
        </div>

        <SidebarFooter />
      </div>
    </>
  );
};

const SidebarContents = ({
  navItems,
  setPageTitle,
}: {
  navItems: Array<{
    id: number;
    icon: ({ color }: { color?: string }) => JSX.Element;
    navText: string;
    navUrl: string;
  }>;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const IsMatch = (navUrl: string) => useMatch(navUrl);

  return (
    <>
      <div>
        <div className="flex items-center gap-2 justify-center px-2 md:px-4 2xl:px-6">
          <svg
            width="31"
            height="36"
            viewBox="0 0 31 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_52)">
              <path
                d="M18 36V25.8337C18 18.7463 23.8208 13 31 13V23.1663C31 30.2537 25.1792 36 18 36Z"
                fill="#FF8600"
              />
              <path
                d="M15 29V14.2899C15 6.39776 8.28432 0 0 0V14.7131C0 22.6052 6.71568 29 15 29Z"
                fill="#FFB800"
              />
              <path
                d="M27.9075 7.42358C28.5548 4.73908 26.9001 2.0515 24.2117 1.42071C21.5232 0.789919 18.8192 2.45478 18.1719 5.13928C17.5247 7.82378 19.1794 10.5114 21.8678 11.1422C24.5562 11.7729 27.2603 10.1081 27.9075 7.42358Z"
                fill="#3B3B45"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_52">
                <rect width="31" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h5 className="text-[#3B3B45] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
            Buddy
          </h5>
        </div>

        <ul className="flex flex-col mt-6 md:mt-8 2xl:mt-10">
          {navItems.map((navItem) => (
            <NavLink
              to={navItem.navUrl}
              onClick={() => setPageTitle(navItem.navText)}
              key={navItem.id}
              className={({ isActive, isPending }) =>
                `flex group relative ${
                  IsMatch(navItem.navUrl) &&
                  "before:absolute before:w-1 before:h-[50%] before:my-auto before:rounded-r before:bg-[#FF8600] "
                }items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 cursor-pointer text-xs md:text-sm text-[#818187] hover:text-[#FF8600] ${
                  isActive ? "!text-[#FF8600]" : ""
                } ${isPending ? "" : ""}`
              }
            >
              <div
                className={`p-2 mx-5 my-1 md:p-3 lg:p-4 flex items-center text-left justify-center rounded-2xl ${
                  IsMatch(navItem.navUrl) && "shadow-md"
                } gap-2 w-full`}
              >
                <span>
                  <navItem.icon
                    color={IsMatch(navItem.navUrl) ? "#FF8600" : "#818187"}
                  />
                </span>
                <span>{navItem.navText}</span>
              </div>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

const SidebarFooter = () => (
  <div className="mx-3 mt-12 sm:mx-4 md:mx-5 lg:mx-6 bg-white shadow-lg p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl lg:rounded-2xl">
    <img src={Avartar2} className="mx-auto -mt-10" alt="" />
    <div className="text-center mt-1.5">
      <h5 className="text-[#3B3B45] font-medium text-sm md:text-base lg:text-lg">
        Theresa milly
      </h5>
      <p className="text-[#818187] text-[0.5rem] md:text-[0.6rem] lg:text-xs">
        Influencer
      </p>
    </div>

    <div className="mt-2 lg:mt-3">
      <Button
        type="button"
        className="w-full bg-[#FF860029] hover:bg-[#FF860029] shadow-none text-[#FF8600]"
      >
        <div className="flex items-center gap-1.5">
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 7.5C0.5 7.69891 0.579018 7.88968 0.71967 8.03033C0.860322 8.17098 1.05109 8.25 1.25 8.25H6.9425L5.2175 9.9675C5.1472 10.0372 5.09141 10.1202 5.05333 10.2116C5.01525 10.303 4.99565 10.401 4.99565 10.5C4.99565 10.599 5.01525 10.697 5.05333 10.7884C5.09141 10.8798 5.1472 10.9628 5.2175 11.0325C5.28722 11.1028 5.37017 11.1586 5.46157 11.1967C5.55296 11.2347 5.65099 11.2543 5.75 11.2543C5.84901 11.2543 5.94704 11.2347 6.03843 11.1967C6.12983 11.1586 6.21278 11.1028 6.2825 11.0325L9.2825 8.0325C9.35078 7.96117 9.4043 7.87706 9.44 7.785C9.51501 7.6024 9.51501 7.3976 9.44 7.215C9.4043 7.12294 9.35078 7.03883 9.2825 6.9675L6.2825 3.9675C6.21257 3.89757 6.12955 3.8421 6.03819 3.80426C5.94682 3.76641 5.84889 3.74693 5.75 3.74693C5.65111 3.74693 5.55318 3.76641 5.46181 3.80426C5.37045 3.8421 5.28743 3.89757 5.2175 3.9675C5.14757 4.03743 5.0921 4.12045 5.05426 4.21181C5.01641 4.30318 4.99693 4.40111 4.99693 4.5C4.99693 4.59889 5.01641 4.69682 5.05426 4.78819C5.0921 4.87955 5.14757 4.96257 5.2175 5.0325L6.9425 6.75H1.25C1.05109 6.75 0.860322 6.82902 0.71967 6.96967C0.579018 7.11032 0.5 7.30109 0.5 7.5ZM10.25 0H2.75C2.15326 0 1.58097 0.237053 1.15901 0.65901C0.737053 1.08097 0.5 1.65326 0.5 2.25V4.5C0.5 4.69891 0.579018 4.88968 0.71967 5.03033C0.860322 5.17098 1.05109 5.25 1.25 5.25C1.44891 5.25 1.63968 5.17098 1.78033 5.03033C1.92098 4.88968 2 4.69891 2 4.5V2.25C2 2.05109 2.07902 1.86032 2.21967 1.71967C2.36032 1.57902 2.55109 1.5 2.75 1.5H10.25C10.4489 1.5 10.6397 1.57902 10.7803 1.71967C10.921 1.86032 11 2.05109 11 2.25V12.75C11 12.9489 10.921 13.1397 10.7803 13.2803C10.6397 13.421 10.4489 13.5 10.25 13.5H2.75C2.55109 13.5 2.36032 13.421 2.21967 13.2803C2.07902 13.1397 2 12.9489 2 12.75V10.5C2 10.3011 1.92098 10.1103 1.78033 9.96967C1.63968 9.82902 1.44891 9.75 1.25 9.75C1.05109 9.75 0.860322 9.82902 0.71967 9.96967C0.579018 10.1103 0.5 10.3011 0.5 10.5V12.75C0.5 13.3467 0.737053 13.919 1.15901 14.341C1.58097 14.7629 2.15326 15 2.75 15H10.25C10.8467 15 11.419 14.7629 11.841 14.341C12.2629 13.919 12.5 13.3467 12.5 12.75V2.25C12.5 1.65326 12.2629 1.08097 11.841 0.65901C11.419 0.237053 10.8467 0 10.25 0Z"
              fill="#FF8600"
            />
          </svg>

          <span>Logout</span>
        </div>
      </Button>
    </div>
  </div>
);

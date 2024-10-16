import React from "react";
import SearchIcon from "../assets/icons/searchIcon.svg";

import { Input } from "./ui/input";

const Header = ({
  pageTitle,
  setSidebarStatus,
}: {
  pageTitle: string;
  setSidebarStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center justify-between gap-2 py-2 md:py-4 lg:py-6 sticky top-0 bg-[#F8FAFC] z-40">
      <div className="flex items-center gap-2 mb-2">
        <svg
          className="w-5 h-5 text-gray-800 cursor-pointer lg:hidden"
          onClick={() => setSidebarStatus(true)}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
        </svg>

        <h3 className="font-bold text-[#373B47] text-base sm:text-lg md:text-xl lg:text-2xl">
          {pageTitle}
        </h3>
      </div>

      <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
        <div className="hidden sm:block sm:w-72 md:w-80 lg:w-96">
          <Input
            className="w-full bg-white border-none rounded-lg md:rounded-xl lg:rounded-2xl"
            type="search"
            icon={SearchIcon}
            placeholder="Search"
          />
        </div>

        <svg
          className="cursor-pointer h-10 lg:h-12 w-10 lg:w-12"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="white" />
          <path
            d="M31 23H25V17H23V23H17V25H23V31H25V25H31V23Z"
            fill="#000F29"
          />
        </svg>

        <svg
          className="cursor-pointer h-10 lg:h-12 w-10 lg:w-12"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="white" />
          <path
            d="M30 25.18V22C29.9986 20.5831 29.4958 19.2125 28.5806 18.1308C27.6655 17.0491 26.3971 16.3261 25 16.09V15C25 14.7348 24.8946 14.4804 24.7071 14.2929C24.5196 14.1054 24.2652 14 24 14C23.7348 14 23.4804 14.1054 23.2929 14.2929C23.1054 14.4804 23 14.7348 23 15V16.09C21.6029 16.3261 20.3345 17.0491 19.4194 18.1308C18.5042 19.2125 18.0014 20.5831 18 22V25.18C17.4165 25.3863 16.911 25.7681 16.5529 26.2729C16.1949 26.7778 16.0017 27.3811 16 28V30C16 30.2652 16.1054 30.5196 16.2929 30.7071C16.4804 30.8946 16.7348 31 17 31H20.14C20.3703 31.8474 20.873 32.5954 21.5706 33.1287C22.2682 33.6621 23.1219 33.951 24 33.951C24.8781 33.951 25.7318 33.6621 26.4294 33.1287C27.127 32.5954 27.6297 31.8474 27.86 31H31C31.2652 31 31.5196 30.8946 31.7071 30.7071C31.8946 30.5196 32 30.2652 32 30V28C31.9983 27.3811 31.8051 26.7778 31.4471 26.2729C31.089 25.7681 30.5835 25.3863 30 25.18ZM20 22C20 20.9391 20.4214 19.9217 21.1716 19.1716C21.9217 18.4214 22.9391 18 24 18C25.0609 18 26.0783 18.4214 26.8284 19.1716C27.5786 19.9217 28 20.9391 28 22V27H24H20V22ZM24 32C23.651 31.9979 23.3086 31.9045 23.0068 31.7291C22.7051 31.5536 22.4545 31.3023 22.28 31H25.72C25.5455 31.3023 25.2949 31.5536 24.9932 31.7291C24.6914 31.9045 24.349 31.9979 24 32ZM30 29H18V28C18 27.7348 18.1054 27.4804 18.2929 27.2929C18.4804 27.1054 18.7348 27 19 27H24H29C29.2652 27 29.5196 27.1054 29.7071 27.2929C29.8946 27.4804 30 27.7348 30 28V29Z"
            fill="#3B3B45"
          />
          <circle cx="30" cy="19" r="4" fill="#FF5252" />
        </svg>
      </div>
    </div>
  );
};

export default Header;

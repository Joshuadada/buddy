import { Link } from "react-router-dom";
import { useSignUpContext } from "./signup-context";
import { Steps } from "@/constants";

export const SignupTypes = () => {
  const { setStep } = useSignUpContext();
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-8 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-32 pb-8">
      <div className="bg-white border border-[#DDE2E4] shadow-lg max-w-[30rem] mx-auto rounded-md p-6 sm:p-8 md:p-10 lg:p-12">
        <h5 className="text-[#1D1D18] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
          Register your account
        </h5>

        <button
          onClick={() => setStep(Steps.STEP_2)}
          className="flex justify-center items-center w-full gap-1.5 p-2 border border-[#DDE2E4] rounded-sm mt-2 sm:mt-3 md:mt-5 lg:mt-7 xl:mt-8"
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.8 0.25C1.83939 0.25 0.25 1.83939 0.25 3.8V10.2C0.25 12.1606 1.83939 13.75 3.8 13.75H14.2C16.1606 13.75 17.75 12.1606 17.75 10.2V3.8C17.75 1.83939 16.1606 0.25 14.2 0.25H3.8ZM5.45 4.4C5.11863 4.15147 4.64853 4.21863 4.4 4.55C4.15147 4.88137 4.21863 5.35147 4.55 5.6L7.95 8.15C8.57222 8.61667 9.42778 8.61667 10.05 8.15L13.45 5.6C13.7814 5.35147 13.8485 4.88137 13.6 4.55C13.3515 4.21863 12.8814 4.15147 12.55 4.4L9.15 6.95C9.06111 7.01667 8.93889 7.01667 8.85 6.95L5.45 4.4Z"
              fill="#1D1D18"
            />
          </svg>

          <span className="text-[#5B6871] text-xs md:text-sm">
            Sign up with email
          </span>
        </button>

        <div className="flex gap-2 md:gap-3 lg:gap-4 items-center mt-1 md:mt-2 lg:mt-3">
          <hr className="flex-1" />
          <p>or</p>
          <hr className="flex-1" />
        </div>

        <button className="flex justify-center items-center w-full gap-1.5 p-2 border border-[#DDE2E4] rounded-sm mt-1 md:mt-2 lg:mt-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.59266 6.50998C3.91184 5.56628 4.52784 4.7452 5.35277 4.16386C6.17771 3.58251 7.16944 3.27062 8.18648 3.27266C9.33937 3.27266 10.3817 3.67266 11.2004 4.32732L13.5826 2C12.1309 0.763331 10.2706 0 8.18648 0C4.95976 0 2.18191 1.79866 0.846191 4.43332L3.59266 6.50998Z"
              fill="#EA4335"
            />
            <path
              d="M10.9426 12.0086C10.199 12.4773 9.25488 12.7273 8.18658 12.7273C7.17358 12.7293 6.1856 12.4199 5.3625 11.8429C4.5394 11.2658 3.92289 10.4504 3.60026 9.51196L0.844238 11.5566C1.52045 12.8941 2.56693 14.0195 3.86482 14.805C5.16272 15.5904 6.65999 16.0044 8.18658 15.9999C10.1874 15.9999 12.0989 15.3046 13.5308 14L10.9433 12.0086H10.9426Z"
              fill="#34A853"
            />
            <path
              d="M13.5303 14C15.0277 12.6347 15.9998 10.6027 15.9998 8.00001C15.9998 7.52668 15.9254 7.01801 15.8142 6.54535H8.18604V9.63668H12.5766C12.3603 10.676 11.7784 11.4807 10.9427 12.0087L13.5303 14Z"
              fill="#4A90E2"
            />
            <path
              d="M3.59996 9.512C3.43307 9.02461 3.34828 8.51397 3.34892 8.00001C3.34892 7.47868 3.43419 6.97801 3.59246 6.51001L0.845987 4.43335C0.284125 5.5418 -0.005512 6.76302 7.94433e-05 8.00001C7.94433e-05 9.28 0.303651 10.4867 0.84394 11.5567L3.59996 9.512Z"
              fill="#FBBC05"
            />
          </svg>

          <span className="text-[#5B6871] text-xs md:text-sm">
            Sign up with Google
          </span>
        </button>

        <p className="text-[#5B6871] text-xs md:text-sm md:p-1 lg:p-2 mt-2 sm:mt-3 md:mt-5 lg:mt-7 xl:mt-8">
          By clicking the button above, you agree to our{" "}
          <span className="text-[#FF8600] cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-[#FF8600] cursor-pointer">Privacy Policy</span>.
        </p>

        <p className="text-[#5B6871] text-xs md:text-sm md:p-1 lg:p-2 mt-4 sm:mt-6 md:mt-10 lg:mt-14 xl:mt-16">
          Already have an account?{" "}
          <span className="text-[#FF8600] cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>

      <button className="flex items-center gap-1 p-2 md:p-3 lg:p-4 bg-[#FF8600] rounded-3xl ml-auto mt-8 md:mt-10 lg:mt-12 shadow-lg">
        <span className="text-white text-[0.6rem] md:text-xs lg:text-sm">
          Get Help
        </span>
        <svg
          className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1769 13.4428C16.0508 13.5693 15.9542 13.7221 15.894 13.8902C15.8338 14.0583 15.8113 14.2377 15.8284 14.4154C15.9137 15.2382 16.0755 16.0512 16.3116 16.844C14.6177 16.4518 13.5831 15.9976 13.1132 15.7596C12.8467 15.6246 12.5397 15.5927 12.2511 15.6698C11.4236 15.8904 10.5708 16.0014 9.71443 16.0001C4.86214 16.0001 1.21442 12.5916 1.21442 8.71436C1.21442 4.83836 4.86214 1.42864 9.71443 1.42864C14.5667 1.42864 18.2144 4.83836 18.2144 8.71436C18.2144 10.4969 17.4652 12.1508 16.1769 13.4428ZM16.7755 18.1846C17.0632 18.2416 17.3518 18.2938 17.6413 18.3412C17.8841 18.3801 18.0687 18.1275 17.9728 17.9016C17.865 17.6474 17.7661 17.3894 17.6765 17.1281L17.6729 17.116C17.3717 16.2417 17.1264 15.2363 17.0366 14.3001C18.5265 12.8065 19.4287 10.8515 19.4287 8.71436C19.4287 4.01993 15.0791 0.214355 9.71443 0.214355C4.34971 0.214355 0.000139236 4.01993 0.000139236 8.71436C0.000139236 13.4088 4.34971 17.2144 9.71443 17.2144C10.6766 17.2157 11.6347 17.0907 12.5644 16.8428C13.1958 17.1621 14.5546 17.7438 16.7755 18.1846Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

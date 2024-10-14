import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, CartesianGrid, XAxis, Bar } from "recharts"
import Avartar from "../../../assets/images/avartar.svg"
import ChartImg from "../../../assets/images/chart.svg"
import NewsImg1 from "../../../assets/images/newsImg1.svg"
import NewsImg2 from "../../../assets/images/newsImg2.svg"
import NewsImg3 from "../../../assets/images/newsImg3.svg"
import InstagramImg from "../../../assets/images/instagramImg.svg"
import FacebookImg from "../../../assets/images/facebookImg.svg"
import LinkedinImg from "../../../assets/images/linkedinImg.svg"

const chartData = [
    { month: "January", robbinHood: 186, amreitrade: 80 },
    { month: "February", robbinHood: 305, amreitrade: 200 },
    { month: "March", robbinHood: 237, amreitrade: 120 },
    { month: "April", robbinHood: 73, amreitrade: 190 },
    { month: "May", robbinHood: 209, amreitrade: 130 },
    { month: "June", robbinHood: 214, amreitrade: 140 },
    { month: "July", robbinHood: 186, amreitrade: 80 },
    { month: "August", robbinHood: 305, amreitrade: 200 },
    { month: "September", robbinHood: 237, amreitrade: 120 },
    { month: "October", robbinHood: 73, amreitrade: 190 },
    { month: "November", robbinHood: 209, amreitrade: 130 },
    { month: "December", robbinHood: 214, amreitrade: 140 },
]

const chartConfig = {
    robbinHood: {
        label: "Robbin Hood",
        color: "#FF8600",
    },
    amreitrade: {
        label: "Amreitrade",
        color: "#FFB800",
    },
} satisfies ChartConfig

const MyPortfolio = () => {
    return (
        <div className="xl:flex gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 flex flex-col gap-2 md:gap-3 lg:gap-4">
                <div className="grid gap-2 md:gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    <div className="flex items-center gap-3 justify-between bg-white p-2 md:p-3 lg:p-4">
                        <div>
                            <h4 className="text-[#3B3B45] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">51</h4>
                            <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">Total Channels</p>
                        </div>

                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24.5" r="24" fill="#E0FAF5" />
                            <path d="M26.5001 15.6667C25.1359 15.6678 23.8153 16.1469 22.7678 17.0209C21.7203 17.8948 21.0123 19.1081 20.7667 20.45C20.0487 20.8374 19.4365 21.3945 18.9833 22.0728C18.5301 22.7512 18.2497 23.5301 18.1667 24.3417C17.5465 24.6145 17.0022 25.0344 16.5809 25.5651C16.1597 26.0958 15.8742 26.7212 15.7492 27.3872C15.6242 28.0531 15.6636 28.7395 15.8638 29.3868C16.064 30.0341 16.419 30.6228 16.8981 31.1019C17.3772 31.5811 17.966 31.9361 18.6133 32.1363C19.2606 32.3365 19.9469 32.3758 20.6129 32.2509C21.2788 32.1259 21.9042 31.8404 22.4349 31.4191C22.9656 30.9979 23.3856 30.4536 23.6584 29.8333C24.4676 29.7529 25.2449 29.4764 25.923 29.0277C26.6012 28.579 27.1597 27.9717 27.5501 27.2583C29.0092 27.0243 30.325 26.2452 31.2319 25.0784C32.1387 23.9116 32.569 22.4441 32.4357 20.9724C32.3023 19.5007 31.6154 18.1344 30.5137 17.1496C29.4119 16.1647 27.9775 15.6347 26.5001 15.6667ZM22.3334 28.525C22.3334 28.6083 22.3334 28.6917 22.2751 28.7833C22.1674 29.2123 21.9479 29.6049 21.639 29.9214C21.3301 30.2378 20.9427 30.4666 20.5165 30.5844C20.0903 30.7023 19.6404 30.7049 19.2128 30.5922C18.7852 30.4794 18.3952 30.2553 18.0825 29.9426C17.7698 29.6299 17.5456 29.2399 17.4329 28.8123C17.3201 28.3847 17.3228 27.9348 17.4407 27.5086C17.5585 27.0823 17.7873 26.695 18.1037 26.3861C18.4201 26.0771 18.8128 25.8577 19.2417 25.75L19.4751 25.6667C19.8664 25.5936 20.2696 25.6169 20.6499 25.7347C21.0302 25.8524 21.376 26.0611 21.6575 26.3426C21.939 26.6241 22.1476 26.9699 22.2654 27.3502C22.3832 27.7305 22.4065 28.1337 22.3334 28.525ZM26.5001 25.4667C26.4891 25.5202 26.4752 25.573 26.4584 25.625C26.4226 25.7784 26.3752 25.9288 26.3167 26.075C26.1249 26.5615 25.8212 26.996 25.4304 27.3435C25.0395 27.6909 24.5724 27.9415 24.0667 28.075C24.0667 27.925 24.0667 27.7833 24.0167 27.6333C23.9667 27.4833 24.0167 27.4083 24.0167 27.3C24.0167 27.1917 23.9167 26.9833 23.8667 26.825C23.8167 26.6667 23.8084 26.625 23.7667 26.525C23.6949 26.3662 23.6113 26.213 23.5167 26.0667C23.5167 25.9917 23.4417 25.9083 23.3917 25.8333C23.2435 25.6161 23.0762 25.4125 22.8917 25.225L22.7251 25.0833C22.5854 24.9549 22.4379 24.8352 22.2834 24.725C22.1926 24.6659 22.0979 24.613 22.0001 24.5667C21.8667 24.4819 21.7274 24.4067 21.5834 24.3417C21.4758 24.2956 21.3642 24.2594 21.2501 24.2333C21.1098 24.1764 20.9648 24.1318 20.8167 24.1C20.7001 24.1 20.5751 24.1 20.4501 24.05L19.9417 24C20.0744 23.4952 20.3237 23.0287 20.6696 22.6379C21.0156 22.2471 21.4484 21.9429 21.9334 21.75C22.0763 21.6903 22.2241 21.6429 22.3751 21.6083L22.5417 21.5667C22.7473 21.5235 22.9567 21.5011 23.1667 21.5C24.0508 21.5 24.8986 21.8512 25.5237 22.4763C26.1489 23.1014 26.5001 23.9493 26.5001 24.8333C26.4989 25.0461 26.4766 25.2583 26.4334 25.4667H26.5001ZM28.1667 25.3333C28.1667 25.1667 28.1667 25 28.1667 24.8333C28.1667 23.5073 27.6399 22.2355 26.7023 21.2978C25.7646 20.3601 24.4928 19.8333 23.1667 19.8333C23.0001 19.8333 22.8334 19.8333 22.6667 19.8333C22.9414 19.2155 23.3623 18.6737 23.8932 18.2549C24.424 17.836 25.0488 17.5527 25.7137 17.4293C26.3785 17.3059 27.0633 17.3461 27.7091 17.5465C28.3549 17.747 28.9422 18.1016 29.4204 18.5797C29.8985 19.0578 30.2531 19.6451 30.4535 20.2909C30.654 20.9367 30.6942 21.6216 30.5708 22.2864C30.4474 22.9512 30.164 23.576 29.7452 24.1069C29.3263 24.6377 28.7846 25.0587 28.1667 25.3333Z" fill="#00D5AA" />
                        </svg>
                    </div>

                    <div className="flex items-center gap-3 justify-between bg-white p-2 md:p-3 lg:p-4">
                        <div>
                            <h4 className="text-[#3B3B45] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">125</h4>
                            <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">New Members</p>
                        </div>

                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24.5" r="24" fill="#EFF2FE" />
                            <path d="M31.4998 22.75H30.6665V21.9167C30.6665 21.6957 30.5787 21.4837 30.4224 21.3274C30.2661 21.1711 30.0542 21.0833 29.8332 21.0833C29.6122 21.0833 29.4002 21.1711 29.2439 21.3274C29.0876 21.4837 28.9998 21.6957 28.9998 21.9167V22.75H28.1665C27.9455 22.75 27.7335 22.8378 27.5772 22.9941C27.421 23.1504 27.3332 23.3623 27.3332 23.5833C27.3332 23.8043 27.421 24.0163 27.5772 24.1726C27.7335 24.3289 27.9455 24.4167 28.1665 24.4167H28.9998V25.25C28.9998 25.471 29.0876 25.683 29.2439 25.8393C29.4002 25.9955 29.6122 26.0833 29.8332 26.0833C30.0542 26.0833 30.2661 25.9955 30.4224 25.8393C30.5787 25.683 30.6665 25.471 30.6665 25.25V24.4167H31.4998C31.7209 24.4167 31.9328 24.3289 32.0891 24.1726C32.2454 24.0163 32.3332 23.8043 32.3332 23.5833C32.3332 23.3623 32.2454 23.1504 32.0891 22.9941C31.9328 22.8378 31.7209 22.75 31.4998 22.75ZM25.0832 24.1833C25.5278 23.7984 25.8845 23.3224 26.1289 22.7875C26.3733 22.2526 26.4998 21.6714 26.4998 21.0833C26.4998 19.9783 26.0609 18.9185 25.2794 18.1371C24.498 17.3557 23.4382 16.9167 22.3332 16.9167C21.2281 16.9167 20.1683 17.3557 19.3869 18.1371C18.6055 18.9185 18.1665 19.9783 18.1665 21.0833C18.1665 21.6714 18.293 22.2526 18.5374 22.7875C18.7819 23.3224 19.1385 23.7984 19.5832 24.1833C18.4166 24.7116 17.4269 25.5646 16.7323 26.6405C16.0377 27.7163 15.6677 28.9694 15.6665 30.25C15.6665 30.471 15.7543 30.683 15.9106 30.8393C16.0669 30.9955 16.2788 31.0833 16.4998 31.0833C16.7209 31.0833 16.9328 30.9955 17.0891 30.8393C17.2454 30.683 17.3332 30.471 17.3332 30.25C17.3332 28.9239 17.86 27.6521 18.7976 26.7145C19.7353 25.7768 21.0071 25.25 22.3332 25.25C23.6593 25.25 24.931 25.7768 25.8687 26.7145C26.8064 27.6521 27.3332 28.9239 27.3332 30.25C27.3332 30.471 27.421 30.683 27.5772 30.8393C27.7335 30.9955 27.9455 31.0833 28.1665 31.0833C28.3875 31.0833 28.5995 30.9955 28.7558 30.8393C28.912 30.683 28.9998 30.471 28.9998 30.25C28.9986 28.9694 28.6286 27.7163 27.934 26.6405C27.2395 25.5646 26.2497 24.7116 25.0832 24.1833ZM22.3332 23.5833C21.8387 23.5833 21.3554 23.4367 20.9442 23.162C20.5331 22.8873 20.2127 22.4969 20.0235 22.04C19.8343 21.5832 19.7847 21.0806 19.8812 20.5956C19.9777 20.1107 20.2158 19.6652 20.5654 19.3156C20.915 18.9659 21.3605 18.7278 21.8454 18.6314C22.3304 18.5349 22.8331 18.5844 23.2899 18.7736C23.7467 18.9629 24.1371 19.2833 24.4118 19.6944C24.6865 20.1055 24.8332 20.5889 24.8332 21.0833C24.8332 21.7464 24.5698 22.3823 24.1009 22.8511C23.6321 23.3199 22.9962 23.5833 22.3332 23.5833Z" fill="#7B91F7" />
                        </svg>
                    </div>

                    <div className="flex items-center gap-3 justify-between bg-white p-2 md:p-3 lg:p-4">
                        <div>
                            <h4 className="text-[#3B3B45] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">789</h4>
                            <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">All Impressions</p>
                        </div>

                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24.5" r="24" fill="#FFF0E0" />
                            <path d="M32.2665 19.5167C32.1819 19.313 32.0201 19.1512 31.8165 19.0667C31.7163 19.024 31.6087 19.0013 31.4998 19H27.3331C27.1121 19 26.9001 19.0878 26.7439 19.2441C26.5876 19.4004 26.4998 19.6123 26.4998 19.8333C26.4998 20.0543 26.5876 20.2663 26.7439 20.4226C26.9001 20.5789 27.1121 20.6667 27.3331 20.6667H29.4915L24.8331 25.325L22.0915 22.575C22.014 22.4969 21.9218 22.4349 21.8203 22.3926C21.7187 22.3503 21.6098 22.3285 21.4998 22.3285C21.3898 22.3285 21.2809 22.3503 21.1793 22.3926C21.0778 22.4349 20.9856 22.4969 20.9081 22.575L15.9081 27.575C15.83 27.6525 15.768 27.7446 15.7257 27.8462C15.6834 27.9477 15.6616 28.0567 15.6616 28.1667C15.6616 28.2767 15.6834 28.3856 15.7257 28.4871C15.768 28.5887 15.83 28.6809 15.9081 28.7583C15.9856 28.8364 16.0778 28.8984 16.1793 28.9407C16.2809 28.9831 16.3898 29.0048 16.4998 29.0048C16.6098 29.0048 16.7187 28.9831 16.8203 28.9407C16.9218 28.8984 17.014 28.8364 17.0915 28.7583L21.4998 24.3417L24.2415 27.0917C24.3189 27.1698 24.4111 27.2318 24.5126 27.2741C24.6142 27.3164 24.7231 27.3382 24.8331 27.3382C24.9431 27.3382 25.0521 27.3164 25.1536 27.2741C25.2551 27.2318 25.3473 27.1698 25.4248 27.0917L30.6665 21.8417V24C30.6665 24.221 30.7543 24.433 30.9105 24.5893C31.0668 24.7455 31.2788 24.8333 31.4998 24.8333C31.7208 24.8333 31.9328 24.7455 32.089 24.5893C32.2453 24.433 32.3331 24.221 32.3331 24V19.8333C32.3318 19.7244 32.3092 19.6169 32.2665 19.5167Z" fill="#FF8600" />
                        </svg>
                    </div>
                </div>

                <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6">
                    <div className="flex items-center justify-between gap-3">
                        <h4 className="text-[#3B3B45] font-bold tex-sm sm:text-base md:text-lg lg:text-xl">Overview</h4>

                        <div className="flex gap-1 md:gap-2">
                            <div className="text-[0.5rem] md:text-[0.6rem] lg:text-xs text-white bg-[#FF8600] rounded-md md:rounded-xl px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-1.5">Robbin Hood</div>
                            <div className="text-[0.5rem] md:text-[0.6rem] lg:text-xs text-[#818187] bg-[#F6F6F6] rounded-md md:rounded-xl px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-1.5">Amreitrade</div>
                            <div className="text-[0.5rem] md:text-[0.6rem] lg:text-xs text-[#818187] bg-[#F6F6F6] rounded-md md:rounded-xl px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-1.5">Fidelity</div>
                            <div className="text-[0.5rem] md:text-[0.6rem] lg:text-xs text-[#818187] bg-[#F6F6F6] rounded-md md:rounded-xl px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-1.5">Charles</div>
                        </div>
                    </div>
                    <ChartContainer className="mt-2 md:mt-3 lg:mt-4" config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dashed" />}
                            />
                            <Bar dataKey="robbinHood" fill="var(--color-robbinHood)" radius={4} />
                            <Bar dataKey="amreitrade" fill="var(--color-amreitrade)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </div>

                <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6">
                    <h4 className="text-[#3B3B45] font-bold tex-sm sm:text-base md:text-lg lg:text-xl">Trending Posts</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4 mt-2 md:mt-3 lg:mt-4">
                        <div className="bg-white p-2 md:p-3 lg:p-4 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl">
                            <h5 className="text-[#3B3B45] text-sm md:text-base lg:text-lg font-semibold">8 Upcoming Influencer Marketing Trends and Benefits</h5>
                            <p className="text-[#818187] font-light text-[0.6rem] md:text-xs lg:text-sm mt-1 md:mt-2">Marketing is evolving. It's changing from a one-way street to a two-way conversa…</p>

                            <div className="flex items-center gap-1 md:gap-2 lg:gap-3 mt-2 md:mt-3 lg:mt-4">
                                <div className="text-[#3B3B45] font-medium text-[0.6rem] md:text-xs lg:text-sm bg-[#F6F6F6] py-0.5 md:py-1 px-1.5 md:px-2.5 rounded-lg md:rounded-xl lg:rounded-2xl">❤️ 260</div>
                                <div className="text-[#3B3B45] font-medium text-[0.6rem] md:text-xs lg:text-sm bg-[#F6F6F6] py-0.5 md:py-1 px-1.5 md:px-2.5 rounded-lg md:rounded-xl lg:rounded-2xl flex gap-0.5 md:gap-1 items-center">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_258)">
                                            <path d="M15 4.59207V11.344C15 12.4974 14.0749 13.4361 12.9378 13.4361H6.39514L2.0549 16.5V13.4361C0.921112 13.4322 0 12.4951 0 11.344V4.59207C0 3.43853 0.92514 2.5 2.06223 2.5H12.9378C14.0749 2.5 15 3.43853 15 4.59207Z" fill="#FFB800" />
                                            <path d="M16 4.6043V11.3957C16 12.5559 15.0135 13.5 13.801 13.5H8V2.5H13.801C15.0135 2.5 16 3.44402 16 4.6043Z" fill="#FF8600" />
                                            <path d="M5 5.5H12V6.5H5V5.5Z" fill="white" />
                                            <path d="M5 7.5H12V8.5H5V7.5Z" fill="white" />
                                            <path d="M5 9.5H12V10.5H5V9.5Z" fill="white" />
                                            <path d="M8 5.5H11V6.5H8V5.5Z" fill="#E1E1E3" />
                                            <path d="M8 7.5H11V8.5H8V7.5Z" fill="#E1E1E3" />
                                            <path d="M8 8.5H11V9.5H8V8.5Z" fill="#E1E1E3" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_258">
                                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span>234</span>
                                </div>
                                <div className="text-[#3B3B45] font-medium text-[0.6rem] md:text-xs lg:text-sm bg-[#F6F6F6] py-0.5 md:py-1 px-1.5 md:px-2.5 rounded-lg md:rounded-xl lg:rounded-2xl flex gap-0.5 md:gap-1 items-center">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_270)">
                                            <path d="M16 6.49746L8.75 0.5V4.16468C6.57562 4.27346 4.59781 5.13524 3.07469 6.49746C1.18844 8.18414 0 10.6376 0 13.3751V16.5H0.9375C0.9375 12.2774 4.37219 8.84181 8.59375 8.84181H8.75V12.4949L16 6.49746Z" fill="#FF641A" />
                                            <path d="M8.75 12.4959V8.84375H8.59375C4.37219 8.84375 0.9375 12.2784 0.9375 16.5H0V13.3759C0 10.6391 1.18844 8.18625 3.07469 6.5H16L8.75 12.4959Z" fill="#F03800" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_270">
                                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                    <span>234</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-2 md:p-3 lg:p-4 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl">
                            <h5 className="text-[#3B3B45] text-sm md:text-base lg:text-lg font-semibold">How Influencer Marketing Affects Consumer Buying Behavior</h5>
                            <p className="text-[#818187] font-light text-[0.6rem] md:text-xs lg:text-sm mt-1 md:mt-2">As influencer marketing continues to grow, consumers have been turning to their…</p>

                            <div className="flex items-center gap-1 md:gap-2 lg:gap-3 mt-2 md:mt-3 lg:mt-4">
                                <div className="text-[#3B3B45] font-medium text-[0.6rem] md:text-xs lg:text-sm bg-[#F6F6F6] py-0.5 md:py-1 px-1.5 md:px-2.5 rounded-lg md:rounded-xl lg:rounded-2xl">❤️ 260</div>
                                <div className="text-[#3B3B45] font-medium text-[0.6rem] md:text-xs lg:text-sm bg-[#F6F6F6] py-0.5 md:py-1 px-1.5 md:px-2.5 rounded-lg md:rounded-xl lg:rounded-2xl flex gap-0.5 md:gap-1 items-center">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_258)">
                                            <path d="M15 4.59207V11.344C15 12.4974 14.0749 13.4361 12.9378 13.4361H6.39514L2.0549 16.5V13.4361C0.921112 13.4322 0 12.4951 0 11.344V4.59207C0 3.43853 0.92514 2.5 2.06223 2.5H12.9378C14.0749 2.5 15 3.43853 15 4.59207Z" fill="#FFB800" />
                                            <path d="M16 4.6043V11.3957C16 12.5559 15.0135 13.5 13.801 13.5H8V2.5H13.801C15.0135 2.5 16 3.44402 16 4.6043Z" fill="#FF8600" />
                                            <path d="M5 5.5H12V6.5H5V5.5Z" fill="white" />
                                            <path d="M5 7.5H12V8.5H5V7.5Z" fill="white" />
                                            <path d="M5 9.5H12V10.5H5V9.5Z" fill="white" />
                                            <path d="M8 5.5H11V6.5H8V5.5Z" fill="#E1E1E3" />
                                            <path d="M8 7.5H11V8.5H8V7.5Z" fill="#E1E1E3" />
                                            <path d="M8 8.5H11V9.5H8V8.5Z" fill="#E1E1E3" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_258">
                                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span>234</span>
                                </div>
                                <div className="text-[#3B3B45] font-medium text-[0.6rem] md:text-xs lg:text-sm bg-[#F6F6F6] py-0.5 md:py-1 px-1.5 md:px-2.5 rounded-lg md:rounded-xl lg:rounded-2xl flex gap-0.5 md:gap-1 items-center">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_270)">
                                            <path d="M16 6.49746L8.75 0.5V4.16468C6.57562 4.27346 4.59781 5.13524 3.07469 6.49746C1.18844 8.18414 0 10.6376 0 13.3751V16.5H0.9375C0.9375 12.2774 4.37219 8.84181 8.59375 8.84181H8.75V12.4949L16 6.49746Z" fill="#FF641A" />
                                            <path d="M8.75 12.4959V8.84375H8.59375C4.37219 8.84375 0.9375 12.2784 0.9375 16.5H0V13.3759C0 10.6391 1.18844 8.18625 3.07469 6.5H16L8.75 12.4959Z" fill="#F03800" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_270">
                                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span>234</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6">
                    <h4 className="text-[#3B3B45] font-bold tex-sm sm:text-base md:text-lg lg:text-xl">Potential Members</h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2 mt-2 md:mt-3 lg:mt-4">
                        <div className="bg-white p-2 md:p-3 lg:p-4 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl">
                            <img src={Avartar} className="mx-auto" alt="" />
                            <div className="text-center">
                                <h5 className="text-[#3B3B45] font-semibold text-[0.6rem] md:text-xs lg:text-sm">Wanda Parker</h5>
                                <p className="text-[#818187] text-[0.5rem] md:text-[0.6rem] lg:text-sm">@ashking1234</p>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center justify-center mt-1 md:mt-2">
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7667 0.516667C16.6821 0.313042 16.5203 0.151229 16.3167 0.0666666C16.2165 0.0239658 16.1089 0.00131666 16 0H11.8334C11.6124 0 11.4004 0.0877975 11.2441 0.244078C11.0878 0.400358 11 0.61232 11 0.833333C11 1.05435 11.0878 1.26631 11.2441 1.42259C11.4004 1.57887 11.6124 1.66667 11.8334 1.66667H13.9917L9.33336 6.325L6.5917 3.575C6.51423 3.49689 6.42206 3.4349 6.32051 3.39259C6.21896 3.35028 6.11004 3.3285 6.00003 3.3285C5.89002 3.3285 5.7811 3.35028 5.67955 3.39259C5.578 3.4349 5.48583 3.49689 5.40836 3.575L0.408364 8.575C0.330257 8.65247 0.268262 8.74464 0.225954 8.84619C0.183647 8.94774 0.161865 9.05666 0.161865 9.16667C0.161865 9.27668 0.183647 9.3856 0.225954 9.48715C0.268262 9.5887 0.330257 9.68086 0.408364 9.75833C0.485833 9.83644 0.578001 9.89844 0.67955 9.94074C0.781099 9.98305 0.890021 10.0048 1.00003 10.0048C1.11004 10.0048 1.21896 9.98305 1.32051 9.94074C1.42206 9.89844 1.51423 9.83644 1.5917 9.75833L6.00003 5.34167L8.7417 8.09167C8.81917 8.16977 8.91133 8.23177 9.01288 8.27408C9.11443 8.31638 9.22335 8.33817 9.33336 8.33817C9.44337 8.33817 9.5523 8.31638 9.65384 8.27408C9.75539 8.23177 9.84756 8.16977 9.92503 8.09167L15.1667 2.84167V5C15.1667 5.22101 15.2545 5.43298 15.4108 5.58926C15.5671 5.74554 15.779 5.83333 16 5.83333C16.221 5.83333 16.433 5.74554 16.5893 5.58926C16.7456 5.43298 16.8334 5.22101 16.8334 5V0.833333C16.832 0.724436 16.8094 0.616852 16.7667 0.516667Z" fill="#35DB95" />
                                </svg>

                                <h5 className="text-[#3B3B45] font-bold text-xs md:text-sm lg:text-base">10.3%</h5>
                            </div>
                        </div>

                        <div className="bg-white p-2 md:p-3 lg:p-4 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl">
                            <img src={Avartar} className="mx-auto" alt="" />
                            <div className="text-center">
                                <h5 className="text-[#3B3B45] font-semibold text-[0.6rem] md:text-xs lg:text-sm">Terry Brown</h5>
                                <p className="text-[#818187] text-[0.5rem] md:text-[0.6rem] lg:text-sm">@ashking1234</p>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center justify-center mt-1 md:mt-2">
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7667 0.516667C16.6821 0.313042 16.5203 0.151229 16.3167 0.0666666C16.2165 0.0239658 16.1089 0.00131666 16 0H11.8334C11.6124 0 11.4004 0.0877975 11.2441 0.244078C11.0878 0.400358 11 0.61232 11 0.833333C11 1.05435 11.0878 1.26631 11.2441 1.42259C11.4004 1.57887 11.6124 1.66667 11.8334 1.66667H13.9917L9.33336 6.325L6.5917 3.575C6.51423 3.49689 6.42206 3.4349 6.32051 3.39259C6.21896 3.35028 6.11004 3.3285 6.00003 3.3285C5.89002 3.3285 5.7811 3.35028 5.67955 3.39259C5.578 3.4349 5.48583 3.49689 5.40836 3.575L0.408364 8.575C0.330257 8.65247 0.268262 8.74464 0.225954 8.84619C0.183647 8.94774 0.161865 9.05666 0.161865 9.16667C0.161865 9.27668 0.183647 9.3856 0.225954 9.48715C0.268262 9.5887 0.330257 9.68086 0.408364 9.75833C0.485833 9.83644 0.578001 9.89844 0.67955 9.94074C0.781099 9.98305 0.890021 10.0048 1.00003 10.0048C1.11004 10.0048 1.21896 9.98305 1.32051 9.94074C1.42206 9.89844 1.51423 9.83644 1.5917 9.75833L6.00003 5.34167L8.7417 8.09167C8.81917 8.16977 8.91133 8.23177 9.01288 8.27408C9.11443 8.31638 9.22335 8.33817 9.33336 8.33817C9.44337 8.33817 9.5523 8.31638 9.65384 8.27408C9.75539 8.23177 9.84756 8.16977 9.92503 8.09167L15.1667 2.84167V5C15.1667 5.22101 15.2545 5.43298 15.4108 5.58926C15.5671 5.74554 15.779 5.83333 16 5.83333C16.221 5.83333 16.433 5.74554 16.5893 5.58926C16.7456 5.43298 16.8334 5.22101 16.8334 5V0.833333C16.832 0.724436 16.8094 0.616852 16.7667 0.516667Z" fill="#35DB95" />
                                </svg>

                                <h5 className="text-[#3B3B45] font-bold text-xs md:text-sm lg:text-base">9.8%</h5>
                            </div>
                        </div>

                        <div className="bg-white p-2 md:p-3 lg:p-4 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl">
                            <img src={Avartar} className="mx-auto" alt="" />
                            <div className="text-center">
                                <h5 className="text-[#3B3B45] font-semibold text-[0.6rem] md:text-xs lg:text-sm">Lucas Holmes</h5>
                                <p className="text-[#818187] text-[0.5rem] md:text-[0.6rem] lg:text-sm">@ashking1234</p>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center justify-center mt-1 md:mt-2">
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7667 0.516667C16.6821 0.313042 16.5203 0.151229 16.3167 0.0666666C16.2165 0.0239658 16.1089 0.00131666 16 0H11.8334C11.6124 0 11.4004 0.0877975 11.2441 0.244078C11.0878 0.400358 11 0.61232 11 0.833333C11 1.05435 11.0878 1.26631 11.2441 1.42259C11.4004 1.57887 11.6124 1.66667 11.8334 1.66667H13.9917L9.33336 6.325L6.5917 3.575C6.51423 3.49689 6.42206 3.4349 6.32051 3.39259C6.21896 3.35028 6.11004 3.3285 6.00003 3.3285C5.89002 3.3285 5.7811 3.35028 5.67955 3.39259C5.578 3.4349 5.48583 3.49689 5.40836 3.575L0.408364 8.575C0.330257 8.65247 0.268262 8.74464 0.225954 8.84619C0.183647 8.94774 0.161865 9.05666 0.161865 9.16667C0.161865 9.27668 0.183647 9.3856 0.225954 9.48715C0.268262 9.5887 0.330257 9.68086 0.408364 9.75833C0.485833 9.83644 0.578001 9.89844 0.67955 9.94074C0.781099 9.98305 0.890021 10.0048 1.00003 10.0048C1.11004 10.0048 1.21896 9.98305 1.32051 9.94074C1.42206 9.89844 1.51423 9.83644 1.5917 9.75833L6.00003 5.34167L8.7417 8.09167C8.81917 8.16977 8.91133 8.23177 9.01288 8.27408C9.11443 8.31638 9.22335 8.33817 9.33336 8.33817C9.44337 8.33817 9.5523 8.31638 9.65384 8.27408C9.75539 8.23177 9.84756 8.16977 9.92503 8.09167L15.1667 2.84167V5C15.1667 5.22101 15.2545 5.43298 15.4108 5.58926C15.5671 5.74554 15.779 5.83333 16 5.83333C16.221 5.83333 16.433 5.74554 16.5893 5.58926C16.7456 5.43298 16.8334 5.22101 16.8334 5V0.833333C16.832 0.724436 16.8094 0.616852 16.7667 0.516667Z" fill="#35DB95" />
                                </svg>

                                <h5 className="text-[#3B3B45] font-bold text-xs md:text-sm lg:text-base">6.5%</h5>
                            </div>
                        </div>

                        <div className="bg-white p-2 md:p-3 lg:p-4 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl">
                            <img src={Avartar} className="mx-auto" alt="" />
                            <div className="text-center">
                                <h5 className="text-[#3B3B45] font-semibold text-[0.6rem] md:text-xs lg:text-sm">Janice Miller</h5>
                                <p className="text-[#818187] text-[0.5rem] md:text-[0.6rem] lg:text-sm">@ashking1234</p>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center justify-center mt-1 md:mt-2">
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7667 0.516667C16.6821 0.313042 16.5203 0.151229 16.3167 0.0666666C16.2165 0.0239658 16.1089 0.00131666 16 0H11.8334C11.6124 0 11.4004 0.0877975 11.2441 0.244078C11.0878 0.400358 11 0.61232 11 0.833333C11 1.05435 11.0878 1.26631 11.2441 1.42259C11.4004 1.57887 11.6124 1.66667 11.8334 1.66667H13.9917L9.33336 6.325L6.5917 3.575C6.51423 3.49689 6.42206 3.4349 6.32051 3.39259C6.21896 3.35028 6.11004 3.3285 6.00003 3.3285C5.89002 3.3285 5.7811 3.35028 5.67955 3.39259C5.578 3.4349 5.48583 3.49689 5.40836 3.575L0.408364 8.575C0.330257 8.65247 0.268262 8.74464 0.225954 8.84619C0.183647 8.94774 0.161865 9.05666 0.161865 9.16667C0.161865 9.27668 0.183647 9.3856 0.225954 9.48715C0.268262 9.5887 0.330257 9.68086 0.408364 9.75833C0.485833 9.83644 0.578001 9.89844 0.67955 9.94074C0.781099 9.98305 0.890021 10.0048 1.00003 10.0048C1.11004 10.0048 1.21896 9.98305 1.32051 9.94074C1.42206 9.89844 1.51423 9.83644 1.5917 9.75833L6.00003 5.34167L8.7417 8.09167C8.81917 8.16977 8.91133 8.23177 9.01288 8.27408C9.11443 8.31638 9.22335 8.33817 9.33336 8.33817C9.44337 8.33817 9.5523 8.31638 9.65384 8.27408C9.75539 8.23177 9.84756 8.16977 9.92503 8.09167L15.1667 2.84167V5C15.1667 5.22101 15.2545 5.43298 15.4108 5.58926C15.5671 5.74554 15.779 5.83333 16 5.83333C16.221 5.83333 16.433 5.74554 16.5893 5.58926C16.7456 5.43298 16.8334 5.22101 16.8334 5V0.833333C16.832 0.724436 16.8094 0.616852 16.7667 0.516667Z" fill="#35DB95" />
                                </svg>

                                <h5 className="text-[#3B3B45] font-bold text-xs md:text-sm lg:text-base">8.6%</h5>
                            </div>
                        </div>

                        <div className="bg-white p-2 md:p-3 lg:p-4 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl">
                            <img src={Avartar} className="mx-auto" alt="" />
                            <div className="text-center">
                                <h5 className="text-[#3B3B45] font-semibold text-[0.6rem] md:text-xs lg:text-sm">JTerry Brown</h5>
                                <p className="text-[#818187] text-[0.5rem] md:text-[0.6rem] lg:text-sm">@ashking1234</p>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center justify-center mt-1 md:mt-2">
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7667 0.516667C16.6821 0.313042 16.5203 0.151229 16.3167 0.0666666C16.2165 0.0239658 16.1089 0.00131666 16 0H11.8334C11.6124 0 11.4004 0.0877975 11.2441 0.244078C11.0878 0.400358 11 0.61232 11 0.833333C11 1.05435 11.0878 1.26631 11.2441 1.42259C11.4004 1.57887 11.6124 1.66667 11.8334 1.66667H13.9917L9.33336 6.325L6.5917 3.575C6.51423 3.49689 6.42206 3.4349 6.32051 3.39259C6.21896 3.35028 6.11004 3.3285 6.00003 3.3285C5.89002 3.3285 5.7811 3.35028 5.67955 3.39259C5.578 3.4349 5.48583 3.49689 5.40836 3.575L0.408364 8.575C0.330257 8.65247 0.268262 8.74464 0.225954 8.84619C0.183647 8.94774 0.161865 9.05666 0.161865 9.16667C0.161865 9.27668 0.183647 9.3856 0.225954 9.48715C0.268262 9.5887 0.330257 9.68086 0.408364 9.75833C0.485833 9.83644 0.578001 9.89844 0.67955 9.94074C0.781099 9.98305 0.890021 10.0048 1.00003 10.0048C1.11004 10.0048 1.21896 9.98305 1.32051 9.94074C1.42206 9.89844 1.51423 9.83644 1.5917 9.75833L6.00003 5.34167L8.7417 8.09167C8.81917 8.16977 8.91133 8.23177 9.01288 8.27408C9.11443 8.31638 9.22335 8.33817 9.33336 8.33817C9.44337 8.33817 9.5523 8.31638 9.65384 8.27408C9.75539 8.23177 9.84756 8.16977 9.92503 8.09167L15.1667 2.84167V5C15.1667 5.22101 15.2545 5.43298 15.4108 5.58926C15.5671 5.74554 15.779 5.83333 16 5.83333C16.221 5.83333 16.433 5.74554 16.5893 5.58926C16.7456 5.43298 16.8334 5.22101 16.8334 5V0.833333C16.832 0.724436 16.8094 0.616852 16.7667 0.516667Z" fill="#35DB95" />
                                </svg>

                                <h5 className="text-[#3B3B45] font-bold text-xs md:text-sm lg:text-base">9.8%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:w-80 flex flex-col gap-2 md:gap-3 lg:gap-4 mt-2 md:mt-3 lg:mt-4 xl:mt-0">
                <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6">
                    <h4 className="text-[#3B3B45] font-bold tex-sm sm:text-base md:text-lg lg:text-xl">Watchlist</h4>

                    <div className="flex flex-col gap-1 md-gap-2 lg:gap-3 mt-2 md:mt-3 lg:mt-4">
                        <div className="flex items-center justify-between gap-1 md:gap-2 bg-[#F6F6F6] px-2 md:px-3 lg:px-4 py-1 md:py-2 lg:py-3">
                            <div>
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                                    <h4 className="text-[#3B3B45] font-semibold text-sm md:text-base lg:text-lg">AAPL</h4>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.644815 6.3579L0.644828 6.35789L0.641918 6.355C0.59505 6.30852 0.557852 6.25321 0.532469 6.19229C0.507086 6.13136 0.494017 6.06601 0.494017 6C0.494017 5.93399 0.507086 5.86864 0.532469 5.80771C0.557852 5.74679 0.59505 5.69148 0.641921 5.645L0.64337 5.64355L5.63885 0.648076C5.68569 0.604036 5.7406 0.569436 5.80057 0.546185L5.81136 0.542002L5.82194 0.537323C5.87797 0.512559 5.93856 0.499767 5.99981 0.499767C6.06107 0.499767 6.12166 0.512559 6.17769 0.537323L6.18827 0.542002L6.19906 0.546185C6.25903 0.569436 6.31394 0.604036 6.36078 0.648076L11.3563 5.64355C11.4508 5.73809 11.5039 5.86631 11.5039 6C11.5039 6.13369 11.4508 6.26191 11.3563 6.35645C11.2617 6.45098 11.1335 6.50409 10.9998 6.50409C10.8662 6.50409 10.738 6.45104 10.6435 6.35661C10.6435 6.35655 10.6434 6.3565 10.6434 6.35645L7.3539 3.05698L6.49981 2.2003V3.41L6.49981 11C6.49981 11.1326 6.44714 11.2598 6.35337 11.3536C6.2596 11.4473 6.13242 11.5 5.99981 11.5C5.86721 11.5 5.74003 11.4473 5.64626 11.3536C5.55249 11.2598 5.49981 11.1326 5.49981 11L5.49981 3.41V2.2003L4.64573 3.05698L1.35572 6.35698L1.35481 6.3579C1.30833 6.40476 1.25303 6.44196 1.1921 6.46734C1.13117 6.49273 1.06582 6.5058 0.999815 6.5058C0.933809 6.5058 0.868457 6.49273 0.807527 6.46734C0.746597 6.44196 0.691298 6.40476 0.644815 6.3579Z" stroke="#00A441" />
                                    </svg>
                                </div>

                                <p className="text-[#A3A3A6] text-[0.6rem] md:text-xs lg:text-sm">$142.90</p>
                                <p className="text-[#00A441] font-medium text-[0.5rem] md:text-[0.6rem] text-xs">+0.47%</p>
                            </div>

                            <img src={ChartImg} alt="" />
                        </div>

                        <div className="flex items-center justify-between gap-1 md:gap-2 bg-[#F6F6F6] px-2 md:px-3 lg:px-4 py-1 md:py-2 lg:py-3">
                            <div>
                                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                                    <h4 className="text-[#3B3B45] font-semibold text-sm md:text-base lg:text-lg">BPL</h4>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3552 5.6421L11.3552 5.64211L11.3581 5.645C11.405 5.69148 11.4421 5.74679 11.4675 5.80771C11.4929 5.86864 11.506 5.93399 11.506 6C11.506 6.06601 11.4929 6.13136 11.4675 6.19229C11.4421 6.25321 11.405 6.30852 11.3581 6.355L11.3566 6.35645L6.36115 11.3519C6.31431 11.396 6.2594 11.4306 6.19943 11.4538L6.18864 11.458L6.17806 11.4627C6.12203 11.4874 6.06144 11.5002 6.00019 11.5002C5.93893 11.5002 5.87834 11.4874 5.82231 11.4627L5.81173 11.458L5.80094 11.4538C5.74097 11.4306 5.68606 11.396 5.63922 11.3519L0.643739 6.35645C0.549203 6.26191 0.496094 6.13369 0.496094 6C0.496094 5.86631 0.549203 5.73809 0.643739 5.64355C0.738274 5.54902 0.866491 5.49591 1.00019 5.49591C1.1338 5.49591 1.26195 5.54896 1.35647 5.64339C1.35653 5.64345 1.35658 5.6435 1.35663 5.64355L4.6461 8.94302L5.50019 9.7997V8.59V1C5.50019 0.867392 5.55286 0.740215 5.64663 0.646447C5.7404 0.552678 5.86758 0.5 6.00019 0.5C6.13279 0.5 6.25997 0.552678 6.35374 0.646447C6.44751 0.740215 6.50019 0.867392 6.50019 1V8.59V9.7997L7.35427 8.94302L10.6443 5.64302L10.6452 5.6421C10.6917 5.59524 10.747 5.55804 10.8079 5.53266C10.8688 5.50727 10.9342 5.4942 11.0002 5.4942C11.0662 5.4942 11.1315 5.50727 11.1925 5.53266C11.2534 5.55804 11.3087 5.59524 11.3552 5.6421Z" fill="#3B3B45" stroke="#FF5252" />
                                    </svg>
                                </div>

                                <p className="text-[#A3A3A6] text-[0.6rem] md:text-xs lg:text-sm">$142.90</p>
                                <p className="text-[#FF5252] font-medium text-[0.5rem] md:text-[0.6rem] text-xs">-0.78%</p>
                            </div>

                            <img src={ChartImg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6">
                    <h4 className="text-[#3B3B45] font-bold tex-sm sm:text-base md:text-lg lg:text-xl">Revenue</h4>

                    <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 mt-2 md:mt-3 lg:mt-4">
                        <div className="flex items-center gap-3 justify-between border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4">
                            <div>
                                <h5 className="text-[#3B3B45] text-sm md:text-base lg:text-lg font-semibold">$4,000</h5>
                                <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">Recently Added Pages</p>
                            </div>

                           <img src={FacebookImg} alt="" />
                        </div>

                        <div className="flex items-center gap-3 justify-between border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4">
                            <div>
                                <h5 className="text-[#3B3B45] text-sm md:text-base lg:text-lg font-semibold">$2,120</h5>
                                <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">Video Monetization</p>
                            </div>

                            <img src={InstagramImg} alt="" />
                        </div>

                        <div className="flex items-center gap-3 justify-between border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4">
                            <div>
                                <h5 className="text-[#3B3B45] text-sm md:text-base lg:text-lg font-semibold">$1,752</h5>
                                <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">Community Buildup</p>
                            </div>

                            <img src={LinkedinImg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6">
                    <h4 className="text-[#3B3B45] font-bold tex-sm sm:text-base md:text-lg lg:text-xl">Trending News</h4>

                    <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 mt-2 md:mt-3 lg:mt-4">
                        <div className="flex items-center gap-1 md:gap-2 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4">
                            <img src={NewsImg1} alt="" />

                            <div>
                                <h5 className="text-[#3B3B45] text-sm md:text-base lg:text-lg font-semibold">Russia & Ukraine War</h5>
                                <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">Marketing is evolving. It's chang...</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 md:gap-2 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4">
                            <img src={NewsImg2} alt="" />

                            <div>
                                <h5 className="text-[#3B3B45] text-sm md:text-base lg:text-lg font-semibold">Elon Musk bought Twitter</h5>
                                <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">Twitter is the most useful social pl...</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 md:gap-2 border border-[#F1F1F1] rounded-md md:rounded-lg lg:rounded-xl py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4">
                            <img src={NewsImg3} alt="" />

                            <div>
                                <h5 className="text-[#3B3B45] text-sm md:text-base lg:text-lg font-semibold">Fuel Crisis Everywhere</h5>
                                <p className="text-[#A3A3A6] text-[0.5rem] md:text-[0.6rem] lg:text-xs">Due to covid situation in 2020 the...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio
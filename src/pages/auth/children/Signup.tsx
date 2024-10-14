import { Button } from "@/components/ui/button"
import { FormField, FormItem, FormControl, FormMessage, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, {
        message: 'Invalid password format'
    }),
})

const Signup = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-8 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-32 pb-8">
            <div className="bg-white border border-[#DDE2E4] shadow-lg max-w-[30rem] mx-auto rounded-md p-6 sm:p-8 md:p-10 lg:p-12">
                <h5 className="text-[#1D1D18] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">Register your account</h5>

                <p className="text-[#5B6871] text-xs md:text-sm mt-1 md:mt-2">Proceed to create account and setup your organization</p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2">
                        <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                            <div>
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <label className="text-[#5B6871] text-[0.6rem] md:text-xs lg:test-sm" htmlFor="">First Name</label>
                                            <FormControl>
                                                <Input type="text" placeholder="Seyi" {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div>
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <label className="text-[#5B6871] text-[0.6rem] md:text-xs lg:test-sm" htmlFor="">Last Name</label>
                                            <FormControl>
                                                <Input type="text" placeholder="Ajayi" {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="mt-1 md:mt-2 lg:mt-3">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <label className="text-[#5B6871] text-[0.6rem] md:text-xs lg:test-sm" htmlFor="">Email</label>
                                        <FormControl>
                                            <Input type="email" placeholder="Seyi@zojatech.com" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="mt-1 md:mt-2 lg:mt-3">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <label className="text-[#5B6871] text-[0.6rem] md:text-xs lg:test-sm" htmlFor="">Password</label>
                                        <FormControl>
                                            <Input type="password" placeholder="***********" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="mt-5 md:mt-6 lg:mt-8">
                            <Button type="submit" className="w-full">Submit</Button>
                        </div>
                    </form>
                </Form>

                <p className="text-[#5B6871] text-xs md:text-sm md:p-1 lg:p-2 mt-2 sm:mt-3 md:mt-5 lg:mt-7 xl:mt-8">By clicking the button above, you agree to our <span className="text-[#FF8600] cursor-pointer">Terms of Service</span> and <span className="text-[#FF8600] cursor-pointer">Privacy Policy</span>.</p>

                <p className="text-[#5B6871] text-xs md:text-sm md:p-1 lg:p-2 mt-4 sm:mt-6 md:mt-10 lg:mt-14 xl:mt-16">Already have an account? <span className="text-[#FF8600] cursor-pointer"><Link to={'/login'}>Login</Link></span></p>
            </div>

            <button className="flex items-center gap-1 p-2 md:p-3 lg:p-4 bg-[#FF8600] rounded-3xl ml-auto mt-8 md:mt-10 lg:mt-12 shadow-lg">
                <span className="text-white text-[0.6rem] md:text-xs lg:text-sm">Get Help</span>
                <svg className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1769 13.4428C16.0508 13.5693 15.9542 13.7221 15.894 13.8902C15.8338 14.0583 15.8113 14.2377 15.8284 14.4154C15.9137 15.2382 16.0755 16.0512 16.3116 16.844C14.6177 16.4518 13.5831 15.9976 13.1132 15.7596C12.8467 15.6246 12.5397 15.5927 12.2511 15.6698C11.4236 15.8904 10.5708 16.0014 9.71443 16.0001C4.86214 16.0001 1.21442 12.5916 1.21442 8.71436C1.21442 4.83836 4.86214 1.42864 9.71443 1.42864C14.5667 1.42864 18.2144 4.83836 18.2144 8.71436C18.2144 10.4969 17.4652 12.1508 16.1769 13.4428ZM16.7755 18.1846C17.0632 18.2416 17.3518 18.2938 17.6413 18.3412C17.8841 18.3801 18.0687 18.1275 17.9728 17.9016C17.865 17.6474 17.7661 17.3894 17.6765 17.1281L17.6729 17.116C17.3717 16.2417 17.1264 15.2363 17.0366 14.3001C18.5265 12.8065 19.4287 10.8515 19.4287 8.71436C19.4287 4.01993 15.0791 0.214355 9.71443 0.214355C4.34971 0.214355 0.000139236 4.01993 0.000139236 8.71436C0.000139236 13.4088 4.34971 17.2144 9.71443 17.2144C10.6766 17.2157 11.6347 17.0907 12.5644 16.8428C13.1958 17.1621 14.5546 17.7438 16.7755 18.1846Z" fill="white" />
                </svg>
            </button>
        </div>
    )
}

export default Signup
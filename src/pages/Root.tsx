import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <div className='max-w-[1412px] mx-auto bg-[#F8FAFC] shadow-md h-screen overflow-y-hidden relative'>
            <Outlet />
        </div>
    )
}

export default Root
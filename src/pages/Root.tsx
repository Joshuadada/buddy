import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-[1600px] mx-auto bg-[#F8FAFC] shadow-lg h-screen overflow-y-hidden relative">
      <Outlet />
    </div>
  );
};

export default Root;

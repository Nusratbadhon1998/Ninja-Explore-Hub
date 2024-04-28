import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// bg-[#e5e8ee]
// eeeedd
function MainLayout() {
  return (
    <div className="relative dark:text-white text-stone-100 .dark\:underline ">
      <div className="">
        <Nav></Nav>
      </div>
      {/* <div className='min-h-[calc(100vh-378px)]'> */}
      <div>
        <Outlet></Outlet>
      </div>

      {/* </div> */}
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;

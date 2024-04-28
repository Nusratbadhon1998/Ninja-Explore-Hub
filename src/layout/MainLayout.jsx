import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// bg-[#e5e8ee]
// eeeedd
function MainLayout() {
  return (
    <div className="relative bg-[#160830] text-stone-100 .dark\:underline ">
      
      <div class="relative bg-gradient-to-br from-[#160830] via-[#160830] to-[#160830]">
        <Nav></Nav>
      </div>

      <div>
        <Outlet></Outlet>
      </div>

      {/* </div> */}
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;

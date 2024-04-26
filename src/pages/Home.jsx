import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ninja Explore Hub</title>
      </Helmet>
      <Banner></Banner>
     
    </div>
  );
}

export default Home;

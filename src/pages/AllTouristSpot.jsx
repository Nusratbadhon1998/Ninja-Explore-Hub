import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import { RingLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

function AllTouristSpot() {
  
  const data = useLoaderData();
  if (!data){
    return (
      <div className="flex justify-center items-center border min-h-[400px]">
        <RingLoader
          color="#0c2d57"
          loading={loading}
          size={100}
          speedMultiplier={1}
        />
      </div>
    );
  
   }
 
  const [allSpots, setAllSpots] = useState(data);
  const handleSort = (asc) => {
    if (asc) {
      const sortedSpots = [...allSpots].sort((a, b) =>{
        const aCost=  a.avgCost.slice(0,a.avgCost.length-1)
        const bCost= b.avgCost.slice(0,b.avgCost.length-1)
        return (aCost-bCost)
      });
      setAllSpots(sortedSpots);
    } else {
      const sortedSpots = [...allSpots].sort((a, b) => {
        const aCost=  a.avgCost.slice(0,a.avgCost.length-1)
        const bCost= b.avgCost.slice(0,b.avgCost.length-1)
        return (bCost-aCost)
      });
      setAllSpots(sortedSpots);
    }
  };
  return (
    <div className="my-12">
        <Helmet>
        <title>All Tour Spots</title>
      </Helmet>
      <div className="max-w-6xl mx-auto my-28">
      <div  data-aos="fade-up" data-aos-duration="1200" className="my-12 text-center space-y-6" >
          <h1 className="text-4xl font-bold">Explore Europe's Diverse Tourist Destinations</h1>
          <p className="text-base font-light">Discover the charm of charming villages, indulge in delectable cuisine, and immerse yourself in the timeless beauty of Europe's timeless wonders. Start planning your unforgettable European adventure today!</p>
        </div>
      <div className="dropdown dropdown-top flex justify-center">
       
        <div data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200" tabIndex={0} role="button" className="btn w-72 text-stone-50 bg-gradient-to-r from-[#612bd3] to-[#6e008f]">
          Sort
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-[#6e008f] rounded-box w-52"
        >
          <button className="text-stone-100 font-semibold" onClick={() => handleSort(true)}> Sort By Ascending</button>

          <button className="text-stone-100 font-semibold"  onClick={() => handleSort(false)}>Sort by Descending</button>
        </ul>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
        {allSpots.map((spot) => (
          <TouristSpotCard key={spot._id} info={spot}></TouristSpotCard>
        ))}
      </div>
    </div>
  );
}

export default AllTouristSpot;

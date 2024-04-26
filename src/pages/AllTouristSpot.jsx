import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";

function AllTouristSpot() {
  const data = useLoaderData();
  const [allSpots, setAllSpots] = useState(data);
  const handleSort = (asc) => {
    if (asc) {
      const sortedSpots = [...allSpots].sort((a, b) => a.avgCost - b.avgCost);
      setAllSpots(sortedSpots);
    } else {
      const sortedSpots = [...allSpots].sort((a, b) => b.avgCost - a.avgCost);
      setAllSpots(sortedSpots);
    }
  };
  return (
    <div className="my-12">
      AllTouristSpot:{data.length}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <button onClick={() => handleSort(true)}> Sort By Ascending</button>

          <button onClick={() => handleSort(false)}>sort by desc</button>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {allSpots.map((spot) => (
          <TouristSpotCard key={spot._id} info={spot}></TouristSpotCard>
        ))}
      </div>
    </div>
  );
}

export default AllTouristSpot;

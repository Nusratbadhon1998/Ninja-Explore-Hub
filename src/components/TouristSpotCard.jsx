import React from "react";
import { Link } from "react-router-dom";

function TouristSpotCard({ info }) {
 
  const {
    _id,
    spotName,
    avgCost,
    travelTime,
    seasonality,
    totalVisitor,
    image,
  } = info;
 
  return (
    <div>
        <div className="card w-[90%] md:w-[60%] lg:w-96 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="aspect-[3/2]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {spotName}
          <div className="badge badge-secondary">{seasonality}</div>
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{avgCost}</div>
          <div className="badge badge-outline">{totalVisitor}</div>
          <div className="badge badge-outline">{travelTime}</div>
          <Link to={`/tourist-spot-details/${_id}`} className="btn btn-primary">View Details</Link>

        </div>
      </div>
    </div>
    </div>
    
  );
}

export default TouristSpotCard;

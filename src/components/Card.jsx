import React from 'react'

function Card({info}) {
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
            <div className="card w-96 bg-base-100 shadow-xl">
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
              <button className="btn btn-primary">View Details</button>
    
            </div>
          </div>
        </div>
        </div>
        
      );
  
}

export default Card
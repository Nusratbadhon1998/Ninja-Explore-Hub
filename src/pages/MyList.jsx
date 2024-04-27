import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

function MyList() {

  const data= useLoaderData()
  console.log(data)
  const [info,setInfo]= useState(data)
  const {
    _id,
    userName,
    email,
    country,
    spotName,
    location,
    avgCost,
    travelTime,
    totalVisitor,
    seasonality,
    desc,
    image,
  } = info;
 
  return (
    <div className="overflow-x-auto min-h-96 my-20 max-w-6xl mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
             
            </th>
            <th>Tour Spot Name</th>
            <th>Location</th>
            <th>Average Cost</th>
            <th>Travel Time</th>
            <th></th>
            <th></th>        
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map(d=><tr>
           
           <td>
             <div className="flex items-center gap-3">
               <div className="avatar">
                 <div className="mask mask-squircle w-32 h-32">
                   <img className="w-32 h-32"
                     src={d.image}
                   />
                 </div>
               </div>
              
             </div>
           </td>
           <td>
            {d.spotName}
             <br />
             <span className="badge badge-ghost badge-sm">
               {d.country}
             </span>
           </td>
           <td>{d.location}</td>
           <td>{d.avgCost}</td>
           <td>{d.travelTime}</td>
           <th>
             <button className="btn btn-ghost btn-xs">Update</button>
           </th>
           <th>
             <button className="btn btn-ghost btn-xs">delete</button>
           </th>
         </tr>)}
        
        </tbody>
      
      </table>
    </div>
  );
}

export default MyList;

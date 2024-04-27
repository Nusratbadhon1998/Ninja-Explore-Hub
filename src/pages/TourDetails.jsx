import React from "react";
import { useLoaderData } from "react-router-dom";

function TourDetails() {
  const data = useLoaderData();
 

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
  } = data;
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
      <div className="w-full mx-auto space-y-4 text-center">
        <img src={image} alt="" />
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {spotName}
        </h1>
        <p className="text-sm dark:text-gray-600">
          
          <a
            rel="noopener noreferrer"
            href="#"
            target="_blank"
            className="underline dark:text-violet-600"
          >
            <span itemprop="name">{location}</span>
          </a>
          on
        </p>
      </div>
      <div className="dark:text-gray-800">
        <p>{desc}</p>
        <div>
          <ul>
            <li>{avgCost}</li>
            <li>{travelTime}</li>
            <li>{totalVisitor}</li>
            <li>{seasonality}</li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t dark:border-gray-300">
        <p>Added By</p>
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src="https://source.unsplash.com/75x75/?portrait"
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">{userName}</h4>
            <p className="dark:text-gray-600">
              {email}
            </p>
          </div>
        </div>
        
      </div>
    </article>
  );
}

export default TourDetails;

//

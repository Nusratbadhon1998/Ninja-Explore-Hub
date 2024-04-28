import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { ClimbingBoxLoader, RingLoader } from "react-spinners";

function TourDetails() {
  // const data = useLoaderData();
  const [loading,setLoading]= useState(true)
  const [lists,setLists]= useState([])

  const {id}= useParams()
  useEffect(()=>{
    axios.get(`https://ninja-explore-hub-server.vercel.app/touristSpotsDetails/${id}`)
      .then(data=>{
        setLists(data.data)
        setLoading(false)
      })

  },[])
  if (loading) {
    return (
      <div className="flex justify-center items-center  min-h-[400px]">
        <ClimbingBoxLoader
          color="#6323c6"
          loading={loading}
          size={20}
          speedMultiplier={1}
        />

      </div>
    );
  }

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
  } = lists;
  return (
    <section className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
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
            <span className="flex gap-2 justify-center" itemprop="name">
              <CiLocationOn></CiLocationOn>
              {country}
            </span>
          </a>
        </p>
      </div>
      <div className="dark:text-gray-800">
        <p>{desc}</p>
        <div className="bg-[#261f37] p-5 mt-7 rounded-lg space-y-7 *:flex *:font-semibold">
         
          <div className=" flex *:flex justify-between items-center *:items-center *:gap-1">
            <div>
              <IoPeople></IoPeople>
              {totalVisitor}
            </div>
            <div>
              <CiLocationOn></CiLocationOn>
              {location}
            </div>
          </div>
          <div className="*:flex justify-between items-center *:items-center *:gap-1">
            <div>
              <MdOutlineAttachMoney></MdOutlineAttachMoney>
              {avgCost}
            </div>
            <div>
              <IoMdTime></IoMdTime>
              {travelTime}
            </div>
            <div className="flex gap-1 items-center">
              {seasonality === "Summer" ? (
                <TiWeatherSunny />
              ) : (
                <TiWeatherSnow />
              )}
              {seasonality}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t dark:border-gray-300">
        <p className="mb-2 font-bold">Added By</p>
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src={ "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"}
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">{userName}</h4>
            <p className="dark:text-gray-600">{email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourDetails;

//

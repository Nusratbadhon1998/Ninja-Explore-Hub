import React, { useContext, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const submitCss =
    "block w-full p-3 text-center rounded-lg text-stone-100 bg-[#292524] hover:bg-stone-700 hover:text-stone-50 font-semibold mt-4";

  const labelCss = "block text-stone-900 font-semibold text-base";

  const inputCss =
    "input w-full max-w-xs placeholder:text-sm placeholder:font-semibold placeholder:text-stone-500";

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const country = form.country.value;
    const spotName = form.spotName.value;
    const location = form.location.value;
    const avgCost = form.cost.value;
    const travelTime = form.travelTime.value;
    const totalVisitor = form.totalVisitor.value;
    const seasonality = form.seasonality.value;
    const desc = form.desc.value;

    const info = {
      country,
      spotName,
      location,
      avgCost,
      travelTime,
      totalVisitor,
      seasonality,
      desc,
      image,
    };
    console.log(info);

    fetch(`http://localhost:5000/touristSpots/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Successfully Updated Your Data");
          form.reset();
        }
      });
  };

  return (
    <div className="bg-[url(https://blush.design/api/download?shareUri=aZhNm7MrStKsvxDp&c=Bottom_0%7E342a83_Hair_0%7E2c1b18_Skin_0%7Edcae92_Top_0%7Eff4133&w=800&h=800&fm=png)] bg-opacity-50 bg-no-repeat bg-right">
      <div className="w-3/4 mx-auto my-12">
        <h1 className="text-stone-800 font-bold text-center my-8 text-4xl">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={1}
            typeSpeed={70}
            words={["Update Your Destination!!"]}
          />
        </h1>
      </div>

      <div className="w-[60%] mx-auto bg-stone-400 bg-opacity-35 rounded-lg p-5 mb-4">
        <div className="p-3 m-3 ">
          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 full mx-auto">
              {/* Tourist spot name */}
              <div>
                <label className={labelCss}>Tourist Spot Name</label>
                <input
                  type="text"
                  name="spotName"
                  placeholder="Tourist Spot"
                  className={inputCss}
                  required
                />
              </div>
              {/* Country name */}
              <div>
                <label className={labelCss}>Country Name</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className={inputCss}
                  required
                />
              </div>
              {/* Location */}
              <div>
                <label className={labelCss}>Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="Type here"
                  className={inputCss}
                  required
                />
              </div>
              {/* Avg Cost */}
              <div>
                <label className={labelCss}>Average Cost</label>
                <input
                  name="cost"
                  type="number"
                  placeholder="Avg Cost"
                  className={inputCss}
                  required
                />
              </div>
              {/*  Travel time*/}
              <div>
                <label className={labelCss}>Travel Time</label>
                <input
                  name="travelTime"
                  type="text"
                  placeholder="Travel Time"
                  className={inputCss}
                  required
                />
              </div>
              {/* Total Visit */}
              <div>
                <label className={labelCss}>Total Visitors Per Year</label>
                <input
                  name="totalVisitor"
                  type="number"
                  placeholder="Total Visit"
                  className={inputCss}
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <fieldset className="w-full space-y-1 text-gray-800">
                <label htmlFor="url" className={labelCss}>
                  Photo Url
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-stone-700 text-stone-50 ">
                    https://
                  </span>
                  <input
                    type="text"
                    name="image"
                    id="url"
                    placeholder=""
                    className="flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 text-gray-800  focus:ring-violet-600 input input-bordered w-full max-w-full"
                    required
                  />
                </div>
              </fieldset>
              {/* Seasonality */}
              <div className="block w-full">
                <label className=" text-stone-900 font-semibold text-base">
                  Seasonality:{" "}
                </label>
                <input
                  required
                  className="text-stone-50 font-bold"
                  type="radio"
                  name="seasonality"
                  value="Summer"
                />
                <label className="text-stone-800 font-medium mx-4" htmlFor="html">
                  Summer
                </label>
                <input
                  required
                  type="radio"
                  name="seasonality"
                  value="Winter"
                />
                <label className="text-stone-800 font-medium mx-4" htmlFor="css">
                  Winter
                </label>
              </div>
              {/* Short desc */}
              <div>
                <label className={labelCss}>Short description</label>
                <textarea
                  required
                  className="block w-full"
                  name="desc"
                  id=""
                  cols="20"
                  rows="7"
                ></textarea>
              </div>
            </div>
            {/* Submit btn */}
            <input className={submitCss} type="submit" value="Update Spot" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;

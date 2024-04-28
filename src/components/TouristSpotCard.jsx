import { IoPeople } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

import { MdOutlineAttachMoney } from "react-icons/md";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherSnow } from "react-icons/ti";

import { Link } from "react-router-dom";

function TouristSpotCard({ info }) {
  const {
    _id,
    spotName,
    totalVisitor,
    travelTime,
    avgCost,
    seasonality,
    image,
  } = info;

  return (
    <div className="w-full">
      <div className="card flex flex-col h-full w-full md:w-[90%] lg:w-[60%] xl:w-96 mx-auto bg-[#2b2739] text-stone-100 shadow-xl">
        <figure>
          <img className="aspect-[3/2]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body space-y-3 flex-grow">
          <h2 className="card-title flex-grow">{spotName}</h2>
          <div className=" flex items-center gap-1 ">
            <IoPeople />
            <p> {totalVisitor}</p>
          </div>
          <div className=" *:font-medium flex gap-2 justify-between items-center">
            <div className="flex justify-between gap-4 items-center">
              <div className="flex gap-1 items-center">
                {seasonality === "Summer" ? (
                  <TiWeatherSunny />
                ) : (
                  <TiWeatherSnow />
                )}
                {seasonality}
              </div>
              <div className="flex gap-1 items-center">
                <MdOutlineAttachMoney />
                {avgCost}
              </div>

              <div className="flex gap-1 items-center">
                <IoMdTime />
                <p> {travelTime}</p>
              </div>
            </div>
          </div>
          <div className="card-actions w-full justify-center">
            <Link
              to={`/tourist-spot-details/${_id}`}
              className="btn text-stone-50 bg-gradient-to-r from-[#612bd3] to-[#6e008f] "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristSpotCard;

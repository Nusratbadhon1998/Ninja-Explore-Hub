import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { ClimbingBoxLoader, RingLoader } from "react-spinners";
import { Fade } from "react-awesome-reveal";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      fetch("https://ninja-explore-hub-server.vercel.app/countries")
        .then((res) => res.json())
        .then((data) => {
          {
            setCountries(data);
          }
          setLoading(false);
        });
    };
    getData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center border min-h-[400px]">
        <ClimbingBoxLoader
          color="#292524"
          loading={loading}
          size={20}
          speedMultiplier={1}
        />
      </div>
    );
  }

  return (
    <div className="text-center space-y-6 ">
      <Fade cascade damping={0.1} duration={1000}>
        {" "}
        <h1 className="text-4xl font-bold">Explore Our Destinations</h1>
        <p className="text-base font-medium w-3/4 mx-auto">
          Welcome to our guide to exploring the world's most captivating
          destinations. Whether you're dreaming of wandering through ancient
          cities, relaxing on sun-drenched beaches, or trekking through majestic
          mountains, our curated collection of countries has something for every
          type of traveler.
        </p>
      </Fade>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl *:text-black min-h-[400px] *:h-[300px]"

        data-aos="fade-up"
        data-aos-duration="1000"
        
      >
        <div className="lg:col-span-2 ">
          <CountryCard
            country={countries[0]}
            key={countries[0]._id}
          ></CountryCard>
        </div>
        <div>
          <CountryCard
            country={countries[1]}
            key={countries[1]._id}
          ></CountryCard>
        </div>
        <div>
          <CountryCard
            country={countries[2]}
            key={countries[2]._id}
          ></CountryCard>
        </div>
        <div>
          <CountryCard
            country={countries[3]}
            key={countries[3]._id}
          ></CountryCard>
        </div>
        <div>
          <CountryCard
            country={countries[4]}
            key={countries[4]._id}
          ></CountryCard>
        </div>
        <div>
          <CountryCard
            country={countries[5]}
            key={countries[5]._id}
          ></CountryCard>
        </div>
        <div className="lg:col-span-2">
          <CountryCard
            country={countries[6]}
            key={countries[6]._id}
          ></CountryCard>
        </div>
      </div>
    </div>
  );
}

export default Countries;

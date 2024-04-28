import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { RingLoader } from "react-spinners";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const getData = () => {
      fetch("https://ninja-explore-hub-server.vercel.app/countries")
        .then((res) => res.json())
        .then((data) => {
            {setCountries(data)}
            setLoading(false)
        });
    };
    getData();
  }, []);
  if (loading){
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

  const firstColumn = countries.slice(0, 3);
  const secondColumn = countries.slice(3, 6);

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
    //     {/* {countries.map(country=><CountryCard country={country} key={country._id}></CountryCard>)} */}
     
    // </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl *:text-black min-h-[400px] *:h-[300px] ">
    <div className="col-span-2 "><CountryCard country={countries[0]} key={countries[0]._id}></CountryCard></div>
    <div ><CountryCard country={countries[1]} key={countries[1]._id}></CountryCard></div>
    <div ><CountryCard country={countries[2]} key={countries[2]._id}></CountryCard></div>
    <div ><CountryCard country={countries[3]} key={countries[3]._id}></CountryCard></div>
    <div ><CountryCard country={countries[4]} key={countries[4]._id}></CountryCard></div>
    <div><CountryCard country={countries[5]} key={countries[5]._id}></CountryCard></div>
    <div className="col-span-2"><CountryCard country={countries[6]} key={countries[6]._id}></CountryCard></div>
 
</div>
  );
}

export default Countries;


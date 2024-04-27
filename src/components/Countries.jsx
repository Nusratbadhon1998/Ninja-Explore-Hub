import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getData = () => {
      fetch("https://ninja-explore-hub-server.vercel.app/countries")
        .then((res) => res.json())
        .then((data) => setCountries(data));
    };
    getData();
  }, []);

  const firstColumn = countries.slice(0, 3);
  const secondColumn = countries.slice(3, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
        {countries.map(country=><CountryCard country={country} key={country._id}></CountryCard>)}
     
    </div>
  );
}

export default Countries;

// <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

//
{
  /* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3" >
    {countries.map(country=><CountryCard country={country} key={country._id}></CountryCard>)}
</div> */
}

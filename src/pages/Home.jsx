import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import TouristSpotsContainer from "../components/TouristSpotsContainer";
import { useLoaderData } from "react-router-dom";
import Review from "../components/Review";
import GetInTouch from "../components/GetInTouch";
import Countries from "../components/Countries";

function Home() {
  const data= useLoaderData()
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ninja Explore Hub</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-28">
        <TouristSpotsContainer data={data}></TouristSpotsContainer>
      </div>
      <div>
        <Countries></Countries>
      </div>
      <Review></Review>
      <GetInTouch></GetInTouch>
    </div>
  );
}

export default Home;

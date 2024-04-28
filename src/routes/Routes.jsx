import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import CountrySpotList from "../pages/CountrySpotList";
import TourDetails from "../pages/TourDetails";
import MyList from "../pages/MyList";
import Update from "../pages/Update";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('https://ninja-explore-hub-server.vercel.app/touristSpots')

        
      },
      {
        path: "/all-tourist-spot",
        element:<AllTouristSpot/>,
        loader: ()=>fetch('https://ninja-explore-hub-server.vercel.app/touristSpots')
      },
      {
        path: "/add-tourist-spot",
        element: <PrivateRoute><AddTouristSpot/></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path:'/countries/:countryName',
        element:<CountrySpotList></CountrySpotList>,
        loader: ({params})=>  fetch(`https://ninja-explore-hub-server.vercel.app/countries/${params.countryName}`)
      },
      {
        path:'/tourist-spot-details/:id',
        element:<TourDetails></TourDetails>,
        loader:({params})=>fetch(`https://ninja-explore-hub-server.vercel.app/touristSpotsDetails/${params.id}`)
      },
      {
        path:'/lists',
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,
        // loader:({params})=>fetch(`https://ninja-explore-hub-server.vercel.app/myLists/${params.email}`)
      },
      {
        path:"/update/:id",
        element:<Update></Update>
      }

    ],
  },
]);

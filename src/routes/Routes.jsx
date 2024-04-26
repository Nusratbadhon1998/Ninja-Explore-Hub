import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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


    ],
  },
]);

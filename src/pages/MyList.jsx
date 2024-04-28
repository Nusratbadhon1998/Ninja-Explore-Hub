import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import {  ClimbingBoxLoader } from "react-spinners";
import NoData from "../components/NoData";

function MyList() {
  // const { data, isLoading, refetch } = useData();

  const {user}=useContext(AuthContext)
  const [lists,setLists]=useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`https://ninja-explore-hub-server.vercel.app/myLists/${user.email}`)
      .then(data=>{
        setLists(data.data)
        setLoading(false)
      })

  },[user])

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://ninja-explore-hub-server.vercel.app/touristSpots/${id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          const remaining = lists.filter((list) => list._id !== id);
          setLists(remaining);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "YourList is safe :)",
            icon: "error",
          });
        }
      });
  };

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

  if (lists.length <= 0) {
    return <NoData></NoData>
  }

  return (
    <div className="overflow-x-auto min-h-96 my-20 max-w-6xl mx-auto">
      <table className="table text-stone-100 font-semibold">
        {/* head */}
        <thead className="text-stone-100">
          <tr>
            <th></th>
            <th>Tour Spot Name</th>
            <th>Location</th>
            <th>Average Cost</th>
            <th>Travel Time</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {lists.map((d) => (
            <tr key={d._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-32 h-32">
                      <img className="w-32 h-32" src={d.image} />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {d.spotName}
                <br />
                <span className="badge badge-ghost badge-sm">{d.country}</span>
              </td>
              <td>{d.location}</td>
              <td>{d.avgCost}</td>
              <td>{d.travelTime}</td>
              <th>
                <Link to={`/update/${d._id}`} className="btn text-stone-50 bg-gradient-to-r from-[#612bd3] to-[#6e008f] ">
                  Update
                </Link>
              </th>
              <th>
                <button
                  onClick={() => handleDelete(d._id)}
                  className="btn text-stone-50 bg-gradient-to-r from-[#612bd3] to-[#6e008f] "
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyList;

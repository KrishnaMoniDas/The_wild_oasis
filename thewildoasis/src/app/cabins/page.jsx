"use client";
import CabinAddDialog from "@/app/cabins/components/cabin_add_dialog";
import PopUpMenuButton from "@/app/cabins/components/pop_up_menu_button";
import React from "react";
import { useState } from "react";

export default function cabins() {
  const [sortOrder, setSortOrder] = useState("recent first");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [addDialog, setAddDialog] = useState(false);

  const toggleDialog= ()=>{
    setAddDialog(!addDialog);
  }

  const filters = ["All", "No Discount", "With Discount"];
  const cabins = [
    {id: "001",capacity: "Fits up to 2 guests",price: "350",discount: "25"},
    {id: "001", capacity: "Fits up to 2 guests", price: "450", discount: "-" },
    {id: "001",capacity: "Fits up to 4 guests", price: "100",discount: "30"},
    {id: "002",capacity: "Fits up to 3 guests",price: "200",discount: "15"},
    ];

  const tableTitle = ["", "Cabin", "Capacity", "Price", "Discount", ""];
  const image =
    "https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=";
  return (
    <div className="flex flex-wrap justify-start min-h-screen w-full bg-gray-50 box-border px-5 flex-col" >
      {/* Heading */}
      <div className="p-5 m-5 w-full h-min flex justify-between  flex-col md:flex-row lg:flex-row xl:flex-row">
        <h2 className="text-3xl font-sans font-semibold ">All Cabins</h2>
        <div className="flex flex-row items-center">
          <div className="flex items-center p-1 space-x-2 shadow-sm border bg-white border-white-500 rounded-lg m-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`font-sans font-medium px-4 py-1 rounded-lg transition duration-300 ease-in-out ${
                  selectedFilter === filter
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-800 hover:bg-indigo-600 hover:text-white  "
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div>
            <select
              className="font-sans font-medium px-4 py-2 shadow-sm border border-white-500 m-4  rounded-lg text-gray-800 focus:border-indigo-600 outline-indigo-600"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="recent first">Sort by price (recent first)</option>
              <option value="oldest first">
                Sort by price (earliest first)
              </option>
              <option value="oldest first">Sort by amount (high first)</option>
              <option value="oldest first">Sort by amount (low first)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="h-fit w-9/12 sm:rounded-lg flex flex-col self-center box-border">
        <table className="w-full bg-red-500 text-sm text-left shadow-sm border border-gray-200 rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr key={"tabletitle"}>
              {tableTitle.map((title) => (
                <th scope="col" className="px-6 py-3">
                  <p className="font-bold text-gray-600 font-sans tracking-wide">{title}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white font-sans border border-gray-200 ">
            {cabins.map((booking) => (
              <tr key={booking.email} className="border-gray-200 h-full border">
                <td className="p-1 h-16 whitespace-nowrap text-sm font-medium text-gray-900">
                  <img
                    src={image}
                    alt="image"
                    className=" object-cover h-full w-full rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-semibold font-sans" >
                  {booking.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-sans font-semibold">
                    {booking.capacity}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-sans font-semibold">
                  ${booking.price}.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex align-center justify-start">
                  <p className=" font-semibold text-green-500 font-sans">
                  {booking.discount === '-' ? booking.discount : `$${booking.discount}.00`}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                <PopUpMenuButton/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-indigo-600 text-white font-sans font-semibold w-fit h-fit mt-5 p-3 px-5 rounded" onClick={toggleDialog}>Add More</button>
        {addDialog==true?<CabinAddDialog exit={()=>toggleDialog()}/>:null}
      </div>
      
    </div>
  );
}

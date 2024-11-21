"use client";
import CabinAddDialog from "@/app/cabins/components/cabin_add_dialog";
import PopUpMenuButton from "@/app/cabins/components/pop_up_menu_button";
import React from "react";
import { useState } from "react";
import cabinsData from "./data.jsx";

export default function cabins() {
  const [sortOrder, setSortOrder] = useState("recent first");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [addDialog, setAddDialog] = useState(false);
  const filters = ["All", "No Discount", "With Discount"];
  const tableTitle = ["", "Cabin", "Capacity", "Price", "Discount", ""];
  const [cabins, setCabins] = useState(cabinsData);

  const toggleDialog = () => {
    setAddDialog(!addDialog);
  };
  //Filter
  const filterCabinsByNoDiscount = () => {
    const noDiscountCabins = cabinsData.filter(
      (cabin) => cabin.discount === null || cabin.discount <= 0
    );
    setCabins(noDiscountCabins);
  };

  const showAllCabins = () => {
    setCabins(cabinsData);
  };

  const filterCabinsByDiscount = () => {
    const sortedCabins = cabinsData
      .filter((cabin) => cabin.discount !== null && cabin.discount > 0)
      .sort((a, b) => b.discount - a.discount);

    setCabins(sortedCabins);
    console.log(cabins.map((e) => e.discount));
  };

  const filterButton = (title) => {
    if (title == filters[0]) {
      showAllCabins();
    } else if (title == filters[1]) {
      filterCabinsByNoDiscount();
    } else {
      filterCabinsByDiscount();
    }
  };

  // Sort cabins by price, either in ascending or descending order
  const sortCabins = (order) => {
    let sorted = [...cabinsData];

    if (order === "highest first") {
      // Sort by price (highest to lowest)
      sorted = sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (order === "lowest first") {
      // Sort by price (lowest to highest)
      sorted = sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (order === "highest first-discount") {
      // Sort by discount (highest to lowest)
      sorted = sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    } else if (order === "lowest first-discount") {
      // Sort by discount (lowest to highest)
      sorted = sorted.sort((a, b) => (a.discount || 0) - (b.discount || 0));
    }

    setCabins(sorted); // Update the state with the sorted cabins
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    sortCabins(e.target.value); // Sort the cabins based on selected option
  };

  const image =
    "https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=";
  return (
    <div className="flex flex-wrap justify-start min-h-screen w-full bg-gray-50 box-border px-5 flex-col">
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
                    ? "bg-indigo-600 text-white "
                    : "bg-white text-gray-800 hover:bg-indigo-600 hover:text-white"
                }`}
                
                onClick={() => filterButton(filter)} 
              >
                {filter}
              </button>
            ))}
          </div>
          <div>
            <select
              className="font-sans font-medium px-4 py-2 shadow-sm border border-white-500 m-4  rounded-lg text-gray-800 focus:border-indigo-600 outline-indigo-600"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="highest first">
                Sort by price (Highest first)
              </option>
              <option value="lowest first">Sort by price (Lowest first)</option>
              <option value="highest first-discount">
                Sort by Discount (Highest first)
              </option>
              <option value="lowest first-discount">
                Sort by Discount (Lowest first)
              </option>
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
                  <p className="font-bold text-gray-600 font-sans tracking-wide">
                    {title}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white font-sans border border-gray-200 ">
            {cabins.map((e) => (
              <tr key={e.email} className="border-gray-200 h-full border">
                <td className="p-1 h-16 whitespace-nowrap text-sm font-medium text-gray-900">
                  <img
                    src={image}
                    alt="image"
                    className=" object-cover h-full w-full rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-semibold font-sans">
                  {e.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-sans font-semibold">
                    Fits up to {e.capacity} guests
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-sans font-semibold">
                  ${e.price}.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex align-center justify-start">
                  <p className=" font-semibold text-green-500 font-sans ">
                    {e.discount !== null &&
                    e.discount !== "" &&
                    e.discount != "-"
                      ? `$${e.discount}.00`
                      : "-"}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                  <PopUpMenuButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="bg-indigo-600 text-white font-sans font-semibold w-fit h-fit mt-5 p-3 px-5 rounded"
          onClick={toggleDialog}
        >
          Add More
        </button>
        {addDialog == true ? (
          <CabinAddDialog exit={() => toggleDialog()} />
        ) : null}
      </div>
    </div>
  );
}

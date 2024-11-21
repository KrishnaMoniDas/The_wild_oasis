import React, { useState } from "react";
import cabinsData from "../data";

export default function CabinAddDialog({ exit }) {

  const [data, setData]= useState(cabinsData)
  const [formData, setFormData] = useState({
    cabinName: null,
    maximumCapacity: null,
    price: null,
    discount: null,
    description: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const register = () => {
    setData( data.push(formData))
    exit();
  };

  return (
    <div className="w-full h-full flex align-middle justify-center bg-transparent absolute top-0 left-0 backdrop-blur-sm bg-blend-multiply">
      <div className="relative flex flex-col self-center justify-self-center bg-white p-8 w-1/2 shadow-2xl rounded-sm">
        <button
          className="absolute top-2 right-5 hover:bg-gray-50"
          onClick={exit}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div>
          <div className="border-b-2 flex flex-row py-3 ">
            <p className="font-sans font-medium text-grey-600 mr-6 w-3/12">
              Cabin Name
            </p>

            <input
              name="cabinName"
              type="text"
              className="px-4 py-2 border-2 rounded-md focus:outline-indigo-600"
              value={formData.cabinName}
              onChange={handleInputChange}
            />
          </div>
          <div className="border-b-2 flex flex-row py-3 ">
            <p className="font-sans font-medium text-grey-600 mr-6 w-3/12">
              Maximum Capacity
            </p>

            <input
              type="number"
              name="maximumCapacity"
              className="px-4 py-2 border-2 rounded-md focus:outline-indigo-600"
              value={formData.maximumCapacity}
              onChange={handleInputChange}
            />
          </div>
          <div className="border-b-2 flex flex-row py-3 ">
            <p className="font-sans font-medium text-grey-600 mr-6 w-3/12">
              Price
            </p>

            <input
              type="number"
              name="price"
              className="px-4 py-2 border-2 rounded-md focus:outline-indigo-600"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="border-b-2 flex flex-row py-3 ">
            <p className="font-sans font-medium text-grey-600 mr-6 w-3/12">
              Discount
            </p>

            <input
              type="number"
              name="discount"
              className="px-4 py-2 border-2 rounded-md focus:outline-indigo-600"
              value={formData.discount}
              onChange={handleInputChange}
            />
          </div>
          <div className="border-b-2 flex flex-row py-3 ">
            <p className="font-sans font-medium text-grey-600 mr-6 w-3/12">
              Description
            </p>

            <textarea
              name="description"
              className="px-4 py-2 border-2 rounded-md focus:outline-indigo-600"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="border-b-2 flex flex-row py-3 ">
            <p className="font-sans font-medium text-grey-600 mr-6 w-3/12">
              Cabin Photo
            </p>
            <input
              type="file"
              className="file:bg-indigo-600 file:text-white file:border-0 file:px-3 file:py-2 file:rounded-md file:mr-3 file:cursor-pointer font-sans font-medium"
            />
          </div>
          <div className="flex align-middle justify-end p-3">
            <button
              className="border-2 border-gray-300 px-3 py-1 rounded-md font-sans font-normal"
              onClick={exit}
            >
              Cancel
            </button>
            <button
              className="border-0 bg-indigo-600 px-3 py-1 text-white font-sans font-medium ml-3 rounded-md"
              onClick={register}
            >
              Create New Cabin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

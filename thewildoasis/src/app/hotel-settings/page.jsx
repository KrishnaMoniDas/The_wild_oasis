"use client";

import React from "react";

export default function HotelSettings() {
    // State to hold form values
    const [formValues, setFormValues] = React.useState({
      minNights: 5,
      maxNights: 90,
      maxGuests: 8,
      breakfastPrice: 15,
    });
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Updated settings:", formValues);
      alert("Hotel settings updated successfully!");
    };
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-2xl mx-auto p-8 bg-white text-gray-700 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-6">Update Hotel Settings</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="minNights" className="block font-medium mb-2">
                    Minimum nights/booking
                    </label>
                    <input
                    type="number"
                    id="minNights"
                    name="minNights"
                    value={formValues.minNights}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="maxNights" className="block font-medium mb-2">
                    Maximum nights/booking
                    </label>
                    <input
                    type="number"
                    id="maxNights"
                    name="maxNights"
                    value={formValues.maxNights}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="maxGuests" className="block font-medium mb-2">
                    Maximum guests/booking
                    </label>
                    <input
                    type="number"
                    id="maxGuests"
                    name="maxGuests"
                    value={formValues.maxGuests}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="breakfastPrice" className="block font-medium mb-2">
                    Breakfast price
                    </label>
                    <input
                    type="number"
                    id="breakfastPrice"
                    name="breakfastPrice"
                    value={formValues.breakfastPrice}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                    Update Settings
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
  }
  
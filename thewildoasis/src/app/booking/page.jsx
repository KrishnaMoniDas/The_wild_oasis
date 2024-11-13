"use client"
import { useState } from 'react';
import React from 'react';

const bookings = [
  { id: '001', guest: 'Aziz Maghsoumi', email: 'azizmasoomil@gmail.com', date: 'Oct 31 2029 - Nov 02 2029', nights: 2, status: 'UNCONFIRMED', amount: 800 },
  { id: '001', guest: 'Vishal Bhati', email: 'vishalbhatipersonal@gmail.com', date: 'Sep 18 2029 - Sep 21 2029', nights: 3, status: 'UNCONFIRMED', amount: 1200 },
  { id: '001', guest: 'Nikita Ermolenko', email: 'nimanikita@gmail.com', date: 'Jul 04 2029 - Jul 07 2029', nights: 3, status: 'UNCONFIRMED', amount: 1200 },
  { id: '002', guest: 'tt tt', email: 'ttt741271@gmail.com', date: 'May 09 2029 - May 12 2029', nights: 3, status: 'UNCONFIRMED', amount: 975 },
  { id: '002', guest: 'ttHHIUH', email: 'ttt1271@gmail.com', date: 'May 09 2029 - May 12 2029', nights: 3, status: 'CHECKED-IN', amount: 975 },
];



export default function Booking() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('recent first');

  const filters = ['All', 'Checked out', 'Checked in', 'Unconfirmed'];
 


  return (
    
    <div className=" flex flex-wrap   min-h-screen  items-center justify-between gap-2 p-6 bg-gray-50 border-b border-gray-200">
      <h1 className="text-2xl font-semibold text-gray-800">All bookings</h1>
      <div className="flex items-center p-1 space-x-2 shadow-sm border bg-white border-white-500 rounded-lg">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-1 rounded-lg ${
              selectedFilter === filter
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 hover:bg-blue-600 hover:text-white'
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div>
        <select
          className="px-4 py-2 shadow-sm border border-white-500 rounded-lg text-gray-800"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="recent first">Sort by date (recent first)</option>
          <option value="oldest first">Sort by date (earliest first)</option>
          <option value="oldest first">Sort by amount (high first)</option>
          <option value="oldest first">Sort by amount (low first)</option>
        </select>
      </div>


      
      <div className="m-4 bg-white shadow-md rounded-lg overflow-x-auto w-full ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CABIN</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GUEST</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATES</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.email}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{booking.guest}</div>
                  <div className="text-sm text-gray-500">{booking.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.date} → {booking.nights} night stay
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${booking.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    

 
  );
}


  


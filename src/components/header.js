import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import { IoMdList } from "react-icons/io";


const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md h-20 p-6">
      {/* Search Box */}
      <div className="relative w-[50%]">
        <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 me-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-lg rounded-lg block w-full pl-10 py-2"
          placeholder="Search ..."
          required
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pr-3"></button>
      </div>

      {/* Notification Icon */}
      <div className="flex items-center gap-4">
        <div className=''>
          <button type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-black rounded-lg border border-gray-300">
            <FaBell className="text-lg mr-2 text-gray-600 cursor-pointer" />
            Notification
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center">
          <img
            src="/1image.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-bold text-gray-700">John Doe</p>
            <p className="text-sm font-semibold text-gray-400 -mt-1">johndoe@example.com</p>
          </div>
        </div>

        {/* Dashboard Icon */}
        <div className="relative">
          <IoMdList className="text-3xl text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;

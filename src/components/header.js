import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4">
      {/* Search Box */}
      <div className="flex items-center">
        <FaSearch className="text-gray-600 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Notification Icon */}
      <div className="flex items-center">
        <div className="relative mr-4">
          <FaBell className="text-2xl text-gray-600 cursor-pointer" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
        </div>

        {/* Profile Info */}
        <div className="flex items-center">
          <img
            src="/1image.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-semibold text-gray-700">John Doe</p>
            <p className="text-sm text-gray-500">johndoe@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

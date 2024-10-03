import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const AMCReport = () => {
  return (
    <div className="pb-20 ">
      {/* Upper Heading with Button */}
      <div className="flex flex-row items-center justify-between">
        <h1 className="flex items-center align-middle text-sm sm:text-xl font-semibold text-black">
          <MdOutlineKeyboardArrowLeft className="text-3xl text-black" />
          <span className="pl-2 text-2xl">AMC Records</span>
        </h1>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-5 pt-6">
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Slip No
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              placeholder="Enter slip no"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date
            </label>

            <input
              type="date"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              placeholder="Enter date"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              placeholder="Enter Name"
              required
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between pt-6">
          <h1 className="flex items-center align-middle text-sm sm:text-xl font-semibold text-black">
            <span className="pl-2 text-2xl">Monthly</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Month
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
            >
              <option selected>Select</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Total No. of visits/month
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              placeholder="Enter total No. of visits/month"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Actual visits/month
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              placeholder="Enter Actual visits/month"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Balance
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                placeholder="Enter Balance"
                required
              />
            </div>
          </div>
        </div>
      </form>
      <div className=" flex float-end text-right mt-8">
          <button
            type="submit"
            className="text-[#7162A7] bg-[#FFFFFF] border border-[#7162A7] hover:bg-[#7162A7] hover:text-[#FFFFFF] hover:border-[#7162A7] transition-all duration-300 ease-in-out focus:ring-4 focus:ring-[#7162A7] font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white ml-4 bg-[#7162A7] border hover:bg-[#FFFFFF] hover:text-[#7162A7] hover:border-[#7162A7] transition-all duration-300 ease-in-out focus:ring-4 focus:ring-[#7162A7] font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Next
          </button>
        </div>
    </div>
  );
};

export default AMCReport;

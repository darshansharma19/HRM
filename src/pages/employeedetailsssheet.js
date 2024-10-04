import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const EmployeeDetailssheet = () => {
  return (
    <div className=" pb-20">
      {/* Upper Heading with Button */}
      <div className="flex flex-row items-center justify-between">
        <h1 className="flex items-center align-middle text-sm sm:text-xl font-semibold text-black">
          <MdOutlineKeyboardArrowLeft className="text-3xl text-black" />
          <span className="pl-2 text-2xl">Employee Details Sheet</span>
        </h1>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-5 pt-6">
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
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Role
            </label>

            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              placeholder="Enter Role"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mobile No
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              placeholder="Enter Mobile No"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Id Proof
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              placeholder="Enter Id Proof"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Govt. Holiday list
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
            >
              <option selected>List of Holiday With Name</option>
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
              Total No Of Govt. Holiday
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              placeholder="Enter Total No Of Govt. Holiday"
              required
            />
          </div>
          <div className="">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Total Holiday by Company
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
              placeholder="Enter Total Holiday by Company"
              required
            />
          </div>
        </div>
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
      </form>
    </div>
  );
};

export default EmployeeDetailssheet;

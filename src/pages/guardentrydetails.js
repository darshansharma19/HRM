import React from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const GuardEntryDetails = () => {
  return (
    <div className=''>
      {/* Upper Heading with Button */}
      <div className="flex flex-row items-center justify-between">
        <h1 className="flex items-center align-middle text-sm sm:text-xl font-semibold text-black">
          <MdOutlineKeyboardArrowLeft className="text-3xl text-black" />
          <span className="pl-2 text-2xl">Guard Entry Details</span>
        </h1>

        {/* <div className="flex items-center gap-4">
          <div>
            <form className="flex items-center gap-4">
              <select id="default" className="bg-gray-50 border text-[#7162A7] font-semibold border-[#7162A7] text-sm rounded-lg block w-full p-2.5">
                <option selected>Post</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <select id="default" className="bg-gray-50 border text-[#7162A7] font-semibold border-[#7162A7] text-sm rounded-lg block w-full p-2.5">
                <option selected>Department</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <select id="default" className="bg-gray-50 border text-[#7162A7] font-semibold border-[#7162A7] text-sm rounded-lg block w-full p-2.5">
                <option selected>Shift</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          <div>
            <button
              type="button"
              className="text-white font-semibold border-[#7162A7] text-sm hover:text-[#7162A7] border bg-[#7162A7] hover:bg-[#FFFFFF] rounded-lg px-8 py-2.5 text-center"
            >
              Apply
            </button>
          </div>
        </div> */}
      </div>
      <form >
        <div className="grid grid-cols-2 gap-5 pt-6">
          <div className="">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">In Time</label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              placeholder="Enter in time"
              required
            />
          </div>
          <div className="">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Dress Code</label>
            <div className='flex items-center'>
              <div class="flex items-center">
                <input id="dresscode-radio-1" type="radio" value="" name="dresscode-radio" class="w-4 h-4 cursor-pointer text-[#7162A7]"
                ></input>
                <label for="dresscode-radio-1" class="ms-2 text-sm font-medium cursor-pointer">Yes</label>
              </div>
              <div class="flex items-center cursor-pointer ml-4">
                <input checked id="dresscode-radio-2" type="radio" value="" name="dresscode-radio" class="w-4 h-4 text-[#7162A7] cursor-pointer"></input>
                <label for="dresscode-radio-2" class="ms-2 text-sm font-medium cursor-pointer">No</label>
              </div>
            </div>
          </div>
          <div className="">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Dress Code</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required />
          </div>
          <div className="">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter mobile no" required />
          </div>
          <div className="">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Mobile Submit</label>
            <div className='flex items-center'>
              <div class="flex items-center">
                <input id="mobilesubmit-radio-1" type="radio" value="" name="mobilesubmit-radio" class="w-4 h-4 cursor-pointer text-[#7162A7]"
                ></input>
                <label for="mobilesubmit-radio-1" class="ms-2 text-sm font-medium cursor-pointer">Yes</label>
              </div>
              <div class="flex items-center cursor-pointer ml-4">
                <input checked id="mobilesubmit-radio-2" type="radio" value="" name="mobilesubmit-radio" class="w-4 h-4 text-[#7162A7] cursor-pointer"></input>
                <label for="mobilesubmit-radio-2" class="ms-2 text-sm font-medium cursor-pointer">No</label>
              </div>
            </div>
          </div>
          <div className="">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Photo</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required />
          </div>
          <div className="">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Agreement</label>
            <div className='flex items-center'>
              <div class="flex items-center">
                <input id="agreement-radio-1" type="radio" value="" name="agreement-radio" class="w-4 h-4 cursor-pointer text-[#7162A7]"
                ></input>
                <label for="agreement-radio-1" class="ms-2 text-sm font-medium cursor-pointer">Yes</label>
              </div>
              <div class="flex items-center cursor-pointer ml-4">
                <input checked id="agreement-radio-2" type="radio" value="" name="agreement-radio" class="w-4 h-4 text-[#7162A7] cursor-pointer"></input>
                <label for="agreement-radio-2" class="ms-2 text-sm font-medium cursor-pointer">No</label>
              </div>
            </div>
          </div>
        </div>
        <div className=' flex float-end text-right mt-4'>

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
            Submit
          </button>



        </div>
      </form>

    </div>
  );
};

export default GuardEntryDetails;
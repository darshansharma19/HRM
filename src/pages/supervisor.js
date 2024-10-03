import React from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const SupervisorReview = () => {
  return (
    <div className=''>
      {/* Upper Heading with Button */}
      <div className="flex flex-row items-center justify-between">
        <h1 className="flex items-center align-middle text-sm sm:text-xl font-semibold text-black">
          <MdOutlineKeyboardArrowLeft className="text-3xl text-black" />
          <span className="pl-2 text-2xl">Supervisor Review</span>
        </h1>
      </div>
      <form >
        <div className="grid grid-cols-2 gap-5 pt-8 pb-12">
          <div className="">
          <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Person Required</label>
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
        </div>
        <div className=' flex float-end text-right mt-4'>

          <button
            type="submit"
            className="text-[#7162A7] bg-[#FFFFFF] border border-[#7162A7] hover:bg-[#7162A7] hover:text-[#FFFFFF] hover:border-[#7162A7] transition-all duration-300 ease-in-out focus:ring-4 focus:ring-[#7162A7] font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Back
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

export default SupervisorReview;
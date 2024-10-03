import React, { useState, useEffect } from "react"; 

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const ProfileCard = ({ name, job, image, label }) => {
  return (
    <div>
      <div className="w-[210px] h-auto py-4 px-6 border rounded-md bg-white">
        <div className="flex justify-between">
          <div className="h-[50px] w-[50px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <span className="px-2 py-1 rounded-xl text-[#309CA3] text-[12px] font-medium bg-[#D8F3F2]">
              {label}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-sm pt-3">{name}</h3>
          <span className="text-sm text-gray-400 -mt-2">{job}</span>
        </div>
      </div>
    </div>
  );
};

// Main component
const GuardAttendance = () => {
  const [profiles, setProfiles] = useState([]); 

  // Fetch dummy profile data
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        name: "Darshan Developer",
        job: "Ethical Hacker",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Day",
      },
      {
        id: 2,
        name: "John Smith",
        job: "Software Engineer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Week",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
      {
        id: 3,
        name: "Jane Doe",
        job: "UX Designer",
        image:
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        label: "Month",
      },
    ];

    setProfiles(dummyData); // Set the dummy data
  }, []);

  return (
    <div className="bg-[#F5F7FF] shadow-md rounded-2xl">
      <div className="p-6">
        {/* Upper Heading with Button */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="flex items-center align-middle text-sm sm:text-xl font-semibold text-black">
            <MdOutlineKeyboardArrowLeft className="text-3xl text-black" />
            <span className="pl-2 text-2xl">Guard Attendance</span>
          </h1>

          <div className="flex items-center gap-4">
            <div>
              <form className="flex items-center gap-4">
                <select
                  id="default"
                  className="bg-gray-50 border text-[#7162A7] font-semibold border-[#7162A7] text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected>Post</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="default"
                  className="bg-gray-50 border text-[#7162A7] font-semibold border-[#7162A7] text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected>Department</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="default"
                  className="bg-gray-50 border text-[#7162A7] font-semibold border-[#7162A7] text-sm rounded-lg block w-full p-2.5"
                >
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
          </div>
        </div>

        {/* Attendance Layout */}
        <div className="bg-[#F5F7FF] rounded-2xl pt-4">
          <div>
            {/* Profiles List */}
            <div className="flex flex-wrap gap-6">
              {profiles.map((profile) => (
                <ProfileCard key={profile.id} {...profile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuardAttendance;

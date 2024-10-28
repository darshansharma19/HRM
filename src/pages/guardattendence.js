import React, { useState, useEffect } from "react";
import { format } from "date-fns";

// Profile Card Component
const ProfileCard = ({ profile, onSwitchIn }) => {
  const [hovered, setHovered] = useState(false);
  const [inPressed, setInPressed] = useState(false);

  const handleInPress = () => {
    setInPressed(true);
    onSwitchIn(profile.id);
  };

  return (
    <div
      className={`w-[210px] h-auto py-4 px-6 border rounded-md ${inPressed ? "bg-green-200" : "bg-white"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between">
        <div className="h-[50px] w-[50px]">
          <img src={profile.image} alt={profile.name} className="w-full h-full rounded-full" />
        </div>
        <div>
          <span className="px-2 py-1 rounded-xl text-[#309CA3] text-[12px] font-medium bg-[#D8F3F2]">
            {profile.label}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-sm pt-3">{profile.name}</h3>
        <span className="text-sm text-gray-400 -mt-2">{profile.job}</span>
      </div>
      {hovered && !inPressed && (
        <button onClick={handleInPress} className="bg-blue-500 text-white py-1 px-4 rounded mt-3">
          In
        </button>
      )}
    </div>
  );
};

// Main Component
const GuardAttendance = () => {
  const [profiles, setProfiles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [visitorDetails, setVisitorDetails] = useState({ name: "", submitTo: "supervisor" });
  const [visitorsList, setVisitorsList] = useState([]);

  useEffect(() => {
    const dummyData = [
      { id: 1, name: "Darshan Sharma", job: "Ethical Hacker", image: "https://img.freepik.com/premium-photo/young-businessman-isolated-white_53419-207.jpg", label: "Day" },
      { id: 2, name: "Aditya Bhai", job: "Software Engineer", image: "https://tse1.mm.bing.net/th?id=OIP.8hvRlwDsWXU65DezzDLnsAHaE8&pid=Api&P=0&h=180", label: "Week" },
      { id: 3, name: "Daksh Sir", job: "UX Designer", image: "https://tse4.mm.bing.net/th?id=OIP.KH28LdqvEHYYXcMD_DOLCwHaHi&pid=Api&P=0&h=180", label: "Month" },
    ];
    setProfiles(dummyData);
  }, []);

  const handleSwitchIn = (id) => {
    setShowForm(true);
    const selectedProfile = profiles.find((profile) => profile.id === id);
    setVisitorDetails({ ...visitorDetails, name: selectedProfile.name });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newVisitor = {
      ...visitorDetails,
      date: format(new Date(), "yyyy-MM-dd"),
      inTime: format(new Date(), "HH:mm"),
      outTime: "",
      gatePassNo: Math.floor(Math.random() * 1000000).toString(),
      action: "Pending Exit",
    };
    setVisitorsList([...visitorsList, newVisitor]);
    setShowForm(false);
    setVisitorDetails({ name: "", submitTo: "supervisor" });
  };

  const handleActionChange = (index, action) => {
    const updatedList = visitorsList.map((visitor, i) => 
      i === index 
        ? { 
            ...visitor, 
            action, 
            outTime: action === "Exit" ? format(new Date(), "HH:mm") : visitor.outTime 
          } 
        : visitor
    );
    setVisitorsList(updatedList);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Guard Attendance</h1>
      <div className="grid grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} onSwitchIn={handleSwitchIn} />
        ))}
      </div>

      {showForm && (
        <form onSubmit={handleFormSubmit} className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="font-semibold mb-2">Enter Visitor Details</h3>
          <label className="block mb-2">Name: {visitorDetails.name}</label>
          <label className="block mb-2">Date: {format(new Date(), "yyyy-MM-dd")}</label>
          <label className="block mb-2">Time: {format(new Date(), "HH:mm")}</label>
          <select
            className="block mb-2 p-2 border rounded"
            value={visitorDetails.submitTo}
            onChange={(e) => setVisitorDetails({ ...visitorDetails, submitTo: e.target.value })}
          >
            <option value="supervisor">Submit to Supervisor</option>
            <option value="jrManager">Submit to Jr Manager</option>
          </select>
          <button type="submit" className="bg-green-500 text-white py-1 px-4 rounded">Generate Gate Pass</button>
        </form>
      )}

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Visitor Listing</h2>
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Gate Pass No</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">In Time</th>
              <th className="border px-4 py-2">Out Time</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {visitorsList.map((visitor, index) => (
              <tr key={index} className="border-b">
                <td className="border px-4 py-2">{visitor.name}</td>
                <td className="border px-4 py-2">{visitor.gatePassNo}</td>
                <td className="border px-4 py-2">{visitor.date}</td>
                <td className="border px-4 py-2">{visitor.inTime}</td>
                <td className="border px-4 py-2">{visitor.outTime || "--"}</td>
                <td className="border px-4 py-2">
                  <select
                    value={visitor.action}
                    onChange={(e) => handleActionChange(index, e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option value="Pending Exit" disabled>Pending Exit</option>
                    <option value="Exit">Exit</option>
                    <option value="Break">Break</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuardAttendance;

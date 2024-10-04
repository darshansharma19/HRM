import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaFileAlt,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight,
  FaUserShield,
  FaUsers,
  FaUserTie,
  FaUserCheck,
  FaChartLine,
  FaExclamationCircle,
  FaPeopleCarry,
  FaToolbox,
  FaUserAlt,
  FaUserClock,
  FaUmbrellaBeach,
  FaSignInAlt,
  FaCalendarAlt,
  FaExchangeAlt,
  FaTruck,
  FaIdBadge,
  FaThList,
} from "react-icons/fa";

import '../App.css'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // To toggle sidebar collapse
  const [openMenu, setOpenMenu] = useState(""); // To handle submenu open/close
  const [, setOpenSubMenu] = useState(""); // To handle sub-dropdown inside menu

  // Function to toggle the main menu
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
    setOpenSubMenu(""); // Close sub-menu when switching main menu
  };

  return (
    <div
      className={`flex flex-col h-screen bg-[#7162A7] text-gray-300 transition-width duration-300 ${isOpen ? "w-64" : "w-20"
        } shadow-lg`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center h-20 bg-white py-2">
        <span className="cursor-pointer h-[100%]" onClick={() => setIsOpen(!isOpen)}>
          <img
            src="/findriya-logo.png"
            alt="Logo"
            className={`h-full w-auto ${isOpen ? "block" : "hidden"} md:block`}
          />
          <img
            src="/nexinfotech.png"
            alt="Small Logo"
            className={`h-full w-auto ${isOpen ? "hidden" : "block"} md:hidden`}
          />
        </span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto sideBarScrollBar">
        <ul className="px-2 py-4">
          {/* Dashboard */}
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="flex items-center p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaTachometerAlt className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                Dashboard
              </span>
            </Link>
          </li>

          {/* Attendance Menu */}
          <li className="mb-4">
            <div
              onClick={() => toggleMenu("attendance")}
              className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all"
            >
              <div className="flex items-center">
                <FaClipboardList className="text-xl" />
                <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                  Attendance
                </span>
              </div>
              {isOpen && (
                <span className="mr-2 transition-transform duration-300">
                  {openMenu === "attendance" ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
            </div>

            <ul
              className={`${openMenu === "attendance" ? "block" : "hidden"
                } pl-8 mt-2`}
            >
              {/* Employee Enquiry */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/employee-enquiry" className="flex items-center">
                  <FaUserAlt className="text-lg mr-2" />
                  Employee Enquiry
                </Link>
              </li>
              {/* Working Employee */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/working-employee" className="flex items-center">
                  <FaUserClock className="text-lg mr-2" />
                  Working Employee
                </Link>
              </li>
              {/* Holidays */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/holidays" className="flex items-center">
                  <FaUmbrellaBeach className="text-lg mr-2" />
                  Holidays
                </Link>
              </li>
              {/* Resign */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/resign" className="flex items-center">
                  <FaSignInAlt className="text-lg mr-2" />
                  Resign
                </Link>
              </li>
              {/* Rejoin */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/rejoin" className="flex items-center">
                  <FaCalendarAlt className="text-lg mr-2" />
                  Rejoin
                </Link>
              </li>
              {/* Leave */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/leave" className="flex items-center">
                  <FaUmbrellaBeach className="text-lg mr-2" />
                  Leave
                </Link>
              </li>
              {/* Transfer */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/transfer" className="flex items-center">
                  <FaExchangeAlt className="text-lg mr-2" />
                  Transfer
                </Link>
              </li>
              {/* Chalan */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/chalan" className="flex items-center">
                  <FaTruck className="text-lg mr-2" />
                  Chalan
                </Link>
              </li>
              {/* Permission */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/permission" className="flex items-center">
                  <FaIdBadge className="text-lg mr-2" />
                  Permission
                </Link>
              </li>
            </ul>
          </li>

          {/* Monthly Report */}
          <li className="mb-4">
            <div
              onClick={() => toggleMenu("monthlyReport")}
              className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all"
            >
              <div className="flex items-center">
                <FaFileAlt className="text-xl" />
                <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                  Monthly Report
                </span>
              </div>
              {isOpen && (
                <span className="mr-2 transition-transform duration-300">
                  {openMenu === "monthlyReport" ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
            </div>

            <ul
              className={`${openMenu === "monthlyReport" ? "block" : "hidden"
                } pl-8 mt-2`}
            >
              {/* Employee Details */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/employee-details" className="flex items-center">
                  <FaIdBadge className="text-lg mr-2" />
                  Employee Details
                </Link>
              </li>
              {/* Main Sheet */}
              <li className="flex items-center justify-between p-2 hover:bg-[#3CC3BD] hover:text-white rounded-md cursor-pointer transition-all">
                <Link to="/main-sheet" className="flex items-center">
                  <FaThList className="text-lg mr-2" />
                  Main Sheet
                </Link>
              </li>
            </ul>
          </li>

          {/* Other Menu Items */}
          <li className="mb-4">
            <Link
              to="/guard-enquires"
              className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaUserShield className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                Guard Enquiries
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/supervisor-review"
              className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaUsers className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                Supervisor Review
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/guard-entry-details"
              className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaUserTie className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                Guard Entry Details
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/guard-attendance"
              className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaUserCheck className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                Guard Attendance
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/weekly-reports"
              className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaChartLine className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                Weekly Reports
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/complaints"
              className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaExclamationCircle className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                Complaints
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/bike-person-details"
              className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaPeopleCarry className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                Bike Person Details
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/amc-report"
              className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
            >
              <FaToolbox className="text-xl" />
              <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
                AMC Records
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4">
        <Link
          to="/logout"
          className="flex items-center p-2  hover:bg-[#3CC3BD] hover:text-white rounded-md transition-all"
        >
          <FaSignOutAlt className="text-xl" />
          <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

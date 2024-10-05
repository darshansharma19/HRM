import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Dashboard from "./pages/Dashboard";
import SupervisorReview from "./pages/supervisor";
import BikePersonDetails from "./pages/bikepersondetails";
import GuardAttendance from "./pages/guardattendence";
import WeeklyReport from "./pages/weeklyreport";
import AMCReport from "./pages/amc";
import GuardEntryDetails from "./pages/guardentrydetails";
import GuardEnquiryList from "./pages/guardenquirylist";
import EmployeeDetailssheet from "./pages/employeedetailsssheet";
import MonthlyMainSheet from "./pages/monthlymainsheet";
import EmployeeEnquiryList from "./pages/employeeenquirylist";
import EmployeeWorkingList from "./pages/employeeworkinglist";
import EmployeeHolidayList from "./pages/employeeholidaylist";
import EmployeePermissionList from "./pages/employeepermissionlist";
import EmployeeChalanList from "./pages/employeechalanlist";
import EmployeeTransferList from "./pages/employeetransferlist";
import EmployeeLeaveList from "./pages/employeeleavelist";
import EmployeeRejoinList from "./pages/employeerejoinlist";
import EmployeeResignList from "./pages/employeeresignlist";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Header />

          <div className="flex-1 p-6 bg-gray-300">
            <div className="p-6 bg-white rounded-xl">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/supervisor-review" element={<SupervisorReview />} />
                <Route path="/bike-person-details" element={<BikePersonDetails />} />
                <Route path="/guard-attendance" element={<GuardAttendance />} />
                <Route path="/weekly-reports" element={<WeeklyReport />} />
                <Route path="/amc-report" element={<AMCReport />} />
                <Route path="/guard-entry-details" element={<GuardEntryDetails />} />
                <Route path="/guard-enquires" element={<GuardEnquiryList />} />
                <Route path="/employee-details" element={<EmployeeDetailssheet />} />
                <Route path="/main-sheet" element={<MonthlyMainSheet />} />
                <Route path="/employee-enquiry" element={<EmployeeEnquiryList />} />
                <Route path="/working-employee" element={<EmployeeWorkingList />} />
                <Route path="/holidays" element={<EmployeeHolidayList />} />
                <Route path="/resign" element={<EmployeeResignList />} />
                <Route path="/rejoin" element={<EmployeeRejoinList />} />
                <Route path="/leave" element={<EmployeeLeaveList />} />
                <Route path="/transfer" element={<EmployeeTransferList />} />
                <Route path="/chalan" element={<EmployeeChalanList />} />
                <Route path="/permission" element={<EmployeePermissionList />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

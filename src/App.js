import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from './firebase'; 
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Auth from "./Auth"; 
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
import InquiryPage from "./pages/InquiryPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); 
    });
    return () => unsubscribe(); 
  }, []);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <Dashboard />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <Dashboard />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/inquiry" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <InquiryPage />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/bike-person-details" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <BikePersonDetails />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/guard-attendance" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <GuardAttendance />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/weekly-reports" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <WeeklyReport />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/amc-report" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <AMCReport />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/guard-entry-details" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <GuardEntryDetails />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/guard-enquires" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <GuardEnquiryList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/employee-details" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeDetailssheet />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/main-sheet" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <MonthlyMainSheet />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/employee-enquiry" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeEnquiryList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/working-employee" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeWorkingList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/holidays" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeHolidayList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/resign" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeResignList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/rejoin" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeRejoinList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/transfer" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeTransferList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/leave" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeLeaveList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/permission" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeePermissionList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/chalan" 
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex flex-col flex-1">
                  <Header />
                  <div className="flex-1 p-6 bg-gray-300">
                    <div className="p-6 bg-white rounded-xl">
                      <EmployeeChalanList />
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        
      </Routes>
    </Router>
  );
}

export default App;

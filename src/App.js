import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Dashboard from "./pages/Dashboard";
import SupervisorReview from "./pages/supervisor";
import BikePersonDetails from "./pages/bikepersondetails";
import GuardAttendance from "./pages/guardattendence";
import WeeklyReport from "./pages/weeklyreport";
import   AMCReport from "./pages/amc";
import GuardEntryDetails from "./pages/guardentrydetails";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Header />

          <div className="flex-1 p-6 bg-gray-100">
              <div className="p-6 bg-white rounded-xl">
            <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
             <Route path="/supervisor-review" element={<SupervisorReview/>} />
             <Route path="/bike-person-details" element={<BikePersonDetails/>} />
             <Route path="/guard-attendance" element={<GuardAttendance/>} />
             <Route path="/weekly-reports" element={<WeeklyReport/>} />
             <Route path="/amc-report" element={<AMCReport/>} />
             <Route path="/guard-entry-details" element={<GuardEntryDetails/>} />
           
            </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

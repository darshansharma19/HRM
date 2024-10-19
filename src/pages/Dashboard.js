import React, { useState, useEffect } from "react";
import { Tabs, Button, Table, Input, Select, message } from "antd";
import { motion } from "framer-motion";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';

const { TabPane } = Tabs;
const { Option } = Select;

const AttendancePage = () => {
  const [guardData, setGuardData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("guard");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const guardSnap = await getDocs(query(collection(db, "attendance"), where("role", "==", "guard")));
        const employeeSnap = await getDocs(query(collection(db, "attendance"), where("role", "==", "employee")));
        
        setGuardData(guardSnap.docs.map(doc => ({ ...doc.data(), key: doc.id })));
        setEmployeeData(employeeSnap.docs.map(doc => ({ ...doc.data(), key: doc.id })));
      } catch (error) {
        message.error("Error fetching data: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProceed = async (role, status) => {
    const newRecord = {
      userId: "exampleUserId", // Use the actual userId
      role,
      status,
      time: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "attendance"), newRecord);
      message.success(`${role} attendance recorded successfully!`);
      const updatedRecord = { ...newRecord, key: docRef.id };

      if (role === "guard") {
        setGuardData(prevData => [...prevData, updatedRecord]);
      } else {
        setEmployeeData(prevData => [...prevData, updatedRecord]);
      }
    } catch (error) {
      message.error("Error recording attendance: " + error.message);
    }
  };

  const columns = [
    { title: "User ID", dataIndex: "userId", key: "userId" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Time", dataIndex: "time", key: "time" },
  ];

  return (
    <div className="attendance-page" style={{ padding: '20px' }}>
      <Tabs activeKey={activeTab} onChange={setActiveTab} style={{ marginBottom: '20px' }}>
        <TabPane tab="Guard" key="guard">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={{ marginBottom: '16px' }}>Guard Attendance</h2>
            <GuardFlow onProceed={handleProceed} />
            <Table 
              dataSource={guardData} 
              columns={columns} 
              loading={isLoading} 
              pagination={false}
              style={{ marginTop: '20px' }}
            />
          </motion.div>
        </TabPane>
        <TabPane tab="Employee" key="employee">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={{ marginBottom: '16px' }}>Employee Attendance</h2>
            <EmployeeFlow onProceed={handleProceed} />
            <Table 
              dataSource={employeeData} 
              columns={columns} 
              loading={isLoading} 
              pagination={false}
              style={{ marginTop: '20px' }}
            />
          </motion.div>
        </TabPane>
      </Tabs>
    </div>
  );
};

const GuardFlow = ({ onProceed }) => {
  const [step, setStep] = useState(1);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const handleEnquirySubmit = () => {
    message.success(`Enquiry sent to ${selectedEnquiry}`);
    setStep(3);
  };

  const handleExitDecision = (decision) => {
    message.success(`Exit permission ${decision ? "allowed" : "denied"}`);
    onProceed("guard", decision ? "exit_allowed" : "exit_denied");
  };

  return (
    <div className="guard-flow" style={{ marginBottom: '20px' }}>
      {step === 1 && (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} style={{ marginBottom: '16px' }}>
          <Input placeholder="Enter ID" style={{ marginBottom: '10px' }} />
          <Button type="primary" onClick={() => setStep(2)}>
            Proceed to Enquiry
          </Button>
        </motion.div>
      )}
      {step === 2 && (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} style={{ marginBottom: '16px' }}>
          <h3>What type of enquiry?</h3>
          <Select onChange={setSelectedEnquiry} placeholder="Select an option" style={{ width: '200px', marginBottom: '10px' }}>
            <Option value="Supervisor">Supervisor</Option>
            <Option value="Computer Operator">Computer Operator</Option>
          </Select>
          <Button type="primary" onClick={handleEnquirySubmit}>
            Submit Enquiry
          </Button>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
          <h3>Employee Exit Permission</h3>
          <Button type="primary" onClick={() => handleExitDecision(true)} style={{ marginRight: '10px' }}>
            Allow Exit
          </Button>
          <Button danger onClick={() => handleExitDecision(false)}>
            Deny Exit
          </Button>
        </motion.div>
      )}
    </div>
  );
};

const EmployeeFlow = ({ onProceed }) => {
  const [step, setStep] = useState(1);
  const [documentsSubmitted, setDocumentsSubmitted] = useState(false);
  const [earlyLeave, setEarlyLeave] = useState(null);

  const handleContinue = () => {
    if (!documentsSubmitted) {
      message.warning("Entry allowed for only 10 days without documents.");
    }
    setStep(3);
  };

  return (
    <div className="employee-flow" style={{ marginBottom: '20px' }}>
      {step === 1 && (
        <motion.div initial={{ x: 100 }} animate={{ x: 0 }} style={{ marginBottom: '16px' }}>
          <Input placeholder="Enter ID" style={{ marginBottom: '10px' }} />
          <Button type="primary" onClick={() => setStep(2)}>
            Proceed
          </Button>
        </motion.div>
      )}
      {step === 2 && (
        <motion.div initial={{ x: 100 }} animate={{ x: 0 }} style={{ marginBottom: '16px' }}>
          <h3>Are documents submitted?</h3>
          <Select onChange={setDocumentsSubmitted} placeholder="Select" style={{ width: '200px', marginBottom: '10px' }}>
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
          <Button type="primary" onClick={handleContinue}>
            Continue
          </Button>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div initial={{ x: 100 }} animate={{ x: 0 }}>
          <h3>Do you need to leave early?</h3>
          <Select onChange={setEarlyLeave} placeholder="Select" style={{ width: '200px', marginBottom: '10px' }}>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
          <Button type="primary" onClick={() => onProceed("employee", earlyLeave ? "early_leave_requested" : "present")}>
            Submit
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default AttendancePage;

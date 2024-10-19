import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  message,
} from "antd";
import { motion } from "framer-motion"; // Import motion from framer-motion

const { Option } = Select;

const InquiryPage = () => {
  const [role, setRole] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [guardCheckRequired, setGuardCheckRequired] = useState(null);
  const [resolutionDecision, setResolutionDecision] = useState(null);

  const handleRoleSelection = (value) => {
    setRole(value);
    setCurrentStep(1); // Proceed to inquiry step
  };

  const handleEmployeeInquiry = (value) => {
    setSelectedEmployee(value);
    message.success(`Selected employee: ${value}`);
    setCurrentStep(2); // Move to Guard Check decision
  };

  const handleGuardCheckDecision = (decision) => {
    setGuardCheckRequired(decision);
    if (decision) {
      setCurrentStep(3); // Go to Fill Option form
    } else {
      // Logic to transfer inquiry to another supervisor or department
      message.success("Inquiry transferred.");
      setCurrentStep(1); // Reset to employee inquiry
    }
  };

  const handleResolutionDecision = (decision) => {
    setResolutionDecision(decision);
    if (decision) {
      // Logic to transfer staff issues
      message.success("Staff transferred for one week.");
    } else {
      message.success("Staff status remains unchanged.");
    }
    setCurrentStep(1); // Reset to employee inquiry
  };

  const handleBreakManagement = (permission) => {
    if (permission) {
      message.success("Break granted.");
    } else {
      message.error("Break request denied.");
    }
  };

  const renderRoleSelection = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Select Your Role</h2>
      <Select placeholder="Select Role" onChange={handleRoleSelection} style={{ width: '200px', marginBottom: '10px' }}>
        <Option value="supervisor">Supervisor</Option>
        <Option value="computerOperator">Computer Operator</Option>
      </Select>
    </motion.div>
  );

  const renderEmployeeInquiry = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Employee Inquiry</h2>
      <Select placeholder="Select Employee" onChange={handleEmployeeInquiry} style={{ width: '200px', marginBottom: '10px' }}>
        {/* Replace with actual employee data */}
        <Option value="employee1">Employee 1</Option>
        <Option value="employee2">Employee 2</Option>
        <Option value="employee3">Employee 3</Option>
      </Select>
      <Button type="primary">Inquire</Button>
    </motion.div>
  );

  const renderGuardCheck = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Guard Check Required?</h2>
      <Button onClick={() => handleGuardCheckDecision(true)}>Yes</Button>
      <Button onClick={() => handleGuardCheckDecision(false)}>No</Button>
    </motion.div>
  );

  const renderFillOptionForm = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Fill Option Form</h2>
      <Input.TextArea rows={4} placeholder="Additional Notes" />
      <Button type="primary">Submit</Button>
    </motion.div>
  );

  const renderIssueResolution = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Resolve Issues</h2>
      <Button onClick={() => handleResolutionDecision(true)}>Transfer Staff</Button>
      <Button onClick={() => handleResolutionDecision(false)}>Keep Staff</Button>
    </motion.div>
  );

  const renderComputerOperatorInquiry = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Employee Inquiry (Computer Operator)</h2>
      <Input placeholder="Employee Inquiry" />
      <Button type="primary">Submit</Button>
    </motion.div>
  );

  const renderBreakManagement = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Break Management</h2>
      <Button onClick={() => handleBreakManagement(true)}>Grant Permission</Button>
      <Button onClick={() => handleBreakManagement(false)}>Deny Request</Button>
    </motion.div>
  );

  return (
    <div className="inquiry-page" style={{ padding: '20px' }}>
      {currentStep === 0 && renderRoleSelection()}
      {currentStep === 1 && role === 'supervisor' && renderEmployeeInquiry()}
      {currentStep === 2 && renderGuardCheck()}
      {currentStep === 3 && guardCheckRequired && renderFillOptionForm()}
      {currentStep === 3 && !guardCheckRequired && renderIssueResolution()}
      {currentStep === 1 && role === 'computerOperator' && renderComputerOperatorInquiry()}
      {/* Break Management could be a new step or integrated based on your flow */}
      {/* {currentStep === 1 && role === 'computerOperator' && renderBreakManagement()} */}
    </div>
  );
};

export default InquiryPage;

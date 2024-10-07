import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Table, Checkbox, Dropdown, Menu, notification } from "antd";
import { CiCircleCheck } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import qs from "qs";

const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

const EmployeeWorkingList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [employeeFrom, setEmployeeFrom] = useState(false);
    const [currentSection, setCurrentSection] = useState(1); // Track the current form section
    const [sectionCompleted, setSectionCompleted] = useState({
        section1: false,
        section2: false,
        section3: false, // Add section 3
    });

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    const [newEmployee, setNewEmployee] = useState({
        firstName: "",
        slipNo: "",
        employeeId: "",
        mobile: "",
        date: "",
        gender: "",
        dob: "",
        email: "",
        address: "", // Additional field for section 3
    });

    const toggleModal = () => {
        setEmployeeFrom((prev) => !prev);
        setCurrentSection(1); // Reset section on modal toggle
        setSectionCompleted({
            section1: false,
            section2: false,
            section3: false,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentSection === 1) {
            if (newEmployee.firstName && newEmployee.slipNo && newEmployee.employeeId && newEmployee.date) {
                setSectionCompleted((prev) => ({ ...prev, section1: true }));
                setCurrentSection(2); // Move to section 2
            } else {
                notification.warning({
                    message: "Incomplete Fields",
                    description: "Please fill in all fields in this section to proceed.",
                });
            }
        } else if (currentSection === 2) {
            if (newEmployee.mobile && newEmployee.email && newEmployee.dob && newEmployee.gender) {
                setSectionCompleted((prev) => ({ ...prev, section2: true }));
                setCurrentSection(3); // Move to section 3
            } else {
                notification.warning({
                    message: "Incomplete Fields",
                    description: "Please fill in all fields in this section to proceed.",
                });
            }
        } else if (currentSection === 3) {
            if (newEmployee.address) {
                setSectionCompleted((prev) => ({ ...prev, section3: true }));

                const newData = {
                    name: { first: newEmployee.firstName },
                    slipNo: newEmployee.slipNo,
                    employeeId: newEmployee.employeeId,
                    date: new Date().toISOString().split("T")[0],
                    email: newEmployee.email,
                    dob: newEmployee.dob,
                    gender: newEmployee.gender,
                    mobile: newEmployee.mobile,
                    address: newEmployee.address,
                    selected: false,
                };

                setData((prevData) => [newData, ...prevData]);

                notification.success({
                    message: "Employee Enquiry Listed",
                    description: `Successfully added ${newEmployee.firstName} enquiry.`,
                });

                setNewEmployee({
                    firstName: "",
                    slipNo: "",
                    employeeId: "",
                    mobile: "",
                    date: "",
                    gender: "",
                    dob: "",
                    email: "",
                    address: "",
                });

                toggleModal();
            } else {
                notification.warning({
                    message: "Incomplete Fields",
                    description: "Please fill in all fields in this section to submit.",
                });
            }
        }
    };

    return (
        <div className="rounded-2xl">
            {!employeeFrom ? (
                <div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                            <h1 className="flex items-center text-sm sm:text-xl font-semibold text-black">
                                <span className="pl-2 text-lg sm:text-2xl">
                                    Employee's Working List
                                </span>
                            </h1>
                            <button
                                onClick={toggleModal}
                                className="bg-[#7162A7] text-white text-sm font-bold py-2 px-4 rounded hover:bg-[#6150A7]"
                            >
                                Add Employee Working
                            </button>
                        </div>

                        <div className="flex pt-8">
                            <input
                                type="text"
                                placeholder="Search by First Name"
                                className="border rounded-l px-4 py-2 w-full outline-none"
                            />
                            <button className="bg-[#7162A7] text-white rounded-r px-4 py-2">
                                Search
                            </button>
                        </div>
                    </div>

                    <Table
                        columns={[
                            {
                                title: <Checkbox />,
                                dataIndex: "select",
                                render: (_, record) => <Checkbox checked={record.selected} />,
                                width: "5%",
                            },
                            {
                                title: "No",
                                dataIndex: "index",
                                render: (text, record, index) => index + 1,
                                width: "5%",
                            },
                            {
                                title: "First Name",
                                dataIndex: "name",
                                render: (name) => name.first,
                                width: "15%",
                            },
                            { title: "Slip No", dataIndex: "slipNo", width: "10%" },
                            { title: "Employee ID", dataIndex: "employeeId", width: "15%" },
                            { title: "Date", dataIndex: "date", width: "10%" },
                            { title: "Email Address", dataIndex: "email", width: "15%" },
                            { title: "DOB", dataIndex: "dob", width: "10%" },
                            { title: "Gender", dataIndex: "gender", width: "10%" },
                            { title: "Mobile Number", dataIndex: "mobile", width: "20%" },
                            {
                                title: "Actions", dataIndex: "actions", render: () => (
                                    <Dropdown
                                        overlay={
                                            <Menu>
                                                <Menu.Item key="1">Hold</Menu.Item>
                                            </Menu>
                                        }
                                        trigger={["click"]}
                                    >
                                        <button className="flex items-center justify-center">
                                            <BsThreeDotsVertical className="text-xl text-[#7162A7] hover:text-[#7162a7d1]" />
                                        </button>
                                    </Dropdown>
                                ),
                                width: "10%",
                            },
                        ]}
                        rowKey="email"
                        dataSource={data}
                        pagination={tableParams.pagination}
                        loading={loading}
                        onChange={(pagination) => setTableParams({ pagination })}
                    />
                </div>
            ) : (
                <div>
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <h1 className="flex items-center text-sm sm:text-xl font-semibold text-black">
                                <MdOutlineKeyboardArrowLeft
                                    onClick={toggleModal}
                                    className="text-3xl text-black cursor-pointer"
                                />
                                <span className="pl-2 text-2xl">Employee Working</span>
                            </h1>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    <div className={sectionCompleted.section1 ? "bg-green-500 rounded-full" : "bg-transparent rounded-full"}>
                                        <CiCircleCheck className={sectionCompleted.section1 ? "text-2xl text-white" : "text-3xl text-black"} />
                                    </div>
                                    <span className="font-semibold ml-1">Section 1</span>
                                </div>
                                <div className="h-[2px] w-10 bg-gray-400"></div>
                                <div className="flex items-center">
                                    <div className={sectionCompleted.section2 ? "bg-green-500 rounded-full" : "bg-transparent rounded-full"}>
                                        <CiCircleCheck className={sectionCompleted.section2 ? "text-2xl text-white" : "text-3xl text-black"} />
                                    </div>
                                    <span className="font-semibold ml-1">Section 2</span>
                                </div>
                                <div className="h-[2px] w-10 bg-gray-400"></div>
                                <div className="flex items-center">
                                    <div className={sectionCompleted.section3 ? "bg-green-500 rounded-full" : "bg-transparent rounded-full"}>
                                        <CiCircleCheck className={sectionCompleted.section3 ? "text-2xl text-white" : "text-3xl text-black"} />
                                    </div>
                                    <span className="font-semibold ml-1">Section 3</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col mt-8">
                        {currentSection === 1 && (
                            <div className="grid grid-cols-2 gap-5 pt-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Slip No
                                    </label>
                                    <input
                                        type="text"
                                        name="slipNo"
                                        value={newEmployee.slipNo}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={newEmployee.date}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Employee ID
                                    </label>
                                    <input
                                        type="text"
                                        name="employeeId"
                                        value={newEmployee.employeeId}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={newEmployee.firstName}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {currentSection === 2 && (
                            <div className="grid grid-cols-2 gap-5 pt-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Slip No
                                    </label>
                                    <input
                                        type="text"
                                        name="slipNo"
                                        value={newEmployee.slipNo}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={newEmployee.date}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Employee ID
                                    </label>
                                    <input
                                        type="text"
                                        name="employeeId"
                                        value={newEmployee.employeeId}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={newEmployee.firstName}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {currentSection === 3 && (
                            <div className="grid grid-cols-2 gap-5 pt-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Slip No
                                    </label>
                                    <input
                                        type="text"
                                        name="slipNo"
                                        value={newEmployee.slipNo}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={newEmployee.date}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Employee ID
                                    </label>
                                    <input
                                        type="text"
                                        name="employeeId"
                                        value={newEmployee.employeeId}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={newEmployee.firstName}
                                        onChange={handleInputChange}
                                        className="shadow-sm bg-gray-50 border border-[#7162A7] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end mt-8">
                            {currentSection === 1 && (
                                <button
                                    type="button"
                                    onClick={toggleModal} // Add your cancel logic here
                                    className="bg-white text-sm font-bold py-2 px-4 rounded hover:bg-[#7162A7] border border-[#6150A7] text-[#7162A7] hover:text-white transition"
                                >
                                    Cancel
                                </button>
                            )}
                            {currentSection > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setCurrentSection((prev) => prev - 1)}
                                    className="bg-white text-sm font-bold py-2 px-4 rounded hover:bg-[#7162A7] border border-[#6150A7] text-[#7162A7] hover:text-white transition"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                type="submit"
                                className="bg-[#7162A7] text-white text-sm font-bold py-2 px-4 rounded hover:bg-white border  hover:border-[#6150A7] hover:text-[#7162A7] transition ml-2"
                            >
                                {currentSection === 3 ? "Submit" : "Next"}
                            </button>
                        </div>

                    </form>
                </div>
            )}
        </div>
    );
};

export default EmployeeWorkingList;
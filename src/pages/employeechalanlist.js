import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Table, Checkbox, Dropdown, Menu } from 'antd';
import { BsThreeDotsVertical } from "react-icons/bs";
import qs from 'qs';

// Function to get query parameters for the API
const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

const EmployeeChalanList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectAll = (e) => {
        const isSelected = e.target.checked;
        const updatedData = data.map(item => ({
            ...item,
            selected: isSelected,
        }));
        setData(updatedData);
    };

    const handleRowSelect = (e, record) => {
        const isSelected = e.target.checked;
        const updatedData = data.map(item => (
            item.email === record.email ? { ...item, selected: isSelected } : item
        ));
        setData(updatedData);
    };

    const fetchData = () => {
        setLoading(true);
        fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
            .then((res) => res.json())
            .then(({ results }) => {
                const formattedData = results.map(user => ({
                    name: user.name,
                    slipNo: 'SLP12345',
                    employeeId: 'EMP001',
                    date: '2024-01-01',
                    email: user.email,
                    dob: '1990-01-01',
                    gender: user.gender,
                    mobile: '123-456-7890',
                    selected: false,
                }));
                setData(formattedData);
                setLoading(false);
                setTableParams(prev => ({
                    ...prev,
                    pagination: {
                        ...prev.pagination,
                        total: 200,
                    },
                }));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [tableParams.pagination.current, tableParams.pagination.pageSize]);

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            sortOrder: sorter.order,
            sortField: sorter.field,
        });
        if (pagination.pageSize !== tableParams.pagination.pageSize) {
            setData([]);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(item =>
        `${item.name.first} ${item.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Dropdown menu for triple dot icon actions
    const menu = (
        <Menu>
            <Menu.Item key="1">Hold</Menu.Item>
            <Menu.Item key="2">Share</Menu.Item>
            <Menu.Item key="3">Edit</Menu.Item>
            <Menu.Item key="4">Delete</Menu.Item>
            <Menu.Item key="5">Attachment</Menu.Item>
        </Menu>
    );

    const columns = [
        {
            title: (
                <Checkbox onChange={(e) => handleSelectAll(e)} />
            ),
            dataIndex: 'select',
            render: (_, record) => (
                <Checkbox
                    checked={record.selected}
                    onChange={(e) => handleRowSelect(e, record)}
                />
            ),
            width: '5%',
        },
        {
            title: 'No',
            dataIndex: 'index',
            render: (text, record, index) => index + 1,
            width: '5%',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (name) => `${name.first} ${name.last}`,
            width: '15%',
        },
        {
            title: 'Slip No',
            dataIndex: 'slipNo',
            width: '10%',
        },
        {
            title: 'Employee ID',
            dataIndex: 'employeeId',
            width: '15%',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            width: '10%',
        },
        {
            title: 'Email address',
            dataIndex: 'email',
            width: '15%',
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            width: '10%',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            width: '10%',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobile',
            width: '20%',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: () => (
                <Dropdown overlay={menu} trigger={['click']}>
                    <button className="flex items-center justify-center">
                        <BsThreeDotsVertical className="text-xl text-[#7162A7] hover:text-[#7162a7d1]" />
                    </button>
                </Dropdown>
            ),
            width: '10%',
        },
    ];

    return (
        <div className="rounded-2xl">
            <div>
                {/* Upper Heading with Button */}
                <div className="flex flex-row items-center justify-between mb-4">
                    <h1 className="flex items-center text-sm sm:text-xl font-semibold text-black">
                        <MdOutlineKeyboardArrowLeft className="text-2xl sm:text-3xl text-black" />
                        <span className="pl-2 text-lg sm:text-2xl">Employee's Chalan List</span>
                    </h1>
                    <button type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white rounded-lg border bg-[#7162A7]">
                        Add Employee's Chalan
                    </button>
                </div>

                {/* Search Layout */}
                <div className="rounded-2xl">
                    <div className="py-4">
                        <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 me-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="voice-search"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                                    placeholder="Search"
                                    required
                                />
                                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pr-3"></button>
                            </div>
                            <button type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white rounded-lg border bg-[#7162A7]">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                Search
                            </button>
                        </form>
                    </div>

                    {/* Data Table */}
                    <div>
                        <Table
                            columns={columns}
                            rowKey={(record) => record.email}
                            dataSource={filteredData}
                            pagination={tableParams.pagination}
                            loading={loading}
                            onChange={handleTableChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeChalanList;
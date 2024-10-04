import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Table } from 'antd';
import qs from 'qs';

// Define table columns
const columns = [
  {
    title: 'No',
    dataIndex: 'index',
    render: (text, record, index) => index + 1, // 1-based index
    width: '5%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name) => `${name.first} ${name.last}`, // String interpolation
    width: '15%',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    width: '10%',
  },
  {
    title: 'Post',
    dataIndex: 'post',
    width: '15%',
  },
  {
    title: 'Supervisor',
    dataIndex: 'supervisor',
    width: '15%',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    width: '15%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '10%',
  },
  {
    title: 'Break',
    dataIndex: 'break',
    render: () => (
      <button className="text-white bg-[#7162A7] hover:bg-[#7162a7d1] rounded-lg px-4 py-2">Break</button>
    ),
    width: '15%',
  },
];

// Function to get query parameters for the API
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const GuardEnquiryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from the API
  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        // Format data with mock fields for demonstration
        const formattedData = results.map(user => ({
          name: user.name,
          date: '2024-01-01', // Mock date
          post: user.gender === 'male' ? 'Guard' : 'Supervisor', // Example post based on gender
          supervisor: `${user.name.first} Supervisor`,
          department: 'Mock Department', // Placeholder
          status: 'Active', // Example status
          break: 'Take Break', // Placeholder for break button
        }));
        setData(formattedData);
        setLoading(false);
        setTableParams(prev => ({
          ...prev,
          pagination: {
            ...prev.pagination,
            total: 200, // Mock data for total count
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

  return (
    <div className="rounded-2xl">
      <div className="">
        {/* Upper Heading with Button */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="flex items-center text-sm sm:text-xl font-semibold text-black">
            <MdOutlineKeyboardArrowLeft className="text-3xl text-black" />
            <span className="pl-2 text-2xl">Guard Enquiry List</span>
          </h1>
        </div>

        {/* Search Layout */}
        <div className="rounded-2xl pt-4">
          <div className="py-4">
            <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="voice-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 me-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                  placeholder="Search"
                  required
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pr-3"></button>
              </div>
              {/* <button type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white rounded-lg border bg-[#7162A7]">
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                Search
              </button> */}
            </form>
          </div>

          {/* Data Table */}
          <div>
            <Table
              columns={columns}
              rowKey={(record) => record.name.first + record.name.last} // Unique identifier for row
              dataSource={filteredData} // Use filtered data here
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

export default GuardEnquiryList;
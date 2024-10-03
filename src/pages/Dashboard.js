// src/pages/Dashboard.js
import React from 'react';

// Sample data for the cards with counts
const cardData = [
  { title: 'BOM 1', subtitle: 'Total Knitted BOM', count: 0, color: 'bg-blue-500' },
  { title: 'BOM 2', subtitle: 'Total Waved BOM', count: 0, color: 'bg-green-500' },
  { title: 'Job Card', subtitle: 'Total Job Card', count: 0, color: 'bg-orange-500' },
  { title: 'Job Process', subtitle: 'Total Finished Job Card', count: 0, color: 'bg-purple-500' },
  { title: 'Quality', subtitle: 'Total Job Quality', count: 0, color: 'bg-red-500' },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-500">Welcome to Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl ${card.color} text-white`}
          >
            <h2 className="text-xl font-semibold border-b-2 border-white pb-2 mb-2">
              {card.title}
            </h2>
            <p className="text-lg font-bold">{String(card.count).padStart(2, '0')}</p>
            <p className="text-white">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full min-h-screen p-4 text-center text-white uppercase bg-gray-900">
      <ul className="max-w-xl mx-auto text-sm font-medium text-center text-gray-400 divide-gray-700 rounded-lg shadow sm:flex">
        <li className="w-full">
          <a
            onClick={() => setActiveTab(0)}
            className={`inline-block w-full p-4 ${
              activeTab === 0 ? 'text-white bg-gray-700' : 'bg-gray-800'
            } sm:rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none hover:text-white hover:bg-gray-700`}
            aria-current="page">
            10 NOV
          </a>
        </li>
        <li className="w-full">
          <a
            onClick={() => setActiveTab(1)}
            className={`inline-block w-full p-4 ${
              activeTab === 1 ? 'text-white bg-gray-700' : 'bg-gray-800'
            } focus:ring-4 focus:ring-blue-300 focus:outline-none hover:text-white hover:bg-gray-700`}>
            11 NOV
          </a>
        </li>
        <li className="w-full">
          <a
            onClick={() => setActiveTab(2)}
            className={`inline-block w-full p-4 ${
              activeTab === 2 ? 'text-white bg-gray-700' : 'bg-gray-800'
            } focus:ring-4 focus:ring-blue-300 focus:outline-none hover:text-white hover:bg-gray-700`}>
            12 NOV
          </a>
        </li>
        <li className="w-full">
          <a
            onClick={() => setActiveTab(3)}
            className={`inline-block w-full p-4 ${
              activeTab === 3 ? 'text-white bg-gray-700' : 'bg-gray-800'
            } sm:rounded-r-lg focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-white hover:bg-gray-700`}>
            13 NOV
          </a>
        </li>
      </ul>
      {activeTab === 0 && (
        <div className="max-w-xl mx-auto mt-4 space-y-4">
          <img src={require('../../Assets/s1.png')} alt="day1_1_schedule" />
          <img src={require('../../Assets/s2.png')} alt="day1_2_schedule" />
        </div>
      )}
      {activeTab === 1 && (
        <div className="max-w-xl mx-auto mt-4 space-y-4">
          <img src={require('../../Assets/s3.png')} alt="day1_1_schedule" />
          <img src={require('../../Assets/s4.png')} alt="day1_2_schedule" />
        </div>
      )}
      {activeTab === 2 && (
        <div className="max-w-xl mx-auto mt-4 space-y-4">
          <img src={require('../../Assets/s5.png')} alt="day1_1_schedule" />
          <img src={require('../../Assets/s6.png')} alt="day1_2_schedule" />
          <img src={require('../../Assets/s7.png')} alt="day1_1_schedule" />
        </div>
      )}
      {activeTab === 3 && (
        <div className="max-w-xl mx-auto mt-4 space-y-4">
          <img src={require('../../Assets/s8.png')} alt="day1_2_schedule" />
        </div>
      )}
    </div>
  );
};

export default Schedule;

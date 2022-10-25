import React from 'react';
import DividerLine from '../Common/DividerLine';
import Invite from './Invite';
import Team from './Team';

const index = () => {
  return (
    <div className="relative flex flex-col min-h-screen gap-3 p-2 text-white bg-gray-900 md:flex-row">
      <div className="top-0 w-full p-4 overflow-auto bg-gray-800 md:h-screen md:sticky">
        <h2 className="text-3xl font-semibold capitalize title">hi</h2>
        <h2 className="text-3xl font-semibold capitalize title">Lovedeep</h2>
        <p className="py-2">
          <strong>NOTE:</strong>you can only update resume link
        </p>
        <form className="w-full space-y-4 md:space-y-6" action="#">
          <div className="flex items-center">
            <label htmlFor="username" className="block mb-2 mr-2 text-sm font-medium text-white">
              username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full px-1 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="username"
              required={true}
              disabled={true}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="block mb-2 mr-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=" border   sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@company.com"
              required={true}
              disabled={true}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="mobile" className="block mb-2 mr-2 text-sm font-medium text-white">
              Mobile no
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              className=" border   sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="0000-0000-00"
              required={true}
              disabled={true}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="college" className="block mb-2 text-sm font-medium text-white">
              college Name
            </label>
            <input
              type="text"
              name="college"
              id="college"
              className=" border   sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@company.com"
              required={true}
              disabled={true}
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="fee" className="block mb-2 mr-2 text-sm font-medium text-white">
              Fee status
            </label>
            <input
              type="text"
              name="fee"
              id="fee"
              className=" border   sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@company.com"
              required={true}
              disabled={true}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="resume" className="block mb-2 mr-2 text-sm font-medium text-white">
              resume link
            </label>
            <input
              type="url"
              name="resume"
              id="resume"
              className=" border   sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="your resume link"
              required={true}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            update resume link
          </button>
        </form>
      </div>
      {/* team and invite management */}
      <div className="w-full space-y-4 ">
        {/* invites */}
        <div>
          <DividerLine text="manage invite" />
          <div className="p-2 mt-2 bg-gray-800 roudned-sm">
            <p>no team invite</p>
          </div>
          <Invite />
        </div>
        {/* teams */}
        <div>
          <DividerLine text="teams" />
          <button className="p-2 mt-2 bg-gray-800 roudned-sm hover:bg-gray-500">
            create new team
          </button>

          <Team />
          <Team />
          <Team />
        </div>
      </div>
    </div>
  );
};

export default index;

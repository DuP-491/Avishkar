import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  return (
    <div className="relative mt-2 shadow-md sm:rounded-lg">
      <div className="w-full text-sm text-left text-gray-400">
        {/* team card header--> name and action */}
        <div className="flex items-center p-2 text-gray-400 uppercase bg-gray-700 text-md">
          <h2>team name</h2>
          <div className="ml-auto space-x-2">
            <button className="p-1 bg-gray-900 rounded-sm hover:bg-gray-800">edit</button>
            <button className="p-1 bg-gray-900 rounded-sm hover:bg-gray-800">delete</button>
          </div>
        </div>
        <div>
          {/* events participated by the team */}
          <div className="p-2 bg-gray-800 border-b border-gray-700 ">
            <p className="inline-block p-1 mx-1 text-white bg-gray-900 rounded-lg">webster</p>
            <p className="inline-block p-1 mx-1 text-white bg-gray-900 rounded-lg">softablitz</p>
            <p className="inline-block p-1 mx-1 text-white bg-gray-900 rounded-lg">insomnia</p>
          </div>
          {/* send invite of this team */}

          <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700 md:flex-row hover:bg-gray-600">
            <input
              type="text"
              name="username"
              id="username"
              className=" border mr-2   sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="enter username to invite"
              required={true}
            />
            <div className="text-right capitalize ">
              <button className="inline-block font-medium text-blue-500 hover:underline">
                invite
              </button>
            </div>
          </div>
          {/* team members */}
          <div>
            <TeamMember />
            <TeamMember />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

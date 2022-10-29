import React from 'react';

const Invite = (props: any) => {
  const { name, handleRespondTeamInvite, team } = props;
  return (
    <div className="flex flex-col items-stretch justify-between px-6 py-4 mt-2 bg-gray-800 border-b border-gray-700 md:items-center md:flex-row hover:bg-gray-600">
      <h2 className="w-full font-medium text-white text-ellipsis whitespace-wrap">
        {name} has invited to join their team
      </h2>
      <div className="flex flex-row items-stretch space-x-2 text-right capitalize md:space-y-2 md:space-x-0 md:flex-col">
        <button
          onClick={() => handleRespondTeamInvite(team['team']['id'], 'ACCEPTED')}
          className="inline-block w-full p-1 font-medium bg-gray-900 rounded-sm hover:bg-gray-800">
          accept
        </button>
        <button
          onClick={() => handleRespondTeamInvite(team['team']['id'], 'DECLINED')}
          className="inline-block w-full p-1 font-medium bg-gray-900 rounded-sm hover:bg-gray-800">
          reject
        </button>
      </div>
    </div>
  );
};

export default Invite;

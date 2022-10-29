import React from 'react';

const TeamMember = (props: any) => {
  const { name } = props;
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700 md:flex-row hover hover:bg-gray-600">
      <h2 className="w-full font-medium text-white text-ellipsis whitespace-wrap">{name}</h2>
      <div className="text-right capitalize ">
        <button className="inline-block font-medium text-blue-500 hover:underline">remove</button>
      </div>
    </div>
  );
};

export default TeamMember;

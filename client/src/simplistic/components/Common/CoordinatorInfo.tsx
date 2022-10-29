import React from 'react';

const CoordinatorInfo = (props: any) => {
  console.log(props);

  const { name, email, mobile } = props.cord.user;
  return (
    <div className="w-full max-w-sm px-2 pt-4 pb-2 text-center bg-gray-800 rounded-md shadow-xl ">
      <h2 className="text-xl font-semibold capitalize title ">{name}</h2>
      <ul>
        <li>{mobile}</li>
        <li>{email}</li>
      </ul>
    </div>
  );
};

export default CoordinatorInfo;

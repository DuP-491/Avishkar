import React, { useState } from 'react';
import './../common.css';

function Profile() {
  const [selectedtab, setSelectedTab] = useState(1);

  function Tabrender() {
    if (selectedtab == 1)
      return (
        <>
          <div
            onClick={() => {
              setSelectedTab(1);
            }}
            className="w-1/2 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
            Profile
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
            }}
            className="w-1/2 text-center pt-5 pb-5">
            Teams
          </div>
        </>
      );
    else
      return (
        <>
          <div
            onClick={() => {
              setSelectedTab(1);
            }}
            className="w-1/2 text-center pt-5 pb-5">
            Profile
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
            }}
            className="w-1/2 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
            Teams
          </div>
        </>
      );
  }

  function bodyRender() {
    if (selectedtab == 1) {
      return <>Profile</>;
    } else if (selectedtab == 2) {
      return <>Teams</>;
    }
  }
  return (
    <div>
      <div className="text-neutral-400 text-3xl font-bold pl-10 font-mono mb-3">Profile Page</div>
      <div className="flex w-full">{Tabrender()}</div>
      <div className="bg-gray-900 p-10" style={{ height: '80vh' }}>
        {bodyRender()}
      </div>
    </div>
  );
}

export default Profile;

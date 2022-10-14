import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService';
import './../common.css';

/* eslint-disable */
interface ProfileProps {
  onInvalidToken: () => void;
}
/* eslint-enable */

function Profile({ onInvalidToken }: ProfileProps) {
  const [selectedtab, setSelectedTab] = useState(1);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    username: '',
    mobile: '',
    collegeName: '',
    gender: '',
    resumeLink: '',
    isFeePaid: false
  });
  const [newUserDetails, setNewUserDetails] = useState({
    name: '',
    username: '',
    mobile: '',
    collegeName: '',
    resumeLink: ''
  });

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.getUserDetails(token)
      .then((data) => {
        if (data['success']) {
          if (data['details']['resumeLink'] !== null) data['details']['resumeLink'] = '';
          setUserDetails(data['details']);
          setNewUserDetails({
            name: data['details']['name'],
            username: data['details']['username'],
            mobile: data['details']['mobile'],
            collegeName: data['details']['collegeName'],
            resumeLink: data['details']['resumeLink']
          });
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  const handleEditDetails = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.updateUserDetails(
      token,
      newUserDetails['name'],
      newUserDetails['username'],
      newUserDetails['collegeName'],
      newUserDetails['mobile'],
      newUserDetails['resumeLink']
    )
      .then((data) => {
        if (data['success']) {
          setEditDetails(false);
          fetchUserDetails();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

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

  const [editDetails, setEditDetails] = useState(false);

  return (
    <div>
      <div className="text-neutral-400 text-3xl font-bold pl-10 font-mono mb-3">Profile Page</div>
      <div className="flex w-full">{Tabrender()}</div>
      <div className="bg-gray-900 p-10" style={{ height: '80vh' }}>
        {selectedtab === 1 && (
          <>
            <span
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              id="Profile"
              onClick={() => setEditDetails(true)}>
              <span
                className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"
                id="Profile"></span>
              <span
                className="absolute inset-0 w-full h-full bg-white rounded-md "
                id="Profile"></span>
              <span
                className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "
                id="Profile"></span>
              <span
                className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"
                id="Profile">
                Edit
              </span>
            </span>
            <br />
            <br />
            Name:{' '}
            {editDetails ? (
              <input
                value={newUserDetails['name']}
                onChange={(e) => setNewUserDetails({ ...newUserDetails, name: e.target.value })}
              />
            ) : (
              userDetails['name']
            )}
            <br />
            Email: {userDetails['email']}
            <br />
            Username:{' '}
            {editDetails ? (
              <input
                value={newUserDetails['username']}
                onChange={(e) => setNewUserDetails({ ...newUserDetails, username: e.target.value })}
              />
            ) : (
              userDetails['username']
            )}
            <br />
            Mobile:{' '}
            {editDetails ? (
              <input
                value={newUserDetails['mobile']}
                onChange={(e) => setNewUserDetails({ ...newUserDetails, mobile: e.target.value })}
              />
            ) : (
              userDetails['mobile']
            )}
            <br />
            College Name:{' '}
            {editDetails ? (
              <input
                value={newUserDetails['collegeName']}
                onChange={(e) =>
                  setNewUserDetails({ ...newUserDetails, collegeName: e.target.value })
                }
              />
            ) : (
              userDetails['collegeName']
            )}
            <br />
            Gender: {userDetails['gender']}
            <br />
            Resume Link:{' '}
            {editDetails ? (
              <input
                value={newUserDetails['resumeLink']}
                onChange={(e) =>
                  setNewUserDetails({ ...newUserDetails, resumeLink: e.target.value })
                }
              />
            ) : (
              userDetails['resumeLink']
            )}
            <br />
            Fee Status: {userDetails['isFeePaid'] ? 'Paid' : 'Not Paid'}
            <br />
            <br />
            {editDetails && (
              <span
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                id="Profile"
                onClick={() => handleEditDetails()}>
                <span
                  className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"
                  id="Profile"></span>
                <span
                  className="absolute inset-0 w-full h-full bg-white rounded-md "
                  id="Profile"></span>
                <span
                  className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "
                  id="Profile"></span>
                <span
                  className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"
                  id="Profile">
                  Submit New Details
                </span>
              </span>
            )}
          </>
        )}
        {selectedtab === 2 && <>Teams</>}
      </div>
    </div>
  );
}

export default Profile;

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
    if (selectedtab === 1) fetchUserDetails();
    else if (selectedtab === 2) fetchTeamInvites();
  }, [selectedtab]);

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

  const fetchTeamInvites = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.getTeamInvites(token)
      .then((data) => {
        if (data['success']) {
          setTeams(data['teams']);
          setInviteUsernames(
            Object.fromEntries(data['teams'].map((team: any) => [team['teamId'], '']))
          );
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

  const handleCreateTeam = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.createTeam(token)
      .then((data) => {
        if (data['success']) {
          console.log('Created Team Successfully');
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  const handleDeleteTeam = (teamId: number) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.removeTeam(token, teamId)
      .then((data) => {
        if (data['success']) {
          console.log('Deleted Team Successfully');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  const handleRespondTeamInvite = (teamId: number, status: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.responseToTeamInvite(token, teamId, status)
      .then((data) => {
        if (data['success']) {
          console.log('Responded to Team Invite Successfully');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  const handleInviteUser = (teamId: number, username: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.inviteUser(token, teamId, username)
      .then((data) => {
        if (data['success']) {
          console.log('Invited User Successfully');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  function Tabrender() {
    // TODO: Render Admin section only if user is admin
    if (selectedtab == 1)
      return (
        <>
          <div
            onClick={() => {
              setSelectedTab(1);
            }}
            className="w-1/3 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
            Profile
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
            }}
            className="w-1/3 text-center pt-5 pb-5">
            Teams
          </div>
          <div
            onClick={() => {
              setSelectedTab(3);
            }}
            className="w-1/3 text-center pt-5 pb-5">
            Admin
          </div>
        </>
      );
    else if (selectedtab == 2)
      return (
        <>
          <div
            onClick={() => {
              setSelectedTab(1);
            }}
            className="w-1/3 text-center pt-5 pb-5">
            Profile
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
            }}
            className="w-1/3 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
            Teams
          </div>
          <div
            onClick={() => {
              setSelectedTab(3);
            }}
            className="w-1/3 text-center pt-5 pb-5">
            Admin
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
            className="w-1/3 text-center pt-5 pb-5">
            Profile
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
            }}
            className="w-1/3 text-center pt-5 pb-5">
            Teams
          </div>
          <div
            onClick={() => {
              setSelectedTab(3);
            }}
            className="w-1/3 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
            Admin
          </div>
        </>
      );
  }

  const [editDetails, setEditDetails] = useState(false);
  const [teams, setTeams] = useState([]);
  const [inviteUsernames, setInviteUsernames] = useState({});
  // [
  //   {
  //       "userId": "371999e0-92d5-4c9a-bbf9-8d51f8e926cf",
  //       "teamId": 1,
  //       "status": "ACCEPTED",
  //       "requestAt": "2022-10-14T09:43:16.484Z",
  //       "acceptedAt": "2022-10-14T09:43:16.484Z",
  //       "team": {
  //           "id": 1,
  //           "leader": "371999e0-92d5-4c9a-bbf9-8d51f8e926cf",
  //           "size": 1,
  //           "createdAt": "2022-10-14T09:43:16.265Z",
  //           "updatedAt": "2022-10-14T09:43:16.265Z"
  //       }
  //   },
  // ]

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
        {selectedtab === 2 && (
          <>
            <div className="flex">
              <div className="w-1/2">
                <span
                  className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                  id="Profile"
                  onClick={() => handleCreateTeam()}>
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
                    Create Team
                  </span>
                </span>
                <br />
                <br />
                Teams
                <br />
                <br />
                {teams
                  .filter((team) => team['status'] === 'ACCEPTED')
                  .map((team) => (
                    <div key={team['teamId']} className="mb-5">
                      <p>Team ID: {team['teamId']}</p>
                      <p>Team Size: {team['team']['size']}</p>
                      {team['userId'] === team['team']['leader'] && (
                        <>
                          <span
                            className="relative inline-flex items-center justify-center px-1 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                            id="Profile"
                            onClick={() => handleDeleteTeam(team['teamId'])}>
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
                              Delete Team
                            </span>
                          </span>
                          <br />
                          <input
                            className="mr-4"
                            value={inviteUsernames[team['teamId']]}
                            onChange={(e) =>
                              setInviteUsernames({
                                ...inviteUsernames,
                                [team['teamId']]: e.target.value
                              })
                            }
                          />
                          <span
                            className="relative mt-2 inline-flex items-center justify-center px-1 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                            id="Profile"
                            onClick={() =>
                              handleInviteUser(team['teamId'], inviteUsernames[team['teamId']])
                            }>
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
                              Invite Member
                            </span>
                          </span>
                        </>
                      )}
                    </div>
                  ))}
              </div>
              <div className="w-1/2">
                Team Invites
                <br />
                <br />
                {teams
                  .filter((team) => team['status'] !== 'ACCEPTED')
                  .map((team) => (
                    <div key={team['teamId']} className="mb-5">
                      <p>Team ID: {team['teamId']}</p>
                      <p>Team Size: {team['team']['size']}</p>
                      {[
                        ['Accept', 'ACCEPTED'],
                        ['Decline', 'DECLINED']
                      ].map(([button_text, response_text], i) => (
                        <span
                          key={i}
                          className="relative inline-flex items-center justify-center mx-2 px-1 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                          id="Profile"
                          onClick={() => handleRespondTeamInvite(team['teamId'], response_text)}>
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
                            {button_text}
                          </span>
                        </span>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
        {selectedtab === 3 && <>Admin</>}
      </div>
    </div>
  );
}

export default Profile;

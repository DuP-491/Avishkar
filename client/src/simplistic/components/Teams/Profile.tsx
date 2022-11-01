import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AdminService from '../../services/AdminService';
import CoordieService from '../../services/CoordieService';
import MainService from '../../services/MainService';
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
    role: 'USER',
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

  useEffect(() => {
    if (selectedtab === 1) fetchUserDetails();
    else if (selectedtab === 2) fetchTeamInvites();
    else if (selectedtab === 3) fetchDepartmentEvents();
    else if (selectedtab === 4) fetchDepartmentEvents();
  }, [selectedtab]);

  const [coordieCurrEvent, setCoordieCurrEvent] = useState('');
  useEffect(() => {
    fetchEvents(coordieCurrEvent);
  }, [coordieCurrEvent]);

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
          setNewUserDetails(data['details']);
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
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
          setTeamMembers(
            Object.fromEntries(data['teams'].map((team: any) => [team['teamId'], []]))
          );
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const fetchDepartmentEvents = () => {
    MainService.getAllDepartmentEvents()
      .then((data) => {
        if (data['success']) {
          setDepartmentEvents(data['departmentEvents']);
          if (data['departmentEvents'].length)
            setCoordieCurrEvent(data['departmentEvents'][0]['id']);
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const fetchEvents = (coordieCurrEvent: string) => {
    MainService.getAllEventsOfDepartment(coordieCurrEvent)
      .then((data) => {
        if (data['success']) {
          setEvents(data['events']);
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
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
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
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
          toast.success('Created Team Successfully');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
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
          toast.success('Deleted Team Successfully');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
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
          toast.success('Responded to Team Invite Successfully');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
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
          toast.success('Invited User Successfully');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleRemoveMember = (teamId: number, userId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.deleteMember(token, teamId, userId)
      .then((data) => {
        if (data['success']) {
          toast.success('Removed Member Successfully');
          handleGetMembers(teamId);
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleGetMembers = (teamId: number) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    UserService.getTeamMembers(token, teamId)
      .then((data) => {
        if (data['success']) {
          setTeamMembers({ ...teamMembers, [teamId]: data['members'] });
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleAddDepartmentEvent = (name: string, organizer: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    AdminService.addDepartmentEvent(token, name, organizer, '')
      .then((data) => {
        if (data['success']) {
          toast.success('Created Department Event Successfully');
          fetchDepartmentEvents();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleDeleteDepartmentEvent = (id: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    AdminService.removeDepartmentEvent(token, id)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Department Event Successfully');
          fetchDepartmentEvents();
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleAddDepartmentEventCoordie = (userId: string, deptEventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    AdminService.addDepartmentCoordie(token, userId, deptEventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Created Department Event Coordie Successfully');
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleRemoveDepartmentEventCoordie = (userId: string, deptEventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    AdminService.removeDepartmentCoordie(token, userId, deptEventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Department Event Coordie Successfully');
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleAddEventCoordie = (userId: string, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    CoordieService.addEventCoordie(token, userId, eventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Created Event Coordie Successfully');
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleRemoveEventCoordie = (userId: string, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    CoordieService.removeEventCoordie(token, userId, eventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Event Coordie Successfully');
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleDeleteEvent = (id: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    CoordieService.removeEvent(token, id)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Event Successfully');
          fetchEvents(coordieCurrEvent);
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  function Tabrender() {
    return (
      <>
        <div
          onClick={() => {
            setSelectedTab(1);
          }}
          className={`w-1/${userDetails['role'] === 'USER' ? 2 : 3} text-center pt-5 pb-5 ${
            selectedtab === 1 ? 'bg-gray-900 rounded-t-full' : ''
          }`}>
          Profile
        </div>
        <div
          onClick={() => {
            setSelectedTab(2);
          }}
          className={`w-1/${userDetails['role'] === 'USER' ? 2 : 3} text-center pt-5 pb-5 ${
            selectedtab === 2 ? 'bg-gray-900 rounded-t-full' : ''
          }`}>
          Teams
        </div>
        {userDetails['role'] === 'COORDIE' && (
          <div
            onClick={() => {
              setSelectedTab(3);
            }}
            className={`w-1/3 text-center pt-5 pb-5 ${
              selectedtab === 3 ? 'bg-gray-900 rounded-t-full' : ''
            }`}>
            Coordie
          </div>
        )}
        {userDetails['role'] === 'ADMIN' && (
          <div
            onClick={() => {
              setSelectedTab(4);
            }}
            className={`w-1/3 text-center pt-5 pb-5 ${
              selectedtab === 4 ? 'bg-gray-900 rounded-t-full' : ''
            }`}>
            Admin
          </div>
        )}
      </>
    );
  }

  const handleAddEvent = (
    name: string,
    tagline: string,
    details: string,
    criteria: string,
    rules: string,
    psLink: string,
    maxTeamSize: number,
    minTeamSize: number
  ) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      onInvalidToken();
      return;
    }
    CoordieService.addEvent(
      token,
      name,
      tagline,
      details,
      criteria,
      rules,
      psLink,
      '',
      maxTeamSize,
      minTeamSize,
      coordieCurrEvent
    )
      .then((data) => {
        if (data['success']) {
          toast.success('Added Event Successfully');
          fetchEvents(coordieCurrEvent);
        } else if (data['message'] === 'Invalid token!') {
          onInvalidToken();
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const [editDetails, setEditDetails] = useState(false);
  const [teams, setTeams] = useState([]);
  const [departmentEvents, setDepartmentEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [newDepartmentEvent, setNewDepartmentEvent] = useState({
    name: '',
    organizer: ''
  });
  const [newDepartmentEventCoordie, setNewDepartmentEventCoordie] = useState({
    userId: '',
    deptEventId: ''
  });
  const [newEventCoordie, setNewEventCoordie] = useState({
    userId: '',
    eventId: ''
  });
  const [inviteUsernames, setInviteUsernames] = useState({});
  const [teamMembers, setTeamMembers] = useState({});
  const [newEvent, setNewEvent] = useState({
    name: '',
    tagline: '',
    details: '',
    criteria: '',
    rules: '',
    psLink: '',
    maxTeamSize: 1,
    minTeamSize: 1,
    deptEventId: ''
  });
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
      <div className="pl-10 mb-3 font-mono text-3xl font-bold text-neutral-400">Profile Page</div>
      <div className="flex w-full">{Tabrender()}</div>
      <div className="p-10 bg-gray-900" style={{ height: '80vh' }}>
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
            <div className="text-white">
              Name:{' '}
              {editDetails ? (
                <input
                  value={newUserDetails['name']}
                  className="text-black"
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
                  className="text-black"
                  onChange={(e) =>
                    setNewUserDetails({ ...newUserDetails, username: e.target.value })
                  }
                />
              ) : (
                userDetails['username']
              )}
              <br />
              Mobile:{' '}
              {editDetails ? (
                <input
                  value={newUserDetails['mobile']}
                  className="text-black"
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
                  className="text-black"
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
                  className="text-black"
                  onChange={(e) =>
                    setNewUserDetails({ ...newUserDetails, resumeLink: e.target.value })
                  }
                />
              ) : (
                userDetails['resumeLink']
              )}
              <br />
              Fee Status: {userDetails['isFeePaid'] ? 'Paid' : 'Not Paid'}
            </div>
            <br />
            <br />
            <div className="text-white">
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
            </div>
          </>
        )}
        {selectedtab === 2 && (
          <>
            <div className="text-white">
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
                              placeholder="Enter username"
                              onChange={(e) =>
                                setInviteUsernames({
                                  ...inviteUsernames,
                                  [team['teamId']]: e.target.value
                                })
                              }
                            />
                            <span
                              className="relative inline-flex items-center justify-center px-1 py-1 mt-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
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
                        <br />
                        <span
                          className="relative inline-flex items-center justify-center px-1 py-1 mt-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                          id="Profile"
                          onClick={() =>
                            (teamMembers[team['teamId']] as any).length === 0
                              ? handleGetMembers(team['teamId'])
                              : {}
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
                            {(teamMembers[team['teamId']] as any).length === 0
                              ? 'Get Members'
                              : 'Members'}
                          </span>
                        </span>
                        {(teamMembers[team['teamId']] as any).map((teamMember: any) => (
                          <div key={teamMember['user']['id']} className="mb-5">
                            <p>Name: {teamMember['user']['name']}</p>
                            <span
                              className="relative inline-flex items-center justify-center px-1 py-1 ml-4 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                              id="Profile"
                              onClick={() =>
                                handleRemoveMember(team['teamId'], teamMember['user']['id'])
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
                                Remove
                              </span>
                            </span>
                          </div>
                        ))}
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
                            className="relative inline-flex items-center justify-center px-1 py-1 mx-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
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
            </div>
          </>
        )}
        {selectedtab === 3 && (
          <>
            <div className="text-white">
              <div className="flex">
                <div className="w-1/2">
                  Event
                  <br />
                  <br />
                  Dept Event:
                  <select
                    className="ml-4"
                    placeholder="Enter deptEventId"
                    value={coordieCurrEvent}
                    onChange={(e) => setCoordieCurrEvent(e.target.value)}>
                    {departmentEvents.map((departmentEvent) => (
                      <option key={departmentEvent['id']} value={departmentEvent['id']}>
                        {departmentEvent['name']}
                      </option>
                    ))}
                  </select>
                  <br />
                  <br />
                  Name:
                  <input
                    className="ml-4"
                    placeholder="Enter name"
                    value={newEvent['name']}
                    onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                  />
                  <br />
                  Tagline:
                  <input
                    className="ml-4"
                    placeholder="Enter tagline"
                    value={newEvent['tagline']}
                    onChange={(e) => setNewEvent({ ...newEvent, tagline: e.target.value })}
                  />
                  <br />
                  Details:
                  <input
                    className="ml-4"
                    placeholder="Enter details"
                    value={newEvent['details']}
                    onChange={(e) => setNewEvent({ ...newEvent, details: e.target.value })}
                  />
                  <br />
                  Criteria:
                  <input
                    className="ml-4"
                    placeholder="Enter criteria"
                    value={newEvent['criteria']}
                    onChange={(e) => setNewEvent({ ...newEvent, criteria: e.target.value })}
                  />
                  <br />
                  Rules:
                  <input
                    className="ml-4"
                    placeholder="Enter rules"
                    value={newEvent['rules']}
                    onChange={(e) => setNewEvent({ ...newEvent, rules: e.target.value })}
                  />
                  <br />
                  PSLink:
                  <input
                    className="ml-4"
                    placeholder="Enter psLink"
                    value={newEvent['psLink']}
                    onChange={(e) => setNewEvent({ ...newEvent, psLink: e.target.value })}
                  />
                  <br />
                  Max Team Size:
                  <input
                    className="ml-4"
                    value={newEvent['maxTeamSize']}
                    type="number"
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, maxTeamSize: parseInt(e.target.value) })
                    }
                  />
                  <br />
                  Min Team Size:
                  <input
                    className="ml-4"
                    value={newEvent['minTeamSize']}
                    type="number"
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, minTeamSize: parseInt(e.target.value) })
                    }
                  />
                  <br />
                  <span
                    className="relative inline-flex items-center justify-center px-1 py-1 mx-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                    id="Profile"
                    onClick={() =>
                      handleAddEvent(
                        newEvent['name'],
                        newEvent['tagline'],
                        newEvent['details'],
                        newEvent['criteria'],
                        newEvent['rules'],
                        newEvent['psLink'],
                        newEvent['maxTeamSize'],
                        newEvent['minTeamSize']
                      )
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
                      Create Event
                    </span>
                  </span>
                  <br />
                  <br />
                  {events.map((event) => (
                    <div key={event['id']} className="mb-4">
                      <p>ID: {event['id']}</p>
                      <p>Name: {event['name']}</p>
                      <p>Details: {event['details']}</p>
                      <span
                        className="relative inline-flex items-center justify-center px-1 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                        id="Profile"
                        onClick={() => handleDeleteEvent(event['id'])}>
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
                          Delete
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-1/2">
                  Events Coordies
                  <br />
                  <br />
                  <input
                    type="text"
                    value={newEventCoordie['userId']}
                    onChange={(e) =>
                      setNewEventCoordie({
                        ...newEventCoordie,
                        userId: e.target.value
                      })
                    }
                    placeholder="Enter userId"
                  />
                  <input
                    className="ml-4"
                    type="text"
                    value={newEventCoordie['eventId']}
                    onChange={(e) =>
                      setNewEventCoordie({
                        ...newEventCoordie,
                        eventId: e.target.value
                      })
                    }
                    placeholder="Enter eventId"
                  />
                  <br />
                  <br />
                  <span
                    className="relative inline-flex items-center justify-center px-1 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                    id="Profile"
                    onClick={() =>
                      handleAddEventCoordie(newEventCoordie['userId'], newEventCoordie['eventId'])
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
                      Add Event Coordie
                    </span>
                  </span>
                  <span
                    className="relative inline-flex items-center justify-center px-1 py-1 mx-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                    id="Profile"
                    onClick={() =>
                      handleRemoveEventCoordie(
                        newEventCoordie['userId'],
                        newEventCoordie['eventId']
                      )
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
                      Remove Event Coordie
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
        {selectedtab === 4 && (
          <>
            <div className="text-white">
              <div className="flex">
                <div className="w-1/2">
                  Department Events
                  <br />
                  <br />
                  <input
                    type="text"
                    value={newDepartmentEvent['name']}
                    onChange={(e) =>
                      setNewDepartmentEvent({ ...newDepartmentEvent, name: e.target.value })
                    }
                    placeholder="Enter name"
                  />
                  <input
                    className="ml-4"
                    type="text"
                    value={newDepartmentEvent['organizer']}
                    onChange={(e) =>
                      setNewDepartmentEvent({ ...newDepartmentEvent, organizer: e.target.value })
                    }
                    placeholder="Enter organizer"
                  />
                  <span
                    className="relative inline-flex items-center justify-center px-1 py-1 mx-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                    id="Profile"
                    onClick={() =>
                      handleAddDepartmentEvent(
                        newDepartmentEvent['name'],
                        newDepartmentEvent['organizer']
                      )
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
                      Create Department Event
                    </span>
                  </span>
                  <br />
                  <br />
                  {departmentEvents.map((departmentEvent) => (
                    <div key={departmentEvent['id']} className="mb-4">
                      <p>Department Event Id: {departmentEvent['id']}</p>
                      <p>Name: {departmentEvent['name']}</p>
                      <p>Organizer: {departmentEvent['organizer']}</p>
                      <span
                        className="relative inline-flex items-center justify-center px-1 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                        id="Profile"
                        onClick={() => handleDeleteDepartmentEvent(departmentEvent['id'])}>
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
                          Delete
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-1/2">
                  Department Events Coordies
                  <br />
                  <br />
                  <input
                    type="text"
                    value={newDepartmentEventCoordie['userId']}
                    onChange={(e) =>
                      setNewDepartmentEventCoordie({
                        ...newDepartmentEventCoordie,
                        userId: e.target.value
                      })
                    }
                    placeholder="Enter userId"
                  />
                  <input
                    className="ml-4"
                    type="text"
                    value={newDepartmentEventCoordie['deptEventId']}
                    onChange={(e) =>
                      setNewDepartmentEventCoordie({
                        ...newDepartmentEventCoordie,
                        deptEventId: e.target.value
                      })
                    }
                    placeholder="Enter deptEventId"
                  />
                  <br />
                  <br />
                  <span
                    className="relative inline-flex items-center justify-center px-1 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                    id="Profile"
                    onClick={() =>
                      handleAddDepartmentEventCoordie(
                        newDepartmentEventCoordie['userId'],
                        newDepartmentEventCoordie['deptEventId']
                      )
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
                      Add Department Event Coordie
                    </span>
                  </span>
                  <span
                    className="relative inline-flex items-center justify-center px-1 py-1 mx-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
                    id="Profile"
                    onClick={() =>
                      handleRemoveDepartmentEventCoordie(
                        newDepartmentEventCoordie['userId'],
                        newDepartmentEventCoordie['deptEventId']
                      )
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
                      Remove Department Event Coordie
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;

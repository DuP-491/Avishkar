import React, { useEffect, useState } from 'react';
import MainService from '../services/MainService';
import tabletBg from '../../images/tablet_bg.png';
import defaultPfp from '../../images/default_pfp.png';
import UserService from '../services/UserService';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

function NewTablet(props: Props) {
  const { key, is_profile, logout, closePopup } = props;
  const APP_ICONS = [
    'https://i.imgur.com/vSvFDH7.jpg',
    'https://i.imgur.com/M6LcSPu.jpg',
    'https://i.imgur.com/7nPBj3Y.jpg',
    'https://i.imgur.com/VUI6eHd.jpg',
    'https://i.imgur.com/QkvrLvo.jpg',
    'https://i.imgur.com/R1Fhzpi.jpg',
    'https://i.imgur.com/4eU10cM.jpg',
    'https://i.imgur.com/WMvYR2K.jpg',
    'https://i.imgur.com/wVwhg2O.jpg'
  ];

  // const navigate = useNavigate();
  const [tab, setTab] = useState(is_profile ? 'Profile' : 'Departments');
  const [departments, setDepartments] = useState([]);
  const [deptCoordies, setDeptCoordies] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedDeptID, setSelectedDeptID] = useState(-1);
  const [selectedEventID, setSelectedEventID] = useState(-1);
  const [eventSection, setEventSection] = useState(0);
  const [profileSection, setProfileSection] = useState(0);
  const [selectedDeptCoordie, setSelectedDeptCoordie] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [userDetails, setUserDetails] = useState({
    id: '',
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
  const [showDeptCoordieDetails, setShowDeptCoordieDetails] = useState(false);

  const [teams, setTeams] = useState([]);
  const [teamMembers, setTeamMembers] = useState({});
  // console.log(teams, teamMembers);

  useEffect(() => {
    fetchUserDetails();
    fetchTeamInvites();
    if (tab === 'Profile') {
      setProfileSection(0);
    } else {
      console.log(key);
      if (key) {
        handleSelectDept(key);
      } else {
        MainService.getAllDepartmentEvents()
          .then((data) => {
            if (data['success']) {
              setDepartments(data['departmentEvents']);
            } else logout();
          })
          .catch(() => {
            logout();
          });
      }
    }
  }, []);

  useEffect(() => {
    if (tab === 'Profile' && 2 <= profileSection && profileSection <= 4) fetchTeamInvites();
  }, [profileSection]);

  useEffect(() => {
    if (selectedDeptID !== -1) {
      MainService.getAllEventsOfDepartment(departments[selectedDeptID]['id'])
        .then((data) => {
          if (data['success']) {
            setEvents(data['events']);
          } else logout();
        })
        .catch(() => {
          logout();
        });
      MainService.getDepartmentCoordies(departments[selectedDeptID]['id'])
        .then((data) => {
          if (data['success']) {
            setDeptCoordies(data['deptEventCoordies']);
          } else logout();
        })
        .catch(() => {
          logout();
        });
    }
  }, [selectedDeptID]);

  const fetchUserDetails = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      if (tab === 'Profile') logout();
      return;
    }
    UserService.getUserDetails(token)
      .then((data) => {
        if (data['success']) {
          if (data['details']['resumeLink'] !== null) data['details']['resumeLink'] = '';
          setUserDetails(data['details']);
          setNewUserDetails(data['details']);
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const handleEditDetails = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
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
          fetchUserDetails();
          setProfileSection(0);
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const fetchTeamInvites = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      if (tab === 'Profile') logout();
      return;
    }
    UserService.getTeamInvites(token)
      .then((data) => {
        if (data['success']) {
          setTeams(data['teams']);
          setTeamMembers(
            Object.fromEntries(data['teams'].map((team: any) => [team['teamId'], []]))
          );
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const fetchTeamMembers = (teamId: number) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    UserService.getTeamMembers(token, teamId)
      .then((data) => {
        if (data['success']) {
          setTeamMembers({ ...teamMembers, [teamId]: data['members'] });
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const handleCreateTeam = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    UserService.createTeam(token)
      .then((data) => {
        if (data['success']) {
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const handleDeleteTeam = (teamId: number) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    UserService.removeTeam(token, teamId)
      .then((data) => {
        if (data['success']) {
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const handleRespondTeamInvite = (teamId: number, status: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    UserService.responseToTeamInvite(token, teamId, status)
      .then((data) => {
        if (data['success']) {
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const handleRemoveMember = (teamId: number, userId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    UserService.deleteMember(token, teamId, userId)
      .then((data) => {
        if (data['success']) {
          setProfileSection(2);
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const handleParticipate = (teamId: number, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    UserService.eventParticipate(token, teamId, eventId)
      .then((data) => {
        if (data['success']) {
          setEventSection(0);
        } else if (data['message'] === 'Invalid token!') {
          logout();
        } else logout();
      })
      .catch(() => {
        logout();
      });
  };

  const handleSelectDept = (i: any) => {
    setTab('Events');
    setSelectedDeptID(i);
  };

  const handleSelectDeptCoordie = (i: number) => {
    setSelectedDeptCoordie({
      name: deptCoordies[i]['user']['name'],
      email: deptCoordies[i]['user']['email'],
      mobile: deptCoordies[i]['user']['mobile']
    });
    setShowDeptCoordieDetails(true);
  };

  const handleSelectEvent = (i: number) => {
    setTab('Event');
    setEventSection(0);
    setSelectedEventID(i);
  };

  const handleGoBack = () => {
    if (tab === 'Event') setTab('Events');
    else if (tab === 'Events') setTab('Departments');
    else closePopup();
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen bg-black rounded-3xl">
        {/* Front Camera */}
        <div className="absolute top-[50vh] left-[2.5%] rounded-full bg-zinc-800 w-3 h-3" />
        <div className="absolute top-[50.5vh] left-[2.7%] rounded-full bg-blue-900 w-1 h-1" />

        {/* Home Button */}
        <div
          className="absolute top-[48.5vh] right-[1.5%] cursor-pointer rounded-full bg-zinc-900 w-10 h-10"
          onClick={handleGoBack}
        />
        <div
          className="absolute top-[49.8vh] right-[2.1%] cursor-pointer rounded-sm border-slate-400 border-2 w-5 h-5"
          onClick={handleGoBack}
        />

        {/* Background Image */}
        <div
          className="absolute top-[5vh] left-[5%] w-[90%] bg-cover bg-no-repeat bg-center blur brightness-75 h-[90vh] text-[50px] rounded-md"
          style={{ backgroundImage: `url(${tabletBg})` }}
        />

        <div className="absolute top-[5vh] left-[5%] w-[90%] bg-cover bg-no-repeat bg-center h-[90vh] text-[50px] text-white rounded-md">
          {tab === 'Departments' && (
            <div className="flex flex-col h-full">
              <h1 className="mt-10 text-3xl text-center">Departments</h1>
              <div className="flex flex-wrap items-center justify-center flex-1">
                {departments.map((department, i) => (
                  <button
                    key={department['id']}
                    className="flex flex-col items-center m-2 w-36 h-1/3"
                    onClick={() => handleSelectDept(i)}>
                    <div className="flex flex-wrap justify-around w-32 h-32 rounded-xl pt-2 bg-zinc-800/[0.4] shadow-md">
                      {[...Array(4)]
                        .map(() => APP_ICONS[Math.floor(Math.random() * APP_ICONS.length)])
                        .map((APP_ICON, j) => (
                          <img
                            key={`${department['id']}-${j}`}
                            className="w-10 h-10 m-1 bg-orange-500 rounded-xl shrink-0"
                            src={APP_ICON}
                          />
                        ))}
                    </div>
                    <span className="text-sm font-bold">{department['name']}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {tab === 'Events' && selectedDeptID !== -1 && (
            <div className="flex flex-col h-full">
              <h1 className="mt-10 text-3xl text-center">{departments[selectedDeptID]['name']}</h1>
              <p className="mt-3 text-xl italic text-center">
                {departments[selectedDeptID]['desc']}
              </p>
              <div className="flex flex-wrap items-center justify-center flex-1 overflow-y-auto">
                {events.map((event, i) => (
                  <button
                    key={event['id']}
                    className="flex flex-col items-center m-2 w-36 h-1/3"
                    onClick={() => handleSelectEvent(i)}>
                    <img
                      className="w-20 h-20 m-1 bg-orange-500 rounded-xl shrink-0"
                      src={APP_ICONS[Math.floor(Math.random() * APP_ICONS.length)]}
                    />
                    <span className="text-sm font-bold">{event['name']}</span>
                  </button>
                ))}
              </div>
              <div className="flex rounded-xl items-center justify-center overflow-x-auto bg-zinc-800/[0.4] w-[90%] p-1 mx-auto">
                {deptCoordies.map((deptCoordie, i) => (
                  <button
                    key={deptCoordie['user']['id']}
                    className="flex flex-col items-center w-36"
                    onClick={() => handleSelectDeptCoordie(i)}>
                    <img
                      className="w-20 h-20 m-1 bg-orange-500 rounded-xl shrink-0"
                      src={APP_ICONS[Math.floor(Math.random() * APP_ICONS.length)]}
                    />
                    <span className="text-sm font-bold">{deptCoordie['user']['name']}</span>
                  </button>
                ))}
              </div>
              {showDeptCoordieDetails && (
                <div
                  className="absolute top-0 left-0 w-full h-full backdrop-blur"
                  onClick={() => setShowDeptCoordieDetails(false)}>
                  <div className="relative w-1/3 mx-auto text-sm text-black bg-white rounded-lg top-[40%]">
                    <p className="flex justify-between px-2 py-2 border-gray-500">
                      <span>Name</span>
                      <span>{selectedDeptCoordie['name']}</span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>Email</span>
                      <span>{selectedDeptCoordie['email']}</span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>Mobile</span>
                      <span>{selectedDeptCoordie['mobile']}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          {tab === 'Event' && selectedEventID !== -1 && (
            <div className="flex h-full text-black">
              <div className="w-1/3 pl-5 border-r-2 border-slate-300 bg-slate-200 rounded-l-md">
                <h1 className="mt-5 font-bold">{events[selectedEventID]['name']}</h1>
                <p className="px-5 py-1 mt-5 text-2xl font-bold">Details</p>
                <p
                  className={
                    eventSection === 0
                      ? 'text-white bg-blue-800 rounded-2xl cursor-pointer px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setEventSection(0)}>
                  Home
                </p>
                <p
                  className={
                    eventSection === 1
                      ? 'text-white bg-blue-800 rounded-2xl cursor-pointer px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setEventSection(1)}>
                  About
                </p>
                <p
                  className={
                    eventSection === 2
                      ? 'text-white bg-blue-800 rounded-2xl cursor-pointer px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setEventSection(2)}>
                  Participation Criteria
                </p>
                <p
                  className={
                    eventSection === 3
                      ? 'text-white bg-blue-800 cursor-pointer rounded-2xl px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setEventSection(3)}>
                  Rules
                </p>
                {(events[selectedEventID]['psLink'] !== '#' ||
                  (Cookies.get('token') !== undefined &&
                    teams.filter((team) => team['team']['leader'] === userDetails['id']).length !==
                      0)) && <p className="px-5 py-1 mt-5 text-2xl font-bold">Participate</p>}
                {events[selectedEventID]['psLink'] !== '#' && (
                  <p
                    className="text-white bg-blue-800 cursor-pointer mb-1 rounded-2xl px-5 py-1 text-2xl w-[95%]"
                    onClick={() => window.open(events[selectedEventID]['psLink'], '_blank')}>
                    Problem Statement
                  </p>
                )}
                {Cookies.get('token') !== undefined &&
                  teams.filter((team) => team['team']['leader'] === userDetails['id']).length !==
                    0 && (
                    <p
                      className={
                        eventSection === 4
                          ? 'text-white bg-blue-800 cursor-pointer rounded-2xl px-5 py-1 text-2xl w-[95%]'
                          : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                      }
                      onClick={() => setEventSection(4)}>
                      Register
                    </p>
                  )}
              </div>
              <div className="relative flex flex-col w-2/3 bg-white rounded-r-md">
                <div className="absolute top-0 left-0 flex flex-col w-full border-b-2 bg-slate-100 border-slate-200 h-1/6 ">
                  <h2 className="flex-1 mt-5 text-lg font-bold text-center">
                    {departments[selectedDeptID]['name']}
                  </h2>
                  <div className="w-[90%] mx-auto bg-zinc-400/[0.4] h-7 rounded-md mb-4"></div>
                </div>
                {eventSection === 0 && (
                  <div>
                    <p className="text-3xl italic text-center mt-[45vh] translate-y-[-50%]">
                      {events[selectedEventID]['tagline']}
                    </p>
                  </div>
                )}
                {eventSection === 1 && (
                  <div className="mt-[15vh] overflow-y-auto">
                    <p
                      className="m-5 text-3xl"
                      dangerouslySetInnerHTML={{ __html: events[selectedEventID]['details'] }}
                    />
                  </div>
                )}
                {eventSection === 2 && (
                  <div className="mt-[15vh] overflow-y-auto">
                    <p
                      className="m-5 text-3xl"
                      dangerouslySetInnerHTML={{ __html: events[selectedEventID]['criteria'] }}
                    />
                  </div>
                )}
                {eventSection === 3 && (
                  <div className="mt-[15vh] overflow-y-auto">
                    <p
                      className="m-5 text-3xl"
                      dangerouslySetInnerHTML={{ __html: events[selectedEventID]['rules'] }}
                    />
                  </div>
                )}
                {eventSection === 4 && (
                  <div className="mt-[15vh] overflow-y-auto">
                    {teams
                      .filter((team) => team['team']['leader'] === userDetails['id'])
                      .map((team) => (
                        <div
                          key={team['team']['id']}
                          className="relative m-5 text-sm text-black bg-gray-100 rounded-lg">
                          <p className="flex justify-between px-2 py-2 border-gray-500">
                            <span>Name</span>
                            <span>{team['team']['name']}</span>
                          </p>
                          <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                            <span>Number of members</span>
                            <span>{team['team']['size']}</span>
                          </p>
                          <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                            <span>
                              {(teamMembers[team['team']['id']] as any).length === 0
                                ? 'View all members'
                                : 'Members'}
                            </span>
                            <span>
                              {(teamMembers[team['team']['id']] as any).length === 0 && (
                                <div
                                  className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-800 cursor-pointer"
                                  onClick={() => fetchTeamMembers(team['team']['id'])}
                                />
                              )}
                            </span>
                          </p>
                          {(teamMembers[team['team']['id']] as any).map(
                            (teamMember: any, i: number) => (
                              <p
                                key={teamMember['userId']}
                                className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                                <span>
                                  &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                  {teamMember['user']['id'] === team['team']['leader']
                                    ? '(Leader)'
                                    : ''}
                                </span>
                                {teamMember['user']['id'] !== team['team']['leader'] && (
                                  <span
                                    className="mr-2 text-red-800 cursor-pointer"
                                    onClick={() =>
                                      handleRemoveMember(
                                        team['team']['id'],
                                        teamMember['user']['id']
                                      )
                                    }>
                                    X
                                  </span>
                                )}
                              </p>
                            )
                          )}
                          <p
                            className="w-full px-2 py-2 text-center text-blue-800 border-t-2 border-gray-300 cursor-pointer"
                            onClick={() =>
                              handleParticipate(team['team']['id'], events[selectedEventID]['id'])
                            }>
                            Participate
                          </p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {tab === 'Profile' && (
            <div className="flex h-full text-black">
              <div className="w-1/3 pl-5 border-r-2 border-slate-300 bg-slate-200 rounded-l-md">
                <div className="bg-white rounded-md mt-5 w-[95%] flex p-3">
                  <img className="w-20 h-20 m-1 rounded-full shrink-0" src={defaultPfp} />
                  <div className="flex flex-col justify-center ml-3">
                    <h2 className="text-2xl">{userDetails['name']}</h2>
                    <p className="text-lg ">{userDetails['username']}</p>
                  </div>
                </div>
                <p className="px-5 py-1 mt-5 text-2xl font-bold">Details</p>
                <p
                  className={
                    profileSection === 0
                      ? 'text-white bg-blue-800 rounded-2xl cursor-pointer px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setProfileSection(0)}>
                  View
                </p>
                <p
                  className={
                    profileSection === 1
                      ? 'text-white bg-blue-800 rounded-2xl cursor-pointer px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setProfileSection(1)}>
                  Edit
                </p>
                <p className="px-5 py-1 mt-5 text-2xl font-bold">Team</p>
                <p
                  className={
                    profileSection === 2
                      ? 'text-white bg-blue-800 rounded-2xl cursor-pointer px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setProfileSection(2)}>
                  View
                </p>
                <p
                  className={
                    profileSection === 3
                      ? 'text-white bg-blue-800 rounded-2xl cursor-pointer px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setProfileSection(3)}>
                  Manage
                </p>
                <p
                  className={
                    profileSection === 4
                      ? 'text-white bg-blue-800 rounded-2xl cursor-pointer px-5 py-1 text-2xl w-[95%]'
                      : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                  }
                  onClick={() => setProfileSection(4)}>
                  Invitations
                </p>
              </div>
              <div className="relative flex flex-col w-2/3 bg-slate-200 rounded-r-md">
                {profileSection === 0 && (
                  <div className="m-5 text-sm text-black bg-white rounded-lg">
                    <p className="flex justify-between px-2 py-2 border-gray-500">
                      <span>Name</span>
                      <span>{userDetails['name']}</span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>Username</span>
                      <span>{userDetails['username']}</span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>College</span>
                      <span>{userDetails['collegeName']}</span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>Mobile</span>
                      <span>{userDetails['mobile']}</span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>Resume Link</span>
                      <span>{userDetails['resumeLink']}</span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>Email</span>
                      <span>{userDetails['email']}</span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>Gender</span>
                      <span>
                        {userDetails['gender']
                          ? userDetails['gender'].charAt(0).toUpperCase() +
                            userDetails['gender'].slice(1)
                          : ''}
                      </span>
                    </p>
                    <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                      <span>Fee Status</span>
                      <span>{userDetails['isFeePaid'] ? 'PAID' : 'NOT PAID'}</span>
                    </p>
                  </div>
                )}
                {profileSection === 1 && (
                  <>
                    <div className="m-5 text-sm text-black bg-white rounded-lg">
                      <p className="flex justify-between px-2 py-2 border-gray-500">
                        <span>Name</span>
                        <input
                          placeholder="Enter your name"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['name']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, name: e.target.value })
                          }
                        />
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                        <span>Username</span>
                        <input
                          placeholder="Enter your username"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['username']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, username: e.target.value })
                          }
                        />
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                        <span>College</span>
                        <input
                          placeholder="Enter your college name"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['collegeName']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, collegeName: e.target.value })
                          }
                        />
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                        <span>Mobile</span>
                        <input
                          placeholder="Enter your mobile"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['mobile']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, mobile: e.target.value })
                          }
                        />
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                        <span>Resume Link</span>
                        <input
                          placeholder="Enter your resumeLink"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['resumeLink']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, resumeLink: e.target.value })
                          }
                        />
                      </p>
                    </div>
                    <div
                      className="m-5 text-sm text-black bg-white rounded-lg cursor-pointer"
                      onClick={() => handleEditDetails()}>
                      <p className="w-full px-2 py-2 text-center text-blue-800">Submit</p>
                    </div>
                  </>
                )}
                {profileSection === 2 &&
                  teams.filter((team) => team['status'] === 'ACCEPTED').length === 0 && (
                    <div>
                      <p className="text-3xl text-center mt-[45vh] translate-y-[-50%]">
                        You are not part of any team!
                      </p>
                    </div>
                  )}
                {profileSection === 2 &&
                  teams.filter((team) => team['status'] === 'ACCEPTED').length !== 0 && (
                    <div className="overflow-y-auto">
                      {teams
                        .filter((team) => team['status'] === 'ACCEPTED')
                        .map((team) => (
                          <div
                            key={team['team']['id']}
                            className="m-5 text-sm text-black bg-white rounded-lg">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{team['team']['name']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                              <span>Number of members</span>
                              <span>{team['team']['size']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                              <span>
                                {(teamMembers[team['team']['id']] as any).length === 0
                                  ? 'View all members'
                                  : 'Members'}
                              </span>
                              <span>
                                {(teamMembers[team['team']['id']] as any).length === 0 && (
                                  <div
                                    className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-800 cursor-pointer"
                                    onClick={() => fetchTeamMembers(team['team']['id'])}
                                  />
                                )}
                              </span>
                            </p>
                            {(teamMembers[team['team']['id']] as any).map(
                              (teamMember: any, i: number) => (
                                <p
                                  key={teamMember['userId']}
                                  className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                                  &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                  {teamMember['user']['id'] === team['team']['leader']
                                    ? '(Leader)'
                                    : ''}
                                </p>
                              )
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                {profileSection === 3 && (
                  <div className="overflow-y-auto">
                    {teams
                      .filter((team) => team['team']['leader'] === userDetails['id'])
                      .map((team) => (
                        <div
                          key={team['team']['id']}
                          className="relative m-5 text-sm text-black bg-white rounded-lg">
                          <p className="flex justify-between px-2 py-2 border-gray-500">
                            <span>Name</span>
                            <span>{team['team']['name']}</span>
                          </p>
                          <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                            <span>Number of members</span>
                            <span>{team['team']['size']}</span>
                          </p>
                          <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                            <span>
                              {(teamMembers[team['team']['id']] as any).length === 0
                                ? 'View all members'
                                : 'Members'}
                            </span>
                            <span>
                              {(teamMembers[team['team']['id']] as any).length === 0 && (
                                <div
                                  className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-800 cursor-pointer"
                                  onClick={() => fetchTeamMembers(team['team']['id'])}
                                />
                              )}
                            </span>
                          </p>
                          {(teamMembers[team['team']['id']] as any).map(
                            (teamMember: any, i: number) => (
                              <p
                                key={teamMember['userId']}
                                className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                                <span>
                                  &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                  {teamMember['user']['id'] === team['team']['leader']
                                    ? '(Leader)'
                                    : ''}
                                </span>
                                {teamMember['user']['id'] !== team['team']['leader'] && (
                                  <span
                                    className="mr-2 text-red-800 cursor-pointer"
                                    onClick={() =>
                                      handleRemoveMember(
                                        team['team']['id'],
                                        teamMember['user']['id']
                                      )
                                    }>
                                    X
                                  </span>
                                )}
                              </p>
                            )
                          )}
                          <p
                            className="w-full px-2 py-2 text-center text-red-800 border-t-2 border-gray-300 cursor-pointer"
                            onClick={() => handleDeleteTeam(team['team']['id'])}>
                            Delete Team
                          </p>
                        </div>
                      ))}
                    <div
                      className="m-5 text-sm text-black bg-white rounded-lg cursor-pointer"
                      onClick={() => handleCreateTeam()}>
                      <p className="w-full px-2 py-2 text-center text-blue-800">Create Team</p>
                    </div>
                  </div>
                )}
                {profileSection === 4 &&
                  teams.filter((team) => team['status'] !== 'ACCEPTED').length === 0 && (
                    <div>
                      <p className="text-3xl text-center mt-[45vh] translate-y-[-50%]">
                        You do not have any invitations!
                      </p>
                    </div>
                  )}
                {profileSection === 4 &&
                  teams.filter((team) => team['status'] !== 'ACCEPTED').length !== 0 && (
                    <div className="overflow-y-auto">
                      {teams
                        .filter((team) => team['status'] !== 'ACCEPTED')
                        .map((team) => (
                          <div
                            key={team['team']['id']}
                            className="m-5 text-sm text-black bg-white rounded-lg">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{team['team']['name']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                              <span>Number of members</span>
                              <span>{team['team']['size']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                              <span>
                                {(teamMembers[team['team']['id']] as any).length === 0
                                  ? 'View all members'
                                  : 'Members'}
                              </span>
                              <span>
                                {(teamMembers[team['team']['id']] as any).length === 0 && (
                                  <div
                                    className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-800 cursor-pointer"
                                    onClick={() => fetchTeamMembers(team['team']['id'])}
                                  />
                                )}
                              </span>
                            </p>
                            {(teamMembers[team['team']['id']] as any).map(
                              (teamMember: any, i: number) => (
                                <p
                                  key={teamMember['userId']}
                                  className="flex justify-between px-2 py-2 border-t-2 border-gray-300">
                                  &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                  {teamMember['user']['id'] === team['team']['leader']
                                    ? '(Leader)'
                                    : ''}
                                </p>
                              )
                            )}
                            <p
                              className="w-full px-2 py-2 text-center text-blue-800 border-t-2 border-gray-300 cursor-pointer"
                              onClick={() =>
                                handleRespondTeamInvite(team['team']['id'], 'ACCEPTED')
                              }>
                              Accept Invitation
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-red-800 border-t-2 border-gray-300 cursor-pointer"
                              onClick={() =>
                                handleRespondTeamInvite(team['team']['id'], 'DECLINED')
                              }>
                              Reject Invitation
                            </p>
                          </div>
                        ))}
                    </div>
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

NewTablet.propTypes = {
  key: PropTypes.string.isRequired,
  is_profile: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof NewTablet.propTypes>;

export default NewTablet;

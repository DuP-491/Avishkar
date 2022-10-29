import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import DividerLine from '../Common/DividerLine';
import Invite from './Invite';
import Team from './Team';
import PropTypes from 'prop-types';
import UserService from '../../services/UserService';
import { toast } from 'react-toastify';

const index = (props: Props) => {
  const { logout } = props;
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

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchUserDetails();
    fetchTeamInvites();
  }, []);

  const fetchUserDetails = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    UserService.getUserDetails(token)
      .then((data) => {
        if (data['success']) {
          if (data['details']['resumeLink'] === null) data['details']['resumeLink'] = '';
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
          toast.success('Resume Updated successfully');
        } else if (data['message'] === 'Invalid token!') {
          toast.error('Logging Out');
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
      logout();
      return;
    }
    UserService.getTeamInvites(token)
      .then((data) => {
        if (data['success']) {
          setTeams(data['teams']);
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
          toast.success('New team created successfully.');
        }
        //  else if (data['message'] === 'Invalid token!') {
        //   logout();
        // } else logout();
      })
      .catch(() => {
        // logout();
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
        }
        //  else if (data['message'] === 'Invalid token!') {
        //   logout();
        // } else logout();
      })
      .catch(() => {
        // logout();
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
        }
        //  else if (data['message'] === 'Invalid token!') {
        //   logout();
        // } else logout();
      })
      .catch(() => {
        // logout();
      });
  };
  return (
    <div className="relative flex flex-col min-h-screen gap-3 p-2 text-white bg-gray-900 md:flex-row">
      <div className="top-0 w-full p-4 overflow-auto bg-gray-800 md:h-screen md:sticky">
        <h2 className="text-3xl font-semibold capitalize title">hi</h2>
        <h2 className="text-3xl font-semibold capitalize title">{userDetails.name}</h2>
        <p className="py-2">
          <strong>NOTE:</strong>you can only update resume link
        </p>
        <form
          className="w-full space-y-4 md:space-y-6"
          action="#"
          onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center">
            <label htmlFor="username" className="block mb-2 mr-2 text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full px-1 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="username"
              required={true}
              disabled={true}
              value={userDetails.username}
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
              value={userDetails.email}
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
              value={userDetails.mobile}
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
              value={userDetails.collegeName}
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
              value={userDetails.isFeePaid ? 'PAID' : 'PENDING'}
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
              value={newUserDetails.resumeLink}
              onChange={(e) => setNewUserDetails({ ...newUserDetails, resumeLink: e.target.value })}
            />
          </div>
          <button
            type="submit"
            onClick={handleEditDetails}
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
            {teams.filter((team) => team['status'] !== 'ACCEPTED').length === 0 && (
              <p>You do not have any invitations!</p>
            )}
          </div>
          {teams.filter((team) => team['status'] !== 'ACCEPTED').length !== 0 && (
            <div className="overflow-y-auto">
              {teams
                .filter((team) => team['status'] !== 'ACCEPTED')
                .map((team) => (
                  <Invite
                    key={team['team']['id']}
                    name={team['team']['name']}
                    team={team}
                    handleRespondTeamInvite={handleRespondTeamInvite}
                  />
                ))}
            </div>
          )}
        </div>
        {/* teams */}
        <div>
          <DividerLine text="teams" />
          <button
            className="p-2 mt-2 bg-gray-800 roudned-sm hover:bg-gray-500"
            onClick={handleCreateTeam}>
            create new team
          </button>
          {teams.filter((team) => team['status'] === 'ACCEPTED').length === 0 && (
            <div>
              <p className="text-3xl text-center mt-[45vh] translate-y-[-50%]">
                You are not part of any team!
              </p>
            </div>
          )}
          {teams.filter((team) => team['status'] === 'ACCEPTED').length !== 0 && (
            <div className="overflow-y-auto">
              {teams
                .filter((team) => team['status'] === 'ACCEPTED')
                .map((team) => {
                  return (
                    <Team
                      key={team['team']['id']}
                      name_ip={team['team']['name']}
                      team={team}
                      handleDeleteTeam={() => {
                        handleDeleteTeam(team['team']['id']);
                        toast.success(team['team']['name'] + ' removed successfully!');
                      }}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const propTypes = {
  logout: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof propTypes>;

export default index;

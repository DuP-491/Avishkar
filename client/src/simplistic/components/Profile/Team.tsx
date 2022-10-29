import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import UserService from '../../services/UserService';
import TeamMember from './TeamMember';

const Team = (props: any) => {
  const { name_ip, team, handleDeleteTeam } = props;
  const [name, setName] = useState(name_ip);

  const teamId = team['team']['id'];
  const [teamMembers, setTeamMembers] = useState([]);
  const [editTeamSwitch, setEditTeamSwitch] = useState(false);
  const [newTeamName, setNewTeamName] = useState(name);
  const [inviteUsernames, setInviteUsernames] = useState<{
    [key: string]: any;
  }>({});
  const UNEXPECTED_ERROR_MSG = 'Please try again later!';
  const LOGIN_AGAIN_PROMPT = 'Please login again!';
  const getTeamMembers = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      return;
    }
    UserService.getTeamMembers(token, teamId)
      .then((data) => {
        if (data['success']) {
          setTeamMembers(data['members']);
        }
      })
      .catch(() => {
        // logout();
      });
  };
  useEffect(() => {
    getTeamMembers();
  }, []);

  const handleInviteUser = (teamId: number) => {
    const token = Cookies.get('token');
    if (token === undefined) return;
    UserService.inviteUser(token, teamId, (inviteUsernames as { [key: string]: string })[teamId])
      .then((data) => {
        if (data['success']) {
          toast.success('User Invited Successfully!');
          setInviteUsernames({ ...inviteUsernames, [teamId]: '' });
          getTeamMembers();
        } else if (data['message'] === 'Invalid token!') {
          toast.error('Please login again!');
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  const handleUpdateTeam = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      return;
    }
    UserService.updateTeam(token, teamId, newTeamName)
      .then((data) => {
        if (data['success']) {
          toast.success('Changed Team Name Successfully!');
          setName(newTeamName);
          setNewTeamName(newTeamName);
          setEditTeamSwitch((s) => !s);
        } else if (data['message'] === 'Invalid token!') {
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  return (
    <div className="relative mt-2 shadow-md sm:rounded-lg">
      <div className="w-full text-sm text-left text-white-400">
        {/* team card header--> name and action */}
        <div className="flex items-center p-2 text-white-400 uppercase bg-gray-700 text-md">
          {editTeamSwitch ? (
            <div>
              <input
                className="bg-white-400 text-gray-700"
                value={newTeamName}
                onChange={(e) => {
                  setNewTeamName(e.target.value);
                }}
              />
              <button onClick={handleUpdateTeam}>Save</button>
            </div>
          ) : (
            <h2>{name}</h2>
          )}
          <div className="ml-auto space-x-2">
            <button
              className="p-1 bg-gray-900 rounded-sm hover:bg-gray-800"
              onClick={() => {
                setEditTeamSwitch((s) => !s);
              }}>
              edit
            </button>
            <button
              className="p-1 bg-gray-900 rounded-sm hover:bg-gray-800"
              onClick={handleDeleteTeam}>
              delete
            </button>
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
              value={inviteUsernames[team['team']['id']]}
              onChange={(e) =>
                setInviteUsernames({
                  ...inviteUsernames,
                  [team['team']['id']]: e.target.value
                })
              }
            />
            <div className="text-right capitalize ">
              <button
                className="inline-block font-medium text-blue-500 hover:underline"
                onClick={() => handleInviteUser(team['team']['id'])}>
                invite
              </button>
            </div>
          </div>
          {/* team members */}
          <div>
            {teamMembers?.map((teamMember: any, i: number) => (
              <TeamMember
                key={teamMember['userId']}
                name={`${i + 1} ${teamMember['user']['name']} ${
                  teamMember['user']['id'] === team['team']['leader']
                    ? '(Leader)'
                    : teamMember['status'] === 'ACCEPTED'
                    ? ''
                    : '(Invitation Pending)'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

export default {
  getUserDetails: async function (token: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            details: data['details'],
            success: true,
            message: 'Success'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  updateUserDetails: async function (
    token: string,
    name: string,
    username: string,
    collegeName: string,
    mobile: string,
    resumeLink: string | null
  ) {
    if (resumeLink === '') resumeLink = null;
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, username, collegeName, mobile, resumeLink })
      });
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: 'Username already taken!'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  createTeam: async function (token: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/team/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: 'Cannot create team until fees is paid!'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  getTeamMembers: async function (token: string, teamId: number) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/team/${teamId}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            members: data['members'],
            success: true,
            message: 'Success'
          };
        case 404:
          return {
            success: false,
            message: 'Team not found!'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  removeTeam: async function (token: string, teamId: number) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/team/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ teamId })
      });
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  getTeamInvites: async function (token: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/team-invite/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            teams: data['teams'],
            success: true,
            message: 'Success'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  inviteUser: async function (token: string, teamId: number, username: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/team-invite/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ teamId, username })
      });
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: "Can't send invite since team is already participating in event!"
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        case 404:
          return {
            success: false,
            message: "User with username doesn't exist!"
          };
        case 409:
          return {
            success: false,
            message: "You can't invite yourself!"
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  deleteMember: async function (token: string, teamId: number, userId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/team-invite/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ teamId, userId })
      });
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: "Can't remove member since team is already participating in event!"
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        case 404:
          return {
            success: false,
            message: "User/Team with username doesn't exist!"
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  responseToTeamInvite: async function (token: string, teamId: number, status: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/team-invite/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ teamId, status })
      });
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: 'Cannot respond to team invites until fees is paid!'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        case 404:
          return {
            success: false,
            message: 'Team has been deleted!'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  eventParticipate: async function (token: string, teamId: number, eventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/participate/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ teamId, eventId })
      });
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: 'Team is not ready to participate!'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        case 404:
          return {
            success: false,
            message: "Team/Event doesn't exist!"
          };
        case 409:
          return {
            success: false,
            message: 'Team is already participating for same event!'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  },

  eventUnparticipate: async function (token: string, teamId: number, eventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/participate/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ teamId, eventId })
      });
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        case 404:
          return {
            success: false,
            message: "Team/Event doesn't exist!"
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  }
};

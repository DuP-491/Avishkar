export default {
  addDepartmentEvent: async function (
    token: string,
    name: string,
    organizer: string,
    desc: string
  ) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/dept-event/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, organizer, desc })
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

  removeDepartmentEvent: async function (token: string, id: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/dept-event/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ id })
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

  addDepartmentCoordie: async function (token: string, userId: string, deptEventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/dept-coordie/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, deptEventId })
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: data['message'] ?? 'Success'
          };
        case 400:
          return {
            success: false,
            message: data['message'] ?? "User Id doesn't belong to a user!"
          };
        case 401:
          return {
            success: false,
            message: 'Invalid token!'
          };
        case 409:
          return {
            success: false,
            message: data['message'] ?? 'User is already coordinator of department!'
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

  removeDepartmentCoordie: async function (token: string, userId: string, deptEventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/dept-coordie/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, deptEventId })
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
        case 409:
          return {
            success: false,
            message: "User isn't coordinator of department!"
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

  getParticipationList: async function (token: string, eventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event/${eventId}`, {
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
            participation: data['participation'],
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
  toggleEventStatus: async function (token: string, eventId: string) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/admin/event-status/${eventId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      await res.json();
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Registration status updated'
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
  }
};

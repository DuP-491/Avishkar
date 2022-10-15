export default {
  addEvent: async function (
    token: string,
    name: string,
    tagline: string,
    details: string,
    criteria: string,
    rules: string,
    psLink: string,
    maxTeamSize: number,
    minTeamSize: number,
    deptEventId: string
  ) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name,
          tagline,
          details,
          criteria,
          rules,
          psLink,
          maxTeamSize,
          minTeamSize,
          deptEventId
        })
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
            message: 'Event with same name already exists!'
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

  removeEvent: async function (token: string, id: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event/`, {
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

  addEventCoordie: async function (token: string, userId: string, eventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event-coordie/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, eventId })
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
            message: 'User is already coordinator of event!'
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

  removeEventCoordie: async function (token: string, userId: string, eventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event-coordie/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, eventId })
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
            message: "User isn't coordinator of event!"
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

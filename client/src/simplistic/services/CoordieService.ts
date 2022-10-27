export default {
  addEvent: async function (
    token: string,
    name: string,
    tagline: string,
    details: string,
    criteria: string,
    rules: string,
    psLink: string,
    poster: string,
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
          poster,
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

  addEventCoordie: async function (token: string, email: string, eventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event-coordie/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ email, eventId })
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
            message: "User Id doesn't belong to a user!"
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

  removeEventCoordie: async function (token: string, email: string, eventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event-coordie/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ email, eventId })
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
  },

  addEventSponsor: async function (
    token: string,
    name: string,
    poster: string,
    title: Boolean,
    eventId: string
  ) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event-sponsor/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, poster, title, eventId })
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
            message: 'Same Sponsor already exists for event!'
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

  updateEventSponsor: async function (
    token: string,
    name: string,
    poster: string,
    title: Boolean,
    eventId: string
  ) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event-sponsor/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, poster, title, eventId })
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
            message: 'Same Sponsor already exists for event!'
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

  removeEventSponsor: async function (token: string, name: string, eventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/event-sponsor/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, eventId })
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
            message: 'Please try again later!'
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

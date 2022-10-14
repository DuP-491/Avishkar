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
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            details: data['details'],
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
  }
};

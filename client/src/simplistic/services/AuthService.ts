import Cookies from 'js-cookie';

export default {
  logOut: async function () {
    Cookies.remove('token');
  },
  logIn: async function (name: string, password: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: name,
          username: name,
          password: password
        })
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            token: data['token'],
            success: true,
            message: 'Success'
          };
        case 401:
          return {
            success: false,
            message: data['message']
          };
        case 404:
          return {
            success: false,
            message: 'User with email/username not found!'
          };
        case 409:
          return {
            success: false,
            message: 'User with these details already exists!'
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

  signIn: async function (
    name: string,
    email: string,
    collegeName: string,
    gender: string,
    mobile: string
  ) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, collegeName, gender, mobile })
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: data['message']
          };
        case 409:
          return {
            success: false,
            message: 'User with these details already exists!'
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

  resetPassword: async function (password: string, token: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, token })
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: data['message']
          };
        case 404:
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

  forgotPassword: async function (email: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/send-reset-mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            success: true,
            message: 'Success'
          };
        case 400:
          return {
            success: false,
            message: data['message']
          };
        case 404:
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

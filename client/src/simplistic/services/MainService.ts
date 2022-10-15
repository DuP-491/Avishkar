export default {
  getAllDepartmentEvents: async function () {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/dept-event/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            departmentEvents: data['departmentEvents'],
            success: true,
            message: 'Success'
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

  getAllEventsOfDepartment: async function (deptEventId: string) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/event/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ deptEventId })
      });
      const data = await res.json();
      switch (res.status) {
        case 200:
          return {
            events: data['events'],
            success: true,
            message: 'Success'
          };
        default:
          return {
            success: false,
            message: 'Please try again later!'
          };
      }
    } catch (e) {
      return {
        success: false,
        message: 'Please try again later!'
      };
    }
  }
};

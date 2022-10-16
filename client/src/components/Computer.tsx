import React from 'react';
import PropTypes from 'prop-types';
import EventsTab from '../simplistic/components/EventsTab';
import ProfilePage from '../simplistic/components/Teams';
function Computer(props: Props) {
  const { closePopup, department, logout } = props;

  return (
    <div className="z-40 flex justify-center items-center w-full h-full backdrop-blur-sm">
      {department !== 'teams' && (
        <EventsTab defaultDepartment={department} onCrossPress={closePopup} />
      )}
      {department === 'teams' && (
        <ProfilePage
          onCrossPress={closePopup}
          onInvalidToken={() => {
            console.log('Invalid token');
            logout();
          }}
        />
      )}
    </div>
  );
}

Computer.propTypes = {
  closePopup: PropTypes.func.isRequired,
  department: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Computer.propTypes>;

export default Computer;

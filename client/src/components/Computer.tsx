import React from 'react';
import PropTypes from 'prop-types';
import NewTablet from '../simplistic/components/NewTablet';
function Computer(props: Props) {
  const { closePopup, department, logout } = props;

  const deptId = department != 'profile' ? department : '';

  return (
    <div className="z-40 flex justify-center items-center w-full h-full backdrop-blur-sm">
      <NewTablet
        deptId={deptId}
        is_profile={department == 'profile'}
        logout={logout}
        closePopup={closePopup}
      />
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

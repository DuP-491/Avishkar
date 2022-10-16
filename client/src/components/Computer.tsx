import React from 'react';
import PropTypes from 'prop-types';
import EventsTab from '../simplistic/components/EventsTab';
function Computer(props: Props) {
  const { closePopup, department } = props;

  return (
    <div className="z-40 flex justify-center items-center w-full h-full backdrop-blur-sm">
      <EventsTab defaultDepartment={department} onCrossPress={closePopup} />
    </div>
  );
}

Computer.propTypes = {
  closePopup: PropTypes.func.isRequired,
  department: PropTypes.string.isRequired
};

type Props = PropTypes.InferProps<typeof Computer.propTypes>;

export default Computer;

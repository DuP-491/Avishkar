import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
function NewEvent(props: Props) {
  const { eventName, desc, dept } = props;
  return (
    <div className="p-4 space-y-2 text-white bg-gray-700 rounded-md shadow-lg cursor-pointer h-50 xs:square">
      <h2 className="text-2xl font-semibold uppercase ">{parse(eventName)}</h2>
      <p className="inline-block p-1 text-xs italic bg-gray-800 rounded-full">{dept}</p>
      <p>{desc}</p>
    </div>
  );
}

NewEvent.propTypes = {
  eventName: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  dept: PropTypes.string.isRequired
};

type Props = PropTypes.InferProps<typeof NewEvent.propTypes>;

export default NewEvent;

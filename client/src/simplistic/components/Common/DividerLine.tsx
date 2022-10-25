import React from 'react';
import PropTypes from 'prop-types';

function DividerLine(props: Props) {
  const { text } = props;
  return (
    <div className="relative w-full">
      <h2 className="inline-block w-auto p-1 mb-0 text-xs font-bold text-gray-900 capitalize rounded-t-sm bg-slate-200">
        {text}
      </h2>
      <div className="w-full h-1 mt-0 bg-slate-200"></div>
    </div>
  );
}

DividerLine.propTypes = {
  text: PropTypes.string.isRequired
};

type Props = PropTypes.InferProps<typeof DividerLine.propTypes>;

export default DividerLine;

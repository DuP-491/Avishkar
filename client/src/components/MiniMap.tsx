import React from 'react';
import PropTypes from 'prop-types';

function MiniMap(props: Props) {
  const { playerPosition } = props;

  return (
    <div className="fixed bottom-0 right-0 z-30 mx-auto bg-white border-4 border-green-900 rounded-lg">
      <div
        className="absolute p-1 bg-blue-500 rounded-full"
        style={{
          top: Math.round(playerPosition.y) + '%',
          left: Math.round(playerPosition.x) + '%'
        }}></div>
      <img src={require('../images/try5.png')} width={300} />
    </div>
  );
}

MiniMap.propTypes = {
  playerPosition: {
    x: PropTypes.number,
    y: PropTypes.number
  }
};

type Props = PropTypes.InferProps<typeof MiniMap.propTypes>;

export default MiniMap;

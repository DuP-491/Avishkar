import React from 'react';
import PropTypes from 'prop-types';
import { TELEPORT_LOCATIONS } from '../game/consts';

function MiniMap(props: Props) {
  const { playerPosition, teleport } = props;

  return (
    <div className="fixed bottom-0 right-0 z-30 mx-auto bg-white border-4 border-green-900 rounded-lg">
      <div
        className="absolute p-1 bg-blue-500 rounded-full"
        style={{
          top: Math.round(playerPosition.y) + '%',
          left: Math.round(playerPosition.x) + '%'
        }}></div>
      <div
        className="absolute p-1 bg-red-500 rounded-full cursor-pointer"
        style={{
          top: 43 + '%',
          left: 58 + '%'
        }}
        onClick={() => teleport(TELEPORT_LOCATIONS.library)}></div>
      <div
        className="absolute p-1 bg-red-500 rounded-full cursor-pointer"
        style={{
          top: 75 + '%',
          left: 47 + '%'
        }}
        onClick={() => teleport(TELEPORT_LOCATIONS.csed)}></div>
      <div
        className="absolute p-1 bg-red-500 rounded-full cursor-pointer"
        style={{
          top: 64 + '%',
          left: 84 + '%'
        }}
        onClick={() => teleport(TELEPORT_LOCATIONS.mpHall)}></div>
      <div
        className="absolute p-1 bg-red-500 rounded-full cursor-pointer"
        style={{
          top: 13 + '%',
          left: 31 + '%'
        }}
        onClick={() => teleport(TELEPORT_LOCATIONS.yamunaCanteen)}></div>
      <img src={require('../images/try5.png')} width={300} />
    </div>
  );
}

MiniMap.propTypes = {
  playerPosition: {
    x: PropTypes.number,
    y: PropTypes.number
  },
  teleport: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof MiniMap.propTypes>;

export default MiniMap;

import React from 'react';

function MiniMap() {
  return (
    <div className="fixed bottom-0 right-0 z-30 mx-auto bg-white border-4 border-green-900 rounded-lg">
      <img src={require('../images/try5.png')} width={300} />
    </div>
  );
}

export default MiniMap;

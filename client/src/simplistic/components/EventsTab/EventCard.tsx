import React from 'react';

/* eslint-disable */
interface EventCardPropType {
  IMG: string;
  NAME: string;
  onEventSelect: () => void;
}
/* eslint-enable */

function EventCard({ IMG, NAME, onEventSelect }: EventCardPropType) {
  return (
    <button id={NAME} className="flex flex-col items-center w-36 m-4 h-1/3" onClick={onEventSelect}>
      <img id={NAME} src={IMG} className="float-none w-32 h-32 rounded-full shadow-md" />
      <span id={NAME} className="department-cards">
        {NAME}
      </span>
    </button>
  );
}

export default EventCard;

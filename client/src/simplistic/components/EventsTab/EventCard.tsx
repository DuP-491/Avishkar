import React from 'react';

interface EventCardPropType {
  IMG: string;
  NAME: string;
  onEventSelect: (e: any) => void;
}

function EventCard({ IMG, NAME, onEventSelect }: EventCardPropType) {
  return (
    <button id={NAME} className="flex flex-col items-center w-52 m-4 h-1/3" onClick={onEventSelect}>
      <img id={NAME} src={IMG} className="float-none w-48 rounded-full shadow-md" />
      {NAME}
    </button>
  );
}

export default EventCard;

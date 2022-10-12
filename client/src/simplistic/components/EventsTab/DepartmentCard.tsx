import React from 'react';

/* eslint-disable */
interface DepartmentCardPropType {
  NAME: string;
  onDepartmentSelect: (e: any) => void;
}
/* eslint-enable */

function DepartmentCard({ NAME, onDepartmentSelect }: DepartmentCardPropType) {
  const IMG = [
    'https://i.imgur.com/vSvFDH7.jpg',
    'https://i.imgur.com/M6LcSPu.jpg',
    'https://i.imgur.com/7nPBj3Y.jpg',
    'https://i.imgur.com/VUI6eHd.jpg',
    'https://i.imgur.com/QkvrLvo.jpg',
    'https://i.imgur.com/R1Fhzpi.jpg',
    'https://i.imgur.com/4eU10cM.jpg',
    'https://i.imgur.com/WMvYR2K.jpg',
    'https://i.imgur.com/wVwhg2O.jpg'
  ];
  return (
    <button
      id={NAME}
      className="flex flex-col items-center w-36 m-6 h-1/3"
      onClick={onDepartmentSelect}>
      {/* <img id={NAME} src={IMG} className="float-none w-32 rounded-full shadow-md" /> */}
      <div
        id={NAME}
        className="flex flex-wrap justify-around w-32 h-32 rounded-xl pt-2 bg-sky-600/[0.4] shadow-md">
        {IMG.map((img) => (
          <img
            className="rounded-full bg-orange-500 shrink-0 m-1 w-7 h-7"
            key={img}
            id={NAME}
            src={img}></img>
        ))}
      </div>
      <span id={NAME} className="department-cards">
        {NAME}
      </span>
    </button>
  );
}

export default DepartmentCard;

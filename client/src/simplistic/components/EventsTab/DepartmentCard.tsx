import React from 'react';

interface DepartmentCardPropType {
  IMG: string;
  NAME: string;
  onDepartmentSelect: (e: any) => void;
}

function DepartmentCard({ IMG, NAME, onDepartmentSelect }: DepartmentCardPropType) {
  return (
    <button
      id={NAME}
      className="flex flex-col items-center w-52 m-4 h-1/3"
      onClick={onDepartmentSelect}>
      <img id={NAME} src={IMG} className="float-none w-48 rounded-full shadow-md" />
      {NAME}
    </button>
  );
}

export default DepartmentCard;

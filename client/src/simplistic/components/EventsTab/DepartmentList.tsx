import React from 'react';
import DepartmentCard from './DepartmentCard';
import '../common.css';

/* eslint-disable */
interface DepartmentSelectPropType {
  onDepartmentSelect: (e: any) => void;
}

function Dept({ onDepartmentSelect }: DepartmentSelectPropType) {
  const DepartmentList = [
    'CYBERQUEST',
    'ELECTROMANIA',
    'POWERSURGE',
    'RASAYANS',
    'MECHROCOSM',
    'NIRMAAN',
    'GENESIS',
    'OLIGOPOLY',
    'MONOPOLY',
    'ROBOMANIA',
    'AERODYNAMIX',
    'ASTROWING',
    'KREEDOMANIA',
    'GNOSIOMANIA'
  ];

  return (
    <>
      <div className="flex justify-center pt-3">
        <span className="animating-event-title">E</span>
        <span className="animating-event-title">V</span>
        <span className="animating-event-title">E</span>
        <span className="animating-event-title">N</span>
        <span className="animating-event-title">T</span>
        <span className="animating-event-title">S</span>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {DepartmentList.map((Department: typeof DepartmentList[0]) => (
          <DepartmentCard
            onDepartmentSelect={onDepartmentSelect}
            key={Department}
            NAME={Department}
          />
        ))}
      </div>
    </>
  );
}

export default Dept;

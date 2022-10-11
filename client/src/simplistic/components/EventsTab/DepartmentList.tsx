import React from 'react';
import DepartmentCard from './DepartmentCard';

interface DepartmentSelectPropType {
  onDepartmentSelect: (e: any) => void;
}

function Dept({ onDepartmentSelect }: DepartmentSelectPropType) {
  const DepartmentList = [
    { IMG: 'https://via.placeholder.com/150', NAME: 'CYBERQUEST' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'ELECTROMANIA' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'POWERSURGE' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'RASAYANS' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'MECHROCOSM' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'NIRMAAN' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'GENESIS' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'OLIGOPOLY' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'MONOPOLY' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'ROBOMANIA' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'AERODYNAMIX' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'ASTROWING' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'KREEDOMANIA' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'GNOSIOMANIA' }
  ];

  return (
    <>
      <div className="flex justify-evenly flex-wrap">
        {DepartmentList.map((Department: typeof DepartmentList[0]) => (
          <DepartmentCard
            onDepartmentSelect={onDepartmentSelect}
            key={Department.NAME}
            IMG={Department.IMG}
            NAME={Department.NAME}
          />
        ))}
      </div>
    </>
  );
}

export default Dept;

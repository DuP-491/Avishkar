import React from 'react';
import EventCard from './EventCard';
import './../common.css';

/* eslint-disable */
interface EventListPropType {
  Department: string;
  onEventSelect: (e: any) => void;
}
/* eslint-enable */

function EventList({ Department, onEventSelect }: EventListPropType) {
  const DepartmentList = [
    { IMG: 'https://i.imgur.com/vSvFDH7.jpg', NAME: 'EVENT 01' },
    { IMG: 'https://i.imgur.com/M6LcSPu.jpg', NAME: 'EVENT 02' },
    { IMG: 'https://i.imgur.com/7nPBj3Y.jpg', NAME: 'EVENT 03' },
    { IMG: 'https://i.imgur.com/VUI6eHd.jpg', NAME: 'EVENT 04' },
    { IMG: 'https://i.imgur.com/QkvrLvo.jpg', NAME: 'EVENT 05' },
    { IMG: 'https://i.imgur.com/R1Fhzpi.jpg', NAME: 'EVENT 06' },
    { IMG: 'https://i.imgur.com/4eU10cM.jpg', NAME: 'EVENT 07' },
    { IMG: 'https://i.imgur.com/WMvYR2K.jpg', NAME: 'EVENT 08' },
    { IMG: 'https://i.imgur.com/wVwhg2O.jpg', NAME: 'EVENT 09' }
  ];
  return (
    <>
      <div className="flex justify-center pt-3">
        <span className="department-title">{Department}</span>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {DepartmentList.map((selectedDepartment: typeof DepartmentList[0]) => (
          <EventCard
            onEventSelect={onEventSelect}
            key={selectedDepartment.NAME}
            IMG={selectedDepartment.IMG}
            NAME={selectedDepartment.NAME}
          />
        ))}
      </div>
    </>
  );
}

export default EventList;

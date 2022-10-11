import React from 'react';
import EventCard from './EventCard';

interface EventListPropType {
  Department: string;
  onEventSelect: (e: any) => void;
}

function EventList({ Department, onEventSelect }: EventListPropType) {
  const DepartmentList = [
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 01' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 02' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 03' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 04' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 05' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 06' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 07' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 08' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 09' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 10' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 11' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 12' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 13' },
    { IMG: 'https://via.placeholder.com/150', NAME: 'EVENT 14' }
  ];
  return (
    <>
      {Department}
      <div className="flex justify-evenly flex-wrap">
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

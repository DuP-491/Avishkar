import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import './../common.css';
import MainService from '../../services/MainService';
import { toast } from 'react-toastify';

/* eslint-disable */
interface EventListPropType {
  Department: { deptId: string; name: string };
  onEventSelect: (event: any) => void;
}
/* eslint-enable */

function EventList({ Department, onEventSelect }: EventListPropType) {
  const deptImgs = [
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

  const [events, setEvents] = useState([]);

  const fetchEvents = (coordieCurrEvent: string) => {
    MainService.getAllEventsOfDepartment(coordieCurrEvent)
      .then((data) => {
        if (data['success']) {
          setEvents(data['events']);
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  };

  useEffect(() => {
    fetchEvents(Department['deptId']);
  }, []);

  return (
    <>
      <div className="flex justify-center pt-3">
        <span className="department-title">{Department['name']}</span>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {events.map((event) => (
          <EventCard
            onEventSelect={() => onEventSelect(event)}
            key={event['id']}
            IMG={deptImgs[Math.floor(Math.random() * deptImgs.length)]}
            NAME={event['name']}
          />
        ))}
      </div>
    </>
  );
}

export default EventList;

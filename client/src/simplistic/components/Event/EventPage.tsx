import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import MainService from '../../services/MainService';
import CoordinatorInfo from '../Common/CoordinatorInfo';

const EventPage = () => {
  const UNEXPECTED_ERROR_MSG = 'Please try again later!';
  const [eventCoordies, setEventCoordies] = useState([]);
  const location = useLocation();
  const event = location.state;
  useEffect(() => {
    fetchEventCoordies(event.id);
  }, []);
  const fetchEventCoordies = (eventId: string) => {
    MainService.getEventCoordies(eventId)
      .then((data) => {
        if (data['success']) {
          setEventCoordies(data['eventCoordies']);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };
  return (
    <div className="w-full min-h-screen p-4 text-white bg-gray-900">
      <h2 className="text-4xl font-semibold tracking-widest uppercase md:text-5xl lg:text-6xl title">
        {event.name}
      </h2>
      <p className="my-4">{event.tagline}</p>
      <hr className="border-4 border-dotted" />
      {/* section  */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-normal uppercase transition-all duration-200 group-hover:underline stroke-text">
          about
        </h2>
        <p className="">{event.details}</p>
      </div>
      {/* section */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-normal uppercase transition-all duration-200 group-hover:underline stroke-text">
          Rules
        </h2>
        <p className="">{event.rules}</p>
      </div>
      {/* section */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-normal uppercase transition-all duration-200 group-hover:underline stroke-text">
          Criteria
        </h2>
        <p className="">{event.criteria}</p>
      </div>

      <div>
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl">Event coordinators</h2>
        <div className="flex flex-wrap items-stretch gap-3 py-4">
          {eventCoordies.map((c, i) => {
            console.log(c);
            return <CoordinatorInfo key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default EventPage;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import MainService from '../../services/MainService';
import CoordinatorInfo from '../Common/CoordinatorInfo';
import parse from 'html-react-parser';
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
  const registerTeam = () => {
    alert('connet api ');
  };
  return (
    <div className="w-full min-h-screen p-4 text-white bg-gray-900">
      <h2 className="text-4xl font-semibold tracking-widest uppercase md:text-5xl lg:text-6xl title">
        {event.name}
      </h2>
      <p className="my-4">{parse(event.tagline)}</p>
      <form
        className="flex flex-col items-stretch space-y-2 md:flex-row md:space-y-0"
        onSubmit={() => registerTeam()}>
        {/* TODO:if team is registerd make diabled true */}
        {/* TODO:make sure only those teams are listed jiska vo leader h */}
        <select
          id="team"
          name="team"
          className="flex-grow p-1 bg-transparent border"
          disabled={false}>
          <option value="" className="px-1 py-2 text-white bg-gray-900">
            select team
          </option>
          <option value="team1" className="px-1 py-2 text-white bg-gray-900">
            team1
          </option>
          <option value="team2" className="px-1 py-2 text-white bg-gray-900">
            team2
          </option>
          <option value="team3" className="px-1 py-2 text-white bg-gray-900">
            team3
          </option>
        </select>
        <button
          type="submit"
          className="inline-block w-full p-1 font-semibold text-center text-gray-900 uppercase bg-white border-2 md:w-max text-md">
          Register
        </button>
        {/* // TODO:add api to this button */}
        {/* <button
          type="submit"
          className="inline-block w-full p-1 font-semibold text-center text-gray-900 uppercase bg-white border-2 md:w-max text-md">
          unregister
        </button> */}
      </form>
      {event.psLink && event.psLink !== '#' && (
        <a
          href={event.psLink}
          className="inline-block w-full px-2 py-4 my-3 text-center uppercase border-2 md:w-max text-md group-hover:font-semibold hover:bg-white hover:text-gray-900">
          view ps
        </a>
      )}
      {/* // TODO:button for admins to download the list */}
      {/* <button
          type="submit"
          className="inline-block w-full p-1 font-semibold text-center text-gray-900 uppercase bg-white border-2 md:w-max text-md">
          unregister
        </button> */}
      <hr className="mt-2 border-4 border-dotted" />
      {/* section  */}

      {/* section  */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-wider uppercase transition-all duration-200 group-hover:underline stroke-text">
          about
        </h2>
        <p className="">{parse(event.details)}</p>
      </div>
      {/* section */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-wider uppercase transition-all duration-200 group-hover:underline stroke-text">
          Rules
        </h2>
        <p className="">{parse(event.rules)}</p>
      </div>
      {/* section */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-wider uppercase transition-all duration-200 group-hover:underline stroke-text">
          Criteria
        </h2>
        <p className="">{parse(event.criteria)}</p>
      </div>

      <div>
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl">Event coordinators</h2>
        <div className="flex flex-wrap items-stretch gap-3 py-4">
          {eventCoordies.map((c, i) => {
            return <CoordinatorInfo key={i} cord={c} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default EventPage;

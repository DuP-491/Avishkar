import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import MainService from '../../services/MainService';
import UserService from '../../services/UserService';
import './../common.css';

/* eslint-disable */
interface EventDetailPropType {
  event: any;
}
// /* eslint-enable */

function EventDetails({ event }: EventDetailPropType) {
  const [selectedtab, setSelectedTab] = useState(1);
  const [coordies, setCoordies] = useState([]);
  const [currTeam, setCurrTeam] = useState('');
  const [teams, setTeams] = useState([]);
  console.log(teams);

  const Details = {
    Name: event['name'],
    Quote: event['tagline'],
    About: event['tagline'],
    ParticipationCriteria: event['criteria'],
    Rules: event['rules']
  };

  const fetchTeamInvites = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      console.log('Please login again and retry!');
      return;
    }
    UserService.getTeamInvites(token)
      .then((data) => {
        if (data['success']) {
          setTeams(data['teams']);
          if (data['teams'].length) setCurrTeam(data['teams'][0]['teamId']);
        } else if (data['message'] === 'Invalid token!') {
          console.log('Please login again and retry!');
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  const fetchEventCoordies = (eventId: string) => {
    MainService.getEventCoordies(eventId)
      .then((data) => {
        if (data['success']) {
          setCoordies(data['eventCoordies']);
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  const handleParticipate = (teamId: number, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      console.log('Please login again and retry!');
      return;
    }
    UserService.eventParticipate(token, teamId, eventId)
      .then((data) => {
        if (data['success']) {
          console.log('Participated for event Successfully');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          console.log('Please login again and retry!');
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  useEffect(() => {
    fetchTeamInvites();
    fetchEventCoordies(event['id']);
  }, []);

  function Tabrender() {
    if (selectedtab == 1)
      return (
        <>
          <div
            onClick={() => {
              setSelectedTab(1);
            }}
            className="w-1/2 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
            Event Details
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
            }}
            className="w-1/2 text-center pt-5 pb-5">
            Participation Criteria
          </div>
          <div
            onClick={() => {
              setSelectedTab(3);
            }}
            className="w-1/2 text-center pt-5 pb-5">
            Coordinators
          </div>
        </>
      );
    else if (selectedtab == 2)
      return (
        <>
          <div
            onClick={() => {
              setSelectedTab(1);
            }}
            className="w-1/2 text-center pt-5 pb-5">
            Event Details
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
            }}
            className="w-1/2 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
            Participation Criteria
          </div>
          <div
            onClick={() => {
              setSelectedTab(3);
            }}
            className="w-1/2 text-center pt-5 pb-5">
            Coordinators
          </div>
        </>
      );
    else
      return (
        <>
          <div
            onClick={() => {
              setSelectedTab(1);
            }}
            className="w-1/2 text-center pt-5 pb-5">
            Event Details
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
            }}
            className="w-1/2 text-center pt-5 pb-5">
            Participation Criteria
          </div>
          <div
            onClick={() => {
              setSelectedTab(3);
            }}
            className="w-1/2 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
            Coordinators
          </div>
        </>
      );
  }

  function bodyRender() {
    if (selectedtab == 1) {
      return (
        <>
          Name :<br />
          {Details.Name}
          <br />
          Quote :<br />
          {Details.Quote}
          <br />
          About :<br />
          {Details.About}
          <br />
          Rules :
          <br />
          {Details.Rules}
        </>
      );
    } else if (selectedtab == 2) {
      return <>{Details.ParticipationCriteria}</>;
    } else {
      return (
        <>
          Coordinators
          <br />
          <br />
          {coordies.map((coordie) => (
            <div key={coordie['user']['id']} className="mb-5">
              <p>Name: {coordie['user']['name']}</p>
              <p>Contact: {coordie['user']['mobile']}</p>
            </div>
          ))}
        </>
      );
    }
  }
  return (
    <div>
      <div className="text-neutral-400 text-3xl font-bold pl-10 font-mono mb-3">{Details.Name}</div>
      <div className="flex w-full">{Tabrender()}</div>
      <div className="bg-gray-900 p-10" style={{ height: '80vh' }}>
        {bodyRender()}
      </div>
      <select
        className="ml-4 text-black fixed z-90 bottom-40 right-9"
        value={currTeam}
        onChange={(e) => setCurrTeam(e.target.value)}>
        {teams
          .filter((team: any) => team['userId'] === team['team']['leader'])
          .map((team: any) => (
            <option key={team['teamId']} value={team['teamId']}>
              {team['teamId']}
            </option>
          ))}
      </select>
      <button
        onClick={() => handleParticipate(parseInt(currTeam), event['id'])}
        className="fixed z-90 bottom-20 md:bottom-10 right-8 bg-blue-600 w-32 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-xl hover:bg-blue-700 hover:drop-shadow-2xl participate-btn">
        Participate
      </button>
    </div>
  );
}

export default EventDetails;

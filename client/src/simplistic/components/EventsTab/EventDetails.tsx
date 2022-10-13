import React, { useState } from 'react';
import './../common.css';

/* eslint-disable */
interface EventDetailPropType {
  eventName: string;
}
// /* eslint-enable */

function EventDetails({ eventName }: EventDetailPropType) {
  const [selectedtab, setSelectedTab] = useState(1);

  const Details = {
    Name: eventName,
    Quote: 'I tried my best',
    About: 'This is just an event',
    ParticipationCriteria: {
      TeamSize: 'Solo-Leveling',
      Yearsparticipating: 'Shounen Protags',
      OutsideParticipation: 'Allowed',
      InterYearParticipation: 'Not allowed (for claiming MNNIT specific prizes)',
      BranchRestriction: 'None'
    },
    ContactInfo: [
      { Name: 'Parthtrap1', Mail: 'something1@anything.com', Phone: '+91-9988776655' },
      { Name: 'Parthtrap2', Mail: 'something2@anything.com', Phone: '+91-4433221100' },
      { Name: 'Parthtrap3', Mail: 'something3@anything.com', Phone: '+91-9876543210' }
    ],
    Rules: ['Rule 1', 'Rule 2'],
    EventSponsors: [
      {
        Name: 'Redbull(Hopefully)',
        Img: 'https://www.freepnglogos.com/pics/red-bull-logo',
        Link: 'www.Redbull.com'
      }
    ]
  };

  function Tabrender() {
    if (Details.EventSponsors.length == 0) {
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
              className="w-1/2 text-center pt-5 pb-5 bg-gray-900 rounded-t-full">
              Participation Criteria
            </div>
          </>
        );
    } else {
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
              Sponsors
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
              Sponsors
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
              Sponsors
            </div>
          </>
        );
    }
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
          <ul>
            {Details.Rules.map((rule) => (
              <li>{rule}</li>
            ))}
          </ul>
        </>
      );
    } else if (selectedtab == 2) {
      return <>Participation Criteria</>;
    } else {
      return <>Sponsors</>;
    }
  }
  return (
    <div>
      <div className="text-neutral-400 text-3xl font-bold pl-10 font-mono mb-3">{Details.Name}</div>
      <div className="flex w-full">{Tabrender()}</div>
      <div className="bg-gray-900 p-10" style={{ height: '80vh' }}>
        {bodyRender()}
      </div>
      <button className="fixed z-90 bottom-20 md:bottom-10 right-8 bg-blue-600 w-32 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300 participate-btn">
        Participate
      </button>
    </div>
  );
}

export default EventDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import CoordinatorInfo from '../Common/CoordinatorInfo';
import EventCard from './EventCard';

const index = () => {
  const params = useParams();
  return (
    <div className="min-h-screen p-4 text-white bg-gray-900">
      <h2 className="text-xl font-semibold capitalize md:text-2xl lg:text-3xl title">
        events under
      </h2>
      <h2 className="text-4xl font-semibold tracking-widest uppercase md:text-5xl lg:text-6xl title">
        {`${params.dept}`}{' '}
      </h2>
      <hr className="border-4 border-dotted" />
      <div className="flex flex-wrap items-stretch gap-3 py-4">
        <EventCard
          imgsrc="https://vishu6361.github.io/Avishkar_2k21/events/sub_events/astrowing/img/1.png"
          title="webster"
          about="EVENT TAGLINE Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, modi. Lorem ipsum dolor sit amet."
          redirectTo="webster"
        />
        <EventCard
          imgsrc="https://vishu6361.github.io/Avishkar_2k21/events/sub_events/astrowing/img/1.png"
          title="webster"
          about="EVENT TAGLINE Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, modi. Lorem ipsum dolor sit amet."
          redirectTo="webster"
        />

        <EventCard
          imgsrc="https://vishu6361.github.io/Avishkar_2k21/events/sub_events/astrowing/img/1.png"
          title="webster"
          about="EVENT TAGLINE Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempora Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, modi. Lorem ipsum dolor sit amet."
          redirectTo="webster"
        />
        <EventCard
          imgsrc="https://vishu6361.github.io/Avishkar_2k21/events/sub_events/astrowing/img/1.png"
          title="webster"
          about="EVENT TAGLINE Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, modi. Lorem ipsum dolor sit amet."
          redirectTo="webster"
        />
      </div>
      <div>
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl">Deparment coordinators</h2>
        <div className="flex flex-wrap items-stretch gap-3 py-4">
          <CoordinatorInfo />
          <CoordinatorInfo />
        </div>
      </div>
    </div>
  );
};

export default index;

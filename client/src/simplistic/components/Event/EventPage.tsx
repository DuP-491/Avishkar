import React from 'react';
import { useParams } from 'react-router-dom';
import CoordinatorInfo from '../Common/CoordinatorInfo';

const EventPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="w-full min-h-screen p-4 text-white bg-gray-900">
      <h2 className="text-4xl font-semibold tracking-widest uppercase md:text-5xl lg:text-6xl title">
        {`${params.event}`}{' '}
      </h2>
      <p className="my-4">
        EVENT TAG LINE Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi.
      </p>
      <hr className="border-4 border-dotted" />
      {/* section  */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-normal uppercase transition-all duration-200 group-hover:underline stroke-text">
          about
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid assumenda aperiam ipsa
          pariatur mollitia et repellendus! Commodi ipsam qui, corrupti nostrum dolorem mollitia
          veniam? Maxime sit aliquid voluptate voluptatibus.
        </p>
      </div>
      {/* section */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-normal uppercase transition-all duration-200 group-hover:underline stroke-text">
          Rules
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid assumenda aperiam ipsa
          pariatur mollitia et repellendus! Commodi ipsam qui, corrupti nostrum dolorem mollitia
          veniam? Maxime sit aliquid voluptate voluptatibus.
        </p>
      </div>
      {/* section */}
      <div className="px-2 py-4 mt-2 bg-gray-800 roundefirst-letter:d-sm hover:bg-gray-700 hover:shadow-md group">
        <h2 className="text-3xl tracking-normal uppercase transition-all duration-200 group-hover:underline stroke-text">
          Criteria
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid assumenda aperiam ipsa
          pariatur mollitia et repellendus! Commodi ipsam qui, corrupti nostrum dolorem mollitia
          veniam? Maxime sit aliquid voluptate voluptatibus.
        </p>
      </div>

      <div>
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl">Event coordinators</h2>
        <div className="flex flex-wrap items-stretch gap-3 py-4">
          <CoordinatorInfo />
          <CoordinatorInfo />
        </div>
      </div>
    </div>
  );
};

export default EventPage;

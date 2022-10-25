import React from 'react';

interface CardProps {
  imgsrc: string;
  name: string;
  designation: string;
}

const Card = ({ imgsrc, name, designation }: CardProps) => {
  return (
    <div className="flex flex-col items-center p-4 duration-100 scale-75 w-80 sm:p-6 rounded-xl hover:scale-100 hover:shadow-2xl">
      <img
        className="object-cover w-full duration-200 rounded-full hover:rounded-xl hover:scale-110 aspect-square"
        src={imgsrc}
        alt=""
      />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        {name}
      </h1>

      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{designation}</p>
    </div>
  );
};

export default Card;

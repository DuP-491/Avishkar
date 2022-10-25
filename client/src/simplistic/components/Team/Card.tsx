import React from 'react';

interface CardProps {
  imgsrc: string;
  name: string;
  designation: string;
}

const Card = ({ imgsrc, name, designation }: CardProps) => {
  return (
    <div className="flex flex-col items-center p-4 scale-75 sm:p-6 rounded-xl hover:scale-100 duration-75 hover:shadow-2xl">
      <img className="object-cover w-full aspect-square rounded-full" src={imgsrc} alt="" />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        {name}
      </h1>

      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{designation}</p>
    </div>
  );
};

export default Card;

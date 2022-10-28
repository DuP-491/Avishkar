import React from 'react';

interface CardProps {
  imgsrc: string;
  name: string;
  bgc: string;
}

const Card = ({ imgsrc, name, bgc }: CardProps) => {
  return (
    <div className="flex flex-col items-center p-4 duration-75 scale-75 sm:p-6 rounded-xl hover:scale-100 hover:shadow-2xl">
      <img
        className="w-full p-4 object-fit rounded-xl"
        src={imgsrc}
        style={{ backgroundColor: bgc }}
      />
      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        {name}
      </h1>
    </div>
  );
};

export default Card;

import React from 'react';

interface CardProps {
  imgsrc: string;
  name: string;
  bgc: string;
}

const Card = ({ imgsrc, name, bgc }: CardProps) => {
  return (
    <div className="flex flex-col items-center p-4 scale-75 sm:p-6 rounded-xl hover:scale-100 duration-75 hover:shadow-2xl">
      <img
        className="object-fit w-full rounded-xl p-4"
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

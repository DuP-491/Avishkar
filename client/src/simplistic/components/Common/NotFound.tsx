import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen text-center text-white bg-gray-900">
      <div>
        <h2 className="text-2xl font-bold md:text-5xl lg:text-8xl animate">404</h2>
        <h3 className="capitalize">page not found</h3>
        <p className="mt-4">
          <Link to="/" className="underline capitalize">
            go back to home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;

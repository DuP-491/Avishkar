import React from 'react';
import Card from './Card';
import DividerLine from '../Common/DividerLine';
const index = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="bg-gray-100  dark:bg-gray-800">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Team Avishkar
            </h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi
              magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="director" />
            <div className="grid items-center grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="faculty" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="web team" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

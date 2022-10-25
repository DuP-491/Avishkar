import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DepartmentCard(props: Props) {
  const { deptName, deptDesc, redirectTo } = props;
  return (
    <div className="inline-block p-2 px-2 py-4 text-center text-gray-800 rounded-md hover:border-none">
      <div className="relative group" style={{ transformStyle: 'preserve-3d' }}>
        <div className="stack__deco group-hover:opacity-20 group-hover:-rotate-[5deg]"></div>
        <div className="stack__deco group-hover:opacity-40 group-hover:-translate-y-5 group-hover:rotate-[4deg]"></div>
        <div className="stack__deco group-hover:opacity-60 group-hover:-translate-y-10 group-hover:-rotate-[3deg]"></div>
        <div className="stack__deco group-hover:opacity-80 group-hover:-translate-y-20 group-hover:rotate-[2deg]"></div>
        <div className="relative bg-gray-800 max-w-sm text-white  w-full h-full transition-all  duration-300 group opacity-100 group-hover:-translate-y-10 px-2 py-4 origin-[50%_100%] whitespace-normal">
          <h2 className="text-2xl uppercase title">{deptName}</h2>
          <p className="w-full my-5 text-justify">{deptDesc}</p>
          <hr className="border-dotted" />
          <Link
            to={`${redirectTo}`}
            className="block px-2 py-4 mt-2 capitalize border-2 group-hover:font-semibold group-hover:bg-white group-hover:text-gray-900">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

DepartmentCard.propTypes = {
  deptName: PropTypes.string.isRequired,
  deptDesc: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired
};

type Props = PropTypes.InferProps<typeof DepartmentCard.propTypes>;

export default DepartmentCard;

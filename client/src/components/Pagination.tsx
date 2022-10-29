import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props: Props) {
  const { current, total, pageArray, onChange } = props;

  const pageElements = pageArray.map((page: number, index: number) => {
    if (page == current) {
      return activePage(page, index);
    } else {
      return inactivePage(page, index);
    }
  });

  function activePage(page: number, index: number) {
    return (
      <div
        key={index}
        onClick={() => onChange(page)}
        className="border-transparent text-yellow-900 bg-white rounded-b-lg pb-2 cursor-pointer border-t-2 pt-2 px-4 inline-flex items-center text-sm font-medium"
        aria-current="page">
        {page}
      </div>
    );
  }

  function inactivePage(page: number, index: number) {
    return (
      <div
        key={index}
        onClick={() => onChange(page)}
        className="border-transparent text-white hover:text-yellow-700 bg-transparent hover:bg-white hover:bg-opacity-75 rounded-b-lg pb-2 cursor-pointer border-t-2 pt-2 px-4 inline-flex items-center text-sm font-medium">
        {page}
      </div>
    );
  }

  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        <div
          className={`border-t-2 border-transparent pt-1 pr-1 inline-flex items-center text-sm font-medium text-white text-opacity-75 cursor-pointer hover:text-opacity-100 ${
            current == 1 ? 'hover:text-opacity-75 cursor-not-allowed' : ''
          }`}
          onClick={() => {
            if (current == 1) return;
            onChange(current - 1);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 h-5 w-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Previous
        </div>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {!pageArray.includes(1) && inactivePage(1, 1)}
        {!pageArray.includes(1) && !pageArray.includes(2) && (
          <span className="border-transparent text-white border-t-2 pt-2 px-4 inline-flex items-center text-sm font-medium">
            ...
          </span>
        )}
        {pageElements}
        {!pageArray.includes(total) && !pageArray.includes(total - 1) && (
          <span className="border-transparent text-white border-t-2 pt-2 px-4 inline-flex items-center text-sm font-medium">
            ...
          </span>
        )}
        {!pageArray.includes(total) && inactivePage(total, total)}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <div
          className={`border-t-2 border-transparent pt-1 pr-1 inline-flex items-center text-sm font-medium text-white text-opacity-75 cursor-pointer hover:text-opacity-100 ${
            current == total ? 'hover:text-opacity-75 cursor-not-allowed' : ''
          }`}
          onClick={() => {
            if (current == total) return;
            onChange(current + 1);
          }}>
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3 h-5 w-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pageArray: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Pagination.propTypes>;

export default Pagination;

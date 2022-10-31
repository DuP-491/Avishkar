import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
function EventCard(props: Props) {
  const { imgsrc, title, about, redirectTo, event } = props;
  return (
    <div className="flex flex-col justify-between max-w-sm px-2 pt-4 pb-2 transition-all bg-gray-800 rounded-md outline-white hover:outline-double hover:outline-4 hover:shadow-xl group ">
      <img src={imgsrc} alt="event logo" className="w-24 h-auto " />
      <h2 className="text-2xl font-semibold capitalize title ">{title}</h2>
      <p className="my-4 mb-4 text-justify">{parse(about)}</p>

      <hr className="border-dotted" />
      <Link
        to={`${redirectTo}`}
        state={event}
        className="block px-2 py-4 mt-2 text-center capitalize border-2 group-hover:font-semibold group-hover:bg-white group-hover:text-gray-900">
        view details
      </Link>
    </div>
  );
}

EventCard.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
  event: PropTypes.object
};

type Props = PropTypes.InferProps<typeof EventCard.propTypes>;

export default EventCard;

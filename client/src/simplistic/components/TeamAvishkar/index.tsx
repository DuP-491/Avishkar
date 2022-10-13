import React from 'react';
import Tablet from '../Tablet';
import TeamAvishkarBGIMG from './../../Assets/p1.jpg';
import RajeevTripathiIMG from './../../Assets/Prof_Rajeev.jpg';

/* eslint-disable */
interface TeamAvishkarPropType {
  onCrossPress: (e: any) => void;
}
function TeamAvishkar({ onCrossPress }: TeamAvishkarPropType) {
  function DisplayCard(name: string, img: string) {
    return (
      <div
        style={{ width: '20vw', minWidth: '200px' }}
        className="group relative block overflow-hidden rounded-md transition-all duration-500 bg-gray-100/[0.2] p-1 rounded-lg justify-center text-white">
        <span className="transition-all duration-500">
          <img src={img} />
        </span>
        <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-300 bg-slate-900 rounded text-center shadow-gray-700">
          <span className="hover:text-primary-600 text-lg transition duration-500 font-medium">
            {name}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Tablet
        bgrd={TeamAvishkarBGIMG}
        onBackPress={() => {}}
        onCrossPress={onCrossPress}
        onHomePress={() => {}}>
        <div className="flex justify-center pt-3">
          <span className="animating-event-title">T</span>
          <span className="animating-event-title">E</span>
          <span className="animating-event-title">A</span>
          <span className="animating-event-title">M</span>
        </div>
        <div className="px-10 flex flex-col items-center pb-10">
          <div className="text-white text-xl font-black text-center">DIRECTOR MNNIT</div>
          {DisplayCard('RAJEEV TRIPATHI', RajeevTripathiIMG)}
          <div className="text-white text-xl font-black text-center">DIRECTOR MNNIT</div>
          {DisplayCard('RAJEEV TRIPATHI', RajeevTripathiIMG)}
        </div>
      </Tablet>
    </>
  );
}

export default TeamAvishkar;

import React from 'react';
/* eslint-disable */
/* Images Imports */
import PlaceholderIMG from '../Team/Assets/Placeholder.jpg';
import DesignAnchalYadavIMG from '../Team/Assets/DesignAnchalYadav.jpeg';
import DesignDarpanMittalIMG from '../Team/Assets/DesignDarpanMittal.jpg';
import DesignHardikMittalIMG from '../Team/Assets/DesignHardikMittal.jpg';
import DesignKushagraSaxenaIMG from '../Team/Assets/DesignKushagraSaxena.jpeg';
import DesignMradulYadavIMG from '../Team/Assets/DesignMradulYadav.jpg';
import DirectorRSVermaIMG from '../Team/Assets/DirectorRSVerma.jpg';
import FacultyAnandSharmaIMG from '../Team/Assets/FacultyAnandSharma.jpg';
import FacultyRanvijayIMG from '../Team/Assets/FacultyRanvijay.jpeg';
import FacultySunilGuptaIMG from '../Team/Assets/FacultySunilGupta.jpeg';
import FacultyShashankShrivastavaIMG from '../Team/Assets/FacultyShashankShrivastava.png';
import FacultyAsimMukherjeeIMG from '../Team/Assets/FacultyAsimMukherjee.jpg';
import FSAdityaRajuDarjiIMG from '../Team/Assets/FSAdityaRajuDarji.jpg';
import FSAnushreeIMG from '../Team/Assets/FSAnushree.jpeg';
import FSDivyanshUpdhyayIMG from '../Team/Assets/FSDivyanshUpadhyay.jpeg';
import FSOmVijayGuptaIMG from '../Team/Assets/FSOmVijayGupta.jpg';
import FSShamoyeetaSahaIMG from '../Team/Assets/FSShamoyeetaSaha.jpeg';
import FSShivanshiMaheshwariIMG from '../Team/Assets/FSShivanshiMaheshwari.jpg';
import FSShreyaYadavIMG from '../Team/Assets/FSShreyaYadav.jpg';
import FSVibhanshuVaibhavIMG from '../Team/Assets/FSVibhanshuVaibhav.jpg';
import GnosomaniaBhaviKhatorIMG from '../Team/Assets/GnosomaniaBhaviKhator.jpg';
import GnosomaniaShristiSinghIMG from '../Team/Assets/GnosomaniaShristiSingh.jpg';
import GnosomaniaVanshAmbashtaIMG from '../Team/Assets/GnosomaniaVanshAmbashta.jpg';
import PRAashirwadSharmaIMG from '../Team/Assets/PRAashirwadSharma.jpg';
import PRAdityaGuptaIMG from '../Team/Assets/PRAdityaGupta.jpeg';
import PRDevashishSinghTomarIMG from '../Team/Assets/PRDevashishSinghTomar.jpeg';
import PRGaurikaSharmaIMG from '../Team/Assets/PRGaurikaSharma.jpg';
import PRHimanshuGoyalIMG from '../Team/Assets/PRHimanshuGoyal.jpg';
import PRPrakharJainIMG from '../Team/Assets/PRPrakharJain.jpg';
import PRRishiGargIMG from '../Team/Assets/PRRishiGarg.jpeg';
import PRSiddharthDubeyIMG from '../Team/Assets/PRSiddharthDubey.jpg';
import SACAnilKumarSinghIMG from '../Team/Assets/SACAnilKumarSingh.jpg';
import TechAmitKumarIMG from '../Team/Assets/TechAmitKumar.jpg';
import TechDennisThomasIMG from '../Team/Assets/TechDennisThomas.jpg';
import TechHiteshMitrukaIMG from '../Team/Assets/TechHiteshMitruka.jpg';
import TechMohitPandeyIMG from '../Team/Assets/TechMohitPandey.jpg';
import TechParthMittalIMG from '../Team/Assets/TechParthMittal.jpg';
import TechSanskarOmarIMG from '../Team/Assets/TechSanskarOmar.jpg';
import PVSumitYadavIMG from '../Team/Assets/PVSumitYadav.jpg';
import PVVarunKumarIMG from '../Team/Assets/PVVarunKumar.jpg';
import DividerLine from '../Common/DividerLine';
/* eslint-enable */

/* eslint-disable */
function TeamAvishkar() {
  function DisplayCard(prop: Array<Array<string>>) {
    return (
      <div className="flex flex-wrap justify-around mt-10">
        {prop.map((p) => {
          return (
            <div
              style={{ width: '20vw', minWidth: '200px', aspectRatio: '1' }}
              className="group relative block overflow-hidden  text-base rounded-md transition-all duration-500 h-fit bg-gray-100/[0.2] p-1 m-2 rounded-lg justify-center text-white">
              <img
                src={p[0]}
                className="object-cover aspect-square"
                style={{ width: '20vw', minWidth: '200px', aspectRatio: '1' }}
              />
              <div className="absolute text-center transition-all duration-300 rounded -bottom-52 group-hover:bottom-2 right-2 left-2 bg-slate-900 shadow-gray-700">
                <span className="text-sm font-medium transition duration-500 h-fit">
                  {p[1]}
                  {p[2] != '' ? <br /> : ''}
                  {p[2] != '' ? p[2] : ''}
                  <div className="flex justify-center">
                    {p[3] ? (
                      <a href={p[3]} target="_blank" rel="noopener noreferrer">
                        <svg
                          className="w-4 h-4 m-1 text-blue-600 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    ) : (
                      ''
                    )}
                    {p[4] ? (
                      <a href={p[4]} target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-4 h-4 m-1 text-blue-600 fill-current">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    ) : (
                      ''
                    )}
                    {p[5] ? (
                      <a href={p[5]} target="_blank" rel="noopener noreferrer">
                        <svg
                          className="w-4 h-4 m-1 text-blue-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512">
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    ) : (
                      ''
                    )}
                  </div>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center pt-3">
        <span className="animating-event-title">T</span>
        <span className="animating-event-title">E</span>
        <span className="animating-event-title">A</span>
        <span className="animating-event-title">M</span>
      </div>
      <div className="flex flex-col items-center px-10 pb-10">
        <DividerLine alignmentCenter={true} text="DIRECTOR MNNIT" />
        {DisplayCard([[DirectorRSVermaIMG, 'PROF. R. S. Verma', 'Director', '', '', '']])}
        <DividerLine alignmentCenter={true} text="SAC President" />
        {DisplayCard([
          [SACAnilKumarSinghIMG, 'Prof. Anil Kumar Singh', 'SAC President', '', '', '']
        ])}
        <DividerLine alignmentCenter={true} text="FACULTIES" />
        {DisplayCard([
          [FacultyAsimMukherjeeIMG, 'Asim Mukherjee', '', '', '', ''],
          [FacultyShashankShrivastavaIMG, 'Shashank Shrivastava', '', '', '', ''],
          [FacultyRanvijayIMG, 'Ranvijay', '', '', '', ''],
          [FacultyAnandSharmaIMG, 'Anand Sharma', '', '', '', ''],
          [FacultySunilGuptaIMG, 'Sunil Gupta', '', '', '', '']
        ])}
        <DividerLine alignmentCenter={true} text="FESTIVAL SECRETARY" />
        {DisplayCard([
          [FSAdityaRajuDarjiIMG, 'Aditya Raju Darji', '', '', '', ''],
          [FSAnushreeIMG, 'Anushree', '', '', '', ''],
          [FSDivyanshUpdhyayIMG, 'Divyansh Upadhyay', '', '', '', ''],
          [FSOmVijayGuptaIMG, 'Om Vijay Gupta', '', '', '', ''],
          [FSShamoyeetaSahaIMG, 'Shamoyeeta Saha', '', '', '', ''],
          [FSShivanshiMaheshwariIMG, 'Shivanshi Maheshwari', '', '', '', ''],
          [FSShreyaYadavIMG, 'Shreya Yadav', '', '', '', ''],
          [FSVibhanshuVaibhavIMG, 'Vibhanshu Vaibhav', '', '', '', '']
        ])}

        <DividerLine alignmentCenter={true} text="Gnosiomania Team" />
        {DisplayCard([
          [GnosomaniaBhaviKhatorIMG, 'Bhavi Khator', '', '', '', ''],
          [PlaceholderIMG, 'Darin Peter Carvalho', '', '', '', ''],
          [GnosomaniaShristiSinghIMG, 'Shristi Singh', '', '', '', ''],
          [GnosomaniaVanshAmbashtaIMG, 'Vansh Ambashta', '', '', '', '']
        ])}

        <DividerLine alignmentCenter={true} text="Public Relations" />
        {DisplayCard([
          [PRAashirwadSharmaIMG, 'Aashirwad Sharma', ''],
          [PRAdityaGuptaIMG, 'Aditya Gupta', ''],
          [PRDevashishSinghTomarIMG, 'Devashish Singh Tomar', ''],
          [PRGaurikaSharmaIMG, 'Gaurika Sharma', ''],
          [PRHimanshuGoyalIMG, 'Himanshu Goyal', ''],
          [PRPrakharJainIMG, 'Prakhar Jain', ''],
          [PRRishiGargIMG, 'Rishi Garg', ''],
          [PRSiddharthDubeyIMG, 'Siddharth Dubey', '']
        ])}

        <DividerLine alignmentCenter={true} text="Tech Team" />
        {DisplayCard([
          [TechAmitKumarIMG, 'Amit Kumar', '', '', '', ''],
          [TechDennisThomasIMG, 'Dennis Thomas', '', '', '', ''],
          [TechHiteshMitrukaIMG, 'Hitesh Mitruka', '', '', '', ''],
          [PlaceholderIMG, 'Ishan Gupta', '', '', '', ''],
          [PlaceholderIMG, 'Lovedeep Singh Kamal', '', '', '', ''],
          [TechMohitPandeyIMG, 'Mohit Pandey', '', '', '', ''],
          [TechParthMittalIMG, 'Parth Mittal', '', '', '', ''],
          [PlaceholderIMG, 'Priyav K Kaneria', '', '', '', ''],
          [TechSanskarOmarIMG, 'Sanskar Omar', '', '', '', '']
        ])}
        <DividerLine alignmentCenter={true} text="Design Team" />
        {DisplayCard([
          [DesignAnchalYadavIMG, 'Anchal Yadav', '', '', '', ''],
          [DesignDarpanMittalIMG, 'Darpan Mittal', '', '', '', ''],
          [DesignHardikMittalIMG, 'Hardik Mittal', '', '', '', ''],
          [DesignKushagraSaxenaIMG, 'Kushagra Saxena', '', '', '', ''],
          [DesignMradulYadavIMG, 'Mradul Yadav', '', '', '', '']
        ])}
        <DividerLine alignmentCenter={true} text="Photos and Videos" />
        {DisplayCard([
          [PRAdityaGuptaIMG, 'Aditya Gupta', ''],
          [PVSumitYadavIMG, 'Sumit Yadav', '', '', '', ''],
          [PVVarunKumarIMG, 'Varun Kumar', '', '', '', '']
        ])}
      </div>
    </>
  );
}

export default TeamAvishkar;

// <div
// style={{ width: '20vw', minWidth: '200px' }}
// className="group relative block overflow-hidden rounded-md transition-all duration-500 bg-gray-100/[0.2] p-1 rounded-lg justify-center text-white hover:scale-150">
// <span className="transition-all duration-500">
//   <img src={p[1]} />
// </span>
// <div className="absolute text-center transition-all duration-300 rounded -bottom-52 group-hover:bottom-2 right-2 left-2 bg-slate-900 shadow-gray-700">
//   <span className="text-lg font-medium transition duration-500 hover:text-primary-600">
//     {p[0]}
//   </span>
// </div>
// </div>

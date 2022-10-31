/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TELEPORT_LOCATIONS } from '../game/consts';
import * as Tooltip from '@radix-ui/react-tooltip';
function Map(props: Props) {
  const { playerPosition, teleport, showMap, setShowMap } = props;
  const baseDiv = useRef<HTMLDivElement>(null);
  const [showMarks, setShowMarks] = useState(false);
  const eventQuotes = [
    'Programmers and Hackers put on your hats and dive into the cyber world.',
    'Does the electronic circuits amaze you? This event is your calling.',
    'Electrify the environment with the power inside you.',
    'Get yourself chemically reacting and enjoy the world of chemistry.',
    'All thermodynamically unstable mechanchies , welcome to this fun event.',
    'Build to sustain and to inspire.',
    'Amazing world of biotechnology in front of you.',
    'See the manager inside you and test your communication and leadership skills.',
    'A leadership event to test your team leading and strategic skills.',
    'Robotic geeks build and show your stuffs here and amaze the audience.',
    'Fly high and look beyond the horizons.',
    'Lover of the night sky , lets have some contest.',
    'An event for the gaming maniacs.',
    'Want to know what you dont know ? Lets get the mind to work.',
    'Where Actions Speak'
  ];

  const handleClick = () => {
    setShowMarks(!showMarks);
    if (baseDiv.current) {
      baseDiv.current.classList.remove('w-[894px]');
      baseDiv.current?.classList.add('w-0');
    }
    setTimeout(() => {
      setShowMap(!showMap);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      if (baseDiv.current) {
        baseDiv.current.classList.remove('w-0');
        baseDiv.current?.classList.add('w-[894px]');
      }
    }, 100);
    setTimeout(() => {
      setShowMarks(true);
    }, 600);
  }, [baseDiv]);

  return (
    <>
      <div
        className="absolute top-0 left-0 z-20 w-screen h-screen filter backdrop-blur-sm"
        onClick={handleClick}></div>
      <div
        ref={baseDiv}
        className={`transition-all duration-500 flex items-center justify-center m-auto relative z-40 bg-[#509b66] border-2 border-green-900 rounded-lg filter backdrop-blur-sm w-0 h-[768px]`}
        style={{
          backgroundImage: `url("/try5.png")`,
          backgroundSize: 'fill',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        {showMarks && (
          <>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 226 226"
              className="absolute w-4 h-4 origin-[0px_0px] -translate-x-1/2 -translate-y-1/2"
              style={{
                top: Math.round(playerPosition.y) + '%',
                left: Math.round(playerPosition.x) + '%',
                rotate: playerPosition.rot + 'rad'
              }}>
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none">
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g id="Layer_1" fill="#ffffff">
                  <path d="M214.10272,119.54726l-193.19678,82.75596c-3.68917,1.59523 -8.00972,0.66475 -10.7683,-2.32651c-1.66176,-1.79463 -2.52581,-4.12114 -2.52581,-6.48092c0,-1.32929 0.29911,-2.69205 0.89732,-3.95481c23.39768,-48.42385 23.39768,-104.59158 0,-153.04869c-1.66176,-3.4564 -0.96385,-7.61081 1.6285,-10.43573l0.03327,-0.03327c2.75859,-2.99126 7.07913,-3.92174 10.7682,-2.32651l193.16361,82.8223c5.71637,2.42631 5.71637,10.53553 0,13.02818"></path>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 42 + '%',
                left: 57 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.library)}>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 76 + '%',
                left: 46 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.csed)}>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 13 + '%',
                left: 81 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.boysHostel)}>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 13 + '%',
                left: 30 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.yamunaCanteen)}>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            {/* Noticeboard SVG */}
            <div
              className="absolute w-4 h-4 rounded-full opacity-50 cursor-pointer bg-sky-400 animate-ping"
              style={{
                top: 41 + '%',
                left: 31 + '%'
              }}></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 150 150"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 41 + '%',
                left: 31 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.noticeBoard)}>
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none">
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g id="Layer_1">
                  <g id="_x36_1">
                    <path
                      d="M104.63641,106.66779v5.38708l-4.67321,2.72612l-3.86189,-2.23925v-5.38708l4.7057,-2.72612z"
                      fill="#111d33"></path>
                    <path
                      d="M47.9739,144.92961l-4.7057,2.72613l-3.82941,-2.23925l-0.03248,-5.38708l4.7057,-2.72613l3.82941,2.23925z"
                      fill="#111d33"></path>
                    <path
                      d="M99.94766,114.77702l-3.84251,-2.23303l-0.01532,-5.40221l3.84251,2.23303z"
                      fill="#1d2943"></path>
                    <path
                      d="M99.93234,109.37481l-3.84251,-2.23303l4.70134,-2.71431l3.84251,2.23303z"
                      fill="#4c5c75"></path>
                    <path
                      d="M104.63367,106.66049l0.01531,5.40221l-4.70133,2.71431l-0.01531,-5.40221z"
                      fill="#111d33"></path>
                    <path
                      d="M125.34289,128.37015l-24.89339,-14.46646l-0.01219,-4.30145l24.89339,14.46646z"
                      fill="#b0b8cf"></path>
                    <path
                      d="M125.3307,124.0687l-24.89339,-14.46646l3.74338,-2.16125l24.89339,14.46646z"
                      fill="#e3e7f0"></path>
                    <path
                      d="M129.07408,121.90746l0.01219,4.30145l-3.74338,2.16125l-0.01219,-4.30145z"
                      fill="#febc1f"></path>
                    <g>
                      <path
                        d="M118.44801,33.18175l-0.07396,82.58163l-3.68623,2.1422l0.07396,-82.58162z"
                        fill="#e3e7f0"></path>
                      <path
                        d="M114.76179,35.32395l-0.07396,82.58162l-3.71033,-2.14216l0.07396,-82.58163z"
                        fill="#b0b8cf"></path>
                      <path
                        d="M118.44801,33.18175l-3.68623,2.1422l-3.71033,-2.14216l3.68621,-2.1422z"
                        fill="#93544a"></path>
                    </g>
                    <g fill="#111d33">
                      <path d="M132.57845,122.89421v5.41957l-4.67322,2.69364l-3.86189,-2.23925v-5.38708l4.7055,-2.72612z"></path>
                    </g>
                    <g>
                      <path
                        d="M127.89236,131.01372l-3.84251,-2.23301l-0.01531,-5.40222l3.84251,2.23303z"
                        fill="#1d2943"></path>
                      <path
                        d="M127.87704,125.61151l-3.84251,-2.23303l4.70133,-2.71431l3.84251,2.23303z"
                        fill="#4c5c75"></path>
                      <path
                        d="M132.57837,122.89719l0.01533,5.40221l-4.70134,2.71431l-0.01531,-5.40221z"
                        fill="#111d33"></path>
                    </g>
                    <g>
                      <path
                        d="M43.26804,147.65473l-3.84251,-2.23303l-0.01532,-5.40221l3.84251,2.23301z"
                        fill="#1d2943"></path>
                      <path
                        d="M43.25272,142.25251l-3.84251,-2.23301l4.70133,-2.71431l3.84251,2.23301z"
                        fill="#4c5c75"></path>
                      <path
                        d="M47.95406,139.53819l0.01531,5.40222l-4.70133,2.71431l-0.01532,-5.40222z"
                        fill="#111d33"></path>
                      <path
                        d="M68.66326,161.24786l-24.89339,-14.46646l-0.01219,-4.30145l24.89339,14.46646z"
                        fill="#b0b8cf"></path>
                      <path
                        d="M68.65107,156.94641l-24.89339,-14.46646l3.74339,-2.16125l24.89339,14.46646z"
                        fill="#e3e7f0"></path>
                      <path
                        d="M72.39446,154.78516l0.01219,4.30146l-3.74339,2.16124l-0.01219,-4.30145z"
                        fill="#febc1f"></path>
                      <g>
                        <path
                          d="M61.76838,66.05946l-0.07395,82.58164l-3.68622,2.1422l0.07395,-82.58163z"
                          fill="#e3e7f0"></path>
                        <path
                          d="M58.08216,68.20166l-0.07395,82.58163l-3.71034,-2.14216l0.07395,-82.58164z"
                          fill="#b0b8cf"></path>
                        <path
                          d="M61.76838,66.05946l-3.68622,2.1422l-3.71034,-2.14216l3.68622,-2.1422z"
                          fill="#93544a"></path>
                      </g>
                      <g fill="#111d33">
                        <path d="M75.91574,161.18851l-4.7057,2.69364l-3.82941,-2.23925l-0.03248,-5.38708l4.7057,-2.72613l3.82941,2.23925z"></path>
                      </g>
                      <g>
                        <path
                          d="M71.21274,163.89143l-3.84251,-2.23303l-0.01531,-5.40221l3.84251,2.23301z"
                          fill="#1d2943"></path>
                        <path
                          d="M71.19743,158.48921l-3.84251,-2.23301l4.70134,-2.71431l3.84251,2.23301z"
                          fill="#4c5c75"></path>
                        <path
                          d="M75.89876,155.7749l0.01531,5.40222l-4.70133,2.71431l-0.01531,-5.40222z"
                          fill="#111d33"></path>
                      </g>
                    </g>
                    <g>
                      <path
                        d="M115.87475,85.51891l-58.328,33.69036l-0.16588,-74.12541l58.30428,-33.69037z"
                        fill="#f8f9fe"></path>
                      <path
                        d="M61.20364,118.11288l-4.00088,-2.32506l55.40248,-31.99602l3.78117,2.19737z"
                        fill="#414f65"></path>
                      <path
                        d="M116.38641,85.98918l-3.78117,-2.19737l-0.15436,-70.93373l3.07991,1.78985z"
                        fill="#29313f"></path>
                      <path
                        d="M118.26664,9.89343l-3.08306,-1.78487l-60.88134,35.17896l0.16222,77.2377l3.08306,1.78487l60.91382,-35.17895zM60.27345,117.5719l-0.12974,-70.94184l55.397,-31.96596l0.12974,70.90935z"
                        fill="#3b475a"></path>
                      <path
                        d="M57.55001,122.31083l-3.07991,-1.78984l-0.17222,-77.23429l4.29239,2.49447z"
                        fill="#29313f"></path>
                      <path
                        d="M58.45244,45.70106l-4.15456,-2.41437l60.89799,-35.16885l3.07991,1.78985z"
                        fill="#414f65"></path>
                      <path
                        d="M57.37779,45.07654l60.898,-35.16885l0.17223,77.23429l-60.898,35.16885zM115.68516,85.58166l-0.15436,-70.93373l-55.40248,31.99602l0.15436,70.93372l55.40248,-31.99601"
                        fill="#3b475a"></path>
                    </g>
                    <g fill="#1abc9c">
                      <path d="M110.01483,32.18727c0.02253,1.03534 -0.69777,2.27332 -1.62073,2.81366l-43.53307,25.13683c-0.90042,0.51781 -1.62074,0.11252 -1.62074,-0.92282c0,-1.03548 0.72032,-2.27345 1.59821,-2.79112l43.5556,-25.1595c0.90043,-0.51767 1.62073,-0.11252 1.62073,0.92296z"></path>
                      <path d="M110.01483,45.25415c0.02253,1.03534 -0.69777,2.27332 -1.62073,2.81366l-43.53307,25.13683c-0.90042,0.51781 -1.62074,0.11252 -1.62074,-0.92282c0,-1.03548 0.72032,-2.27345 1.59821,-2.79112l43.5556,-25.1595c0.90043,-0.51767 1.62073,-0.11252 1.62073,0.92296z"></path>
                      <path d="M110.01483,58.32103c0.02253,1.03534 -0.69777,2.27332 -1.62073,2.81366l-43.53307,25.13683c-0.90042,0.51781 -1.62074,0.11252 -1.62074,-0.92281c0,-1.03548 0.72032,-2.27346 1.59821,-2.79112l43.5556,-25.1595c0.90043,-0.51767 1.62073,-0.11252 1.62073,0.92296z"></path>
                      <path d="M96.31345,79.2949c0.02253,1.03534 -0.69778,2.27332 -1.62073,2.81366l-29.83169,17.22984c-0.90042,0.5178 -1.62074,0.11252 -1.62074,-0.92282c0,-1.03548 0.72032,-2.27346 1.59821,-2.79112l29.85422,-17.25251c0.90042,-0.51767 1.62073,-0.11252 1.62073,0.92296z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            {/* gnoTalks */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 172 172"
              className="absolute w-4 h-4 cursor-pointer animate-bounce text-amber-400"
              style={{
                top: 62 + '%',
                left: 83 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.mpHall)}>
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none">
                <path d="M0,172v-172h172v172z" fill="none" fillRule="nonzero"></path>
                <g>
                  <path
                    d="M1184.85156,-442.09375h7.39063l5.03906,24.1875v0l6.38281,-24.1875h6.04688l6.38281,24.1875v0l4.70313,-24.1875h7.72656l-8.39844,35.60938h-6.71875l-6.71875,-23.51562h-0.33594l-6.71875,23.51563h-6.38281z"
                    fill="#e74c3c"
                    fillRule="nonzero"></path>
                  <path
                    d="M32.25,0.67188h13.77344h80.28906h13.77344c4.70313,0 8.39844,3.69531 8.39844,8.39844v124.29688c0,4.70313 -3.69531,8.39844 -8.39844,8.39844h-13.77344h-10.41406l-29.5625,29.5625l-29.5625,-29.5625h-10.41406h-13.77344c-4.70312,0 -8.39844,-3.69531 -8.39844,-8.39844v-124.29687c0,-4.70312 3.69531,-8.39844 8.39844,-8.39844z"
                    fill="#000000"
                    fillRule="evenodd"></path>
                  <path
                    d="M64.5,72.22656v-1.00781c0,-7.39062 1.67969,-13.4375 5.03906,-18.14062c3.35938,-4.70312 7.72656,-7.05469 13.77344,-7.05469c2.6875,0 5.03906,0.67188 7.05469,1.67969c2.01563,1.34375 3.69531,3.02344 5.03906,5.03906l1.00781,-6.04687h11.08594v47.36719c0,6.04688 -2.01562,11.08594 -6.04687,14.44531c-4.03125,3.35938 -9.74219,5.03906 -16.79687,5.03906c-2.35156,0 -5.03906,-0.33594 -7.72656,-1.00781c-2.6875,-0.67187 -5.03906,-1.67969 -7.39062,-2.6875l2.01563,-9.74219c2.01563,1.00781 4.03125,1.67969 6.04688,2.01563c2.01563,0.33594 4.36719,0.67188 6.71875,0.67188c3.35938,0 6.04688,-0.67187 7.72656,-2.35156c1.67969,-1.34375 2.35156,-3.69531 2.35156,-6.71875v-4.36719c-1.34375,1.67969 -3.02344,3.02344 -5.03906,4.03125c-2.01562,1.00781 -4.03125,1.34375 -6.38281,1.34375c-5.71094,0 -10.41406,-2.01562 -13.77344,-6.38281c-3.35937,-4.36719 -5.03906,-10.07812 -5.03906,-17.13281zM77.26563,72.22656c0,4.03125 0.67188,7.39063 2.01563,9.74219c1.34375,2.35156 3.69531,3.69531 6.71875,3.69531c2.01563,0 3.69531,-0.33594 5.03906,-1.00781c1.34375,-0.67187 2.35156,-1.67969 3.35938,-3.02344v-20.82812c-0.67187,-1.34375 -2.01562,-2.6875 -3.35937,-3.35937c-1.34375,-0.67187 -3.02344,-1.34375 -5.03906,-1.34375c-3.02344,0 -5.375,1.34375 -6.71875,4.03125c-1.34375,2.6875 -2.01562,6.38281 -2.01562,11.08594z"
                    fill="#e74c3c"
                    fillRule="nonzero"></path>
                </g>
              </g>
            </svg>
            {/* Sponsors */}
            <div
              className="absolute w-4 h-4 rounded-full opacity-50 cursor-pointer bg-amber-400 animate-ping"
              style={{
                top: 44 + '%',
                left: 7 + '%'
              }}></div>
            <img
              src={require('../images/sponser.png')}
              className="absolute w-4 h-4 cursor-pointer text-amber-400"
              style={{
                top: 44 + '%',
                left: 7 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.sponser)}
            />
            {/* Trivia */}
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 172 172"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 38 + '%',
                left: 9 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.trivia)}>
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none">
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g>
                  <rect
                    x="165.873"
                    y="0"
                    transform="scale(0.42574,0.42574)"
                    width="74.393"
                    height="94.093"
                    fill="#e74c3c"></rect>
                  <path
                    d="M57.8201,48.16298l-22.39576,22.34595l-23.23788,-23.18637l22.39576,-22.34595z"
                    fill="#e74c3c"></path>
                  <path
                    d="M114.1799,48.16298l22.39576,22.34595l23.23788,-23.18637l-22.39576,-22.34595z"
                    fill="#e74c3c"></path>
                  <ellipse
                    cx="201.745"
                    cy="233.341"
                    transform="scale(0.42574,0.42574)"
                    rx="155.003"
                    ry="154.659"
                    fill="#ffffff"></ellipse>
                  <path
                    d="M108.09434,147.42614c-36.44612,0 -65.99138,-29.47969 -65.99138,-65.84492c0,-15.64178 5.46994,-30.00719 14.60084,-41.30299c-21.80441,10.74787 -36.80332,33.15683 -36.80332,59.06497c-0.00043,36.36523 29.54483,65.84492 65.99095,65.84492c20.76943,0 39.29391,-9.57623 51.39053,-24.54193c-8.80052,4.33832 -18.70755,6.77995 -29.18763,6.77995z"
                    fill="#e6e7e8"></path>
                  <path
                    d="M85.89144,172c-40.14412,0 -72.80326,-32.59357 -72.80326,-72.6568c0,-40.06323 32.65956,-72.65638 72.80326,-72.65638c40.14369,0 72.80326,32.59357 72.80326,72.6568c0,40.06323 -32.65914,72.65638 -72.80326,72.65638zM85.89144,40.31058c-32.63189,0 -59.1795,26.48204 -59.1795,59.03304c0,32.551 26.5476,59.03261 59.1795,59.03261c32.63189,0 59.1795,-26.48204 59.1795,-59.03304c0,-32.551 -26.5476,-59.03261 -59.1795,-59.03261z"
                    fill="#3e4d6c"></path>
                  <path
                    d="M85.15362,65.26974c-5.43418,0 -10.96841,1.58121 -15.29395,4.91605l3.73249,9.77462c2.71368,-2.44249 6.2367,-4.03902 9.92661,-4.03945c4.21059,0.06684 6.34569,1.91712 6.34569,5.49889c0,3.39317 -2.09636,6.52025 -5.72922,10.79002c-4.54054,5.43588 -6.61434,11.28346 -5.99956,16.9122l0.32697,4.2404h11.13359l-0.17583,-4.56396c-0.2414,-4.08755 1.08181,-7.43091 4.5695,-11.54358c4.6176,-5.47079 8.14956,-10.18249 8.14956,-16.81087c0.00043,-7.5531 -5.25153,-15.17432 -16.98585,-15.17432z"
                    fill="#e74c3c"></path>
                  <path
                    d="M83.8202,118.0631c-4.32938,0 -7.47178,3.24756 -7.47178,7.72169c0,4.35109 3.17391,7.63229 7.38238,7.63229c4.3298,0 7.47221,-3.2101 7.47221,-7.63229c0,-4.47455 -3.10494,-7.72169 -7.3828,-7.72169z"
                    fill="#e74c3c"></path>
                </g>
              </g>
            </svg>
            {/* Team Page */}
            <div
              className="absolute w-4 h-4 bg-red-400 rounded-full opacity-50 cursor-pointer animate-ping"
              style={{
                top: 27 + '%',
                left: 23 + '%'
              }}></div>
            <img
              src={require('../images/team.png')}
              className="absolute w-4 h-4 cursor-pointer text-amber-400"
              style={{
                top: 27 + '%',
                left: 23 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.team)}
            />

            <Tooltip.Provider delayDuration={500} skipDelayDuration={400}>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 40.15 + '%',
                      top: 66.13 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">CYBERQUEST</div>
                    <div className="text-blue-900">{eventQuotes[0]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 55.779999999999994 + '%',
                      top: 34.41 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">ELECTROMANIA</div>
                    <div className="text-blue-900">{eventQuotes[1]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 45.489999999999995 + '%',
                      top: 22.6 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">POWERSURGE</div>
                    <div className="text-blue-900">{eventQuotes[2]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 41.01 + '%',
                      top: 30.849999999999998 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">RASAYANS</div>
                    <div className="text-blue-900">{eventQuotes[3]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 53.51 + '%',
                      top: 58.769999999999996 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">MECHROCOSM</div>
                    <div className="text-blue-900">{eventQuotes[4]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 60 + '%',
                      top: 36 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">NIRMAAN</div>
                    <div className="text-blue-900">{eventQuotes[5]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 64 + '%',
                      top: 36 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">ROBOMANIA</div>
                    <div className="text-blue-900">{eventQuotes[9]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 35.5 + '%',
                      top: 7.5 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">GENESIS</div>
                    <div className="text-blue-900">{eventQuotes[6]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 54.419999999999995 + '%',
                      top: 81.59 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">OLIGOPOLY</div>
                    <div className="text-blue-900">{eventQuotes[7]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 50.26 + '%',
                      top: 84.08 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">MONOPOLY</div>
                    <div className="text-blue-900">{eventQuotes[8]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 69.11 + '%',
                      top: 63.959999999999994 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">GNOTALKS</div>
                    <div className="text-blue-900">{eventQuotes[14]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 81.65 + '%',
                      top: 45.839999999999996 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">AERODYNAMIX</div>
                    <div className="text-blue-900">{eventQuotes[10]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 67.18 + '%',
                      top: 72.97 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">ASTROWING</div>
                    <div className="text-blue-900">{eventQuotes[11]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 57.4 + '%',
                      top: 3.59 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">KREEDOMANIA</div>
                    <div className="text-blue-900">{eventQuotes[12]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 22.61 + '%',
                      top: 48.91 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">GNOSIOMANIA</div>
                    <div className="text-blue-900">{eventQuotes[13]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </>
        )}
        <img
          src={require('../images/cross-icon.png')}
          className="absolute cursor-pointer right-4 top-4"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

Map.propTypes = {
  playerPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    rot: PropTypes.number.isRequired
  }).isRequired,
  teleport: PropTypes.func.isRequired,
  showMap: PropTypes.bool.isRequired,
  setShowMap: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Map.propTypes>;

export default Map;

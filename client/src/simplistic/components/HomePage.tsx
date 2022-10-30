import { Link } from 'react-router-dom';
import ResponsiveNav from './Common/ResponsiveNav';
import Nav from './Home/Nav';
import NewEvent from './Home/NewEvent';
import Pattern from './Home/Pattern';
import e1 from '../Assets/e1.jpg';
import e2 from '../Assets/e2.jpg';
import e3 from '../Assets/e3.jpg';
import e4 from '../Assets/e4.jpg';
import e5 from '../Assets/e5.jpg';
import e6 from '../Assets/e6.jpg';
import e7 from '../Assets/e7.jpg';
import e8 from '../Assets/e8.jpg';
import Footer from './Common/Footer';
import heroBg from '../Assets/herobg.png';
/* eslint-disable */
interface HomePagePropType {
  onRedirectPress: (e: any) => void;
}
/* eslint-enable */

// eslint-disable-next-line no-unused-vars
function HomePage({ onRedirectPress }: HomePagePropType) {
  return (
    <>
      <div className="overflow-x-hidden bg-gray-900">
        <div
          className="relative overflow-x-hidden bg-center bg-cover min-h-max md:h-screen md:bg-cover"
          style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
          <div className="relative z-10 hidden md:block">
            <Nav />
          </div>
          <div className="relative z-10 md:hidden">
            <ResponsiveNav />
          </div>
          {/* main text */}
          <main className="relative z-10 text-center " id="wrapper">
            <div className="py-24 mt-auto space-y-6 py- md:py-10 ">
              <p className="relative inline-flex items-center justify-center px-2 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl mt-7 group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-xs text-white capitalize md:text-md">
                  MNNIT Allahabad Presents
                </span>
              </p>
              <h1 className="text-5xl font-bold tracking-wider text-white uppercase sm:text-6xl font-avishkar title md:text-7xl xl:text-8xl 2xl:text-[7rem] landing-title">
                Avishkar
              </h1>
              <span className="block font-extrabold text-white text-md ">
                10<sup>th</sup> November - 13<sup>th</sup> November 2022
              </span>
              <a href="/game" className="uppercase retro-btn">
                enter game
              </a>
            </div>
          </main>
          {/* triangular patterns */}
          <Pattern />
        </div>
        {/* marquee */}
        <div className="pt-10 overflow-hidden bg-gray-900 md:-mt-16">
          <ul className="flex space-x-5 font-semibold text-transparent uppercase text-7xl marquee lg:text-8xl whitespace-nowrap animate-marquee-rtl">
            <li className="stroke-text">Ideate</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Innovate</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Create</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Ideate</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Innovate</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Create</li>
            <li className="text-white ">•</li>
          </ul>
          <ul className="flex space-x-5 font-semibold text-transparent uppercase text-7xl marquee lg:text-8xl whitespace-nowrap animate-marquee-ltr">
            <li className="stroke-text">Ideate</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Innovate</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Create</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Ideate</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Innovate</li>
            <li className="text-white ">•</li>
            <li className="stroke-text">Create</li>
            <li className="text-white ">•</li>
          </ul>
        </div>

        {/* events display */}
        <div className="pt-12 text-center bg-gray-900 ">
          <h1 className="text-2xl font-semibold text-gray-400 capitalize md:text-4xl lg:text-6xl">
            test your{' '}
            <span className="leading-8 tracking-tight text-white uppercase title rotate">
              limits
            </span>{' '}
            with plethora
            <br /> of events
          </h1>
          <Link
            to="/department"
            className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl mt-7 group hover:ring-1 hover:ring-purple-500">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white capitalize">view all events</span>
          </Link>
          <div className="">
            <div className="grid w-[150%] grid-cols-4 gap-2 md:grid-cols-6  -ml-[20%] md:-ml-[10%]">
              {/* will be hidden in mobile view */}
              <div className="hidden space-y-2 shadow-sm md:block col col-1">
                <div className="hero-card hero-card-12">
                  <img src={e5} alt="" className="object-cover blur-[1px] rounded-md shadow-lg" />
                </div>
                <div className="hero-card hero-card-10">
                  <img src={e6} alt="" className="object-cover blur-[1px] rounded-md shadow-lg" />
                </div>
              </div>
              <div className="shadow-sm  translate-y-[15%] col col-2 space-y-2">
                <div className="hero-card hero-card-11">
                  <img src={e3} alt="" className="object-cover rounded-md shadow-lg" />
                </div>
                <div className="hero-card hero-card-7">
                  <img src={e2} alt="" className="object-cover rounded-md shadow-lg" />
                </div>
              </div>
              <div className="space-y-2 shadow-sm col col-3 translate-y-1/3">
                <div className="h-full hero-card ">
                  <img
                    src={e1}
                    alt=""
                    className="object-cover rounded-md shadow-lg h-2/3 max-h-min"
                  />
                </div>
              </div>
              <div className="space-y-2 translate-y-1/2 shadow-sm col col-4">
                <div className="hero-card hero-card-6">
                  <img src={e4} alt="" className="object-cover rounded-md shadow-lg" />
                </div>
                <div className="grid grid-cols-2 gap-2 ">
                  <div className="hero-card hero-card-8">
                    <img src={e5} alt="" className="object-cover rounded-md shadow-lg" />
                  </div>
                  <div className="hero-card hero-card-9">
                    <img src={e6} alt="" className="object-cover rounded-md shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="translate-y-[15%] shadow-sm col col-5 space-y-2">
                <div className="hero-card hero-card-3">
                  <img src={e7} alt="" className="object-cover rounded-md shadow-lg" />
                </div>
                <div className="hero-card hero-card-4">
                  <img src={e8} alt="" className="object-cover rounded-md shadow-lg" />
                </div>
              </div>
              {/* will be hidden in mobile view */}
              <div className="hidden space-y-2 shadow-sm md:block col col-6">
                <div className="hero-card hero-card-5">
                  <img src={e1} alt="" className="object-cover rounded-md shadow-lg" />
                </div>
                <div className="hero-card hero-card-2">
                  <img src={e2} alt="" className="object-cover rounded-md shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* trying */}
        <div className="grid max-w-5xl gap-4 p-4 mx-auto mt-32 text-white bg-gray-900 md:mt-56 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
          <h1 className="font-extrabold text-center md:text-left xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:grid-cols-3 ">
            <span className="text-2xl uppercase md:col-span-2 md:text-5xl lg:text-6xl xl:text-8xl">
              what&#39;s <br className="hidden md:block" /> new
            </span>
          </h1>
          <p className="md:hidden ">
            We have added a whole lot of new events to make this avishkar more fun and enriching.
          </p>

          <NewEvent
            dept="cyberqest"
            eventName="event<br/>name"
            desc="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit."
          />

          <p className="hidden md:block xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">
            We have added a whole lot of new events to make this avishkar more fun and enriching.
          </p>
          <NewEvent
            dept="cyberqest"
            eventName="event<br/>name"
            desc="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit."
          />
          <NewEvent
            dept="cyberqest"
            eventName="event<br/>name"
            desc="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit."
          />

          <div className="md:col-start-2">
            <NewEvent
              dept="cyberqest"
              eventName="event<br/>name"
              desc="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit."
            />
          </div>

          <NewEvent
            dept="cyberqest"
            eventName="event<br/>name"
            desc="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit."
          />
          <NewEvent
            dept="cyberqest"
            eventName="event<br/>name"
            desc="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit."
          />
          <NewEvent
            dept="cyberqest"
            eventName="event<br/>name"
            desc="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit."
          />
          <NewEvent
            dept="cyberqest"
            eventName="event<br/>name"
            desc="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit. Lorem ipsum dolor sit."
          />

          <p className="self-center mx-auto uppercase md:text-lg md:col-span-2 md:text-center md:px-4">
            ideate &#8226; innovate &#8226; create
          </p>
        </div>
        {/*  */}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

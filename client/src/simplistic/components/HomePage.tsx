import { Link } from 'react-router-dom';
import ResponsiveNav from './Common/ResponsiveNav';
import Nav from './Home/Nav';
import NewEvent from './Home/NewEvent';
import Pattern from './Home/Pattern';
import eventImage from '../Assets/e1.jpg';
import Footer from './Common/Footer';
/* eslint-disable */
interface HomePagePropType {
  onRedirectPress: (e: any) => void;
}
/* eslint-enable */

// eslint-disable-next-line no-unused-vars
function HomePage({ onRedirectPress }: HomePagePropType) {
  return (
    <>
      <div className="overflow-x-hidden">
        <div
          className="relative overflow-x-hidden bg-gray-900 bg-center bg-cover min-h-max md:h-screen md:bg-cover"
          // style={{
          //   backgroundImage: 'url("https://necromancers.dan-fisher.dev/assets/img/bg-texture-05.jpg")'
          // }}
        >
          <div className="hidden md:block">
            <Nav />
          </div>
          <div className="md:hidden">
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
                10<sup>th</sup> November - 23<sup>th</sup> November 2021
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
        <div className="pt-12 text-center bg-gray-900 hero-grid-container">
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
              <div className="hidden shadow-sm md:block col col-1">
                <div className="hero-card hero-card-12">
                  <img src={eventImage} alt="" className="object-cover" />
                </div>
                <div className="hero-card hero-card-10">
                  <img src={eventImage} alt="" className="object-cover" />
                </div>
              </div>
              <div className="shadow-sm  translate-y-[15%] col col-2">
                <div className="hero-card hero-card-11">
                  <img src={eventImage} alt="" />
                </div>
                <div className="hero-card hero-card-7">
                  <img src={eventImage} alt="" />
                </div>
              </div>
              <div className="shadow-sm col col-3 translate-y-1/3">
                <div className="h-full hero-card ">
                  <img src={eventImage} alt="" className="object-cover h-full" />
                </div>
              </div>
              <div className="translate-y-1/2 shadow-sm col col-4">
                <div className="hero-card hero-card-6">
                  <img src={eventImage} alt="" className="object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-2 hero-subgrid">
                  <div className="hero-card hero-card-8">
                    <img src={eventImage} alt="" className="object-cover" />
                  </div>
                  <div className="hero-card hero-card-9">
                    <img src={eventImage} alt="" className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="translate-y-[15%] shadow-sm col col-5">
                <div className="hero-card hero-card-3">
                  <img src={eventImage} alt="" className="object-cover" />
                </div>
                <div className="hero-card hero-card-4">
                  <img src={eventImage} alt="" className="object-cover" />
                </div>
              </div>
              {/* will be hidden in mobile view */}
              <div className="hidden shadow-sm md:block col col-6">
                <div className="hero-card hero-card-5">
                  <img src={eventImage} alt="" className="object-cover" />
                </div>
                <div className="hero-card hero-card-2">
                  <img src={eventImage} alt="" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-40 text-center bg-gray-900">
          <h1 className="w-auto text-5xl font-bold text-white md:6xl lg:text-8xl title ">
            what&#39;s new
          </h1>
          <p className="py-2 text-xl text-white capitalize">introducting new events</p>
          <div className="flex flex-col justify-center gap-2 px-4 pb-4 shadow-lg md:flex-row ">
            <NewEvent
              name="CSS Battle"
              desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis distinctio
              voluptatibus sapiente tenetur sit vel accusantium veritatis aperiam ducimus?"
              redirectTo="/department/cyberquest/cssbattle"
            />
            <NewEvent
              name="CSS Battle"
              desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis distinctio
              voluptatibus sapiente tenetur sit vel accusantium veritatis aperiam ducimus?"
              redirectTo="/department/cyberquest/cssbattle"
            />
            <NewEvent
              name="CSS Battle"
              desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis distinctio
              voluptatibus sapiente tenetur sit vel accusantium veritatis aperiam ducimus?"
              redirectTo="/department/cyberquest/cssbattle"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

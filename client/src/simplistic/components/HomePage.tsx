import Nav from './Home/Nav';
import Pattern from './Home/Pattern';

/* eslint-disable */
interface HomePagePropType {
  onRedirectPress: (e: any) => void;
}
/* eslint-enable */

// eslint-disable-next-line no-unused-vars
function HomePage({ onRedirectPress }: HomePagePropType) {
  return (
    <div className="">
      <div
        className="relative h-screen overflow-x-hidden bg-cover"
        style={{
          backgroundImage: `url('https://necromancers.dan-fisher.dev/assets/img/bg-texture-05.jpg')`
        }}>
        <Nav />
        {/* main text */}
        <main className="text-center site-content" id="wrapper">
          <div className="pt-10 site-content__center">
            <h1 className="font-bold tracking-wider text-white uppercase text-8xl landing-title">
              <span className="block text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
                MNNIT allahabad present
              </span>
              Avishkar
            </h1>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl mt-7 group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Start Hacking</span>
            </a>
          </div>
        </main>
        {/* triangular patterns */}
        <Pattern />
      </div>
      {/* marquee */}
      <div className="-mt-32 overflow-x-hidden bg-gray-900">
        <ul className="flex space-x-5 font-semibold text-transparent uppercase marquee text-8xl whitespace-nowrap animate-marquee-rtl">
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
        <ul className="flex space-x-5 font-semibold text-transparent uppercase marquee text-8xl whitespace-nowrap animate-marquee-ltr">
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
        <h1 className="text-6xl font-semibold text-white capitalize">
          test your <span className="p-1 tracking-tight text-black bg-purple-400">limits</span> with
          plethora
          <br /> of events
        </h1>
        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl mt-7 group hover:ring-1 hover:ring-purple-500">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">view all events</span>
        </a>
        <div className="grid grid-cols-6 gap-2">
          <div className="shadow-sm col col-1">
            <div className="hero-card hero-card-12">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
            <div className="hero-card hero-card-10">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
          </div>
          <div className="translate-y-16 shadow-sm col col-2">
            <div className="hero-card hero-card-11">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
            <div className="hero-card hero-card-7">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
          </div>
          <div className="shadow-sm col col-3 translate-y-1/3">
            <div className="hero-card hero-card-1">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
          </div>
          <div className="translate-y-32 shadow-sm col col-4">
            <div className="hero-card hero-card-6">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
            <div className="grid grid-cols-2 gap-2 hero-subgrid">
              <div className="hero-card hero-card-8">
                <img
                  src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                  alt=""
                />
              </div>
              <div className="hero-card hero-card-9">
                <img
                  src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="translate-y-12 shadow-sm col col-5">
            <div className="hero-card hero-card-3">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
            <div className="hero-card hero-card-4">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
          </div>
          <div className="shadow-sm col col-6">
            <div className="hero-card hero-card-5">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
            <div className="hero-card hero-card-2">
              <img
                src="https://cdn.dribbble.com/users/340118/screenshots/4543009/media/484d3ede4ebdbe10b984b782d40cec8b.png?compress=1&resize=800x600&vertical=top"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 text-center bg-gray-900">
        <h1 className="w-auto font-bold text-white text-8xl stroke-text">what's new</h1>
        <p className="text-xl text-white capitalize ">introducting two new events</p>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2">
          <div className="max-w-lg p-2 bg-white rounded-md shadow-md">
            <h2 className="my-2 text-2xl capitalize">machine coding</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis distinctio
              voluptatibus sapiente tenetur sit vel accusantium veritatis aperiam ducimus?
            </p>
          </div>
          <div>
            <h2>CSS Battle</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis distinctio
              voluptatibus sapiente tenetur sit vel accusantium veritatis aperiam ducimus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

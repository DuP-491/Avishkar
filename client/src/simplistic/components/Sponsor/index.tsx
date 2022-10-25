import DividerLine from '../Common/DividerLine';
import Card from './Card';

/*Sponsor Images import*/
/* eslint-disable */
import BalsamiqIMG from './Assets/Balsamiq.png';
import BlogaddaIMG from './Assets/Blogadda.png';
import BlueskyIMG from './Assets/Bluesky.jpg';
import BugseeIMG from './Assets/Bugsee.png';
import BuyTheValueIMG from './Assets/BuyTheValue.png';
import CeloIMG from './Assets/Celo.png';
import CodechefIMG from './Assets/Codechef.png';
import CodingBlocksIMG from './Assets/CodingBlocks.png';
import CodingNinjaIMG from './Assets/CodingNinja.png';
import CreativeTimIMG from './Assets/CreativeTim.png';
import Dare2CompeteIMG from './Assets/Dare2Compete.png';
import DellIMG from './Assets/Dell.png';
import DevfolioIMG from './Assets/Devfolio.png';
import FilecoinIMG from './Assets/Filecoin.png';
import GithubIMG from './Assets/Github.png';
import GrowwIMG from './Assets/Groww.png';
import HackerEarthIMG from './Assets/HackerEarth.png';
import HindustanTimesIMG from './Assets/HindustanTimes.png';
import InterviewBuddyIMG from './Assets/InterviewBuddy.png';
import JetBrainsIMG from './Assets/JetBrains.png';
import KwalityWallsIMG from './Assets/KwalityWalls.png';
import MaticIMG from './Assets/Matic.png';
import MHMIMG from './Assets/MHM.png';
import MyLocIMG from './Assets/MyLoc.png';
import PayTMIMG from './Assets/PayTM.png';
import PolygonIMG from './Assets/Polygon.png';
import ProtoioIMG from './Assets/Protoio.png';
import RedIMG from './Assets/Red.png';
import ScalerEdgeIMG from './Assets/ScalerEdge.png';
import SketchIMG from './Assets/Sketch.png';
import SkillenzaIMG from './Assets/Skillenza.png';
import SkillLyncIMG from './Assets/SkillLync.png';
import SSGIMG from './Assets/SSG.png';
import TezosIMG from './Assets/Tezos.png';
import TIMEIMG from './Assets/TIME.png';
import UltratechIMG from './Assets/Ultratech.png';
import YouthIMG from './Assets/Youth.png';
/* eslint-enable */

const index = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Our Sponsors
            </h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
            {/* 
              <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi
                magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
              </p>
            */}
          </div>
          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="SPONSORS" />
            <div className="grid items-center grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={DevfolioIMG} name="Devfolio" bgc="white" />
              <Card imgsrc={PolygonIMG} name="Polygon" bgc="white" />
              <Card imgsrc={FilecoinIMG} name="Filecoin" bgc="white" />
              <Card imgsrc={TezosIMG} name="Tezos" bgc="white" />
              <Card imgsrc={CeloIMG} name="Celo" bgc="white" />
              <Card imgsrc={CodechefIMG} name="Codechef" bgc="white" />
              <Card imgsrc={BuyTheValueIMG} name="BuyTheValue" bgc="white" />
              <Card imgsrc={MHMIMG} name="Media House MNNIT" bgc="black" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="associate Sponsors" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={UltratechIMG} name="Ultratech" bgc="#f9ef2b" />
              <Card imgsrc={TIMEIMG} name="TIME" bgc="white" />
              <Card imgsrc={BlueskyIMG} name="Bluesky" bgc="white" />
              <Card imgsrc={GrowwIMG} name="Groww" bgc="white" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="RADIO PARTNER" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={RedIMG} name="Red FM 93.5" bgc="black" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="BLOGGER PARTNER" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={BlogaddaIMG} name="Blogadda" bgc="white" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="MEDIA PARTNER" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={YouthIMG} name="Youth" bgc="white" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="CO TITLE SPONSORS" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={MyLocIMG} name="MyLoc" bgc="white" />
              <Card imgsrc={SkillLyncIMG} name="Skill Lync" bgc="white" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="past sponsors" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={MaticIMG} name="Matic" bgc="white" />
              <Card imgsrc={GithubIMG} name="Github" bgc="white" />
              <Card imgsrc={SkillenzaIMG} name="Skillenza" bgc="#3088f4" />
              <Card imgsrc={SSGIMG} name="SSG" bgc="" />
              <Card imgsrc={ScalerEdgeIMG} name="Scaler Edge" bgc="white" />
              <Card imgsrc={HackerEarthIMG} name="HackerEarth" bgc="white" />
              <Card imgsrc={CodingBlocksIMG} name="Coding Blocks" bgc="white" />
              <Card imgsrc={PayTMIMG} name="PayTM" bgc="white" />
              <Card imgsrc={CodingNinjaIMG} name="Coding Ninja" bgc="white" />
              <Card imgsrc={SketchIMG} name="Sketch" bgc="white" />
              <Card imgsrc={InterviewBuddyIMG} name="Interview Buddy" bgc="white" />
              <Card imgsrc={BalsamiqIMG} name="Balsamiq" bgc="white" />
              <Card imgsrc={JetBrainsIMG} name="JetBrains" bgc="white" />
              <Card imgsrc={CreativeTimIMG} name="Creative Tim" bgc="white" />
              <Card imgsrc={BugseeIMG} name="Bugsee" bgc="" />
              <Card imgsrc={ProtoioIMG} name="Proto.io" bgc="white" />
              <Card imgsrc={Dare2CompeteIMG} name="Dare2Compete" bgc="white" />
              <Card imgsrc={KwalityWallsIMG} name="Kwality Walls" bgc="white" />
              <Card imgsrc={DellIMG} name="Dell" bgc="white" />
              <Card imgsrc={HindustanTimesIMG} name="Hindustan Times" bgc="white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

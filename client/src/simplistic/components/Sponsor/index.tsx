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
import ReplitIMG from './Assets/Replit.png';
import ScalerEdgeIMG from './Assets/ScalerEdge.png';
import SketchIMG from './Assets/Sketch.png';
import SkillenzaIMG from './Assets/Skillenza.png';
import SkillLyncIMG from './Assets/SkillLync.png';
import SolanaIMG from './Assets/Solana.png';
import SSGIMG from './Assets/SSG.png';
import TezosIMG from './Assets/Tezos.png';
import TIMEIMG from './Assets/TIME.png';
import UltratechIMG from './Assets/Ultratech.png';
import YouthIMG from './Assets/Youth.png';
import StockGrow from './Assets/StockGrow.png';
/* eslint-enable */

const index = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-5xl dark:text-white">
              Our Sponsors
            </h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>
          <div className="container px-6 py-10 mx-auto">
            <DividerLine alignmentCenter={true} text="SPONSORS" />
            <div className="grid items-center grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={DevfolioIMG} name="Devfolio" bgc="" sponsorURL="https://devfolio.co" />
              <Card
                imgsrc={PolygonIMG}
                name="Polygon"
                bgc=""
                sponsorURL="https://polygon.technology/"
              />
              <Card imgsrc={FilecoinIMG} name="Filecoin" bgc="" sponsorURL="https://filecoin.io" />
              <Card imgsrc={ReplitIMG} name="Repl.it" bgc="" sponsorURL="https://replit.com" />
              <Card imgsrc={SolanaIMG} name="Solana" bgc="" sponsorURL="https://solana.com" />
              <Card
                imgsrc={StockGrow}
                name="StockGrow"
                bgc=""
                sponsorURL="https://stockgro.club/"
              />
            </div>
          </div>

          {/* <div className="container px-6 py-10 mx-auto">
            <DividerLine alignmentCenter={true} text="associate Sponsors" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3"></div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine alignmentCenter={true} text="RADIO PARTNER" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3"></div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine alignmentCenter={true} text="BLOGGER PARTNER" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3"></div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine alignmentCenter={true} text="MEDIA PARTNER" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3"></div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine alignmentCenter={true} text="CO TITLE SPONSORS" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3"></div>
          </div> */}

          <div className="container px-6 py-10 mx-auto">
            <DividerLine alignmentCenter={true} text="past sponsors" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={TezosIMG} name="Tezos" bgc="white" sponsorURL="javascript:void(0)" />
              <Card imgsrc={CeloIMG} name="Celo" bgc="white" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={CodechefIMG}
                name="Codechef"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={BuyTheValueIMG}
                name="BuyTheValue"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={MHMIMG}
                name="Media House MNNIT"
                bgc="black"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={UltratechIMG}
                name="Ultratech"
                bgc="#f9ef2b"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={TIMEIMG} name="TIME" bgc="white" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={BlueskyIMG}
                name="Bluesky"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={GrowwIMG} name="Groww" bgc="white" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={RedIMG}
                name="Red FM 93.5"
                bgc="black"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={BlogaddaIMG}
                name="Blogadda"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={YouthIMG} name="Youth" bgc="white" sponsorURL="javascript:void(0)" />
              <Card imgsrc={MyLocIMG} name="MyLoc" bgc="white" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={SkillLyncIMG}
                name="Skill Lync"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={MaticIMG} name="Matic" bgc="white" sponsorURL="javascript:void(0)" />
              <Card imgsrc={GithubIMG} name="Github" bgc="white" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={SkillenzaIMG}
                name="Skillenza"
                bgc="#3088f4"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={SSGIMG} name="SSG" bgc="" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={ScalerEdgeIMG}
                name="Scaler Edge"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={HackerEarthIMG}
                name="HackerEarth"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={CodingBlocksIMG}
                name="Coding Blocks"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={PayTMIMG} name="PayTM" bgc="white" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={CodingNinjaIMG}
                name="Coding Ninja"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={SketchIMG} name="Sketch" bgc="white" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={InterviewBuddyIMG}
                name="Interview Buddy"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={BalsamiqIMG}
                name="Balsamiq"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={JetBrainsIMG}
                name="JetBrains"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={CreativeTimIMG}
                name="Creative Tim"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={BugseeIMG} name="Bugsee" bgc="" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={ProtoioIMG}
                name="Proto.io"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={Dare2CompeteIMG}
                name="Dare2Compete"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card
                imgsrc={KwalityWallsIMG}
                name="Kwality Walls"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
              <Card imgsrc={DellIMG} name="Dell" bgc="white" sponsorURL="javascript:void(0)" />
              <Card
                imgsrc={HindustanTimesIMG}
                name="Hindustan Times"
                bgc="white"
                sponsorURL="javascript:void(0)"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

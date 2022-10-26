import React from 'react';
import Tablet from '../Tablet';
import BGIMG from './../../../images/tablet_bg.png';
import BalsamiqIMG from '../Sponsor/Assets/Balsamiq.png';
import BlogaddaIMG from '../Sponsor/Assets/Blogadda.png';
import BlueskyIMG from '../Sponsor/Assets/Bluesky.jpg';
import BugseeIMG from '../Sponsor/Assets/Bugsee.png';
import BuyTheValueIMG from '../Sponsor/Assets/BuyTheValue.png';
import CeloIMG from '../Sponsor/Assets/Celo.png';
import CodechefIMG from '../Sponsor/Assets/Codechef.png';
import CodingBlocksIMG from '../Sponsor/Assets/CodingBlocks.png';
import CodingNinjaIMG from '../Sponsor/Assets/CodingNinja.png';
import CreativeTimIMG from '../Sponsor/Assets/CreativeTim.png';
import Dare2CompeteIMG from '../Sponsor/Assets/Dare2Compete.png';
import DellIMG from '../Sponsor/Assets/Dell.png';
import DevfolioIMG from '../Sponsor/Assets/Devfolio.png';
import FilecoinIMG from '../Sponsor/Assets/Filecoin.png';
import GithubIMG from '../Sponsor/Assets/Github.png';
import GrowwIMG from '../Sponsor/Assets/Groww.png';
import HackerEarthIMG from '../Sponsor/Assets/HackerEarth.png';
import HindustanTimesIMG from '../Sponsor/Assets/HindustanTimes.png';
import InterviewBuddyIMG from '../Sponsor/Assets/InterviewBuddy.png';
import JetBrainsIMG from '../Sponsor/Assets/JetBrains.png';
import KwalityWallsIMG from '../Sponsor/Assets/KwalityWalls.png';
import MaticIMG from '../Sponsor/Assets/Matic.png';
import MHMIMG from '../Sponsor/Assets/MHM.png';
import MyLocIMG from '../Sponsor/Assets/MyLoc.png';
import PayTMIMG from '../Sponsor/Assets/PayTM.png';
import PolygonIMG from '../Sponsor/Assets/Polygon.png';
import ProtoioIMG from '../Sponsor/Assets/Protoio.png';
import RedIMG from '../Sponsor/Assets/Red.png';
import ScalerEdgeIMG from '../Sponsor/Assets/ScalerEdge.png';
import SketchIMG from '../Sponsor/Assets/Sketch.png';
import SkillenzaIMG from '../Sponsor/Assets/Skillenza.png';
import SkillLyncIMG from '../Sponsor/Assets/SkillLync.png';
import SSGIMG from '../Sponsor/Assets/SSG.png';
import TezosIMG from '../Sponsor/Assets/Tezos.png';
import TIMEIMG from '../Sponsor/Assets/TIME.png';
import UltratechIMG from '../Sponsor/Assets/Ultratech.png';
import YouthIMG from '../Sponsor/Assets/Youth.png';
import DividerLine from '../Common/DividerLine';

/* eslint-disable */
interface TeamAvishkarPropType {
  onCrossPress: (e: any) => void;
}
function Sponsors({ onCrossPress }: TeamAvishkarPropType) {
  function DisplayCard(prop: Array<string>) {
    return (
      <div className="flex flex-wrap justify-around mt-10">
        {prop.map((p) => {
          return (
            <div
              style={{ width: '20vw', minWidth: '200px' }}
              className="justify-center p-1 text-white transition-all duration-500 rounded-md rounded-lg height-fit">
              <img src={p} className="bg-white/[0.2] p-2 rounded-xl" />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <Tablet
        bgrd={BGIMG}
        onBackPress={() => {}}
        onCrossPress={onCrossPress}
        onHomePress={() => {}}>
        <div className="flex justify-center pt-3">
          <span className="animating-event-title">T</span>
          <span className="animating-event-title">E</span>
          <span className="animating-event-title">A</span>
          <span className="animating-event-title">M</span>
        </div>
        <div className="flex flex-col items-center px-10 pb-10">
          <>
            <DividerLine alignmentCenter={true} text="SPONSORS" />
            {DisplayCard([DevfolioIMG])}
          </>
        </div>
        <div className="flex flex-col items-center px-10 pb-10">
          <>
            <DividerLine alignmentCenter={true} text="PAST SPONSORS" />
            {DisplayCard([
              BalsamiqIMG,
              BlogaddaIMG,
              BlueskyIMG,
              BugseeIMG,
              BuyTheValueIMG,
              CeloIMG,
              CodechefIMG,
              CodingBlocksIMG,
              CodingNinjaIMG,
              CreativeTimIMG,
              Dare2CompeteIMG,
              DellIMG,
              FilecoinIMG,
              GithubIMG,
              GrowwIMG,
              HackerEarthIMG,
              HindustanTimesIMG,
              InterviewBuddyIMG,
              JetBrainsIMG,
              KwalityWallsIMG,
              MaticIMG,
              MHMIMG,
              MyLocIMG,
              PayTMIMG,
              PolygonIMG,
              ProtoioIMG,
              RedIMG,
              ScalerEdgeIMG,
              SketchIMG,
              SkillenzaIMG,
              SkillLyncIMG,
              SSGIMG,
              TezosIMG,
              TIMEIMG,
              UltratechIMG,
              YouthIMG
            ])}
          </>
        </div>
      </Tablet>
    </>
  );
}

export default Sponsors;

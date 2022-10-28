import React from 'react';
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
function Sponsors() {
  function DisplayCard(prop: Array<string>) {
    return (
      <div className="flex flex-wrap justify-around mt-10">
        {prop.map((p) => {
          return (
            <div
              style={{ width: '20vw', minWidth: '200px' }}
              className="justify-center p-1 text-white transition-all duration-500 rounded-md rounded-lg height-fit">
              <img src={p} className="object-contain p-2 rounded-xl aspect-square" />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center pt-3">
        <span className="animating-event-title">S</span>
        <span className="animating-event-title">P</span>
        <span className="animating-event-title">O</span>
        <span className="animating-event-title">N</span>
        <span className="animating-event-title">S</span>
        <span className="animating-event-title">O</span>
        <span className="animating-event-title">R</span>
        <span className="animating-event-title">S</span>
      </div>
      <div className="flex flex-col items-center px-10 pb-10">
        <>
          <DividerLine alignmentCenter={true} text="SPONSORS" />
          {DisplayCard([DevfolioIMG, FilecoinIMG, TezosIMG, PolygonIMG])}
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
            ProtoioIMG,
            RedIMG,
            ScalerEdgeIMG,
            SketchIMG,
            SkillenzaIMG,
            SkillLyncIMG,
            SSGIMG,
            TIMEIMG,
            UltratechIMG,
            YouthIMG
          ])}
        </>
      </div>
    </>
  );
}

export default Sponsors;

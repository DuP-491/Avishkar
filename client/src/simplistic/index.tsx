/* eslist-ignore */

import React, { useState } from 'react';
import EventsTab from './components/EventsTab';
import FAQ from './components/FAQ';
import HomePage from './components/HomePage';
import Sponsors from './components/Sponsors';
import TeamAvishkar from './components/TeamAvishkar';

function Simplistic() {
  const [WhatToDisplay, setWhatToDisplay] = useState('Home');

  function onCrossPress() {
    setWhatToDisplay('Home');
  }

  // eslint-disable-next-line default-case
  function onRedirectPress(event: any) {
    console.log(event);
    setWhatToDisplay(event.target.id);
  }

  function decide(s: string) {
    switch (s) {
      case 'Home':
        return <HomePage onRedirectPress={onRedirectPress} />;
      case 'Events':
        return <EventsTab defaultDepartment="null" onCrossPress={onCrossPress} />;
      case 'Sponsors':
        return <Sponsors />;
      case 'TeamAvishkar':
        return <TeamAvishkar />;
      case 'FAQ':
        return <FAQ />;
      default:
        break;
    }
  }

  return <>{decide(WhatToDisplay)}</>;
}

export default Simplistic;

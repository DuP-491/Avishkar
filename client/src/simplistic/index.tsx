import React, { useState } from 'react';
import EventsTab from './components/EventsTab';
import HomePage from './components/HomePage';

function Simplistic() {
  const [WhatToDisplay, setWhatToDisplay] = useState('Events');

  function onCrossPress() {
    setWhatToDisplay('Home');
  }

  function onRedirectPress(event: any) {
    console.log(event);
    setWhatToDisplay(event.tagret.id);
  }

  function decide(s: string) {
    switch (s) {
      case 'Home':
        return <HomePage />;
      case 'Events':
        return <EventsTab defaultDepartment="null" onCrossPress={onCrossPress} />;
      default:
        break;
    }
  }

  return <>{decide(WhatToDisplay)}</>;
}

export default Simplistic;

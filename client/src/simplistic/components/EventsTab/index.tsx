import React, { useState } from 'react';
import Tablet from '../Tablet';
import img from '../../Assets/w1.jpg';
import Dept from './DepartmentList';
import EventList from './EventList';
import EventDetails from './EventDetails';

/* eslint-disable */
interface EventTabPropType {
  onCrossPress: (e: any) => void;
  defaultDepartment: string;
}
/* eslint-enable */

function EventsTab({ onCrossPress, defaultDepartment }: EventTabPropType) {
  const [Display, setDisplay] = useState(
    defaultDepartment == 'null' ? 'DepartmentList' : 'Department'
  );
  const [DepartmentDisplayValue, setDepartmentDisplayValue] = useState(defaultDepartment);
  const [EventDisplayValue, setEventDisplayValue] = useState('null');
  const [BGIMG, setBGIMG] = useState(img);
  console.log(defaultDepartment);

  function onDepartmentSelect(event: any) {
    setDisplay('Department');
    setBGIMG(img);
    setDepartmentDisplayValue(event.target.id);
    // console.log(event.target.id);
  }

  function onEventSelect(event: any) {
    setDisplay('Event');
    setBGIMG('https://i.imgur.com/Llda7Cr.jpg');
    setEventDisplayValue(event.target.id);
    // console.log(event.target.id);
  }
  function onBackPress() {
    if (Display == 'Event') {
      setDisplay('Department');
      setBGIMG(img);
    } else if (Display == 'Department') {
      setDisplay('DepartmentList');
      setBGIMG(img);
    }
  }
  function onHomePress() {
    setDisplay('DepartmentList');
    setBGIMG(img);
  }

  function DisplayComponent() {
    switch (Display) {
      case 'DepartmentList':
        return <Dept onDepartmentSelect={onDepartmentSelect} />;
      case 'Department':
        return <EventList Department={DepartmentDisplayValue} onEventSelect={onEventSelect} />;
      default: {
        return <EventDetails eventName={EventDisplayValue} />;
      }
    }
  }
  // console.log(Display, DepartmentDisplayValue, EventDisplayValue);

  return (
    <Tablet
      onBackPress={onBackPress}
      onHomePress={onHomePress}
      onCrossPress={onCrossPress}
      bgrd={BGIMG}>
      {DisplayComponent()}
    </Tablet>
  );
}

export default EventsTab;

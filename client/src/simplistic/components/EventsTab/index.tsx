import React, { useState } from 'react';
import Tablet from '../Tablet';
import img from '../../Assets/p2.jpg';
import Dept from './DepartmentList';
import EventList from './EventList';
import EventDetails from './EventDetails';
import EventDisplayBGIMG from './../../Assets/p4.jpg';

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
  const [DepartmentDisplayValue, setDepartmentDisplayValue] = useState({ deptId: '', name: '' });
  const [EventDisplayValue, setEventDisplayValue] = useState({
    id: '',
    deptEventId: '',
    name: '',
    tagline: '',
    details: '',
    criteria: '',
    rules: '',
    psLink: '',
    maxTeamSize: 1,
    minTeamSize: 1
  });
  const [BGIMG, setBGIMG] = useState(img);

  function onDepartmentSelect(deptId: string, name: string) {
    setDisplay('Department');
    setBGIMG(img);
    setDepartmentDisplayValue({ deptId, name });
  }

  function onEventSelect(event: any) {
    setDisplay('Event');
    setBGIMG(EventDisplayBGIMG);
    setEventDisplayValue(event);
    //console.log(event);
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
        return (
          <Dept
            onDepartmentSelect={(deptId: string, name: string) => onDepartmentSelect(deptId, name)}
          />
        );
      case 'Department':
        return (
          <EventList
            Department={DepartmentDisplayValue}
            onEventSelect={(event) => onEventSelect(event)}
          />
        );
      default: {
        return <EventDetails event={EventDisplayValue} />;
      }
    }
  }

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

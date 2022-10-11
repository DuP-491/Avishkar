// import React, { useState } from 'react';
// import Tablet from '../Tablet';
// import img1 from '../../Assets/w1.jpg';
// import img2 from '../../Assets/w2.jpg';
// import img3 from '../../Assets/w3.jpg';
// import Dept from './DepartmentList';
// import EventList from './EventList';

// interface EventTabPropType {
//   onCrossPress: (e: any) => void;
// }

// function EventsTab({ onCrossPress }: EventTabPropType) {
//   function onDepartmentSelect(event: any) {
//     setDepartmentListDisplay(false);
//     setDepartmentDisplay(true);
//     setEventDisplay(false);
//     setBGIMG(img2);
//     setDepartmentDisplayValue(event.target.id);
//     // console.log(event.target.id);
//   }

//   function onEventSelect(event: any) {
//     setDepartmentListDisplay(false);
//     setDepartmentDisplay(false);
//     setEventDisplay(true);
//     setBGIMG(img3);
//     setEventDisplayValue(event.target.id);
//     // console.log(event.target.id);
//   }
//   function onBackPress(event: any) {
//     if (EventDisplay) {
//       setDepartmentListDisplay(false);
//       setDepartmentDisplay(true);
//       setEventDisplay(false);
//       setBGIMG(img2);
//     } else if (DepartmentDisplay) {
//       setDepartmentListDisplay(true);
//       setDepartmentDisplay(false);
//       setEventDisplay(false);
//       setBGIMG(img1);
//     }
//   }
//   function onHomePress(event: any) {
//     setDepartmentListDisplay(true);
//     setDepartmentDisplay(false);
//     setEventDisplay(false);
//     setBGIMG(img1);
//   }

//   const [DepartmentListDisplay, setDepartmentListDisplay] = useState(true);
//   const [DepartmentDisplay, setDepartmentDisplay] = useState(false);
//   const [EventDisplay, setEventDisplay] = useState(false);
//   const [DepartmentDisplayValue, setDepartmentDisplayValue] = useState('null');
//   const [EventDisplayValue, setEventDisplayValue] = useState('null');
//   const [BGIMG, setBGIMG] = useState(img1);
//   console.log(
//     DepartmentListDisplay,
//     DepartmentDisplay,
//     EventDisplay,
//     DepartmentDisplayValue,
//     EventDisplayValue
//   );

//   return (
//     <Tablet
//       onBackPress={onBackPress}
//       onHomePress={onHomePress}
//       onCrossPress={onCrossPress}
//       bgrd={BGIMG}>
//       {DepartmentListDisplay ? (
//         <Dept onDepartmentSelect={onDepartmentSelect} />
//       ) : DepartmentDisplay ? (
//         <EventList Department={DepartmentDisplayValue} onEventSelect={onEventSelect} />
//       ) : EventDisplay ? (
//         <>{EventDisplayValue}</>
//       ) : null}
//     </Tablet>
//   );
// }

// export default EventsTab;

import React, { useState } from 'react';
import Tablet from '../Tablet';
import img1 from '../../Assets/w1.jpg';
import img2 from '../../Assets/w2.jpg';
import img3 from '../../Assets/w3.jpg';
import Dept from './DepartmentList';
import EventList from './EventList';

interface EventTabPropType {
  onCrossPress: (e: any) => void;
  defaultDepartment: string;
}

function EventsTab({ onCrossPress, defaultDepartment }: EventTabPropType) {
  const [Display, setDisplay] = useState(
    defaultDepartment == 'null' ? 'DepartmentList' : 'Department'
  );
  const [DepartmentDisplayValue, setDepartmentDisplayValue] = useState(defaultDepartment);
  const [EventDisplayValue, setEventDisplayValue] = useState('null');
  const [BGIMG, setBGIMG] = useState(img1);
  // if (defaultDepartment != null) {
  //   setDisplay('Department');
  //   setDepartmentDisplayValue(defaultDepartment);
  // }
  console.log(defaultDepartment);

  function onDepartmentSelect(event: any) {
    setDisplay('Department');
    setBGIMG(img2);
    setDepartmentDisplayValue(event.target.id);
    // console.log(event.target.id);
  }

  function onEventSelect(event: any) {
    setDisplay('Event');
    setBGIMG(img3);
    setEventDisplayValue(event.target.id);
    // console.log(event.target.id);
  }
  function onBackPress(event: any) {
    if (Display == 'Event') {
      setDisplay('Department');
      setBGIMG(img2);
    } else if (Display == 'Department') {
      setDisplay('DepartmentList');
      setBGIMG(img1);
    }
  }
  function onHomePress(event: any) {
    setDisplay('DepartmentList');
    setBGIMG(img1);
  }

  function DisplayComponent() {
    switch (Display) {
      case 'DepartmentList':
        return <Dept onDepartmentSelect={onDepartmentSelect} />;
      case 'Department':
        return <EventList Department={DepartmentDisplayValue} onEventSelect={onEventSelect} />;
      default: {
        return EventDisplayValue;
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

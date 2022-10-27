// Please use ~ as the seprator for next promt

export const npcData: {
  [key: string]: {
    name: string;
    location: string;
    type: string;
    character: string;
    text: string;
    success?: any;
    failure?: any;
  };
} = {
  'cafe96-2': {
    name: 'Mitsuka',
    location: 'cafe-top-right',
    type: 'text',
    character: 'boy',
    text: "Hey, I'm Mitsuka. I'm a software engineer and I love to code."
  },
  'cafe96-3': {
    name: 'Denji',
    location: 'cafe-top-left',
    type: 'ask',
    character: 'boy',
    text: 'Are you sure you want to register?',
    success: 'Function will be imported in this file and called',
    failure: 'Function will be imported in this file and called'
  },
  'campus-34': {
    name: 'Mitsuka',
    location: 'Near Ganga Gate spawn point',
    type: 'text',
    character: 'Guard',
    text: 'Welcome to MNNIT Allahabad! I am Mr. Sanjay Kumar, the guard of Ganga Gate. I am here to help you.~There are many guards like me in the campus to help you out. They will tell you about various buildings of campus.'
  },
  'campus-55': {
    name: 'Mr. Smith',
    location: 'boys hostel area entry point',
    type: 'text',
    character: 'Guard',
    text: 'Man this job is boring.~I wish I could do something more interesting. Like coding!'
  },
  'campus-56': {
    name: 'Mr. Sanjeev',
    location: 'library gate',
    type: 'text',
    character: 'Guard',
    text: `I love to read books. I wish I could read more books. But I have to guard this gate.~By the way, The library is closed today for general public.~Thou shall not pass!`
  },
  'campus-57': {
    name: 'Mr. Rajesh',
    location: 'outside csed',
    type: 'text',
    character: 'Guard',
    text: `I am tired of telling students not to park their bycles here. Oh God! How many times will I have to tell them?`
  },
  'campus-58': {
    name: 'Mr. Ratanlal',
    location: 'outside csed | CYBERQUEST',
    type: 'text',
    character: 'Guard',
    text: `This is Computer Science and Engineering departmet of MNNIT Allahabd. This is oldest cse department in India.~Please visit here for registering in CYBERQUEST.~CYBERQUEST is a quest for top notch programmers and hackers.`
  },
  'campus-59': {
    name: 'Mr. Raman Singh',
    location: 'outside Academic Building | ELECTROMANIA | POWERSURGE | RASAYANS',
    type: 'text',
    character: 'Guard',
    text: `This is Academic Building of MNNIT Allahabd.~Please visit here for registering in ELECTROMANIA, POWERSURGE and RASAYANS.~ELECTROMANIA is a quest for top notch electrical engineers.~POWERSURGE is a quest for top notch electronics engineers.~RASAYANS is a quest for top notch robotics engineers.`
  },
  'campus-60': {
    name: 'Mr. Sanjay',
    location: 'outside Workshop Lab| MECHROCOSM',
    type: 'text',
    character: 'Guard',
    text: `This is Workshop Lab of MNNIT Allahabd.~Please visit here for registering in MECHROCOSM.~MECHROCOSM is a quest for top notch mechanical engineers.`
  },
  'campus-61': {
    name: 'Mr. Rajesh',
    location: 'outside GYMKHANA GROUND | NIRMAAN',
    type: 'text',
    character: 'Guard',
    text: `This is GYMKHANA GROUND of MNNIT Allahabd.~Please visit here for registering in NIRMAAN.~NIRMAAN is a quest for top notch civil engineers.`
  },
  'campus-62': {
    name: 'Mr. Ratanlal',
    location: 'outside YASHNATH CANTEEN | GENESIS',
    type: 'text',
    character: 'Guard',
    text: `This is YASHNATH CANTEEN of MNNIT Allahabd.~Please visit here for registering in GENESIS.~GENESIS is a quest for top notch chemical engineers.`
  },
  'campus-64': {
    name: 'Mr. Raman Singh',
    location: 'outside SMS | OLIGOPOLY | MONOPOLY',
    type: 'text',
    character: 'Guard',
    text: `This is SMS of MNNIT Allahabd.~Please visit here for registering in OLIGOPOLY and MONOPOLY.~OLIGOPOLY is a quest for top notch management students.~MONOPOLY is a quest for top notch business students.`
  },
  'campus-65': {
    name: 'Mr. Sanjay',
    location: 'outside MP HALL | GNOTALKS',
    type: 'text',
    character: 'Guard',
    text: `This is MP HALL of MNNIT Allahabd.~Please visit here for registering in GNOTALKS.~GNOTALKS is an event where experienced speakers will talk about their experiences.`
  },
  'campus-66': {
    name: 'Mr. Ratanlal',
    location: 'Bascket Ball Court Beside Tunnel | AERODYNAMICS',
    type: 'text',
    character: 'Guard',
    text: `This is AERODYNAMICS of MNNIT Allahabd.~Please visit here for registering in AERODYNAMICS.~AERODYNAMICS is a quest for top notch aerospace engineers.`
  },
  'campus-67': {
    name: 'Mr. Raman Singh',
    location: 'Athletics Ground | KREEDOMANIA',
    type: 'text',
    character: 'Guard',
    text: `This is KREEDOMANIA of MNNIT Allahabd.~Please visit here for registering in KREEDOMANIA.~KREEDOMANIA is a quest for top notch sportsmen.`
  },
  'campus-68': {
    name: 'Mr. Sanjay',
    location: 'Seminar Hall | GNOSOMANIA',
    type: 'text',
    character: 'Guard',
    text: `This is GNOSOMANIA of MNNIT Allahabd.~Please visit here for registering in GNOSOMANIA.~GNOSOMANIA is a quest for top notch students.`
  },
  'campus-69': {
    name: 'Mr. Sanjeev',
    location: 'Design Centre',
    type: 'text',
    character: 'Guard',
    text: `This is Design Centre of MNNIT Allahabd.`
  },
  'campus-70': {
    name: 'Mr. Rajesh',
    location: 'Lecture Hall Complex',
    type: 'text',
    character: 'Guard',
    text: `This is Lecture Hall Complex of MNNIT Allahabd also knows as LHC.`
  },
  'campus-71': {
    name: 'Mr. Ratanlal',
    location: 'SVBH Gate',
    type: 'text',
    character: 'Guard',
    text: `This is Svami Vivekananda Boys Hostel of MNNIT Allahabd.`
  },
  'campus-72': {
    name: 'Mr. Radhe Shyam',
    location: 'Computer Centre',
    type: 'text',
    character: 'Guard',
    text: `This is Computer Centre of MNNIT Allahabd.`
  },
  'campus-73': {
    name: 'Mr. Raman Singh',
    location: 'Dean Academic Building',
    type: 'text',
    character: 'Guard',
    text: `This is Dean Academic Building of MNNIT Allahabd.`
  },
  'campus-74': {
    name: 'Mr. Sanjay',
    location: 'Director Building',
    type: 'text',
    character: 'Guard',
    text: `This is Director Building of MNNIT Allahabd.`
  },
  'campus-75': {
    name: 'Mr. Sanjeev',
    location: 'TPO office',
    type: 'text',
    character: 'Guard',
    text: `This is Training and Placement office of MNNIT Allahabd.`
  },
  'campus-76': {
    name: 'Mr. Rajesh',
    location: 'Yamuna Gate',
    type: 'text',
    character: 'Guard',
    text: `This is Yamuna Gate of MNNIT Allahabd.`
  },
  'campus-77': {
    name: 'Mr. Ratanlal',
    location: 'Tennis Court',
    type: 'text',
    character: 'Guard',
    text: `This is Tennis Court of MNNIT Allahabd.`
  },
  'campus-78': {
    name: 'Mr. Radhe Shyam',
    location: 'Gymkhana',
    type: 'text',
    character: 'Guard',
    text: `This is Gymkhana ground of MNNIT Allahabd.`
  },
  'campus-79': {
    name: 'Mr. Raman Singh',
    location: 'Cafe 96',
    type: 'text',
    character: 'Guard',
    text: `This is Cafe 96 of MNNIT Allahabd.`
  },
  'campus-80': {
    name: 'Mr. Sanjay',
    location: 'Saraswati gate',
    type: 'text',
    character: 'Guard',
    text: `This is Saraswati gate of MNNIT Allahabd.`
  },
  'campus-81': {
    name: 'Mr. Sanjeev',
    location: 'Near Tunnel',
    type: 'text',
    character: 'Guard',
    text: `This is Underpass of MNNIT Allahabd. Only Girls and Staff can use this.`
  },
  'campus-82': {
    name: 'Shyaam',
    location: 'Near Teliyarganj Chauraha',
    type: 'text',
    character: 'Random Person',
    text: `Hi! I'm Shyaam. I'm new in Allahabad. I came here to participate in their annual techfest AVISHKAR. ~Can you please tell me how to reach MNNIT Allahabad?~I think if i follow this road, i will reach there.`
  },
  'campus-83': {
    name: 'Mr. Raman Singh',
    location: 'Near ganga gate outside campus',
    type: 'sponsor',
    character: 'Guard',
    text: `Do you want to see the generous sponsors for AVISHKAR 2k22?`
  },
  'campus-84': {
    name: 'Jack Sparrow',
    location: 'Top left corner of the map',
    type: 'text',
    character: 'Jack Sparrow',
    text: `This is Jack Sparrow, caption of Black Pearl. This is my treasure. Don't even think of taking it. `
  },
  'campus-85': {
    name: 'Samantha Jones',
    location: 'Inside TPO office',
    type: 'text',
    character: 'Some female recuiter',
    text: `Hi! I'm Samantha Jones. I'm a recruiter with company xyz.~I am here to find the treasure of MNNIT Allahabad.~I have heard that there is a treasure hidden in the campus.~Can you please help me find it?`
  },
  'campus-86': {
    name: 'Vayirp',
    location: 'Inside TPO office',
    type: 'text',
    character: 'Training and Placement Representative',
    text: `Hi! I'm Vayirp. I'm a representative of Training and Placement office of MNNIT Allahabad. I'm here to help you out.~Our students are the tresure of our college. Please extend them with your job offers and they will be the best asset for your company as well.`
  },
  'campus-87': {
    name: 'QuizMaster',
    location: 'Near Ganga gate',
    type: 'text',
    character: 'QuizMaster',
    text: `Hi! I'm QuizMaster. I'm here to conduct a quiz. Do you want to participate?`
  },
  'campus-88': {
    name: 'Notice Board',
    location: 'Near Dean Academics',
    type: 'notice',
    character: 'QuizMaster',
    text: `Want to know what is going on in Avishkar. Click Ok to know more`
  }
};

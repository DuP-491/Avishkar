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
    text: 'Welcome to MNNIT Allahabad! I am Mr. Sanjay Kumar, the guard of Ganga Gate. I am here to help you.~There are many guards like me in the campus to help you out. They will tell you about various buildings of campus.~For registering in any event you can go to its department and click on computer to register for it.'
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
    character: 'Guard | Building NPC',
    text: `Welcome to the realm of computer science and technology.~CSED spotlights the CYBERQUEST event during Avishkar and is also where our 36-hour hackathon takes place.~It houses CISCO ThingQbator and many labs to suit your geeky needs.`
  },
  'campus-59': {
    name: 'Mr. Raman Singh',
    location: 'outside Academic Building | ELECTROMANIA | POWERSURGE | RASAYANS',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `This place is of paramount importance. It is the main hub of MNNIT and houses various classrooms, staff rooms, labs, halls and much more.~You can find all core departments here and it also connects to the library.~Even a student of MNNIT is likely to get lost here but don't worry we have signs everywhere!`
  },
  'campus-60': {
    name: 'Mr. Sanjay',
    location: 'outside Workshop Lab| MECHROCOSM',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Welcome to the place where you have your first hand experience with machines.~You will find yourselves surrounded with different shops including smithy, foundry carpentry, welding and many others. Gain practical knowledge in this beautiful mix of science and humanities.`
  },
  'campus-61': {
    name: 'Mr. Rajesh',
    location: 'outside GYMKHANA GROUND | NIRMAAN',
    type: 'text',
    character: 'Guard',
    text: `I'm just looking for a place to sit and relax. I'm so tired of standing here. I wish I could sit down and have a cup of tea.~Let's go to cafe 96. Today it's on me.`
  },
  'campus-62': {
    name: 'Mr. Ratanlal',
    location: 'outside Jungle CANTEEN | GENESIS',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `This is Jungle CANTEEN of MNNIT Allahabd.~Unlike its name, this place is no more a jungle. In fact it hosts two canteens called Yashnath and Cafe College Humara and is a popular regular hangout spot. Want to take a break and have some good food? Visit us again!`
  },
  'campus-64': {
    name: 'Mr. Raman Singh',
    location: 'outside SMS | OLIGOPOLY | MONOPOLY',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `This building hosts super organized and timely people. The School of Management Studies has multiple lecture halls and staff rooms.~OLIGOPOLY and MONOPOLY departments organize their events here.`
  },
  'campus-65': {
    name: 'Mr. Sanjay',
    location: 'outside MP HALL | GNOTALKS',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Welcome to Multipurpose Hall!~This hall does not only host some of the biggest events in the college but is the Art Committees' favorite place to decorate.~The stairs, stage and the whole hall is a brilliant sight to look at during any event.`
  },
  'campus-66': {
    name: 'Mr. Ratanlal',
    location: 'Bascket Ball Court Beside Tunnel | AERODYNAMICS',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `A professional court for some professional players. Everyday from 6 pm you will find the boys and girls basketball team practicing here.~Doesn't this look like the perfect place for the ASTROWING department?`
  },
  'campus-67': {
    name: 'Mr. Raman Singh',
    location: 'Athletics Ground | KREEDOMANIA',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `From morning runs to evening walks, athletics ground is a fun place to chill with a big group. Sports like football, running, javelin throw, yoga and more are practiced here.~Explore the KREEDOMANIA department here.`
  },
  'campus-68': {
    name: 'Mr. Sanjay',
    location: 'Seminar Hall | GNOSOMANIA',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Another hall for many fun events. It is not as big as MP Hall but here is where we have guest lectures, dramatics club events as well as TedX events.~GNOSOMNIA is conducted in this theater-like hall.`
  },
  'campus-69': {
    name: 'Mr. Sanjeev',
    location: 'Design Centre',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Safely cradled between LHC and Seminar Hall, Design Center is the building housing many labs and faculty rooms.~It has many circuital labs to meet all your experimental needs.`
  },
  'campus-70': {
    name: 'Mr. Rajesh',
    location: 'Lecture Hall Complex',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Sit in for a lecture in our dear lecture hall complex.~With well-ventilated and technologically advanced rooms, this is the best place to attend long sessions of course subjects.~The central open-roof area is good for breaks during class transitions.`
  },
  'campus-71': {
    name: 'Mr. Ratanlal',
    location: 'SVBH Gate',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Do you hear laughter and chaos near the entrance?~Swami Vivekananda Boys Hostel is situated to suit the needs of fresher students. Their enthusiasm and newly found friendships are encompassed very well within this magnificent building.`
  },
  'campus-72': {
    name: 'Mr. Radhe Shyam',
    location: 'Computer Centre',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `The sole reason for the connectivity of MNNIT is the Computer Center.~It has laid down the entire internet network of our college, it maintains the various special and advanced softwares in use in MNNIT.`
  },
  'campus-73': {
    name: 'Mr. Raman Singh',
    location: 'Dean Academic Building',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Make sure you bring your ID card! This building is for all official paperwork.~Collect your marksheets and submit applications here and don't worry, there isn't a long queue.`
  },
  'campus-74': {
    name: 'Mr. Sanjay',
    location: 'Admin Building',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Be on your best behavior. The Admin building is the place to visit for all official work and to meet the heads of our college faculty.~TPO office, various maintenance departments, and Director Sir's office can be found here. `
  },
  'campus-75': {
    name: 'Mr. Sanjeev',
    location: 'TPO office',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Want to dive into the professional world and earn tons of money?~I am a training and placement representative and I can guide you in securing internships and placements. This building is the reason MNNIT students can get financial independence right after college.`
  },
  'campus-76': {
    name: 'Mr. Rajesh',
    location: 'Yamuna Gate',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `One of the three main gates of MNNIT, named after the rivers passing through Prayagraj, Yamuna gate is directly ahead of Ganga gate and is the straight road that passes through Jungle Canteen, Athletics ground and takes you to the boys hostels.`
  },
  'campus-77': {
    name: 'Mr. Ratanlal',
    location: 'Tennis Court',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Get your rackets and get playing, the tennis court is popular amongst students as well as professors.`
  },
  'campus-78': {
    name: 'Mr. Radhe Shyam',
    location: 'Gymkhana',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `When you pass by you will definitely stop in your tracks to watch a cricket match!~This ground is not only used for sports but is also the spot for concerts and DJ nights during fests. Dance away or play away depending on the occasion!`
  },
  'campus-79': {
    name: 'Mr. Raman Singh',
    location: 'Cafe 96',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `What would you like to have today?~Cafe 96 was funded by the 1996 batch of MNNIT, hence the name. From noodles to dosa, enjoy the delicacies of the world in a single place.~Perfect for parties, meetings and brunches.`
  },
  'campus-80': {
    name: 'Mr. Sanjay',
    location: 'Saraswati gate',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Hi! I am the Chief Guard Officer of MNNIT! Saraswati Gate is home to our Main Security Office.~The space you see in front of the gate is where the Dramatics Committees attract hundreds of people as they perform Nukkad Natak during cultural fest.~The road leading up to this gate also showcases some of our students' elegant road paintings.`
  },
  'campus-81': {
    name: 'Mr. Sanjeev',
    location: 'Near Tunnel',
    type: 'text',
    character: 'Guard | Building NPC',
    text: `Make sure you get out of the way, the cars come through quickly from this underpass!~This tunnel connects the campus to the faculty quarters and girls hostels, only staff and girls allowed beyond here.`
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
    type: 'sponser',
    character: 'Guard',
    text: `Do you want to see the generous sponsers for AVISHKAR 2k22?`
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
    character: 'Notice Board guy',
    text: `Want to know what is going on in Avishkar. Click Ok to know more`
  },
  'campus-90': {
    name: 'Mr. RajaRam Sindhiya',
    location: 'Inside Library | Building NPC',
    type: 'text',
    character: 'Librarian',
    text: `Shhh.. There are people studying.~You weren't here earlier and library has been closed since morning. How did you event geet here?~Anyways... Welcome to the library, explore the infinite books available and sit and study in the study rooms.~Bring in your laptops and notebooks and sit with friends to learn about anything you like.`
  }
};

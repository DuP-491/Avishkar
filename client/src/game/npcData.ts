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
    character: 'boy',
    text: "Hey, I'm Mitsuka. I'm a software engineer and I love to code. I'm also a huge fan of the anime 'One Piece'.~I want to be a pirate when I grow up!"
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
  }
};

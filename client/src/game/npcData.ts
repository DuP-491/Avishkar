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
    location: 'cafe-top-right',
    type: 'text',
    character: 'boy',
    text: "Hey, I'm Mitsuka. I'm a software engineer and I love to code. I'm also a huge fan of the anime 'One Piece'.~I want to be a pirate when I grow up!"
  }
};

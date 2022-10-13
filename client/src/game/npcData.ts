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
    name: 'Parth',
    location: 'cafe-top-right',
    type: 'text',
    character: 'boy',
    text: "Hey, I'm Parth. I'm a software engineer and I love to code."
  },
  'cafe96-3': {
    name: 'Parth',
    location: 'cafe-top-left',
    type: 'ask',
    character: 'boy',
    text: 'Are you sure you want to register?',
    success: 'Function will be imported in this file and called',
    failure: 'Function will be imported in this file and called'
  },
  'gangaGate-1': {
    name: 'Ramlal',
    location: 'gangaGate-top-left',
    type: 'text',
    character: 'guard',
    text: 'Hey, I am Ramlal. I am a guard at Ganga Gate.'
  },
  'gangaGate-2': {
    name: 'Ramlal',
    location: 'gangaGate-top-right',
    type: 'ask',
    character: 'guard',
    text: 'Are you sure you want to register?',
    success: 'Function will be imported in this file and called',
    failure: 'Function will be imported in this file and called'
  }
};

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
    character: 'parth',
    text: "Hey, I'm Parth. I'm a software engineer and I love to code."
  },
  'cafe96-3': {
    name: 'Parth',
    location: 'cafe-top-left',
    type: 'ask',
    character: 'parth',
    text: 'Are you sure you want to register?',
    success: 'Function will be imported in this file and called',
    failure: 'Function will be imported in this file and called'
  }
};

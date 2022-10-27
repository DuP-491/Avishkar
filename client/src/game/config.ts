/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js';
import { Scale, Types, WEBGL } from 'phaser';
import { Campus, LoadingScene, UIScene, Cafe96Scene } from './scenes';

export type GameConfigExtended = Types.Core.GameConfig & {
  winScore: number;
};

export const gameConfig: GameConfigExtended = {
  title: 'Avishkar2022',
  type: WEBGL,
  parent: 'game',
  backgroundColor: '#351f1b',
  scale: {
    mode: Scale.ScaleModes.NONE,
    width: window.innerWidth,
    height: window.innerHeight
  },
  // dom: {
  //   createContainer: true
  // },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  render: {
    antialiasGL: false,
    pixelArt: true
  },
  // callbacks: {
  //   postBoot: () => {
  //     const divElem = document.body.children[2];
  //     divElem.className = 'canvas-div';
  //     divElem.id = 'canvas-div';
  //   }
  // },
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false
  },
  scene: [LoadingScene, Campus, UIScene, Cafe96Scene],
  winScore: 40
};

// SUPABASE CONFIG

console.log(process.env);

const supabaseUrl: string = process.env.REACT_APP_SUPABASE_APP_URL as string;
const supabaseKey: string = process.env.REACT_APP_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

// window.sizeChanged = () => {
//   if (window.game.isBooted) {
//     setTimeout(() => {
//       window.game.scale.resize(window.innerWidth, window.innerHeight);

//       window.game.canvas.setAttribute(
//         'style',
//         `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
//       );
//     }, 100);
//   }
// };

// window.onresize = () => window.sizeChanged();

// window.game = new Game(gameConfig);

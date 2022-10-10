import { Scale, Types, WEBGL } from 'phaser';

import { Level1, LoadingScene, UIScene, Cafe96Scene } from './scenes';

type GameConfigExtended = Types.Core.GameConfig & {
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
      debug: true
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
  scene: [LoadingScene, Level1, UIScene, Cafe96Scene],
  winScore: 40
};

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

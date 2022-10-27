/* eslint-disable no-unused-vars */
export enum EVENTS_NAME {
  gameEnd = 'game-end',
  chestLoot = 'chest-loot',
  attack = 'attack',
  interact = 'interact',
  resetInteract = 'reset-interact',
  infoPopup = 'info-popup',
  showAuth = 'show-auth',
  teleport = 'teleport',
  getPlayerPosition = 'get-player-position',
  sendPlayerPosition = 'send-player-position',
  openComputer = 'open-computer',
  login = 'login',
  logout = 'logout',
  sceneCampus = 'scene-campus',
  sceneCafe = 'scene-cafe',
  openMap = 'open-map',
  closeMap = 'close-map'
}

export enum TELEPORT_LOCATIONS {
  cafe96 = 'cafe96',
  yamunaCanteen = 'yamunaCanteen',
  library = 'library',
  csed = 'csed',
  mpHall = 'mpHall',
  noticeBoard = 'noticeBoard',
  boysHostel = 'boysHostel',
  sponser = 'sponser'
}

export const TELEPORT_LOCATIONS_DATA: {
  [key: string]: { x: number; y: number };
} = {
  cafe96: {
    x: 4300,
    y: 3000
  },
  yamunaCanteen: {
    x: 2245,
    y: 855
  },
  library: {
    x: 4183,
    y: 2642
  },
  csed: {
    x: 3355,
    y: 4709
  },
  mpHall: {
    x: 6030,
    y: 3934
  },
  noticeBoard: {
    x: 2280,
    y: 2600
  },
  boysHostel: {
    x: 5900,
    y: 860
  },
  sponser: {
    x: 450,
    y: 2750
  }
};

export enum GameStatus {
  WIN,
  LOSE
}

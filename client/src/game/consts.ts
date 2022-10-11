/* eslint-disable no-unused-vars */
export enum EVENTS_NAME {
  gameEnd = 'game-end',
  chestLoot = 'chest-loot',
  attack = 'attack',
  interact = 'interact',
  resetInteract = 'reset-interact',
  infoPopup = 'info-popup',
  showAuth = 'show-auth',
  authSuccess = 'auth-success',
  teleport = 'teleport',
  getPlayerPosition = 'get-player-position',
  sendPlayerPosition = 'send-player-position'
}

export enum TELEPORT_LOCATIONS {
  cafe96 = 'cafe96'
}

export const TELEPORT_LOCATIONS_DATA: {
  [key: string]: { x: number; y: number };
} = {
  cafe96: {
    x: 4300,
    y: 3000
  }
};

export enum GameStatus {
  WIN,
  LOSE
}

// game.js
import Character from './domain.js';

export default class Game {
  start() {
    console.log('game started');
    const character = new Character('Hero', 1);
    character.attack();
  }
}

export class GameSavingData {
  constructor() {
    this.data = {};
  }
}

export function readGameSaving() {
  console.log('Reading game saving...');
  return 'game data';
}

export function writeGameSaving(data) {
  console.log('Writing game saving:', data);
}
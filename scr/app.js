// app.js
import Game, {
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame
} from './game.js';

const game = new Game();
game.start();

// Пример использования
const savingData = new GameSavingData();
const gameData = loadGame();
saveGame(gameData);

console.log('All imports/exports are working correctly!');
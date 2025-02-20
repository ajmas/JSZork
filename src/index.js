import readline from 'node:readline/promises';
import GameState from './ZState.js';
import ZorkEngine from './ZorkEngine.js';
import GameStorage from './storage/GameStorage.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function processInput () {
  const storage = new GameStorage ();
  const gamestate = new GameState();
  const engine = new ZorkEngine(storage);
  engine.restart();

  console.log('...', JSON.stringify(gamestate));

  const input = await rl.question('What\'s your name?\n> ');
  console.log('>>>', input);
  engine.processInput(input)
}

processInput().catch(error => {
  console.error(error);
  process.exit(1);
});
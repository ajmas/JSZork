import readline from 'node:readline/promises';
import GameState from './zstate.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function processInput () {
  const gamestate = new GameState();
  console.log('...', JSON.stringify(gamestate));

  const data = await rl.question('What\'s your name?\n> ');
  console.log('>>>', data);
}

processInput().catch(error => console.error(error));
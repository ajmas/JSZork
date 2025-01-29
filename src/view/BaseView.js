import ZorkEngine from '../ZorkEngine.js';

class BaseView {
  constructor (gameStorage) {
    this.engine = new ZorkEngine(gameStorage);
  }

  init () {
    this.loadState('main');
  }

  print (...text) {
    console.log(text);
  }

  println (...text) {
    console.log(text);
  }

  processInput (text) {
    // this.context.inputLog.push(text);
    return this.engine.processInput(text);
  }

  saveState () {
    this.engine.saveState();
  }

  loadState () {
    this.engine.loadState();
  }
}

export default BaseView;
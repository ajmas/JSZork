import GameStorage from './GameStorage.js';
import GameState from '../zstate.js';

class BrowserGameStorage extends GameStorage {
  restoreFromGameMemory (filename) {
    if (!savedGames.has(filename)) {
      output("Save file not found.");
      return;
    }

    console.log("Loading...");

    restart();
    gameArea.innerText = "";

    restoringGame = true;

    inputLog = savedGames.get(filename).strings.split("|");
    inputLog.pop();
    stringLog = "";
    randomLog = [];
    randomLog = Object.assign(randomLog, savedGames.get(filename).randoms);

    for (let statement of inputLog) {
      state.resetInput();
      state.completePlayerInput = statement;
      parsePlayerInput(this.state);
    }

    randomLog = Object.assign(randomLog, savedGames.get(filename).randoms);

    restoringGame = false;
    console.clear();

    output("Game restored.\n");

    state.resetInput();
    updateEvents();
    refreshInventories();
    fillCurrentObjectList();

    let curRoom = worldMap.get(state.playerLocation);
    outputLocation(curRoom.name);
    outputTurns(state.turns);
    curRoom.lookAround();

  }


  restoreFromLocalStorage (filename) {
    const state = new GameState();

    let strName = filename + "_strings";
    let randName = filename + "_randoms";

    if (localStorage.getItem(strName) == null || localStorage.getItem(randName) == null) {
      output("Save file not found.");
      return;
    }

    inputLog = localStorage.getItem(strName).split("|");
    let tempRandomLog = localStorage.getItem(randName).split(",");


    restart();
    gameArea.innerText = "";

    restoringGame = true;

    for (let i = 0; i < tempRandomLog.length; ++i) {
      tempRandomLog[i] = parseInt(tempRandomLog[i], 10);
    }

    inputLog.pop();
    stringLog = "";
    randomLog = [];
    randomLog = Object.assign(randomLog, tempRandomLog);

    for (let statement of inputLog) {
      state.resetInput();
      state.completePlayerInput = statement;
      parsePlayerInput();
    }

    randomLog = Object.assign(randomLog, tempRandomLog);

    restoringGame = false;
    //console.clear();

    output("Game restored.\n");

    state.resetInput();
    updateEvents();
    refreshInventories();
    fillCurrentObjectList();

    let curRoom = worldMap.get(state.playerLocation);
    outputLocation(curRoom.name);
    outputTurns(state.turns);
    curRoom.lookAround();

    saveToLocalStorage("reloadSave");

  }

  getFilename (filename) {
    return `zork_${filename}`;
  }

  deleteSave (filename = "default") {
    localStorage.removeItem(this.getFilename(filename));
  }

  load (filename = "default") {
    let context;
    if (localStorage.getItem(this.getFilename(filename))) {
      context = JSON.parse(localStorage.getItem(this.getFilename(filename)));
    } else {
      context = {
        state: new GameState(),
        inputLog: []
      }
    }
    return context;
  }

  save (filename = "default", context) {
    localStorage.setItem(this.getFilename(filename), JSON.stringify(context));
  }
}

export default BrowserGameStorage;
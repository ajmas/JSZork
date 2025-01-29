import BrowserGameStorage from "./view/BrowserGameStorage.js";
import GameState from "./zstate.js";

class ZorkEngine {

  constructor (storage) {
    this.storage = storage;
    this.context = this.createInitialContext();
  }

  init () {

  }

  createInitialContext () {
    return {
      state: new GameState(),
      inputLog: []
    };
  }

  saveState () {
    this.storage.save(undefined, this.context);
  }

  loadState () {
    console.log('MMM', this.storage);

    let context = this.storage.load();
    if (!context) {
      context = this.createInitialContext();
    }
    this.context = context;
  }

  restart () {
    this.storage.deleteSave("reloadSave");
    this.storage.deleteSave("undoSave");

    stringLog = "";
    randomLog = [];

    const state = Object.assign(state, startingState);
    state.playerLocation = Location.WEST_OF_HOUSE;


    for (let targetObj of objectList.values()) {
      let sourceObj = startingObjectList.get(targetObj.name);
      targetObj = Object.assign(targetObj, sourceObj);
    }

    for (let room of worldMap.values()) {
      room.firstVisit = true;
    }

    gameArea.innerText = "";
    previousInputArea.innerText = "";

    state.resetInput();

    this.state = state;

    updateEvents();
    updateScore();
    refreshInventories();
    fillCurrentObjectList();
    this.dictionary = fillDictionary({});

    outputLocation(westOfHouse.name);
    outputTurns(state.turns);
    westOfHouse.lookAround();


    // TODO UI type specific
    let mobMarkup = document.getElementById("descriptionArea").innerHTML;
    document.getElementById("zorkMobileOutputArea").innerHTML = mobMarkup;
  }

  processInput (text) {
    this.context.inputLog.push(text);
  }
}

export default ZorkEngine;

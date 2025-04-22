import BrowserGameStorage from "./storage/BrowserGameStorage.js";
import GameState from "./ZState.js";
import { updateEvents, updateScore, refreshInventories } from './ZUpdate.js';
import { fillCurrentObjectList } from './ZInput.js';
import { Location } from './ZConstants.js';
import { objectList, worldMap } from './ZSetup.js';

class ZorkEngine {

  constructor (storage) {
    this.storage = storage;
    this.context = this.createInitialContext();

    this.stringLog = "";
    this.randomLog = [];
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

    this.stringLog = "";
    this.randomLog = [];

    // const savedGames = new Map();

    const state = new GameState();

    // startingState = { ...state };

    const startingObjectList = new Map();
    for (let sourceObject of objectList.values())
    {
        const obj = { ...sourceObject };
        startingObjectList.set(obj.name, obj);
    }

    state.playerLocation = Location.WEST_OF_HOUSE;

    for (let targetObj of objectList.values()) {
      let sourceObj = startingObjectList.get(targetObj.name);
      targetObj = { ...targetObj, ...sourceObj };
    }

    for (let room of worldMap.values()) {
      room.firstVisit = true;
    }

    // gameArea.innerText = "";
    // previousInputArea.innerText = "";

    state.resetInput();

    this.state = state;

    updateEvents(state);
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

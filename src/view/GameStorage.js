import GameState from "../zstate.js";

class GameStorage {
  // saveStates: Record<string, GameState> = {};

  constructor () {
    this.gameSaves = {};
  }

  deleteInterface () {
    let filename = document.getElementById("inputTextArea").value;

    let strName = filename + "_strings";
    let randName = filename + "_randoms";

    let check1 = localStorage.getItem(strName);
    let check2 = localStorage.getItem(randName);

    if (check1 !== null || check2 !== null) {
      deleteSaveFromLocalStorage(filename);
      output("File deleted.");
    }

    else {
      output("File \"" + filename + "\" not found.");
    }

    inputTextArea.value = "";

    inputTextArea.removeEventListener("change", deleteInterface);
    inputTextArea.addEventListener("change", getPlayerInput);
  }

  deleteSaveFromLocalStorage (filename) {
    let strName = filename + "_strings";
    let randName = filename + "_randoms";

    let check1 = localStorage.getItem(strName);
    let check2 = localStorage.getItem(randName);

    if (check1 !== null || check2 !== null) {
      console.log("File deleted.");

      localStorage.removeItem(strName);
      localStorage.removeItem(randName);
    }

    else {
      console.log("File \"" + filename + "\" not found.");
    }

    inputTextArea.value = "";

  }

  deleteSave (filename) {
    delete this.save[filename];
  }

  restoreInterface () {
    console.log("Restore interface function");
    gameArea.innerText = "";

    // let filename = document.getElementById("inputTextArea").value;

    return this.restore();

    // inputTextArea.value = "";
    // previousInputArea.innerText = "";

    // inputTextArea.removeEventListener("change", restoreInterface);
    // inputTextArea.addEventListener("change", getPlayerInput);

  }

  restore (filename = "default") {
    let context;
    if (this.gameSaves[filename]) {
      context = this.gameSaves[filename];
    } else {
      context = {
        state: new GameState(),
        inputLog: []
      }
    }

    context.state.resetInput();

    let curRoom = worldMap.get(context.state.playerLocation);
    outputLocation(curRoom.name);
    outputTurns(context.state.turns);
    curRoom.lookAround();

    return context;
  }

  load (filename = "default") {
    let context;
    if (this.gameSaves[filename]) {
      context = this.gameSaves[filename];
    } else {
      context = {
        state: new GameState(),
        inputLog: []
      }
    }
    return context;
  }

  save (filename = "default", context) {
    this.gameSaves[filename] = { ...context };
  }

  saveAuto (context, callback) {
    let loc = state.playerLocation;
    let rm = worldMap.get(loc);

    if ((loc === Location.CELLAR || loc === Location.SQUEAKY_ROOM || loc === Location.MAZE_15) && rm.firstVisit) {
      if (callback) {
        callback("Autosaving...");
      }
      this.save("autoSave", fileName, context);
    }
  }

  saveUndo () {
    // if (restoringGame) {
    //   return;
    // }

    this.save("undoSave", fileName, callback);
  }
}

export default GameStorage;
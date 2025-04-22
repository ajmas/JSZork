/* Items */

import { Location } from '../ZConstants.js';

function createGameFeatures () {
  // There are 19 treasure items with point values.
  // Name, location, point value, weight.
  const gameFeatures = {};

  let shaftChain = new Feature("chain", Location.SHAFT_ROOM);
  gameFeatures.shaftChain = shaftChain;

  let skeleton = new Feature("skeleton", Location.MAZE_5);
  gameFeatures.skeleton = skeleton;

  let streamWater = new Feature("stream water", Location.STREAM);
  streamWater.altNames.add("stream");
  streamWater.altNames.add("water");
  streamWater.altLocations.add(Location.STREAM_VIEW);
  gameFeatures.streamWater = streamWater;

  let templeInscription = new Feature("inscription", Location.TEMPLE);
  templeInscription.altNames.add("prayer");
  templeInscription.altNames.add("east wall");
  templeInscription.altNames.add("wall");
  templeInscription.readString = GameStrings.TEMPLE_PRAYER;
  templeInscription.examineString = GameStrings.TEMPLE_PRAYER;
  gameFeatures.templeInscription = templeInscription;

  let toolChests = new Feature("tool chests", Location.MAINTENANCE_ROOM);
  toolChests.initialPresenceString = ObjectStrings.INIT_TOOL_CHESTS;
  toolChests.takeString = "The chests are so rusty and corroded that they crumble when you touch them.";
  toolChests.examineString = "The chests are all empty.";
  gameFeatures.toolChests = toolChests;

  let trapDoor = new Feature("trap door", Location.NULL_LOCATION);
  trapDoor.altNames.add("trap");
  trapDoor.altNames.add("door");
  gameFeatures.trapDoor = trapDoor;

  let trophyCase = new Container("trophy case", Location.LIVING_ROOM);
  trophyCase.altNames.add("case");
  trophyCase.inventoryID = Location.INSIDE_TROPHY_CASE;
  trophyCase.capacity = 10000;
  trophyCase.takeString = "The trophy case is securely fastened to the wall.";
  gameFeatures.trophyCase = trophyCase;

  let vitreousSlag = new Item("small piece of vitreous slag", Location.NULL_LOCATION);
  vitreousSlag.altNames.add("piece of vitreous slag");
  vitreousSlag.altNames.add("piece of slag");
  vitreousSlag.altNames.add("vitreous slag");
  vitreousSlag.altNames.add("slag");
  gameFeatures.vitreousSlag = vitreousSlag;

  let water = new Feature("quantity of water", Location.NULL_LOCATION);
  water.altNames.add("quanitity");
  water.altNames.add("water");
  gameFeatures.water = water;

  let woodenDoor = new Feature("wooden door", Location.LIVING_ROOM);
  woodenDoor.altNames.add("door");
  woodenDoor.altNames.add("wooden");
  woodenDoor.altNames.add("letters");
  woodenDoor.altNames.add("lettering");
  woodenDoor.openString = "The door cannot be opened.";
  woodenDoor.readString = ObjectStrings.WOODEN_DOOR;
  woodenDoor.examineString = ObjectStrings.WOODEN_DOOR;
  gameFeatures.woodenDoor = woodenDoor;

  return gameFeatures;
}

const gameFeatures = createGameFeatures();

export default gameFeatures;
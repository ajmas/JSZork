import Actor from '../gameobjects/Actor.js';

function createGameActors() {
  // There are 19 treasure items with point values.
  // Name, location, point value, weight.
  const gameActors = {};

  let cyclops = new Actor("cyclops", Location.CYCLOPS_ROOM);
  cyclops.examineString = ObjectStrings.CYCLOPS_EXAMINE;
  cyclops.helloString = "The cyclops bows his head to you in greeting.";
  gameActors.cyclops = cyclops;

  let damFlow = new Actor("flow", Location.DAM);
  damFlow.intangible = true;
  gameActors.damFlow = damFlow;

  let flood = new Actor("flood", Location.MAINTENANCE_ROOM);
  flood.intangible = true;
  gameActors.flood = flood;

  let gustOfWind = new Actor("gust of wind", Location.CAVE_SOUTH);
  gustOfWind.intangible = true;
  gameActors.gustOfWind = gustOfWind;

  let riverCurrent = new Actor("current", Location.FRIGID_RIVER_1);
  riverCurrent.altLocations.add(Location.FRIGID_RIVER_2);
  riverCurrent.altLocations.add(Location.FRIGID_RIVER_3);
  riverCurrent.altLocations.add(Location.FRIGID_RIVER_4);
  riverCurrent.altLocations.add(Location.FRIGID_RIVER_5);
  riverCurrent.intangible = true;
  gameActors.riverCurrent = riverCurrent;

  let songbird = new Actor("song bird", forest.location);
  songbird.altLocations.add(Location.FOREST_PATH);
  songbird.altLocations.add(Location.FOREST_WEST);
  songbird.altLocations.add(Location.FOREST_EAST);
  songbird.altLocations.add(Location.FOREST_NORTHEAST);
  songbird.altLocations.add(Location.FOREST_SOUTH);
  songbird.altLocations.add(Location.CLEARING_NORTH);
  songbird.altLocations.add(Location.CLEARING_EAST);
  songbird.altNames.add("songbird");
  songbird.altNames.add("bird");
  songbird.presenceString = "";
  songbird.takeString = ObjectStrings.SONGBIRD_NEARBY;
  songbird.examineString = ObjectStrings.SONGBIRD_NEARBY;
  gameActors.songbird = songbird;

  let spirits = new Actor("spirits", Location.ENTRANCE_TO_HADES);
  spirits.presenceString = ObjectStrings.SPIRITS;
  spirits.talkString = "The spirits jeer loudly and ignore you.";
  spirits.attackString = "How can you attack a spirit with material objects?";
  spirits.takeString = "You seem unable to interact with these spirits.";
  gameActors.spirits = spirits;

  let swordGlow = new Actor("glow", Location.NULL_LOCATION);
  swordGlow.intangible = true;
  gameActors.swordGlow = swordGlow;

  let thief = new Actor("thief", Location.TREASURE_ROOM);
  thief.altNames.add("theif");
  thief.altNames.add("bandit");
  thief.altNames.add("robber");
  thief.altNames.add("man");
  thief.inventoryID = Location.THIEF_INVENTORY;
  thief.presenceString = ObjectStrings.THIEF_PRESENT_2;
  thief.helloString = "The thief bows his head to you in greeting.";
  gameActors.thief = thief;

  let troll = new Actor("troll", Location.TROLL_ROOM);
  troll.presenceString = ObjectStrings.TROLL_PRESENCE;
  troll.takeString = ObjectStrings.TROLL_TAKE;
  troll.talkString = ObjectStrings.TROLL_TALK_1;
  troll.inventoryID = Location.TROLL_INVENTORY;
  troll.helloString = "The troll bows his head to you in greeting.";
  gameActors.troll = troll;

  let vampireBat = new Actor("vampire bat", Location.BAT_ROOM);
  vampireBat.altNames.add("vampire");
  vampireBat.altNames.add("bat");
  vampireBat.attackString = ObjectStrings.BAT_CEILING;
  vampireBat.enterString = ObjectStrings.BAT_CEILING;
  vampireBat.helloString = "The bat bows his head to you in greeting.";
  vampireBat.kickString = ObjectStrings.BAT_CEILING;
  vampireBat.listenString = "The bat makes pained squeaking noises while holding his nose.";
  vampireBat.takeString = ObjectStrings.BAT_CEILING;
  gameActors.vampireBat = vampireBat;

  return gameActors;
}

const gameActors = createGameActors();

export default gameActors;
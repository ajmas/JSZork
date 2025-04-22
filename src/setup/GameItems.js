import GameStrings from '../GameStrings.js';
import Feature from '../gameobjects/Feature.js';
import Surface from '../gameobjects/Surface.js';
import Container from '../gameobjects/Container.js';
import Actor from '../gameobjects/Actor.js';
import Item from '../gameobjects/Item.js';
import ObjectStrings from '../ObjectStrings.js';
import { Location, NumberConstants } from '../ZConstants.js';

function createGameItems () {
  // There are 19 treasure items with point values.
  // Name, location, point value, weight.
  const gameItems = {};

  let bar = new Item("platinum bar", Location.LOUD_ROOM);
  bar.altNames.add("bar");
  bar.altNames.add("platinum");
  bar.presenceString = ObjectStrings.PLATINUM_BAR;
  bar.acquireValue= NumberConstants.PLATINUM_VALUE;
  bar.trophyCaseValue= NumberConstants.PLATINUM_TROPHY_VALUE;
  bar.weight = NumberConstants.BAR_WEIGHT;
  gameItems.bar = bar;

  let bauble = new Item("brass bauble", Location.NULL_LOCATION);
  bauble.altNames.add("brass");
  bauble.altNames.add("bauble");
  bauble.acquireValue= NumberConstants.BAUBLE_VALUE;
  bauble.trophyCaseValue= NumberConstants.BAUBLE_TROPHY_VALUE;
  bauble.weight = NumberConstants.BAUBLE_WEIGHT;
  gameItems.bauble = bauble;

  let chalice = new Item("silver chalice", Location.TREASURE_ROOM);
  gameItems.chalice = chalice;
  chalice.altNames.add("silver");
  chalice.altNames.add("chalice");
  chalice.acquireValue= NumberConstants.CHALICE_VALUE;
  chalice.trophyCaseValue= NumberConstants.CHALICE_TROPHY_VALUE;
  chalice.weight = NumberConstants.CHALICE_WEIGHT;

  let coffin = new Item("gold coffin", Location.EGYPTIAN_ROOM);
  gameItems.coffin = coffin;
  coffin.altNames.add("coffin");
  coffin.presenceString = ObjectStrings.COFFIN;
  coffin.inventoryID = Location.INSIDE_COFFIN;
  coffin.acquireValue= NumberConstants.COFFIN_VALUE;
  coffin.trophyCaseValue= NumberConstants.COFFIN_TROPHY_VALUE;
  coffin.weight = NumberConstants.COFFIN_WEIGHT;
  coffin.capacity = 35;

  let coins = new Item("bag of coins", Location.MAZE_5);
  gameItems.coins = coins;
  coins.altNames.add("bag");
  coins.altNames.add("coins");
  coins.presenceString = ObjectStrings.INIT_COINS;
  coins.acquireValue= NumberConstants.COINS_VALUE;
  coins.trophyCaseValue= NumberConstants.COINS_TROPHY_VALUE;
  coins.weight = NumberConstants.COINS_WEIGHT;
  coins.plural = true;

  let canary = new Item("golden clockwork canary", Location.NULL_LOCATION);
  gameItems.canary = canary;
  canary.altNames.add("golden canary");
  canary.altNames.add("golden clockwork");
  canary.altNames.add("clockwork canary");
  canary.altNames.add("clockwork");
  canary.altNames.add("canary");
  canary.initialPresenceString = ObjectStrings.INIT_GOLDEN_CANARY;
  canary.examineString = ObjectStrings.EXAMINE_GOLDEN_CANARY;
  canary.acquireValue= NumberConstants.CANARY_VALUE;
  canary.trophyCaseValue= NumberConstants.CANARY_TROPHY_VALUE;
  canary.weight = NumberConstants.CANARY_WEIGHT;

  let diamond = new Item("huge diamond", Location.NULL_LOCATION);
  gameItems.diamond = diamond;
  diamond.altNames.add("diamond");
  diamond.presenceString = ObjectStrings.DIAMOND;
  diamond.acquireValue= NumberConstants.DIAMOND_VALUE;
  diamond.trophyCaseValue= NumberConstants.DIAMOND_TROPHY_VALUE;
  diamond.weight = NumberConstants.DIAMOND_WEIGHT;

  let egg = new Item("jewel-encrusted egg", Location.INSIDE_BIRDS_NEST);
  gameItems.egg = egg;
  egg.altNames.add("egg");
  egg.initialPresenceString = ObjectStrings.INIT_EGG;
  egg.acquireValue= NumberConstants.EGG_VALUE;
  egg.trophyCaseValue= NumberConstants.EGG_TROPHY_VALUE;
  egg.weight = NumberConstants.EGG_WEIGHT;
  egg.inventoryID = Location.INSIDE_EGG;
  egg.capacity = 6;

  let emerald = new Item("large emerald", Location.INSIDE_BUOY);
  gameItems.emerald = emerald;
  emerald.altNames.add("emerald");
  emerald.acquireValue= NumberConstants.EMERALD_VALUE;
  emerald.trophyCaseValue= NumberConstants.EMERALD_TROPHY_VALUE;
  emerald.weight = NumberConstants.EMERALD_WEIGHT;

  let jade = new Item("jade figurine", Location.BAT_ROOM);
  gameItems.jade = jade;
  jade.altNames.add("jade");
  jade.altNames.add("figurine");
  jade.presenceString = ObjectStrings.JADE;
  jade.acquireValue= NumberConstants.JADE_VALUE;
  jade.trophyCaseValue= NumberConstants.JADE_TROPHY_VALUE;
  jade.weight = NumberConstants.JADE_WEIGHT;

  let painting = new Item("painting", Location.GALLERY);
  gameItems.painting = painting;
  painting.initialPresenceString = ObjectStrings.INIT_PAINTING;
  painting.presenceString = ObjectStrings.PAINTING;
  painting.acquireValue= NumberConstants.PAINTING_VALUE;
  painting.trophyCaseValue= NumberConstants.PAINTING_TROPHY_VALUE;
  painting.weight = NumberConstants.PAINTING_WEIGHT;

  let pot = new Item("pot of gold", Location.NULL_LOCATION);
  gameItems.pot = pot;
  pot.altNames.add("pot");
  pot.altNames.add("gold");
  pot.initialPresenceString = ObjectStrings.INIT_POT_OF_GOLD;
  pot.acquireValue= NumberConstants.POT_OF_GOLD_VALUE;
  pot.trophyCaseValue= NumberConstants.POT_OF_GOLD_TROPHY_VALUE;
  pot.weight = NumberConstants.POT_OF_GOLD_WEIGHT;

  let sapphire = new Item("sapphire-encrusted bracelet", Location.GAS_ROOM);
  gameItems.sapphire = sapphire;
  sapphire.altNames.add("sapphire");
  sapphire.altNames.add("bracelet");
  sapphire.altNames.add("sapphire bracelet");
  sapphire.acquireValue= NumberConstants.SAPPHIRE_VALUE;
  sapphire.trophyCaseValue= NumberConstants.SAPPHIRE_TROPHY_VALUE;
  sapphire.weight = NumberConstants.SAPPHIRE_WEIGHT;

  let scarab = new Item("beautiful jeweled scarab", Location.NULL_LOCATION);
  gameItems.scarab = scarab;
  scarab.altNames.add("jeweled scarab");
  scarab.altNames.add("scarab");
  scarab.acquireValue= NumberConstants.SCARAB_VALUE;
  scarab.trophyCaseValue= NumberConstants.SCARAB_TROPHY_VALUE;
  scarab.weight = NumberConstants.SCARAB_WEIGHT;

  let sceptre = new Item("sceptre", Location.INSIDE_COFFIN);
  gameItems.sceptre = sceptre;
  sceptre.altNames.add("scepter");
  sceptre.initialPresenceString = ObjectStrings.INIT_SCEPTRE;
  sceptre.presenceString = ObjectStrings.SCEPTRE;
  sceptre.waveString = ObjectStrings.SCEPTRE_WAVE;
  sceptre.acquireValue= NumberConstants.SCEPTRE_VALUE;
  sceptre.trophyCaseValue= NumberConstants.SCEPTRE_TROPHY_VALUE;
  sceptre.weight = NumberConstants.SCEPTRE_WEIGHT;

  let skull = new Item("crystal skull", Location.LAND_OF_THE_DEAD);
  gameItems.skull = skull;
  skull.altNames.add("skull");
  skull.altNames.add("crystal");
  skull.initialPresenceString = ObjectStrings.INIT_SKULL;
  skull.acquireValue= NumberConstants.CRYSTAL_SKULL_VALUE;
  skull.trophyCaseValue= NumberConstants.CRYSTAL_SKULL_TROPHY_VALUE;
  skull.weight = NumberConstants.SKULL_WEIGHT;

  let torch = new Item("torch", Location.TORCH_ROOM);
  gameItems.torch = torch;
  torch.altNames.add("ivory");
  torch.altNames.add("ivory torch");
  torch.initialPresenceString = ObjectStrings.INIT_TORCH;
  torch.activated = true;
  torch.acquireValue= NumberConstants.TORCH_VALUE;
  torch.trophyCaseValue= NumberConstants.TORCH_TROPHY_VALUE;
  torch.weight = NumberConstants.TORCH_WEIGHT;

  let trident = new Item("crystal trident", Location.ATLANTIS_ROOM);
  gameItems.trident = trident;
  trident.altNames.add("trident");
  trident.altNames.add("crystal");
  trident.initialPresenceString = ObjectStrings.INIT_TRIDENT;
  trident.acquireValue= NumberConstants.TRIDENT_VALUE;
  trident.trophyCaseValue= NumberConstants.TRIDENT_TROPHY_VALUE;
  trident.weight = NumberConstants.TRIDENT_WEIGHT;

  let trunk = new Item("trunk of jewels", Location.RESERVOIR_EMPTY);
  gameItems.trunk = trunk;
  trunk.altNames.add("trunk");
  trunk.altNames.add("jewels");
  trunk.acquireValue= NumberConstants.TRUNK_OF_JEWELS_VALUE;
  trunk.trophyCaseValue= NumberConstants.TRUNK_OF_JEWELS_TROPHY_VALUE;
  trunk.weight = NumberConstants.TRUNK_WEIGHT;



  // And another 40 (or so) items that can be taken.

  let ancientMap = new Item("ancient map", Location.NULL_LOCATION);
  gameItems.ancientMap = ancientMap;
  ancientMap.altNames.add("map");
  ancientMap.weight = NumberConstants.ANCIENT_MAP_WEIGHT;
  ancientMap.initialPresenceString = ObjectStrings.INIT_ANCIENT_MAP;
  ancientMap.readString = ObjectStrings.ANCIENT_MAP;
  ancientMap.examineString = ObjectStrings.ANCIENT_MAP;

  let axe = new Item("bloody axe", Location.TROLL_INVENTORY);
  gameItems.axe = axe;
  axe.altNames.add("axe");
  axe.altNames.add("ax");
  axe.weight = NumberConstants.AXE_WEIGHT;

  let bell = new Item("brass bell", Location.TEMPLE);
  gameItems.bell = bell;
  bell.altNames.add("bell");
  bell.ringString = "Ding, dong.";
  bell.weight = NumberConstants.BELL_WEIGHT;

  let blackBook = new Item("black book", Location.ON_ALTAR);
  gameItems.blackBook = blackBook;
  blackBook.altNames.add("book");
  blackBook.initialPresenceString = ObjectStrings.INIT_BLACK_BOOK;
  blackBook.weight = NumberConstants.BLACK_BOOK_WEIGHT;

  let boatLabel = new Item("tan label", Location.NULL_LOCATION);
  gameItems.boatLabel = boatLabel;
  boatLabel.altNames.add("label");
  boatLabel.readString = GameStrings.BOAT_LABEL_TEXT;
  boatLabel.weight = NumberConstants.BOAT_LABEL_WEIGHT;

  let bottle = new Item("glass bottle", Location.ON_KITCHEN_TABLE);
  gameItems.bottle = bottle;
  bottle.altNames.add("bottle");
  bottle.altNames.add("glass");
  bottle.initialPresenceString = ObjectStrings.INIT_BOTTLE;
  bottle.weight = NumberConstants.BOTTLE_WEIGHT;

  let brokenCanary = new Item("broken clockwork canary", Location.NULL_LOCATION);
  gameItems.brokenCanary = brokenCanary;
  brokenCanary.altNames.add("broken canary");
  brokenCanary.altNames.add("canary");
  brokenCanary.altNames.add("broken clockwork");
  brokenCanary.altNames.add("clockwork");
  brokenCanary.initialPresenceString = ObjectStrings.INIT_BROKEN_CANARY;
  brokenCanary.examineString = ObjectStrings.EXAMINE_BROKEN_CANARY;
  brokenCanary.trophyCaseValue= NumberConstants.BROKEN_CANARY_TROPHY_VALUE;
  brokenCanary.weight = NumberConstants.CANARY_WEIGHT;

  let brokenEgg = new Item("broken jewel-encrusted egg", Location.NULL_LOCATION);
  gameItems.brokenEgg = brokenEgg;
  brokenEgg.presenceString = "There is a somewhat ruined egg here.";
  brokenEgg.altNames.add("broken egg");
  brokenEgg.altNames.add("jewel-encrusted egg");
  brokenEgg.altNames.add("egg");
  brokenEgg.inventoryID = Location.INSIDE_BROKEN_EGG;
  brokenEgg.trophyCaseValue= NumberConstants.BROKEN_EGG_TROPHY_VALUE;
  brokenEgg.weight = NumberConstants.EGG_WEIGHT;
  brokenEgg.capacity = 6;

  let buoy = new Item("red buoy", Location.FRIGID_RIVER_4);
  gameItems.buoy = buoy;
  buoy.altNames.add("buoy");
  buoy.inventoryID = Location.INSIDE_BUOY;
  buoy.weight = NumberConstants.BUOY_WEIGHT;
  buoy.capacity = 20;
  buoy.initialPresenceString = ObjectStrings.INIT_BUOY;
  buoy.examineString = "You notice something funny about the feel of the buoy.";

  let candles = new Item("pair of candles", Location.ALTAR);
  gameItems.candles = candles;
  candles.altNames.add("candles");
  candles.altNames.add("candle");
  candles.altNames.add("pair");
  candles.initialPresenceString = ObjectStrings.INIT_CANDLES;
  candles.weight = NumberConstants.CANDLES_WEIGHT;
  candles.activated = true;
  candles.plural = true;

  let coal = new Item("small pile of coal", Location.DEAD_END_COAL_MINE);
  gameItems.coal = coal;
  coal.altNames.add("coal");
  coal.altNames.add("pile");
  coal.altNames.add("coal pile");
  coal.altNames.add("pile of coal");
  coal.altNames.add("small pile");
  coal.weight = NumberConstants.COAL_WEIGHT;

  let deflatedBoat = new Item("pile of plastic", Location.DAM_BASE);
  gameItems.deflatedBoat = deflatedBoat;
  deflatedBoat.altNames.add("boat");
  deflatedBoat.altNames.add("raft");
  deflatedBoat.altNames.add("pile");
  deflatedBoat.altNames.add("plastic");
  deflatedBoat.presenceString = ObjectStrings.INIT_BOAT;
  deflatedBoat.weight = NumberConstants.BOAT_WEIGHT;

  let garlic = new Item("clove of garlic", Location.INSIDE_SACK);
  garlic.altNames.add("clove");
  garlic.altNames.add("garlic");
  garlic.weight = NumberConstants.GARLIC_WEIGHT;
  gameItems.garlic = garlic;

  let guideBook = new Item("guidebook", Location.DAM_LOBBY);
  guideBook.altNames.add("book");
  guideBook.initialPresenceString = ObjectStrings.INIT_GUIDEBOOK;
  guideBook.weight = NumberConstants.GUIDEBOOK_WEIGHT;
  gameItems.guideBook = guideBook;

  let gunk = new Item("viscous material", Location.INSIDE_TUBE);
  gameItems.gunk = gunk;
  gunk.altNames.add("gunk");
  gunk.altNames.add("material");
  gunk.weight = NumberConstants.GUNK_WEIGHT;

  let inflatedBoat = new Item("magic boat", Location.NULL_LOCATION);
  inflatedBoat.altNames.add("boat");
  inflatedBoat.altNames.add("raft");
  inflatedBoat.inventoryID = Location.INSIDE_BOAT;
  inflatedBoat.weight = NumberConstants.BOAT_WEIGHT;
  inflatedBoat.capacity = 100;
  inflatedBoat.itemOpen = true;
  gameItems.inflatedBoat = inflatedBoat;

  let knife = new Item("nasty knife", Location.ATTIC);
  knife.altNames.add("knife");
  knife.altNames.add("nasty");
  knife.initialPresenceString = ObjectStrings.INIT_NASTY_KNIFE;
  knife.weight = NumberConstants.KNIFE_WEIGHT;
  gameItems.knife = knife;

  let lantern = new Item("brass lantern", Location.LIVING_ROOM);
  lantern.initialPresenceString = ObjectStrings.INIT_LANTERN;
  lantern.altNames.add("lamp");
  lantern.altNames.add("lantern");
  lantern.altNames.add("brass lamp");
  lantern.lifespan= NumberConstants.LANTERN_LIFESPAN;
  lantern.weight = NumberConstants.LANTERN_WEIGHT;
  gameItems.lantern = lantern;

  let nest = new Item("bird's nest", Location.UP_TREE);
  nest.altNames.add("nest");
  nest.initialPresenceString = ObjectStrings.INIT_NEST;
  nest.inventoryID = Location.INSIDE_BIRDS_NEST;
  nest.weight = NumberConstants.NEST_WEIGHT;
  nest.itemOpen = true;
  nest.capacity = 20;
  gameItems.nest = nest;

  let leafPile = new Item("pile of leaves", Location.CLEARING_NORTH);
  leafPile.altNames.add("pile");
  leafPile.altNames.add("leaves");
  leafPile.countString = "There are 69,105 leaves here.";
  leafPile.initialPresenceString =  ObjectStrings.LEAF_PILE;
  leafPile.presenceString =  ObjectStrings.LEAF_PILE;
  leafPile.weight = NumberConstants.LEAVES_WEIGHT;
  gameItems.leafPile = leafPile;

  let leaflet = new Item("leaflet", Location.INSIDE_MAILBOX);
  leaflet.readString = GameStrings.LEAFLET_TEXT;
  leaflet.weight = NumberConstants.LEAFLET_WEIGHT;

  let lunch = new Item("lunch", Location.INSIDE_SACK);
  gameItems.lunch = lunch;
  lunch.altNames.add("peppers");
  lunch.altNames.add("hot peppers");
  lunch.weight = NumberConstants.LUNCH_WEIGHT;
  gameItems.leaflet = leaflet;

  let matchbook = new Item("matchbook", Location.DAM_LOBBY);
  matchbook.altNames.add("matches");
  matchbook.altNames.add("match");
  matchbook.presenceString = ObjectStrings.INIT_MATCHBOOK;
  matchbook.lifespan= NumberConstants.MATCH_LIFESPAN;
  matchbook.weight = NumberConstants.MATCHBOOK_WEIGHT;
  gameItems.matchbook = matchbook;

  let pump = new Item("hand-held air pump", Location.RESERVOIR_NORTH);
  pump.altNames.add("air pump");
  pump.altNames.add("pump");
  pump.weight = NumberConstants.PUMP_WEIGHT;
  gameItems.pump = pump;

  let puncturedBoat = new Item("punctured boat", Location.NULL_LOCATION);
  puncturedBoat.altNames.add("boat");
  puncturedBoat.altNames.add("ruined boat");
  puncturedBoat.weight = NumberConstants.BOAT_WEIGHT;
  gameItems.puncturedBoat = puncturedBoat;

  let rope = new Item("rope", Location.ATTIC);
  rope.initialPresenceString = ObjectStrings.INIT_ROPE;
  rope.weight = NumberConstants.ROPE_WEIGHT;
  gameItems.rope = rope;

  let ruinedPainting = new Item("ruined painting", Location.NULL_LOCATION);
  ruinedPainting.initialPresenceString = "There is a worthless piece of canvas here.";
  ruinedPainting.presenceString = "There is a worthless piece of canvas here.";
  ruinedPainting.weight = NumberConstants.PAINTING_WEIGHT;
  ruinedPainting.altNames.add("painting");
  ruinedPainting.altNames.add("canvas");
  ruinedPainting.altNames.add("worthless canvas");
  ruinedPainting.altNames.add("worthless piece of canvas");
  ruinedPainting.altNames.add("piece of canvas");
  gameItems.ruinedPainting = ruinedPainting;

  let rustyKnife = new Item("rusty knife", Location.MAZE_5);
  rustyKnife.altNames.add("knife");
  rustyKnife.altNames.add("rusty");
  rustyKnife.initialPresenceString = ObjectStrings.INIT_RUSTY_KNIFE;
  rustyKnife.weight = NumberConstants.RUSTY_KNIFE_WEIGHT;
  gameItems.rustyKnife = rustyKnife;

  let sack = new Item("brown sack", Location.ON_KITCHEN_TABLE);
  sack.altNames.add("sack");
  sack.altNames.add("bag");
  sack.altNames.add("brown bag");
  sack.initialPresenceString = ObjectStrings.INIT_SACK;
  sack.inventoryID = Location.INSIDE_SACK;
  sack.weight = NumberConstants.SACK_WEIGHT;
  sack.capacity = 9;
  gameItems.sack = sack;

  let screwdriver = new Item("screwdriver", Location.MAINTENANCE_ROOM);
  screwdriver.altNames.add("driver");
  screwdriver.weight = NumberConstants.SCREWDRIVER_WEIGHT;
  gameItems.screwdriver = screwdriver;

  let shovel = new Item("shovel", Location.SANDY_BEACH);
  shovel.weight = NumberConstants.SHOVEL_WEIGHT;
  gameItems.shovel = shovel;

  let skeletonKey = new Item("skeleton key", Location.MAZE_5);
  skeletonKey.altNames.add("key");
  skeletonKey.weight = NumberConstants.SKELETON_KEY_WEIGHT;
  gameItems.skeletonKey = skeletonKey;

  let stiletto = new Item("stiletto", Location.THIEF_INVENTORY);
  stiletto.weight = NumberConstants.STILETTO_WEIGHT;
  gameItems.stiletto = stiletto;

  let studioPaper = new Item("ZORK owner's manual", Location.STUDIO);
  gameItems.studioPaper = studioPaper;
  studioPaper.altNames.add("paper");
  studioPaper.altNames.add("manual");
  studioPaper.readString = GameStrings.NATE_MANUAL_TEXT;
  studioPaper.initialPresenceString = ObjectStrings.INIT_ZORK_MANUAL;
  studioPaper.weight = NumberConstants.ZORK_MANUAL_WEIGHT;

  let sword = new Item("elvish sword", Location.LIVING_ROOM);
  sword.initialPresenceString = ObjectStrings.INIT_SWORD;
  sword.altNames.add("sword");
  sword.weight = NumberConstants.SWORD_WEIGHT;
  gameItems.sword = sword;

  let timber = new Item("broken timber", Location.TIMBER_ROOM);
  timber.altNames.add("timber");
  timber.weight = NumberConstants.TIMBER_WEIGHT;
  gameItems.timber = timber;

  let tube = new Item("tube", Location.MAINTENANCE_ROOM);
  tube.presenceString = ObjectStrings.TUBE;
  tube.examineString = ObjectStrings.DESC_TUBE;
  tube.inventoryID = Location.INSIDE_TUBE;
  tube.weight = NumberConstants.TUBE_WEIGHT;
  tube.capacity = 7;
  gameItems.tube = tube;

  let uselessLantern = new Item("useless lantern", Location.MAZE_5);
  uselessLantern.altNames.add("lantern");
  uselessLantern.altNames.add("lamp");
  uselessLantern.altNames.add("useless");
  uselessLantern.altNames.add("useless lamp");
  uselessLantern.initialPresenceString = ObjectStrings.INIT_USELESS;
  uselessLantern.weight = NumberConstants.USELESS_LANTERN_WEIGHT;
  gameItems.uselessLantern = uselessLantern;

  let wrench = new Item("wrench", Location.MAINTENANCE_ROOM);
  wrench.weight = NumberConstants.WRENCH_WEIGHT;
  gameItems.wrench = wrench;


  // Features, containers and surfaces

  let air = new Feature("air", Location.NULL_LOCATION);
  air.altNames.add("sky");
  gameItems.air = air;

  let altar = new Surface("altar", Location.ALTAR);
  altar.inventoryID = Location.ON_ALTAR;
  altar.capacity = 50;
  gameItems.altar = altar;

  let atticTable = new Surface("attic table", Location.ATTIC);
  atticTable.inventoryID = Location.ON_ATTIC_TABLE;
  atticTable.altNames.add("table");
  atticTable.capacity = 40;
  gameItems.atticTable = atticTable;

  let brokenMirror = new Feature("broken mirror", Location.NULL_LOCATION);
  brokenMirror.altNames.add("mirror");
  brokenMirror.examineString = "The mirror is broken into many pieces.";
  brokenMirror.takeString = "The mirror is many times your size. Give up.";
  brokenMirror.breakString = "Haven't you done enough damage already?";
  gameItems.brokenMirror = brokenMirror;

  let buttonBlue = new Feature("blue button", Location.MAINTENANCE_ROOM);
  buttonBlue.altNames.add("blue");
  gameItems.buttonBlue = buttonBlue;

  let buttonBrown = new Feature("brown button", Location.MAINTENANCE_ROOM);
  buttonBrown.altNames.add("brown");
  gameItems.buttonBrown = buttonBrown;

  let buttonRed = new Feature("red button", Location.MAINTENANCE_ROOM);
  buttonRed.altNames.add("red");
  gameItems.buttonRed = buttonRed;

  let buttonYellow = new Feature("yellow button", Location.MAINTENANCE_ROOM);
  buttonYellow.altNames.add("yellow");
  gameItems.buttonYellow = buttonYellow;

  let carpet = new Feature("oriental rug", Location.LIVING_ROOM);
  carpet.takeString = "The rug is extremely heavy and cannot be carried.";
  carpet.altNames.add("carpet");
  carpet.altNames.add("oriental carpet");
  carpet.altNames.add("rug");
  carpet.boardString = ObjectStrings.CARPET_SIT_1;
  carpet.lookUnderString = ObjectStrings.CARPET_LOOK_UNDER;
  gameItems.carpet = carpet;

  let chasmObj = new Feature("chasm", Location.CHASM);
  chasmObj.altLocations.add(Location.EAST_OF_CHASM);
  gameItems.chasmObj = chasmObj;

  let coalMachine = new Container("machine", Location.MACHINE_ROOM);
  coalMachine.inventoryID = Location.INSIDE_COAL_MACHINE;
  coalMachine.altNames.add("lid");
  coalMachine.capacity = 50;
  coalMachine.takeString = "It is far too large to carry.";
  gameItems.coalMachine = coalMachine;

  let coalMachineSwitch = new Feature("switch", Location.MACHINE_ROOM);
  gameItems.coalMachineSwitch = coalMachineSwitch;

  let damBolt = new Feature("bolt", Location.DAM);
  damBolt.takeString = "It is an integral part of the control panel.";
  gameItems.damBolt = damBolt;

  let damBubble = new Feature("green bubble", Location.DAM);
  damBubble.altNames.add("bubble");
  damBubble.takeString = "It is an integral part of the control panel.";
  damBubble.examineString = "The green bubble is dark and lifeless.";
  gameItems.damBubble = damBubble;

  let deadGate = new Feature("gate", Location.ENTRANCE_TO_HADES);
  deadGate.altLocations.add(Location.LAND_OF_THE_DEAD);
  deadGate.takeString = ObjectStrings.DEAD_GATE;
  deadGate.touchString = ObjectStrings.DEAD_GATE;
  deadGate.openString = ObjectStrings.DEAD_GATE;
  deadGate.closeString = ObjectStrings.DEAD_GATE;
  gameItems.deadGate = deadGate;

  let engravings = new Feature("engravings", Location.ENGRAVINGS_CAVE);
  engravings.altNames.add("markings");
  engravings.altNames.add("walls");
  engravings.altNames.add("wall");
  engravings.readString = GameStrings.ENGRAVINGS_TEXT;
  engravings.examineString = GameStrings.ENGRAVINGS_TEXT;
  gameItems.engravings = engravings;

  let forest = new Feature("forest", Location.FOREST_PATH);
  forest.altNames.add("woods");
  forest.altNames.add("trees");
  forest.altNames.add("tree");
  forest.altLocations.add(Location.FOREST_WEST);
  forest.altLocations.add(Location.FOREST_EAST);
  forest.altLocations.add(Location.FOREST_NORTHEAST);
  forest.altLocations.add(Location.FOREST_SOUTH);
  forest.altLocations.add(Location.CLEARING_NORTH);
  forest.altLocations.add(Location.CLEARING_EAST);
  forest.altLocations.add(Location.UP_TREE);
  forest.listenString = "The pines and the hemlocks seem to be murmuring.";
  gameItems.forest = forest;

  let gas = new Feature("gas", Location.GAS_ROOM);
  gas.blowString = "There is too much gas to blow away.";
  gas.smellString = "It smells like coal gas in here.";
  gameItems.gas = gas;

  let grating = new Feature("grating", Location.GRATING_ROOM);
  grating.altNames.add("grate");
  grating.examineString = "The grating is closed.";
  grating.lookInString = "You can see only darkness through the grating.";
  gameItems.grating = grating;

  let ground = new Feature("ground", Location.NULL_LOCATION);
  ground.altNames.add("floor");
  gameItems.ground = ground;

  let hotBell = new Feature("red hot brass bell", Location.NULL_LOCATION);
  hotBell.altNames.add("red hot bell");
  hotBell.altNames.add("hot brass bell");
  hotBell.altNames.add("hot bell");
  hotBell.altNames.add("brass bell");
  hotBell.altNames.add("bell");
  hotBell.takeString = "The bell is very hot and cannot be taken.";
  hotBell.ringString = "The bell is too hot to reach.";
  hotBell.presenceString = "On the ground is a red hot bell.";
  gameItems.hotBell = hotBell;

  let house = new Feature("white house", Location.WEST_OF_HOUSE);
  house.altNames.add("house");
  house.altLocations.add(Location.NORTH_OF_HOUSE);
  house.altLocations.add(Location.BEHIND_HOUSE);
  house.altLocations.add(Location.SOUTH_OF_HOUSE);
  house.altLocations.add(Location.KITCHEN);
  house.altLocations.add(Location.LIVING_ROOM);
  house.altLocations.add(Location.ATTIC);
  house.examineString = ObjectStrings.HOUSE_EXAMINE;
  house.enterString = "I can't see how to get in from here.";
  gameItems.house = house;

  let houseBoards = new Feature("wooden boards", Location.WEST_OF_HOUSE);
  houseBoards.altNames.add("boards");
  houseBoards.altNames.add("board");
  houseBoards.altNames.add("wood");
  houseBoards.articleName = "some wooden boards";
  houseBoards.altLocations.add(Location.SOUTH_OF_HOUSE);
  houseBoards.altLocations.add(Location.NORTH_OF_HOUSE);
  houseBoards.takeString = "The boards are securely fastened.";
  gameItems.houseBoards = houseBoards;

  let houseExteriorDoor = new Feature("door", Location.WEST_OF_HOUSE);
  houseExteriorDoor.altNames.add("wooden door");
  houseExteriorDoor.openString = "The door cannot be opened.";
  gameItems.houseExteriorDoor = houseExteriorDoor;

  let houseExteriorWindow = new Feature("boarded window", Location.NORTH_OF_HOUSE);
  houseExteriorWindow.altNames.add("windows");
  houseExteriorWindow.altNames.add("window");
  houseExteriorWindow.altLocations.add(Location.SOUTH_OF_HOUSE);
  houseExteriorWindow.breakString = "You can't break the windows open.";
  houseExteriorWindow.openString = "The windows are boarded and can't be opened.";
  gameItems.houseExteriorWindow = houseExteriorWindow;

  let houseWindow = new Feature("kitchen window", Location.BEHIND_HOUSE);
  houseWindow.altNames.add("window");
  houseWindow.altLocations.add(Location.KITCHEN);
  houseWindow.examineString = ObjectStrings.WINDOW_EXAMINE_AJAR;
  houseWindow.lookInString = ObjectStrings.WINDOW_LOOK_IN;
  gameItems.houseWindow = houseWindow;

  let kitchenTable = new Surface("kitchen table", Location.KITCHEN);
  kitchenTable.altNames.add("table");
  kitchenTable.capacity = 50;
  kitchenTable.inventoryID = Location.ON_KITCHEN_TABLE;
  gameItems.kitchenTable = kitchenTable;

  let mailbox = new Container("small mailbox", Location.WEST_OF_HOUSE);
  mailbox.altNames.add("mailbox");
  mailbox.altNames.add("box");
  mailbox.takeString = "It is securely anchored.";
  mailbox.moveString = "You can't move the small mailbox.";
  mailbox.inventory.add(leaflet);
  mailbox.inventoryID = Location.INSIDE_MAILBOX;
  mailbox.capacity = 10;
  gameItems.mailbox = mailbox;

  let mazeObj = new Feature("maze", Location.MAZE_1);
  mazeObj.altLocations.add(Location.MAZE_2);
  mazeObj.altLocations.add(Location.MAZE_3);
  mazeObj.altLocations.add(Location.MAZE_4);
  mazeObj.altLocations.add(Location.MAZE_5);
  mazeObj.altLocations.add(Location.MAZE_6);
  mazeObj.altLocations.add(Location.MAZE_7);
  mazeObj.altLocations.add(Location.MAZE_8);
  mazeObj.altLocations.add(Location.MAZE_9);
  mazeObj.altLocations.add(Location.MAZE_10);
  mazeObj.altLocations.add(Location.MAZE_11);
  mazeObj.altLocations.add(Location.MAZE_12);
  mazeObj.altLocations.add(Location.MAZE_13);
  mazeObj.altLocations.add(Location.MAZE_14);
  mazeObj.altLocations.add(Location.MAZE_15);
  mazeObj.examineString = "The maze consists of many twisty little passages, all alike.";
  gameItems.mazeObj = mazeObj;

  let mirror = new Feature("mirror", Location.MIRROR_ROOM_SOUTH);
  mirror.altLocations.add(Location.MIRROR_ROOM_NORTH);
  mirror.touchString = "There is a rumble from deep within the earth and the room shakes.";
  mirror.examineString = "There is an ugly person staring back at you.";
  mirror.lookInString = "There is an ugly person staring back at you.";
  mirror.takeString = "The mirror is many times your size. Give up.";
  mirror.breakString = "You have broken the mirror. I hope you have a seven years' supply of good luck handy.";
  gameItems.mirror = mirror;

  let mountains = new Feature("mountains", Location.FOREST_NORTHEAST);
  mountains.altNames.add("mountain");
  mountains.articleName = "a mountain";
  mountains.climbString = "Don't you believe me? The mountains are impassable!";
  gameItems.mountains = mountains;

  let pedestal = new Surface("pedestal", Location.TORCH_ROOM);
  pedestal.inventoryID = Location.ON_PEDESTAL;
  pedestal.capacity = 30;
  gameItems.pedestal = pedestal;

  let railing = new Feature("wooden railing", Location.DOME_ROOM);
  railing.altNames.add("railing");
  railing.altNames.add("rail");
  gameItems.railing = railing;

  let rainbow = new Feature("rainbow", Location.END_OF_RAINBOW);
  rainbow.altLocations.add(Location.ON_THE_RAINBOW);
  rainbow.altLocations.add(Location.ARAGAIN_FALLS);
  rainbow.crossString = "Can you walk on water vapor?";
  gameItems.rainbow = rainbow;

  let reservoirWater = new Feature("reservoir water", Location.RESERVOIR);
  reservoirWater.altNames.add("reservoir");
  reservoirWater.altNames.add("water");
  reservoirWater.altLocations.add(Location.RESERVOIR_NORTH);
  reservoirWater.altLocations.add(Location.RESERVOIR_SOUTH);
  gameItems.reservoirWater = reservoirWater;

  let riverWater = new Feature("river water", Location.FRIGID_RIVER_1);
  riverWater.altNames.add("water");
  riverWater.altNames.add("river");
  riverWater.altLocations.add(Location.FRIGID_RIVER_2);
  riverWater.altLocations.add(Location.FRIGID_RIVER_3);
  riverWater.altLocations.add(Location.FRIGID_RIVER_4);
  riverWater.altLocations.add(Location.FRIGID_RIVER_5);
  riverWater.altLocations.add(Location.DAM_BASE);
  riverWater.altLocations.add(Location.WHITE_CLIFFS_BEACH_NORTH);
  riverWater.altLocations.add(Location.WHITE_CLIFFS_BEACH_SOUTH);
  riverWater.altLocations.add(Location.SANDY_BEACH);
  riverWater.altLocations.add(Location.SHORE);
  gameItems.riverWater = riverWater;

  let sand = new Feature("sand", Location.SANDY_CAVE);
  sand.altNames.add("ground");
  gameItems.sand = sand;

  let self = new Feature("you", Location.NULL_LOCATION);
  self.altNames.add("me");
  self.altNames.add("self");
  self.altNames.add("myself");
  // self.takeString = "How romantic!";
  // self.attackString = "You don't have the you.";
  self.eatString = "Auto-cannabalism is not the answer.";
  gameItems.self = self;


  let shaftBasket = new Container("basket", Location.SHAFT_ROOM);
  shaftBasket.altLocations.add(Location.DRAFTY_ROOM);
  shaftBasket.containerOpen = true;
  shaftBasket.capacity = 50;
  shaftBasket.inventoryID = Location.INSIDE_BASKET;
  gameItems.shaftBasket = shaftBasket;

  let shaftChain = new Feature("chain", Location.SHAFT_ROOM);
  gameItems.shaftChain = shaftChain;

  let skeleton = new Feature("skeleton", Location.MAZE_5);
  gameItems.skeleton = skeleton;

  let streamWater = new Feature("stream water", Location.STREAM);
  streamWater.altNames.add("stream");
  streamWater.altNames.add("water");
  streamWater.altLocations.add(Location.STREAM_VIEW);
  gameItems.streamWater = streamWater;

  let templeInscription = new Feature("inscription", Location.TEMPLE);
  templeInscription.altNames.add("prayer");
  templeInscription.altNames.add("east wall");
  templeInscription.altNames.add("wall");
  templeInscription.readString = GameStrings.TEMPLE_PRAYER;
  templeInscription.examineString = GameStrings.TEMPLE_PRAYER;
  gameItems.templeInscription = templeInscription;

  let toolChests = new Feature("tool chests", Location.MAINTENANCE_ROOM);
  toolChests.initialPresenceString = ObjectStrings.INIT_TOOL_CHESTS;
  toolChests.takeString = "The chests are so rusty and corroded that they crumble when you touch them.";
  toolChests.examineString = "The chests are all empty.";
  gameItems.toolChests = toolChests;

  let trapDoor = new Feature("trap door", Location.NULL_LOCATION);
  trapDoor.altNames.add("trap");
  trapDoor.altNames.add("door");
  gameItems.trapDoor = trapDoor;

  let trophyCase = new Container("trophy case", Location.LIVING_ROOM);
  trophyCase.altNames.add("case");
  trophyCase.inventoryID = Location.INSIDE_TROPHY_CASE;
  trophyCase.capacity = 10000;
  trophyCase.takeString = "The trophy case is securely fastened to the wall.";
  gameItems.trophyCase = trophyCase;

  let vitreousSlag = new Item("small piece of vitreous slag", Location.NULL_LOCATION);
  vitreousSlag.altNames.add("piece of vitreous slag");
  vitreousSlag.altNames.add("piece of slag");
  vitreousSlag.altNames.add("vitreous slag");
  vitreousSlag.altNames.add("slag");
  gameItems.vitreousSlag = vitreousSlag;

  let water = new Feature("quantity of water", Location.NULL_LOCATION);
  water.altNames.add("quanitity");
  water.altNames.add("water");
  gameItems.water = water;

  let woodenDoor = new Feature("wooden door", Location.LIVING_ROOM);
  woodenDoor.altNames.add("door");
  woodenDoor.altNames.add("wooden");
  woodenDoor.altNames.add("letters");
  woodenDoor.altNames.add("lettering");
  woodenDoor.openString = "The door cannot be opened.";
  woodenDoor.readString = ObjectStrings.WOODEN_DOOR;
  woodenDoor.examineString = ObjectStrings.WOODEN_DOOR;
  gameItems.woodenDoor = woodenDoor;

  // Actors

  let cyclops = new Actor("cyclops", Location.CYCLOPS_ROOM);
  cyclops.examineString = ObjectStrings.CYCLOPS_EXAMINE;
  cyclops.helloString = "The cyclops bows his head to you in greeting.";
  gameItems.cyclops = cyclops;

  let damFlow = new Actor("flow", Location.DAM);
  damFlow.intangible = true;
  gameItems.damFlow = damFlow;

  let flood = new Actor("flood", Location.MAINTENANCE_ROOM);
  flood.intangible = true;
  gameItems.flood = flood;

  let gustOfWind = new Actor("gust of wind", Location.CAVE_SOUTH);
  gustOfWind.intangible = true;
  gameItems.gustOfWind = gustOfWind;

  let riverCurrent = new Actor("current", Location.FRIGID_RIVER_1);
  riverCurrent.altLocations.add(Location.FRIGID_RIVER_2);
  riverCurrent.altLocations.add(Location.FRIGID_RIVER_3);
  riverCurrent.altLocations.add(Location.FRIGID_RIVER_4);
  riverCurrent.altLocations.add(Location.FRIGID_RIVER_5);
  riverCurrent.intangible = true;
  gameItems.riverCurrent = riverCurrent;

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
  gameItems.songbird = songbird;

  let spirits = new Actor("spirits", Location.ENTRANCE_TO_HADES);
  spirits.presenceString = ObjectStrings.SPIRITS;
  spirits.talkString = "The spirits jeer loudly and ignore you.";
  spirits.attackString = "How can you attack a spirit with material objects?";
  spirits.takeString = "You seem unable to interact with these spirits.";
  gameItems.spirits = spirits;

  let swordGlow = new Actor("glow", Location.NULL_LOCATION);
  swordGlow.intangible = true;
  gameItems.swordGlow = swordGlow;

  let thief = new Actor("thief", Location.TREASURE_ROOM);
  thief.altNames.add("theif");
  thief.altNames.add("bandit");
  thief.altNames.add("robber");
  thief.altNames.add("man");
  thief.inventoryID = Location.THIEF_INVENTORY;
  thief.presenceString = ObjectStrings.THIEF_PRESENT_2;
  thief.helloString = "The thief bows his head to you in greeting.";
  gameItems.thief = thief;

  let troll = new Actor("troll", Location.TROLL_ROOM);
  troll.presenceString = ObjectStrings.TROLL_PRESENCE;
  troll.takeString = ObjectStrings.TROLL_TAKE;
  troll.talkString = ObjectStrings.TROLL_TALK_1;
  troll.inventoryID = Location.TROLL_INVENTORY;
  troll.helloString = "The troll bows his head to you in greeting.";
  gameItems.troll = troll;

  let vampireBat = new Actor("vampire bat", Location.BAT_ROOM);
  vampireBat.altNames.add("vampire");
  vampireBat.altNames.add("bat");
  vampireBat.attackString = ObjectStrings.BAT_CEILING;
  vampireBat.enterString = ObjectStrings.BAT_CEILING;
  vampireBat.helloString = "The bat bows his head to you in greeting.";
  vampireBat.kickString = ObjectStrings.BAT_CEILING;
  vampireBat.listenString = "The bat makes pained squeaking noises while holding his nose.";
  vampireBat.takeString = ObjectStrings.BAT_CEILING;
  gameItems.vampireBat = vampireBat;

  gameItems.sceptre.isWeapon = true;
  gameItems.axe.isWeapon = true;
  gameItems.sword.isWeapon = true;
  gameItems.knife.isWeapon = true;
  gameItems.rustyKnife.isWeapon = true;

  return gameItems;
}

const gameItems = createGameItems();

export default gameItems;
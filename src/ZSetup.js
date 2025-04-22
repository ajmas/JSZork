import Passage from './Passage.js';
import ObjectStrings from './ObjectStrings.js';
import { Location, actions, Action, NumberConstants } from './ZConstants.js';
import GameObject from './gameobjects/GameObject.js';
import Room from './Room.js';
import MapStrings from './MapStrings.js';
import gameItems from './setup/GameItems.js';

// Data structure declarations
const worldMap = new Map();
const objectList = new Map();
const currentObjects = new Map();
// const dictionary = new Set();

// used in direct object validation
const gameNouns = new Set();

// for sorting by length
let currentObjectNames = [];
const actionPhrases = [];
const objectNameMap = new Map();
const ambiguousMap = new Map();

for (let phrase of actions.keys()) {
    actionPhrases.push(phrase);
}

actionPhrases.sort(function(a, b) {
    return (a.length > b.length)? -1 : 0;
});

const dummyObject = new GameObject("dummy_object", Location.NULL_LOCATION);

// Overworld passages
const house_west_north = new Passage(Location.WEST_OF_HOUSE, Location.NORTH_OF_HOUSE);
const house_west_south = new Passage(Location.WEST_OF_HOUSE, Location.SOUTH_OF_HOUSE);
const house_west_barrow = new Passage(Location.WEST_OF_HOUSE, Location.STONE_BARROW);
const house_west_forestW = new Passage(Location.WEST_OF_HOUSE, Location.FOREST_WEST);
const house_north_forestpath = new Passage(Location.NORTH_OF_HOUSE, Location.FOREST_PATH);
const house_north_behind = new Passage(Location.NORTH_OF_HOUSE, Location.BEHIND_HOUSE);
const house_behind_clearingE = new Passage(Location.BEHIND_HOUSE, Location.CLEARING_EAST);
const house_behind_south = new Passage(Location.BEHIND_HOUSE, Location.SOUTH_OF_HOUSE);
const house_behind_kitchen = new Passage(Location.BEHIND_HOUSE, Location.KITCHEN);
const house_south_forestS = new Passage(Location.SOUTH_OF_HOUSE, Location.FOREST_SOUTH);
const kitchen_attic = new Passage(Location.KITCHEN, Location.ATTIC);
const kitchen_livingroom = new Passage(Location.KITCHEN, Location.LIVING_ROOM);
const forestpath_clearingN = new Passage(Location.FOREST_PATH, Location.CLEARING_NORTH);
const forestpath_forestE = new Passage(Location.FOREST_PATH, Location.FOREST_EAST);
const forestpath_forestW = new Passage(Location.FOREST_PATH, Location.FOREST_WEST);
const forestpath_uptree = new Passage(Location.FOREST_PATH, Location.UP_TREE);
const clearingN_forestE = new Passage(Location.CLEARING_NORTH, Location.FOREST_EAST);
const clearingN_forestW = new Passage(Location.CLEARING_NORTH, Location.FOREST_WEST);
const forestE_clearingE = new Passage(Location.FOREST_EAST, Location.CLEARING_EAST);
const forestE_forestNE = new Passage(Location.FOREST_EAST, Location.FOREST_NORTHEAST);
const clearingE_forestS = new Passage(Location.CLEARING_EAST, Location.FOREST_SOUTH);
const clearingE_canyon = new Passage(Location.CLEARING_EAST, Location.CANYON_VIEW);
const forestS_canyon = new Passage(Location.FOREST_SOUTH, Location.CANYON_VIEW);
const forestS_forestW = new Passage(Location.FOREST_SOUTH, Location.FOREST_WEST);
const canyon_ledge = new Passage(Location.CANYON_VIEW, Location.ROCKY_LEDGE);
const ledge_bottom = new Passage(Location.ROCKY_LEDGE, Location.CANYON_BOTTOM);
const canyon_bottom_rainbow = new Passage(Location.CANYON_BOTTOM, Location.END_OF_RAINBOW);
const barrowInside = new Passage(Location.STONE_BARROW, Location.INSIDE_STONE_BARROW);

// GUE southern passages
const cellar_livingroom = new Passage(Location.CELLAR, Location.LIVING_ROOM);
const cellar_troll = new Passage(Location.CELLAR, Location.TROLL_ROOM);
const cellar_eastchasm = new Passage(Location.CELLAR, Location.EAST_OF_CHASM);
const eastchasm_gallery = new Passage(Location.EAST_OF_CHASM, Location.GALLERY);
const gallery_studio = new Passage(Location.GALLERY, Location.STUDIO);
const studio_kitchen = new Passage(Location.STUDIO, Location.KITCHEN);
const troll_eastwest = new Passage(Location.TROLL_ROOM, Location.EAST_WEST_PASSAGE);
const eastwest_chasm  = new Passage(Location.EAST_WEST_PASSAGE, Location.CHASM);
const eastwest_round = new Passage(Location.EAST_WEST_PASSAGE, Location.ROUND_ROOM);
const round_northsouth = new Passage(Location.ROUND_ROOM, Location.NORTH_SOUTH_PASSAGE);
const round_narrow = new Passage(Location.ROUND_ROOM, Location.NARROW_PASSAGE);
const round_loud = new Passage(Location.ROUND_ROOM, Location.LOUD_ROOM);
const round_engravings = new Passage(Location.ROUND_ROOM, Location.ENGRAVINGS_CAVE);
const narrow_mirror = new Passage(Location.NARROW_PASSAGE, Location.MIRROR_ROOM_SOUTH);
const mirror_winding = new Passage(Location.MIRROR_ROOM_SOUTH, Location.WINDING_PASSAGE);
const mirrorsouth_cave = new Passage(Location.MIRROR_ROOM_SOUTH, Location.CAVE_SOUTH);
const winding_cave = new Passage(Location.WINDING_PASSAGE, Location.CAVE_SOUTH);
const cave_hades = new Passage(Location.CAVE_SOUTH, Location.ENTRANCE_TO_HADES);
const hades_land_dead = new Passage(Location.ENTRANCE_TO_HADES, Location.LAND_OF_THE_DEAD);
const engravings_dome = new Passage(Location.ENGRAVINGS_CAVE, Location.DOME_ROOM);
const dome_torch = new Passage(Location.DOME_ROOM, Location.TORCH_ROOM);
const torch_temple = new Passage(Location.TORCH_ROOM, Location.TEMPLE);
const temple_egypt = new Passage(Location.TEMPLE, Location.EGYPTIAN_ROOM);
const temple_altar = new Passage(Location.TEMPLE, Location.ALTAR);
const altar_cave = new Passage(Location.ALTAR, Location.CAVE_SOUTH);
const cyclops_strange = new Passage(Location.CYCLOPS_ROOM, Location.STRANGE_PASSAGE);
const cyclops_treasure = new Passage(Location.CYCLOPS_ROOM, Location.TREASURE_ROOM);
const strange_living_room = new Passage(Location.STRANGE_PASSAGE, Location.LIVING_ROOM);
const grating_clearing = new Passage(Location.GRATING_ROOM, Location.CLEARING_NORTH);

// GUE dam area passages
const loud_damp = new Passage(Location.LOUD_ROOM, Location.DAMP_CAVE);
const loud_deep_canyon = new Passage(Location.LOUD_ROOM, Location.DEEP_CANYON);
const damp_white_north = new Passage(Location.DAMP_CAVE, Location.WHITE_CLIFFS_BEACH_NORTH);
const white_cliffs_north_south = new Passage(Location.WHITE_CLIFFS_BEACH_NORTH, Location.WHITE_CLIFFS_BEACH_SOUTH);
const white_north_river = new Passage(Location.WHITE_CLIFFS_BEACH_NORTH, Location.FRIGID_RIVER_3);
const white_south_river = new Passage(Location.WHITE_CLIFFS_BEACH_SOUTH, Location.FRIGID_RIVER_4);
const river_one_two = new Passage(Location.FRIGID_RIVER_1, Location.FRIGID_RIVER_2);
const river_two_three = new Passage(Location.FRIGID_RIVER_2, Location.FRIGID_RIVER_3);
const river_three_four = new Passage(Location.FRIGID_RIVER_3, Location.FRIGID_RIVER_4);
const river_four_five = new Passage(Location.FRIGID_RIVER_4, Location.FRIGID_RIVER_5);
const river_sandy_beach = new Passage(Location.FRIGID_RIVER_4, Location.SANDY_BEACH);
const river_shore = new Passage(Location.FRIGID_RIVER_5, Location.SHORE);
const sandy_beach_cave = new Passage(Location.SANDY_BEACH, Location.SANDY_CAVE);
const sandy_beach_shore = new Passage(Location.SANDY_BEACH, Location.SHORE);
const shore_falls = new Passage(Location.SHORE, Location.ARAGAIN_FALLS);
const falls_rainbow = new Passage(Location.ARAGAIN_FALLS, Location.ON_THE_RAINBOW);
const rainbow_end = new Passage(Location.ON_THE_RAINBOW, Location.END_OF_RAINBOW);
const dam_base_river = new Passage(Location.DAM_BASE, Location.FRIGID_RIVER_1);
const dam_dam_base = new Passage(Location.DAM, Location.DAM_BASE);
const dam_dam_lobby = new Passage(Location.DAM, Location.DAM_LOBBY);
const dam_lobby_maintenance = new Passage(Location.DAM_LOBBY, Location.MAINTENANCE_ROOM);
const dam_deep_canyon = new Passage(Location.DAM, Location.DEEP_CANYON);
const dam_res_south = new Passage(Location.DAM, Location.RESERVOIR_SOUTH);
const northsouth_deep_canyon = new Passage(Location.NORTH_SOUTH_PASSAGE, Location.DEEP_CANYON);
const northsouth_chasm = new Passage(Location.NORTH_SOUTH_PASSAGE, Location.CHASM);
const res_south_chasm = new Passage(Location.RESERVOIR_SOUTH, Location.CHASM);
const res_south_stream_view = new Passage(Location.RESERVOIR_SOUTH, Location.STREAM_VIEW);
const res_south_res = new Passage(Location.RESERVOIR_SOUTH, Location.RESERVOIR);
const res_south_deep = new Passage(Location.RESERVOIR_SOUTH, Location.DEEP_CANYON);
const stream_view_stream = new Passage(Location.STREAM_VIEW, Location.STREAM);
const res_south_res_empty = new Passage(Location.RESERVOIR_SOUTH, Location.RESERVOIR_EMPTY);
const res_north_res_empty = new Passage(Location.RESERVOIR_NORTH, Location.RESERVOIR_EMPTY);
const stream_res_empty = new Passage(Location.STREAM, Location.RESERVOIR_EMPTY);

// GUE northern passages
const reservoir_stream = new Passage(Location.RESERVOIR, Location.STREAM);
const res_north_res = new Passage(Location.RESERVOIR_NORTH, Location.RESERVOIR);
const res_north_atlantis = new Passage(Location.RESERVOIR_NORTH, Location.ATLANTIS_ROOM);
const atlantis_cave = new Passage(Location.ATLANTIS_ROOM, Location.CAVE_NORTH);
const cave_twisting = new Passage(Location.CAVE_NORTH, Location.TWISTING_PASSAGE);
const cave_mirrornorth = new Passage(Location.CAVE_NORTH, Location.MIRROR_ROOM_NORTH);
const twisting_mirror = new Passage(Location.TWISTING_PASSAGE, Location.MIRROR_ROOM_NORTH);
const mirror_cold = new Passage(Location.MIRROR_ROOM_NORTH, Location.COLD_PASSAGE);
const cold_slide = new Passage(Location.COLD_PASSAGE, Location.SLIDE_ROOM);
const slide_cellar = new Passage(Location.SLIDE_ROOM, Location.CELLAR);
const slide_mine_entrance = new Passage(Location.SLIDE_ROOM, Location.MINE_ENTRANCE);
const mine_entrance_squeaky = new Passage(Location.MINE_ENTRANCE, Location.SQUEAKY_ROOM);
const squeaky_bat = new Passage(Location.SQUEAKY_ROOM, Location.BAT_ROOM);
const bat_shaft = new Passage(Location.BAT_ROOM, Location.SHAFT_ROOM);

// Coal mine passages

const shaft_smelly = new Passage(Location.SHAFT_ROOM, Location.SMELLY_ROOM);
const smelly_gas = new Passage(Location.SMELLY_ROOM, Location.GAS_ROOM);
const gas_coal_1 = new Passage(Location.GAS_ROOM, Location.COAL_MINE_1);
const coal_1_self = new Passage(Location.COAL_MINE_1, Location.COAL_MINE_1);
const coal_1_coal_2 = new Passage(Location.COAL_MINE_1, Location.COAL_MINE_2);
const coal_2_self = new Passage(Location.COAL_MINE_2, Location.COAL_MINE_2);
const coal_2_coal_3 = new Passage(Location.COAL_MINE_2, Location.COAL_MINE_3);
const coal_3_self = new Passage(Location.COAL_MINE_3, Location.COAL_MINE_3);
const coal_3_coal_4 = new Passage(Location.COAL_MINE_3, Location.COAL_MINE_4);
const coal_4_self = new Passage(Location.COAL_MINE_4, Location.COAL_MINE_4);
const coal_4_ladder_top = new Passage(Location.COAL_MINE_4, Location.LADDER_TOP);
const ladder_top_bottom = new Passage(Location.LADDER_TOP, Location.LADDER_BOTTOM);
const ladder_bottom_dead_end = new Passage(Location.LADDER_BOTTOM, Location.DEAD_END_COAL_MINE);
const ladder_bottom_timber = new Passage(Location.LADDER_BOTTOM, Location.TIMBER_ROOM);
const timber_drafty = new Passage(Location.TIMBER_ROOM, Location.DRAFTY_ROOM);
const drafty_machine = new Passage(Location.DRAFTY_ROOM, Location.MACHINE_ROOM);

// Maze passages
const troll_maze = new Passage(Location.TROLL_ROOM, Location.MAZE_1);
const maze1_maze2 = new Passage(Location.MAZE_1, Location.MAZE_2);
const maze1_maze4 = new Passage(Location.MAZE_1, Location.MAZE_4);
const maze1_self = new Passage(Location.MAZE_1, Location.MAZE_1);
const maze2_maze3 = new Passage(Location.MAZE_2, Location.MAZE_3);
const maze2_maze4 = new Passage(Location.MAZE_2, Location.MAZE_4);
const maze3_maze4 = new Passage(Location.MAZE_3, Location.MAZE_4);
const maze3_maze5 = new Passage(Location.MAZE_3, Location.MAZE_5);
const maze4_dead_end = new Passage(Location.MAZE_4, Location.DEAD_END_MAZE_NORTH);
const maze5_maze6 = new Passage(Location.MAZE_5, Location.MAZE_6);
const maze5_dead_end = new Passage(Location.MAZE_5, Location.DEAD_END_MAZE_CENTER);
const maze6_maze7 = new Passage(Location.MAZE_6, Location.MAZE_7);
const maze6_maze9 = new Passage(Location.MAZE_6, Location.MAZE_9);
const maze6_self = new Passage(Location.MAZE_6, Location.MAZE_6);
const maze7_dead_end = new Passage(Location.MAZE_7, Location.DEAD_END_MAZE_NORTH);
const maze7_maze8 = new Passage(Location.MAZE_7, Location.MAZE_8);
const maze7_maze14 = new Passage(Location.MAZE_7, Location.MAZE_14);
const maze7_maze15 = new Passage(Location.MAZE_7, Location.MAZE_15);
const maze8_dead_end = new Passage(Location.MAZE_8, Location.DEAD_END_MAZE_SOUTHEAST);
const maze8_self = new Passage(Location.MAZE_8, Location.MAZE_8);
const maze9_maze10 = new Passage(Location.MAZE_9, Location.MAZE_10);
const maze9_maze11 = new Passage(Location.MAZE_9, Location.MAZE_11);
const maze9_maze12 = new Passage(Location.MAZE_9, Location.MAZE_12);
const maze9_maze13 = new Passage(Location.MAZE_9, Location.MAZE_13);
const maze9_self = new Passage(Location.MAZE_9, Location.MAZE_9);
const maze10_maze11 = new Passage(Location.MAZE_10, Location.MAZE_11);
const maze10_maze13 = new Passage(Location.MAZE_10, Location.MAZE_13);
const maze11_maze12 = new Passage(Location.MAZE_11, Location.MAZE_12);
const maze11_maze13 = new Passage(Location.MAZE_11, Location.MAZE_13);
const maze11_grating = new Passage(Location.MAZE_11, Location.GRATING_ROOM);
const maze12_maze13 = new Passage(Location.MAZE_12, Location.MAZE_13);
const maze12_maze5 = new Passage(Location.MAZE_12, Location.MAZE_5);
const maze12_dead_end = new Passage(Location.MAZE_12, Location.DEAD_END_MAZE_SOUTHEAST);
const maze14_maze15 = new Passage(Location.MAZE_14, Location.MAZE_15);
const maze14_self = new Passage(Location.MAZE_14, Location.MAZE_14);
const maze15_cyclops = new Passage(Location.MAZE_15, Location.CYCLOPS_ROOM);


// Rooms
const westOfHouse = new Room("West of House", MapStrings.DESC_WEST_OF_HOUSE, Location.WEST_OF_HOUSE);
westOfHouse.addExit(Action.NORTH, house_west_north);
westOfHouse.addExit(Action.SOUTH, house_west_south);
westOfHouse.addExit(Action.SOUTHEAST, house_west_south);
westOfHouse.addExit(Action.SOUTHWEST, house_west_barrow);
westOfHouse.addExit(Action.WEST, house_west_forestW);
westOfHouse.addFailMessage(Action.EAST, "The door is boarded and you can't remove the boards.");
westOfHouse.addFailMessage(Action.IN, "The door is boarded and you can't remove the boards.");

const northOfHouse = new Room("North of House", MapStrings.DESC_NORTH_OF_HOUSE, Location.NORTH_OF_HOUSE);
northOfHouse.addExit(Action.NORTH, house_north_forestpath);
northOfHouse.addExit(Action.EAST, house_north_behind);
northOfHouse.addExit(Action.SOUTHEAST, house_north_behind);
northOfHouse.addExit(Action.SOUTHWEST, house_west_north);
northOfHouse.addExit(Action.WEST, house_west_north);
northOfHouse.addFailMessage(Action.SOUTH, "The windows are all boarded.");

const behindHouse = new Room("Behind House", MapStrings.DESC_BEHIND_HOUSE, Location.BEHIND_HOUSE);
behindHouse.addExit(Action.NORTH, house_north_behind);
behindHouse.addExit(Action.NORTHWEST, house_north_behind);
behindHouse.addExit(Action.EAST, house_behind_clearingE);
behindHouse.addExit(Action.SOUTH, house_behind_south);
behindHouse.addExit(Action.SOUTHWEST, house_behind_south);
behindHouse.addExit(Action.WEST, house_behind_kitchen);
behindHouse.addExit(Action.IN, house_behind_kitchen);

const southOfHouse = new Room("South of House", MapStrings.DESC_SOUTH_OF_HOUSE, Location.SOUTH_OF_HOUSE);
southOfHouse.addExit(Action.EAST, house_behind_south);
southOfHouse.addExit(Action.NORTHEAST, house_behind_south);
southOfHouse.addExit(Action.WEST, house_west_south);
southOfHouse.addExit(Action.NORTHWEST, house_west_south);
southOfHouse.addExit(Action.SOUTH, house_south_forestS);
southOfHouse.addFailMessage(Action.NORTH, "The windows are all boarded.");

const kitchen = new Room("Kitchen", MapStrings.DESC_KITCHEN_WINDOW_CLOSED, Location.KITCHEN);
kitchen.addExit(Action.EAST, house_behind_kitchen);
kitchen.addExit(Action.OUT, house_behind_kitchen);
kitchen.addExit(Action.WEST, kitchen_livingroom);
kitchen.addExit(Action.UP, kitchen_attic);
kitchen.addFailMessage(Action.DOWN, "Only Santa Claus climbs down chimneys.");
kitchen.discoverValue = NumberConstants.KITCHEN_VALUE;

const attic = new Room("Attic", MapStrings.DESC_ATTIC, Location.ATTIC);
attic.addExit(Action.DOWN, kitchen_attic);

const livingRoom = new Room("Living Room", MapStrings.DESC_LIVING_ROOM, Location.LIVING_ROOM);
livingRoom.addExit(Action.EAST, kitchen_livingroom);
livingRoom.addExit(Action.DOWN, cellar_livingroom);
livingRoom.addExit(Action.WEST, strange_living_room);

const forestPath = new Room("Forest Path", MapStrings.DESC_FOREST_PATH, Location.FOREST_PATH);
forestPath.addExit(Action.NORTH, forestpath_clearingN);
forestPath.addExit(Action.EAST, forestpath_forestE);
forestPath.addExit(Action.SOUTH, house_north_forestpath);
forestPath.addExit(Action.WEST, forestpath_forestW);
forestPath.addExit(Action.UP, forestpath_uptree);

const upTree = new Room("Up a Tree", MapStrings.DESC_UP_TREE, Location.UP_TREE);
upTree.addExit(Action.DOWN, forestpath_uptree);
upTree.addFailMessage(Action.UP, "You cannot climb any higher.");
upTree.jumpString = "In a feat of unaccustomed daring, you manage to land on your feet "
    + "without killing yourself.";

const forestWest = new Room("Forest", MapStrings.DESC_FOREST_WEST, Location.FOREST_WEST);
forestWest.addExit(Action.NORTH, clearingN_forestW);
forestWest.addExit(Action.EAST, forestpath_forestW);
forestWest.addExit(Action.SOUTH, forestS_forestW);
forestWest.addFailMessage(Action.WEST, "You would need a machete to go further west.");
forestWest.addFailMessage(Action.UP, "There is no tree here suitable for climbing.");

const forestEast = new Room("Forest", MapStrings.DESC_FOREST_EAST, Location.FOREST_EAST);
forestEast.addExit(Action.EAST, forestE_forestNE);
forestEast.addExit(Action.SOUTH, forestE_clearingE);
forestEast.addExit(Action.WEST, forestpath_forestE);
forestEast.addFailMessage(Action.NORTH, "The forest becomes impenetrable to the north.");
forestEast.addFailMessage(Action.UP, "There is no tree here suitable for climbing.");

const forestNortheast = new Room("Forest", MapStrings.DESC_FOREST_NORTHEAST, Location.FOREST_NORTHEAST);
forestNortheast.addExit(Action.NORTH, forestE_forestNE);
forestNortheast.addExit(Action.SOUTH, forestE_forestNE);
forestNortheast.addExit(Action.WEST, forestE_forestNE);
forestNortheast.addFailMessage(Action.EAST, MapStrings.FOREST_NE_FAIL_1);
forestNortheast.addFailMessage(Action.UP, MapStrings.FOREST_NE_FAIL_1);

const forestSouth = new Room("Forest", MapStrings.DESC_FOREST_SOUTH, Location.FOREST_SOUTH);
forestSouth.addExit(Action.NORTH, clearingE_forestS);
forestSouth.addExit(Action.WEST, forestS_forestW);
forestSouth.addExit(Action.NORTHWEST, house_south_forestS);
forestSouth.addFailMessage(Action.UP, "There is no tree here suitable for climbing.");
forestSouth.addFailMessage(Action.EAST, "The rank undergrowth prevents eastward movement.");
forestSouth.addFailMessage(Action.SOUTH, "Storm-tossed trees block your way.");

const clearingNorth = new Room("Clearing", MapStrings.DESC_CLEARING_NORTH, Location.CLEARING_NORTH);
clearingNorth.addExit(Action.EAST, clearingN_forestE);
clearingNorth.addExit(Action.SOUTH, forestpath_clearingN);
clearingNorth.addExit(Action.WEST, clearingN_forestW);
clearingNorth.addFailMessage(Action.UP, "There is no tree here suitable for climbing.");
clearingNorth.addFailMessage(Action.NORTH, "The forest becomes impenetrable to the north.");

const clearingEast = new Room("Clearing", MapStrings.DESC_CLEARING_EAST, Location.CLEARING_EAST);
clearingEast.addExit(Action.NORTH, forestE_clearingE);
clearingEast.addExit(Action.EAST, clearingE_canyon);
clearingEast.addExit(Action.SOUTH, clearingE_forestS);
clearingEast.addExit(Action.WEST, house_behind_clearingE);
clearingEast.addFailMessage(Action.UP, "There is no tree here suitable for climbing.");

const canyonView = new Room("Canyon View", MapStrings.DESC_CANYON_VIEW, Location.CANYON_VIEW);
canyonView.addExit(Action.NORTHWEST, clearingE_canyon);
canyonView.addExit(Action.WEST, forestS_canyon);
canyonView.addExit(Action.DOWN, canyon_ledge);
canyonView.addExit(Action.EAST, canyon_ledge);
canyonView.addFailMessage(Action.SOUTH, "Storm-tossed trees block your way.");
canyonView.jumpString = "Nice view, lousy place to jump.\n";

const rockyLedge = new Room("Rocky Ledge", MapStrings.DESC_ROCKY_LEDGE, Location.ROCKY_LEDGE);
rockyLedge.addExit(Action.UP, canyon_ledge);
rockyLedge.addExit(Action.DOWN, ledge_bottom);

const canyonBottom = new Room("Canyon Bottom", MapStrings.DESC_CANYON_BOTTOM, Location.CANYON_BOTTOM);
canyonBottom.addExit(Action.UP, ledge_bottom);
canyonBottom.addExit(Action.NORTH, canyon_bottom_rainbow);

const endOfRainbow = new Room("End of Rainbow", MapStrings.DESC_END_OF_RAINBOW, Location.END_OF_RAINBOW);
endOfRainbow.addExit(Action.SOUTHWEST, canyon_bottom_rainbow);
endOfRainbow.addExit(Action.EAST, rainbow_end);

const stoneBarrow = new Room("Stone Barrow", MapStrings.DESC_STONE_BARROW, Location.STONE_BARROW);
stoneBarrow.addExit(Action.NORTHEAST, house_west_barrow);
stoneBarrow.addExit(Action.WEST, barrowInside);

const insideStoneBarrow = new Room("Inside the Barrow", MapStrings.DESC_INSIDE_STONE_BARROW, Location.INSIDE_STONE_BARROW);
insideStoneBarrow.addExit(Action.EAST, barrowInside);

const cellar = new Room("Cellar", MapStrings.DESC_CELLAR, Location.CELLAR);
cellar.addExit(Action.NORTH, cellar_troll);
cellar.addExit(Action.SOUTH, cellar_eastchasm);
cellar.addExit(Action.UP, cellar_livingroom);
cellar.addFailMessage(Action.WEST, "You try to ascend the ramp, but it is impossible, and you slide back down.");
cellar.discoverValue = NumberConstants.CELLAR_VALUE;


const eastOfChasm = new Room("East of Chasm", MapStrings.DESC_EAST_OF_CHASM, Location.EAST_OF_CHASM);
eastOfChasm.addExit(Action.NORTH, cellar_eastchasm);
eastOfChasm.addExit(Action.DOWN, cellar_eastchasm);
eastOfChasm.addExit(Action.EAST, eastchasm_gallery);
eastOfChasm.addFailMessage(Action.DOWN, "The chasm probably leads straight to the infernal regions.");
eastOfChasm.jumpString = "This was not a very safe place to try jumping.\nIn the movies, your life "
    + "would be passing before your eyes.";

const gallery = new Room("Gallery", MapStrings.DESC_GALLERY, Location.GALLERY);
gallery.addExit(Action.WEST, eastchasm_gallery);
gallery.addExit(Action.NORTH, gallery_studio);

const studio = new Room("Studio", MapStrings.DESC_STUDIO, Location.STUDIO);
studio.addExit(Action.SOUTH, gallery_studio);
studio.addExit(Action.UP, studio_kitchen);

const trollRoom = new Room("Troll Room", MapStrings.DESC_TROLL_ROOM, Location.TROLL_ROOM);
trollRoom.addExit(Action.SOUTH, cellar_troll);
trollRoom.addExit(Action.WEST, troll_maze);
trollRoom.addExit(Action.EAST, troll_eastwest);

const eastWestPassage = new Room("East-West Passage", MapStrings.DESC_EAST_WEST_PASSAGE , Location.EAST_WEST_PASSAGE);
eastWestPassage.addExit(Action.WEST, troll_eastwest);
eastWestPassage.addExit(Action.NORTH, eastwest_chasm);
eastWestPassage.addExit(Action.DOWN, eastwest_chasm);
eastWestPassage.addExit(Action.EAST, eastwest_round);
eastWestPassage.discoverValue = NumberConstants.EAST_WEST_VALUE;

const roundRoom = new Room("Round Room", MapStrings.DESC_ROUND_ROOM, Location.ROUND_ROOM);
roundRoom.addExit(Action.WEST, eastwest_round);
roundRoom.addExit(Action.NORTH, round_northsouth);
roundRoom.addExit(Action.EAST, round_loud);
roundRoom.addExit(Action.SOUTH, round_narrow);
roundRoom.addExit(Action.SOUTHEAST, round_engravings);

const narrowPassage = new Room("Narrow Passage", MapStrings.DESC_NARROW_PASSAGE, Location.NARROW_PASSAGE);
narrowPassage.addExit(Action.NORTH, round_narrow);
narrowPassage.addExit(Action.SOUTH, narrow_mirror);

const mirrorRoomSouth = new Room("Mirror Room", MapStrings.DESC_MIRROR_ROOM_SOUTH, Location.MIRROR_ROOM_SOUTH);
mirrorRoomSouth.addExit(Action.NORTH, narrow_mirror);
mirrorRoomSouth.addExit(Action.WEST, mirror_winding);
mirrorRoomSouth.addExit(Action.EAST, mirrorsouth_cave);

const windingPassage = new Room("Winding Passage", MapStrings.DESC_WINDING_PASSAGE, Location.WINDING_PASSAGE);
windingPassage.addExit(Action.NORTH, mirror_winding);
windingPassage.addExit(Action.EAST, winding_cave);

const caveSouth = new Room("Cave", MapStrings.DESC_CAVE_SOUTH, Location.CAVE_SOUTH);
caveSouth.addExit(Action.NORTH, mirrorsouth_cave);
caveSouth.addExit(Action.WEST, winding_cave);
caveSouth.addExit(Action.DOWN, cave_hades);
caveSouth.addExit(Action.DOWN, cave_hades);

const entranceToHades = new Room("Entrance to Hades", MapStrings.DESC_ENTRANCE_TO_HADES, Location.ENTRANCE_TO_HADES);
entranceToHades.addExit(Action.UP, cave_hades);
entranceToHades.addExit(Action.SOUTH, hades_land_dead);

const landOfTheDead = new Room("Land of the Dead", MapStrings.DESC_LAND_OF_THE_DEAD, Location.LAND_OF_THE_DEAD);
landOfTheDead.addExit(Action.NORTH, hades_land_dead);

const engravingsCave = new Room("Engravings Cave", MapStrings.DESC_ENGRAVINGS_CAVE, Location.ENGRAVINGS_CAVE);
engravingsCave.addExit(Action.NORTHWEST, round_engravings);
engravingsCave.addExit(Action.EAST, engravings_dome);

const domeRoom = new Room("Dome Room", MapStrings.DESC_DOME_ROOM, Location.DOME_ROOM);
domeRoom.addExit(Action.WEST, engravings_dome);
domeRoom.addExit(Action.DOWN, dome_torch);

const torchRoom = new Room("Torch Room", MapStrings.DESC_TORCH_ROOM, Location.TORCH_ROOM);
torchRoom.addExit(Action.SOUTH, torch_temple);
torchRoom.addExit(Action.DOWN, torch_temple);

const temple = new Room("Temple", MapStrings.DESC_TEMPLE, Location.TEMPLE);
temple.addExit(Action.NORTH, torch_temple);
temple.addExit(Action.UP, torch_temple);
temple.addExit(Action.EAST, temple_egypt);
temple.addExit(Action.DOWN, temple_egypt);
temple.addExit(Action.SOUTH, temple_altar);

const egyptianRoom = new Room("Egyptian Room", MapStrings.DESC_EGYPTIAN_ROOM, Location.EGYPTIAN_ROOM);
egyptianRoom.addExit(Action.WEST, temple_egypt);

const altarRoom = new Room("Altar", MapStrings.DESC_ALTAR, Location.ALTAR);
altarRoom.addExit(Action.NORTH, temple_altar);
altarRoom.addExit(Action.DOWN, altar_cave);

const loudRoom = new Room("Loud Room", MapStrings.DESC_LOUD_ROOM, Location.LOUD_ROOM);
loudRoom.addExit(Action.WEST, round_loud);
loudRoom.addExit(Action.UP, loud_deep_canyon);
loudRoom.addExit(Action.EAST, loud_damp);

const dampCave = new Room("Damp Cave", MapStrings.DESC_DAMP_CAVE, Location.DAMP_CAVE);
dampCave.addExit(Action.WEST, loud_damp);
dampCave.addExit(Action.EAST, damp_white_north);
dampCave.addFailMessage(Action.SOUTH, "It is too narrow for most insects.");

const whiteCliffsBeachNorth = new Room("White Cliffs Beach North", MapStrings.DESC_WHITE_CLIFFS_BEACH_NORTH, Location.WHITE_CLIFFS_BEACH_NORTH);
whiteCliffsBeachNorth.addExit(Action.WEST, damp_white_north);
whiteCliffsBeachNorth.addExit(Action.SOUTH, white_cliffs_north_south);
whiteCliffsBeachNorth.addExit(Action.LAUNCH, white_north_river);

const whiteCliffsBeachSouth = new Room("White Cliffs Beach South", MapStrings.DESC_WHITE_CLIFFS_BEACH_SOUTH, Location.WHITE_CLIFFS_BEACH_SOUTH);
whiteCliffsBeachSouth.addExit(Action.NORTH, white_cliffs_north_south);
whiteCliffsBeachSouth.addExit(Action.LAUNCH, white_south_river);

const frigidRiver1 = new Room("Frigid River", MapStrings.DESC_FRIGID_RIVER_1, Location.FRIGID_RIVER_1);
frigidRiver1.addExit(Action.WEST, dam_base_river);
frigidRiver1.addExit(Action.LAND, dam_base_river);

const frigidRiver2 = new Room("Frigid River", MapStrings.DESC_FRIGID_RIVER_2, Location.FRIGID_RIVER_2);

const frigidRiver3 = new Room("Frigid River", MapStrings.DESC_FRIGID_RIVER_3, Location.FRIGID_RIVER_3);
frigidRiver3.addExit(Action.WEST, white_north_river);
frigidRiver3.addExit(Action.LAND, white_north_river);

const frigidRiver4 = new Room("Frigid River", MapStrings.DESC_FRIGID_RIVER_4, Location.FRIGID_RIVER_4);
frigidRiver4.addExit(Action.WEST, white_south_river);
frigidRiver4.addExit(Action.EAST, river_sandy_beach);
frigidRiver4.addExit(Action.LAND, river_sandy_beach);

const frigidRiver5 = new Room("Frigid River", MapStrings.DESC_FRIGID_RIVER_5, Location.FRIGID_RIVER_5);
frigidRiver5.addExit(Action.EAST, river_shore);
frigidRiver5.addExit(Action.LAND, river_shore);

const sandyCave = new Room("Sandy Cave", MapStrings.DESC_SANDY_CAVE, Location.SANDY_CAVE);
sandyCave.addExit(Action.SOUTHWEST, sandy_beach_cave);

const sandyBeach = new Room("Sandy Beach", MapStrings.DESC_SANDY_BEACH, Location.SANDY_BEACH);
sandyBeach.addExit(Action.NORTHEAST, sandy_beach_cave);
sandyBeach.addExit(Action.SOUTH, sandy_beach_shore);
sandyBeach.addExit(Action.LAUNCH, river_sandy_beach);

const shore = new Room("Shore", MapStrings.DESC_SHORE, Location.SHORE);
shore.addExit(Action.NORTH, sandy_beach_shore);
shore.addExit(Action.LAUNCH, river_shore);
shore.addExit(Action.SOUTH, shore_falls);

const aragainFalls = new Room("Aragain Falls", MapStrings.DESC_ARAGAIN_FALLS, Location.ARAGAIN_FALLS);
aragainFalls.addExit(Action.NORTH, shore_falls);
aragainFalls.addExit(Action.WEST, falls_rainbow);

const onTheRainbow = new Room("On the Rainbow", MapStrings.DESC_ON_THE_RAINBOW, Location.ON_THE_RAINBOW);
onTheRainbow.addExit(Action.EAST, falls_rainbow);
onTheRainbow.addExit(Action.WEST, rainbow_end);

const dam = new Room("Dam", MapStrings.DESC_DAM, Location.DAM);
dam.addExit(Action.WEST, dam_res_south);
dam.addExit(Action.NORTH, dam_dam_lobby);
dam.addExit(Action.SOUTH, dam_deep_canyon);
dam.addExit(Action.EAST, dam_dam_base);
dam.addExit(Action.DOWN, dam_dam_base);

const damBase = new Room("Dam Base", MapStrings.DESC_DAM_BASE, Location.DAM_BASE);
damBase.addExit(Action.NORTH, dam_dam_base);
damBase.addExit(Action.LAUNCH, dam_base_river);

const damLobby = new Room("Dam Lobby", MapStrings.DESC_DAM_LOBBY, Location.DAM_LOBBY);
damLobby.addExit(Action.NORTH, dam_lobby_maintenance);
damLobby.addExit(Action.EAST, dam_lobby_maintenance);
damLobby.addExit(Action.SOUTH, dam_dam_lobby);

const maintenanceRoom = new Room("Maintenance Room", MapStrings.DESC_MAINTENANCE_ROOM, Location.MAINTENANCE_ROOM);
maintenanceRoom.addExit(Action.SOUTH, dam_lobby_maintenance);
maintenanceRoom.addExit(Action.WEST, dam_lobby_maintenance);

const northSouthPassage = new Room("North-South Passage", MapStrings.DESC_NORTH_SOUTH_PASSAGE, Location.NORTH_SOUTH_PASSAGE);
northSouthPassage.addExit(Action.NORTH, northsouth_chasm);
northSouthPassage.addExit(Action.NORTHEAST, northsouth_deep_canyon);
northSouthPassage.addExit(Action.SOUTH, round_northsouth);

const deepCanyon = new Room("Deep Canyon", MapStrings.DESC_DEEP_CANYON_WATER, Location.DEEP_CANYON);
deepCanyon.addExit(Action.EAST, dam_deep_canyon);
deepCanyon.addExit(Action.NORTHWEST, res_south_deep);
deepCanyon.addExit(Action.SOUTHWEST, northsouth_deep_canyon);
deepCanyon.addExit(Action.DOWN, loud_deep_canyon);

const chasm = new Room("Chasm", MapStrings.DESC_CHASM, Location.CHASM);
chasm.addExit(Action.NORTHEAST, res_south_chasm);
chasm.addExit(Action.SOUTHWEST, eastwest_chasm);
chasm.addExit(Action.UP, eastwest_chasm);
chasm.addExit(Action.SOUTH, northsouth_chasm);
chasm.addFailMessage(Action.DOWN, "Are you out of your mind?");
chasm.jumpString = "You look before leaping, and realize that you would never survive.";

const streamView = new Room("Stream View", MapStrings.DESC_STREAM_VIEW, Location.STREAM_VIEW);
streamView.addExit(Action.EAST, res_south_stream_view);
streamView.addExit(Action.LAUNCH, stream_view_stream);

const stream = new Room("Stream", MapStrings.DESC_STREAM, Location.STREAM);
stream.addExit(Action.SOUTH, stream_view_stream);
stream.addExit(Action.LAND, stream_view_stream);
stream.addExit(Action.EAST, reservoir_stream);

const reservoirSouth = new Room("Reservoir South", MapStrings.DESC_RESERVOIR_SOUTH, Location.RESERVOIR_SOUTH);
reservoirSouth.addExit(Action.LAUNCH, res_south_res);
reservoirSouth.addExit(Action.WEST, res_south_stream_view);
reservoirSouth.addExit(Action.SOUTHEAST, res_south_deep);
reservoirSouth.addExit(Action.SOUTHWEST, res_south_chasm);
reservoirSouth.addExit(Action.EAST, dam_res_south);
reservoirSouth.addFailMessage(Action.NORTH, "You would drown.");

const reservoir = new Room("Reservoir", MapStrings.DESC_RESERVOIR, Location.RESERVOIR);
reservoir.addExit(Action.NORTH, res_north_res);
reservoir.addExit(Action.SOUTH, res_south_res);
reservoir.addExit(Action.LAND, res_south_res);
reservoir.addExit(Action.WEST, reservoir_stream);
reservoir.addFailMessage(Action.EAST, "The dam blocks your way.");

const reservoirEmpty = new Room("Reservoir", MapStrings.DESC_RESERVOIR_EMPTY, Location.RESERVOIR_EMPTY);
reservoirEmpty.addExit(Action.NORTH, res_north_res_empty);
reservoirEmpty.addExit(Action.SOUTH, res_south_res_empty);
reservoirEmpty.addExit(Action.LAUNCH, stream_res_empty);
reservoirEmpty.addFailMessage(Action.WEST, "You cannot wade into the flowing stream.");

const reservoirNorth = new Room("Reservoir North", MapStrings.DESC_RESERVOIR_NORTH, Location.RESERVOIR_NORTH);
reservoirNorth.addExit(Action.NORTH, res_north_atlantis);
reservoirNorth.addExit(Action.LAUNCH, res_north_res);
reservoirNorth.addFailMessage(Action.SOUTH, "You would drown.");

const atlantisRoom = new Room("Atlantis Room", MapStrings.DESC_ATLANTIS_ROOM, Location.ATLANTIS_ROOM);
atlantisRoom.addExit(Action.UP, atlantis_cave);
atlantisRoom.addExit(Action.SOUTH, res_north_atlantis);

const caveNorth = new Room("Cave", MapStrings.DESC_CAVE_NORTH, Location.CAVE_NORTH);
// Is this exit down or south??? Both.
caveNorth.addExit(Action.SOUTH, atlantis_cave);
caveNorth.addExit(Action.DOWN, atlantis_cave);
caveNorth.addExit(Action.NORTH, cave_mirrornorth);
caveNorth.addExit(Action.WEST, cave_twisting);

const twistingPassage = new Room("Twisting Passage", MapStrings.DESC_TWISTING_PASSAGE, Location.TWISTING_PASSAGE);
twistingPassage.addExit(Action.EAST, cave_twisting);
twistingPassage.addExit(Action.NORTH, twisting_mirror);

const mirrorRoomNorth = new Room("Mirror Room", MapStrings.DESC_MIRROR_ROOM_NORTH, Location.MIRROR_ROOM_NORTH);
mirrorRoomNorth.addExit(Action.EAST, cave_mirrornorth);
mirrorRoomNorth.addExit(Action.WEST, twisting_mirror);
mirrorRoomNorth.addExit(Action.NORTH, mirror_cold);

const coldPassage = new Room("Cold Passage", MapStrings.DESC_COLD_PASSAGE, Location.COLD_PASSAGE);
coldPassage.addExit(Action.SOUTH, mirror_cold);
coldPassage.addExit(Action.WEST, cold_slide);

const slideRoom = new Room("Slide Room", MapStrings.DESC_SLIDE_ROOM, Location.SLIDE_ROOM);
slideRoom.addExit(Action.EAST, cold_slide);
slideRoom.addExit(Action.DOWN, slide_cellar);
slideRoom.addExit(Action.NORTH, slide_mine_entrance);

const mineEntrance = new Room("Mine Entrance", MapStrings.DESC_MINE_ENTRANCE, Location.MINE_ENTRANCE);
mineEntrance.addExit(Action.SOUTH, slide_mine_entrance);
mineEntrance.addExit(Action.WEST, mine_entrance_squeaky);

const squeakyRoom = new Room("Squeaky Room", MapStrings.DESC_SQUEAKY_ROOM, Location.SQUEAKY_ROOM);
squeakyRoom.addExit(Action.EAST, mine_entrance_squeaky);
squeakyRoom.addExit(Action.NORTH, squeaky_bat);

const batRoom = new Room("Bat Room", MapStrings.DESC_BAT_ROOM, Location.BAT_ROOM);
batRoom.addExit(Action.SOUTH, squeaky_bat);
batRoom.addExit(Action.EAST, bat_shaft);

const shaftRoom = new Room("Shaft Room", MapStrings.DESC_SHAFT_ROOM, Location.SHAFT_ROOM);
shaftRoom.addExit(Action.WEST, bat_shaft);
shaftRoom.addExit(Action.NORTH, shaft_smelly);

const smellyRoom = new Room("Smelly Room", MapStrings.DESC_SMELLY_ROOM, Location.SMELLY_ROOM);
smellyRoom.addExit(Action.SOUTH, shaft_smelly);
smellyRoom.addExit(Action.DOWN, smelly_gas);

const gasRoom = new Room("Gas Room", MapStrings.DESC_GAS_ROOM, Location.GAS_ROOM);
gasRoom.addExit(Action.UP, smelly_gas);
gasRoom.addExit(Action.EAST, gas_coal_1);

const coalMine1 = new Room("Coal Mine", MapStrings.DESC_COAL_MINE_1, Location.COAL_MINE_1);
coalMine1.addExit(Action.NORTH, gas_coal_1);
coalMine1.addExit(Action.NORTHEAST, coal_1_coal_2);
coalMine1.addExit(Action.EAST, coal_1_self);

const coalMine2 = new Room("Coal Mine", MapStrings.DESC_COAL_MINE_2, Location.COAL_MINE_2);
coalMine2.addExit(Action.SOUTH, coal_1_coal_2);
coalMine2.addExit(Action.NORTH, coal_2_self);
coalMine2.addExit(Action.SOUTHEAST, coal_2_coal_3);

const coalMine3 = new Room("Coal Mine", MapStrings.DESC_COAL_MINE_3, Location.COAL_MINE_3);
coalMine3.addExit(Action.EAST, coal_2_coal_3);
coalMine3.addExit(Action.SOUTHWEST, coal_3_coal_4);
coalMine3.addExit(Action.SOUTH, coal_3_self);

const coalMine4 = new Room("Coal Mine", MapStrings.DESC_COAL_MINE_4, Location.COAL_MINE_4);
coalMine4.addExit(Action.NORTH, coal_3_coal_4);
coalMine4.addExit(Action.DOWN, coal_4_ladder_top);
coalMine4.addExit(Action.WEST, coal_4_self);

const ladderTop = new Room("Ladder Top", MapStrings.DESC_LADDER_TOP, Location.LADDER_TOP);
ladderTop.addExit(Action.UP, coal_4_ladder_top);
ladderTop.addExit(Action.DOWN, ladder_top_bottom);

const ladderBottom = new Room("Ladder Bottom", MapStrings.DESC_LADDER_BOTTOM, Location.LADDER_BOTTOM);
ladderBottom.addExit(Action.UP, ladder_top_bottom);
ladderBottom.addExit(Action.WEST, ladder_bottom_timber);
ladderBottom.addExit(Action.SOUTH, ladder_bottom_dead_end);

const deadEndCoalMine = new Room("Dead End", MapStrings.DESC_DEAD_END_COAL_MINE, Location.DEAD_END_COAL_MINE);
deadEndCoalMine.addExit(Action.NORTH, ladder_bottom_dead_end);

const timberRoom = new Room("Timber Room", MapStrings.DESC_TIMBER_ROOM, Location.TIMBER_ROOM);
timberRoom.addExit(Action.EAST, ladder_bottom_timber);
timberRoom.addExit(Action.WEST, timber_drafty);

const draftyRoom = new Room("Drafty Room", MapStrings.DESC_DRAFTY_ROOM, Location.DRAFTY_ROOM);
draftyRoom.addExit(Action.EAST, timber_drafty);
draftyRoom.addExit(Action.SOUTH, drafty_machine);

const machineRoom = new Room("Machine Room", MapStrings.DESC_MACHINE_ROOM, Location.MACHINE_ROOM);
machineRoom.addExit(Action.NORTH, drafty_machine);

const gratingRoom = new Room("Grating Room", MapStrings.DESC_GRATING_ROOM, Location.GRATING_ROOM);
gratingRoom.addExit(Action.UP, grating_clearing);
gratingRoom.addExit(Action.SOUTHWEST, maze11_grating);

const cyclopsRoom = new Room("Cyclops Room", MapStrings.DESC_CYCLOPS_ROOM, Location.CYCLOPS_ROOM);
cyclopsRoom.addExit(Action.NORTHWEST, maze15_cyclops);
cyclopsRoom.addExit(Action.EAST, cyclops_strange);
cyclopsRoom.addExit(Action.UP, cyclops_treasure);

const strangePassage = new Room("Strange Passage", MapStrings.DESC_STRANGE_PASSAGE, Location.STRANGE_PASSAGE);
strangePassage.addExit(Action.WEST, cyclops_strange);
strangePassage.addExit(Action.EAST, strange_living_room);

const treasureRoom = new Room("Treasure Room", MapStrings.DESC_TREASURE_ROOM, Location.TREASURE_ROOM);
treasureRoom.addExit(Action.DOWN, cyclops_treasure);
treasureRoom.discoverValue = NumberConstants.TREASURE_VALUE;

const maze1 = new Room("Maze", MapStrings.DESC_MAZE_1, Location.MAZE_1);
maze1.addExit(Action.EAST, troll_maze);
maze1.addExit(Action.NORTH, maze1_self);
maze1.addExit(Action.SOUTH, maze1_maze2);
maze1.addExit(Action.WEST, maze1_maze4);

const maze2 = new Room("Maze", MapStrings.DESC_MAZE_2, Location.MAZE_2);
maze2.addExit(Action.SOUTH, maze1_maze2);
maze2.addExit(Action.EAST, maze2_maze3);
maze2.addExit(Action.DOWN, maze2_maze4);

const maze3 = new Room("Maze", MapStrings.DESC_MAZE_3, Location.MAZE_3);
maze3.addExit(Action.WEST, maze2_maze3);
maze3.addExit(Action.NORTH, maze3_maze4);
maze3.addExit(Action.UP, maze3_maze5);

const maze4 = new Room("Maze", MapStrings.DESC_MAZE_4, Location.MAZE_4);
maze4.addExit(Action.WEST, maze3_maze4);
maze4.addExit(Action.NORTH, maze1_maze4);
maze4.addExit(Action.EAST, maze4_dead_end);

const maze5 = new Room("Maze", MapStrings.DESC_MAZE_5, Location.MAZE_5);
maze5.addExit(Action.NORTH, maze3_maze5);
maze5.addExit(Action.EAST, maze5_dead_end);
maze5.addExit(Action.SOUTHWEST, maze5_maze6);

const maze6 = new Room("Maze", MapStrings.DESC_MAZE_6, Location.MAZE_6);
maze6.addExit(Action.DOWN, maze5_maze6);
maze6.addExit(Action.EAST, maze6_maze7);
maze6.addExit(Action.WEST, maze6_self);
maze6.addExit(Action.UP, maze6_maze9);

const maze7 = new Room("Maze", MapStrings.DESC_MAZE_7, Location.MAZE_7);
maze7.addExit(Action.DOWN, maze7_dead_end);
maze7.addExit(Action.WEST, maze6_maze7);
maze7.addExit(Action.EAST, maze7_maze8);
maze7.addExit(Action.SOUTH, maze7_maze15);
maze7.addExit(Action.UP, maze7_maze14);

const maze8 = new Room("Maze", MapStrings.DESC_MAZE_8, Location.MAZE_8);
maze8.addExit(Action.NORTHEAST, maze7_maze8);
maze8.addExit(Action.SOUTHEAST, maze8_dead_end);
maze8.addExit(Action.WEST, maze8_self);

const maze9 = new Room("Maze", MapStrings.DESC_MAZE_9, Location.MAZE_9);
maze9.addExit(Action.NORTH, maze6_maze9);
maze9.addExit(Action.DOWN, maze9_maze11);
maze9.addExit(Action.EAST, maze9_maze10);
maze9.addExit(Action.SOUTH, maze9_maze13);
maze9.addExit(Action.WEST, maze9_maze12);
maze9.addExit(Action.NORTHWEST, maze9_self);

const maze10 = new Room("Maze", MapStrings.DESC_MAZE_10, Location.MAZE_10);
maze10.addExit(Action.EAST, maze9_maze10);
maze10.addExit(Action.UP, maze10_maze11);
maze10.addExit(Action.WEST, maze10_maze13);

const maze11 = new Room("Maze", MapStrings.DESC_MAZE_11, Location.MAZE_11);
maze11.addExit(Action.DOWN, maze10_maze11);
maze11.addExit(Action.SOUTHWEST, maze11_maze12);
maze11.addExit(Action.NORTHWEST, maze11_maze13);
maze11.addExit(Action.NORTHEAST, maze11_grating);

const maze12 = new Room("Maze", MapStrings.DESC_MAZE_12, Location.MAZE_12);
maze12.addExit(Action.EAST, maze12_maze13);
maze12.addExit(Action.UP, maze9_maze12);
maze12.addExit(Action.NORTH, maze12_dead_end);
maze12.addExit(Action.DOWN, maze12_maze5);
maze12.addExit(Action.SOUTHWEST, maze11_maze12);

const maze13 = new Room("Maze", MapStrings.DESC_MAZE_13, Location.MAZE_13);
maze13.addExit(Action.EAST, maze9_maze13);
maze13.addExit(Action.DOWN, maze12_maze13);
maze13.addExit(Action.WEST, maze11_maze13);
maze13.addExit(Action.SOUTH, maze10_maze13);

const maze14 = new Room("Maze", MapStrings.DESC_MAZE_14, Location.MAZE_14);
maze14.addExit(Action.NORTHWEST, maze14_self);
maze14.addExit(Action.WEST, maze14_maze15);
maze14.addExit(Action.NORTHEAST, maze7_maze14);
maze14.addExit(Action.SOUTH, maze7_maze14);

const maze15 = new Room("Maze", MapStrings.DESC_MAZE_15, Location.MAZE_15);
maze15.addExit(Action.WEST, maze14_maze15);
maze15.addExit(Action.SOUTH, maze7_maze15);
maze15.addExit(Action.SOUTHEAST, maze15_cyclops);

const mazeDeadEndNorth = new Room("Dead End", MapStrings.DESC_DEAD_END_MAZE_NORTH, Location.DEAD_END_MAZE_NORTH);
mazeDeadEndNorth.addExit(Action.SOUTH, maze4_dead_end);

const mazeDeadEndCenter = new Room("Dead End", MapStrings.DESC_DEAD_END_MAZE_CENTER, Location.DEAD_END_MAZE_CENTER);
mazeDeadEndCenter.addExit(Action.WEST, maze5_dead_end);

const mazeDeadEndSouthEast = new Room("Dead End", MapStrings.DESC_DEAD_END_MAZE_SOUTHEAST, Location.DEAD_END_MAZE_SOUTHEAST);
mazeDeadEndSouthEast.addExit(Action.NORTH, maze8_dead_end);

const mazeDeadEndSouthWest = new Room("Dead End", MapStrings.DESC_DEAD_END_MAZE_SOUTHWEST, Location.DEAD_END_MAZE_SOUTHWEST);
mazeDeadEndSouthWest.addExit(Action.SOUTH, maze12_dead_end);

// Dark rooms
attic.setDark(); cellar.setDark(); eastOfChasm.setDark(); gallery.setDark(); studio.setDark(); eastWestPassage.setDark();
roundRoom.setDark(); narrowPassage.setDark(); mirrorRoomSouth.setDark(); windingPassage.setDark(); caveSouth.setDark();
entranceToHades.setDark(); landOfTheDead.setDark(); engravingsCave.setDark(); domeRoom.setDark(); torchRoom.setDark();
temple.setDark(); egyptianRoom.setDark(); altarRoom.setDark(); loudRoom.setDark(); dampCave.setDark(); northSouthPassage.setDark();
chasm.setDark(); deepCanyon.setDark(); damLobby.setDark(); maintenanceRoom.setDark(); atlantisRoom.setDark(); caveNorth.setDark();
twistingPassage.setDark(); mirrorRoomNorth.setDark(); coldPassage.setDark(); slideRoom.setDark(); mineEntrance.setDark();
squeakyRoom.setDark(); batRoom.setDark(); shaftRoom.setDark(); gasRoom.setDark(); coalMine1.setDark(); coalMine2.setDark();
coalMine3.setDark(); coalMine4.setDark(); ladderTop.setDark(); ladderBottom.setDark(); deadEndCoalMine.setDark(); timberRoom.setDark();
draftyRoom.setDark(); machineRoom.setDark(); maze1.setDark(); maze2.setDark(); maze3.setDark(); maze4.setDark(); maze5.setDark();
maze6.setDark(); maze7.setDark(); maze8.setDark(); maze8.setDark(); maze10.setDark(); maze11.setDark(); maze12.setDark(); maze13.setDark();
maze14.setDark(); maze15.setDark(); mazeDeadEndCenter.setDark(); mazeDeadEndNorth.setDark(); mazeDeadEndSouthWest.setDark();
mazeDeadEndSouthEast.setDark(); gratingRoom.setDark(); cyclopsRoom.setDark(); strangePassage.setDark(); treasureRoom.setDark();

// Rooms with a dangerous height
eastOfChasm.height = true; canyonView.height = true;

// Rooms that are a body of water

let waterRooms = [ reservoir, stream, frigidRiver1, frigidRiver2, frigidRiver3, frigidRiver4, frigidRiver5 ];

for (let i = 0; i < waterRooms.length; ++i)
{
    waterRooms[i].bodyOfWater = true;
    waterRooms[i].removeFailMessage(Action.LAUNCH);
    waterRooms[i].addFailMessage(Action.LAUNCH, "You are already on the water!");
}

// Closed passages
grating_clearing.setClosed();
house_behind_kitchen.setClosed();
cellar_livingroom.setClosed();
strange_living_room.setClosed();
house_west_barrow.setClosed();
rainbow_end.setClosed();
falls_rainbow.setClosed();
dome_torch.setClosed();
hades_land_dead.setClosed();
cyclops_strange.setClosed();
cyclops_treasure.setClosed();

grating_clearing.closedFail = "The grating is closed!";
rainbow_end.closedFail = "You can't go that way.";
falls_rainbow.closedFail = "You can't go that way.";
house_behind_kitchen.closedFail = MapStrings.KITCHEN_WINDOW_CLOSED;
strange_living_room.closedFail = "The door is nailed shut.";
dome_torch.closedFail = "You cannot do gown without fracturing many bones.";
hades_land_dead.closedFail = "Some invisible force prevents you from passing through the gate.";
cyclops_strange.closedFail = "The east wall is solid rock.";
cyclops_treasure.closedFail = "The cyclops doesn't look like he'll let you past.";
maze2_maze4.message = "You won't be able to get back up to the tunnel you are going through "
    + "when it gets to the next room.";
maze9_maze11.message = "You won't be able to get back up to the tunnel you are going through "
    + "when it gets to the next room.";
cellar_livingroom.message = ObjectStrings.CYCLOPS_TRAP_DOOR;
studio_kitchen.closedFail = "Going up empty-handed is a bad idea.";
house_west_barrow.closedFail = "You can't go that way.";

// Narrow passages
studio_kitchen.weightLimit = 35;
studio_kitchen.weightFail = "You can't get up there with what you're carrying.";
altar_cave.weightLimit = 55;
altar_cave.weightFail = "You can't get down there with what you're carrying.";
timber_drafty.weightLimit = 0;
timber_drafty.weightFail = "You cannot fit through this passage with that load.";

worldMap.set(westOfHouse.roomID, westOfHouse);
worldMap.set(northOfHouse.roomID, northOfHouse);
worldMap.set(behindHouse.roomID, behindHouse);
worldMap.set(southOfHouse.roomID, southOfHouse);
worldMap.set(kitchen.roomID, kitchen);
worldMap.set(attic.roomID, attic);
worldMap.set(livingRoom.roomID, livingRoom);
worldMap.set(forestPath.roomID, forestPath);
worldMap.set(forestWest.roomID, forestWest);
worldMap.set(forestEast.roomID, forestEast);
worldMap.set(forestNortheast.roomID, forestNortheast);
worldMap.set(forestSouth.roomID, forestSouth);
worldMap.set(clearingNorth.roomID, clearingNorth);
worldMap.set(clearingEast.roomID, clearingEast);
worldMap.set(upTree.roomID, upTree);
worldMap.set(canyonView.roomID, canyonView);
worldMap.set(rockyLedge.roomID, rockyLedge);
worldMap.set(canyonBottom.roomID, canyonBottom);
worldMap.set(endOfRainbow.roomID, endOfRainbow);
worldMap.set(stoneBarrow.roomID, stoneBarrow);
worldMap.set(insideStoneBarrow.roomID, insideStoneBarrow);
worldMap.set(cellar.roomID, cellar);
worldMap.set(eastOfChasm.roomID, eastOfChasm);
worldMap.set(gallery.roomID, gallery);
worldMap.set(studio.roomID, studio);
worldMap.set(trollRoom.roomID, trollRoom);
worldMap.set(eastWestPassage.roomID, eastWestPassage);
worldMap.set(roundRoom.roomID, roundRoom);
worldMap.set(narrowPassage.roomID, narrowPassage);
worldMap.set(mirrorRoomSouth.roomID, mirrorRoomSouth);
worldMap.set(windingPassage.roomID, windingPassage);
worldMap.set(caveSouth.roomID, caveSouth);
worldMap.set(entranceToHades.roomID, entranceToHades);
worldMap.set(landOfTheDead.roomID, landOfTheDead);
worldMap.set(engravingsCave.roomID, engravingsCave);
worldMap.set(domeRoom.roomID, domeRoom);
worldMap.set(torchRoom.roomID, torchRoom);
worldMap.set(temple.roomID, temple);
worldMap.set(egyptianRoom.roomID, egyptianRoom);
worldMap.set(altarRoom.roomID, altarRoom);
worldMap.set(loudRoom.roomID, loudRoom);
worldMap.set(dampCave.roomID, dampCave);
worldMap.set(whiteCliffsBeachNorth.roomID, whiteCliffsBeachNorth);
worldMap.set(whiteCliffsBeachSouth.roomID, whiteCliffsBeachSouth);
worldMap.set(frigidRiver1.roomID, frigidRiver1);
worldMap.set(frigidRiver2.roomID, frigidRiver2);
worldMap.set(frigidRiver3.roomID, frigidRiver3);
worldMap.set(frigidRiver4.roomID, frigidRiver4);
worldMap.set(frigidRiver5.roomID, frigidRiver5);
worldMap.set(sandyCave.roomID, sandyCave);
worldMap.set(sandyBeach.roomID, sandyBeach);
worldMap.set(shore.roomID, shore);
worldMap.set(aragainFalls.roomID, aragainFalls);
worldMap.set(onTheRainbow.roomID, onTheRainbow);
worldMap.set(dam.roomID, dam);
worldMap.set(damBase.roomID, damBase);
worldMap.set(damLobby.roomID, damLobby);
worldMap.set(maintenanceRoom.roomID, maintenanceRoom);
worldMap.set(northSouthPassage.roomID, northSouthPassage);
worldMap.set(chasm.roomID, chasm);
worldMap.set(deepCanyon.roomID, deepCanyon);
worldMap.set(reservoirSouth.roomID, reservoirSouth);
worldMap.set(reservoir.roomID, reservoir);
worldMap.set(reservoirEmpty.roomID, reservoirEmpty);
worldMap.set(reservoirNorth.roomID, reservoirNorth);
worldMap.set(streamView.roomID, streamView);
worldMap.set(stream.roomID, stream);
worldMap.set(atlantisRoom.roomID, atlantisRoom);
worldMap.set(caveNorth.roomID, caveNorth);
worldMap.set(twistingPassage.roomID, twistingPassage);
worldMap.set(mirrorRoomNorth.roomID, mirrorRoomNorth);
worldMap.set(coldPassage.roomID, coldPassage);
worldMap.set(slideRoom.roomID, slideRoom);
worldMap.set(mineEntrance.roomID, mineEntrance);
worldMap.set(squeakyRoom.roomID, squeakyRoom);
worldMap.set(batRoom.roomID, batRoom);
worldMap.set(shaftRoom.roomID, shaftRoom);
worldMap.set(smellyRoom.roomID, smellyRoom);
worldMap.set(gasRoom.roomID, gasRoom);
worldMap.set(coalMine1.roomID, coalMine1);
worldMap.set(coalMine2.roomID, coalMine2);
worldMap.set(coalMine3.roomID, coalMine3);
worldMap.set(coalMine4.roomID, coalMine4);
worldMap.set(ladderTop.roomID, ladderTop);
worldMap.set(ladderBottom.roomID, ladderBottom);
worldMap.set(deadEndCoalMine.roomID, deadEndCoalMine);
worldMap.set(timberRoom.roomID, timberRoom);
worldMap.set(draftyRoom.roomID, draftyRoom);
worldMap.set(machineRoom.roomID, machineRoom);
worldMap.set(maze1.roomID, maze1);
worldMap.set(maze2.roomID, maze2);
worldMap.set(maze3.roomID, maze3);
worldMap.set(maze4.roomID, maze4);
worldMap.set(maze5.roomID, maze5);
worldMap.set(maze6.roomID, maze6);
worldMap.set(maze7.roomID, maze7);
worldMap.set(maze8.roomID, maze8);
worldMap.set(maze9.roomID, maze9);
worldMap.set(maze10.roomID, maze10);
worldMap.set(maze11.roomID, maze11);
worldMap.set(maze12.roomID, maze12);
worldMap.set(maze13.roomID, maze13);
worldMap.set(maze14.roomID, maze14);
worldMap.set(maze15.roomID, maze15);
worldMap.set(mazeDeadEndNorth.roomID, mazeDeadEndNorth);
worldMap.set(mazeDeadEndCenter.roomID, mazeDeadEndCenter);
worldMap.set(mazeDeadEndSouthWest.roomID, mazeDeadEndSouthWest);
worldMap.set(mazeDeadEndSouthEast.roomID, mazeDeadEndSouthEast);
worldMap.set(gratingRoom.roomID, gratingRoom);
worldMap.set(cyclopsRoom.roomID, cyclopsRoom);
worldMap.set(treasureRoom.roomID, treasureRoom);
worldMap.set(strangePassage.roomID, strangePassage);

// END WORLD MAP CREATION

// Add all objects to the gamestate list

// sceptre.isWeapon = true;
// axe.isWeapon = true;
// sword.isWeapon = true;
// knife.isWeapon = true;
// rustyKnife.isWeapon = true;

const gameItemEntries = Object.entries(gameItems);
for (const gameItem in gameItemEntries) {
    objectList.set(gameItem.name, gameItem);
}

objectList.set(gameItems.bar.name, gameItems.bar);
objectList.set(gameItems.bauble.name, gameItems.bauble);
objectList.set(gameItems.chalice.name, gameItems.chalice);
objectList.set(gameItems.coffin.name, gameItems.coffin);
objectList.set(gameItems.coins.name, gameItems.coins);
objectList.set(gameItems.canary.name, gameItems.canary);
objectList.set(gameItems.diamond.name, gameItems.diamond);
objectList.set(gameItems.egg.name, gameItems.egg);
objectList.set(gameItems.emerald.name, gameItems.emerald);
objectList.set(gameItems.jade.name, gameItems.jade);
objectList.set(gameItems.painting.name, gameItems.painting);
objectList.set(gameItems.pot.name, gameItems.pot);
objectList.set(gameItems.sapphire.name, gameItems.sapphire);
objectList.set(gameItems.scarab.name, gameItems.scarab);
objectList.set(gameItems.sceptre.name, gameItems.sceptre);
objectList.set(gameItems.skull.name, gameItems.skull);
objectList.set(gameItems.torch.name, gameItems.torch);
objectList.set(gameItems.trident.name, gameItems.trident);
objectList.set(gameItems.trunk.name, gameItems.trunk);

// These are here just so they'll be listen in the "right" order
objectList.set(gameItems.sack.name, gameItems.sack);
objectList.set(gameItems.sword.name, gameItems.sword);

objectList.set(gameItems.ancientMap.name, gameItems.ancientMap);
objectList.set(gameItems.axe.name, gameItems.axe);
objectList.set(gameItems.bell.name, gameItems.bell);
objectList.set(gameItems.blackBook.name, gameItems.blackBook);
objectList.set(gameItems.boatLabel.name, gameItems.boatLabel);
objectList.set(gameItems.bottle.name, gameItems.bottle);
objectList.set(gameItems.brokenCanary.name, gameItems.brokenCanary);
objectList.set(gameItems.brokenEgg.name, gameItems.brokenEgg);
objectList.set(gameItems.buoy.name, gameItems.buoy);
objectList.set(gameItems.candles.name, gameItems.candles);
objectList.set(gameItems.coal.name, gameItems.coal);
objectList.set(gameItems.deflatedBoat.name, gameItems.deflatedBoat);
objectList.set(gameItems.garlic.name, gameItems.garlic);
objectList.set(gameItems.guideBook.name, gameItems.guideBook);
objectList.set(gameItems.gunk.name, gameItems.gunk);
objectList.set(gameItems.hotBell.name, gameItems.hotBell);
objectList.set(gameItems.inflatedBoat.name, gameItems.inflatedBoat);
objectList.set(gameItems.lantern.name, gameItems.lantern);
objectList.set(gameItems.leaflet.name, gameItems.leaflet);
objectList.set(gameItems.leafPile.name, gameItems.leafPile);
objectList.set(gameItems.lunch.name, gameItems.lunch);
objectList.set(gameItems.knife.name, gameItems.knife);
objectList.set(gameItems.matchbook.name, gameItems.matchbook);
objectList.set(gameItems.nest.name, gameItems.nest);
objectList.set(gameItems.pump.name, gameItems.pump);
objectList.set(gameItems.puncturedBoat.name, gameItems.puncturedBoat);
objectList.set(gameItems.rope.name, gameItems.rope);
objectList.set(gameItems.ruinedPainting.name, gameItems.ruinedPainting);
objectList.set(gameItems.rustyKnife.name, gameItems.rustyKnife);
objectList.set(gameItems.screwdriver.name, gameItems.screwdriver);
objectList.set(gameItems.shovel.name, gameItems.shovel);
objectList.set(gameItems.skeletonKey.name, gameItems.skeletonKey);
objectList.set(gameItems.stiletto.name, gameItems.stiletto);
objectList.set(gameItems.studioPaper.name, gameItems.studioPaper);
objectList.set(gameItems.timber.name, gameItems.timber);
objectList.set(gameItems.tube.name, gameItems.tube);
objectList.set(gameItems.uselessLantern.name, gameItems.uselessLantern);
objectList.set(gameItems.wrench.name, gameItems.wrench);

objectList.set(gameItems.air.name, gameItems.air);
objectList.set(gameItems.altar.name, gameItems.altar);
objectList.set(gameItems.atticTable.name, gameItems.atticTable);
objectList.set(gameItems.brokenMirror.name, gameItems.brokenMirror);
objectList.set(gameItems.buttonBlue.name, gameItems.buttonBlue);
objectList.set(gameItems.buttonYellow.name, gameItems.buttonYellow);
objectList.set(gameItems.buttonBrown.name, gameItems.buttonBrown);
objectList.set(gameItems.buttonRed.name, gameItems.buttonRed);
objectList.set(gameItems.carpet.name, gameItems.carpet);
objectList.set(gameItems.chasmObj.name, gameItems.chasmObj);
objectList.set(gameItems.coalMachine.name, gameItems.coalMachine);
objectList.set(gameItems.coalMachineSwitch.name, gameItems.coalMachineSwitch);
objectList.set(gameItems.damBolt.name, gameItems.damBolt);
objectList.set(gameItems.damBubble.name, gameItems.damBubble);
objectList.set(gameItems.deadGate.name, gameItems.deadGate);
objectList.set(gameItems.engravings.name, gameItems.engravings);
objectList.set(gameItems.forest.name, gameItems.forest);
objectList.set(gameItems.gas.name, gameItems.gas);
objectList.set(gameItems.grating.name, gameItems.grating);
objectList.set(gameItems.ground.name, gameItems.ground);
objectList.set(gameItems.house.name, gameItems.house);
objectList.set(gameItems.houseBoards.name, gameItems.houseBoards);
objectList.set(gameItems.houseExteriorDoor.name, gameItems.houseExteriorDoor);
objectList.set(gameItems.houseExteriorWindow.name, gameItems.houseExteriorWindow);
objectList.set(gameItems.houseWindow.name, gameItems.houseWindow);
objectList.set(gameItems.kitchenTable.name, gameItems.kitchenTable);
objectList.set(gameItems.mailbox.name, gameItems.mailbox);
objectList.set(gameItems.mazeObj.name, gameItems.mazeObj);
objectList.set(gameItems.mirror.name, gameItems.mirror);
objectList.set(gameItems.mountains.name, gameItems.mountains);
objectList.set(gameItems.pedestal.name, gameItems.pedestal);
objectList.set(gameItems.railing.name, gameItems.railing);
objectList.set(gameItems.rainbow.name, gameItems.rainbow);
objectList.set(gameItems.reservoirWater.name, gameItems.reservoirWater);
objectList.set(gameItems.riverWater.name, gameItems.riverWater);
objectList.set(gameItems.sand.name, gameItems.sand);
objectList.set(gameItems.self.name, gameItems.self);
objectList.set(gameItems.shaftBasket.name, gameItems.shaftBasket);
objectList.set(gameItems.shaftChain.name, gameItems.shaftChain);
objectList.set(gameItems.skeleton.name, gameItems.skeleton);
objectList.set(gameItems.streamWater.name, gameItems.streamWater);
objectList.set(gameItems.templeInscription.name, gameItems.templeInscription);
objectList.set(gameItems.trapDoor.name, gameItems.trapDoor);
objectList.set(gameItems.trophyCase.name, gameItems.trophyCase);
objectList.set(gameItems.toolChests.name, gameItems.toolChests);
objectList.set(gameItems.vitreousSlag.name, gameItems.vitreousSlag);
objectList.set(gameItems.water.name, gameItems.water);
objectList.set(gameItems.woodenDoor.name, gameItems.woodenDoor);

objectList.set(gameItems.cyclops.name, gameItems.cyclops);
objectList.set(gameItems.damFlow.name, gameItems.damFlow);
objectList.set(gameItems.flood.name, gameItems.flood);
objectList.set(gameItems.gustOfWind.name, gameItems.gustOfWind);
objectList.set(gameItems.riverCurrent.name, gameItems.riverCurrent);
objectList.set(gameItems.songbird.name, gameItems.songbird);
objectList.set(gameItems.spirits.name, gameItems.spirits);
objectList.set(gameItems.swordGlow.name, gameItems.swordGlow);
objectList.set(gameItems.thief.name, gameItems.thief);
objectList.set(gameItems.troll.name, gameItems.troll);
objectList.set(gameItems.vampireBat.name, gameItems.vampireBat);
// console.log('IIII', gameItems.vampireBat.name);
// console.log('BBBB', objectList.keys());

function createObjectNameMap()
{
    objectNameMap.clear();

    console.log('AAAA', objectList.keys());

    // doing this, since 'objectList.forEach' isn't working for me
    Array.from(objectList.keys()).forEach(key => {
        const obj = objectList.get(key);

        console.log('xxx', obj);

        objectNameMap.set(key, obj);

        for (let name of obj.altNames)
        {
            objectNameMap.set(name, obj);
        }
    });

    // objectList.forEach((obj, key) => {
    //     console.log('NNNN', key, obj);
    //     objectNameMap.set(key, obj);

    //     for (let name of obj.altNames)
    //     {
    //         objectNameMap.set(name, obj);
    //     }
    // });

    objectNameMap.set("lamp", gameItems.lantern);
    objectNameMap.set("lantern",  gameItems.lantern);
    objectNameMap.set("book",  gameItems.blackBook);
    objectNameMap.set("brass bell",  gameItems.bell);
    objectNameMap.set("bell",  gameItems.bell);

}


createObjectNameMap();

function fillDictionary(dictionary)
{
    for (let i = 0; i < GAME_WORDS.length; ++i)
    {
        dictionary.add(GAME_WORDS[i]);
    }

    for (let name of objectList.keys())
    {
        dictionary.add(name);
        gameNouns.add(name);

        let words = name.split(" ");
        for (let i = 0; i < words.length; ++i)
        {
            dictionary.add(words[i]);
            gameNouns.add(words[i]);
        }
    }

    for (let g of objectList.values())
    {
        for (let str of g.altNames)
        {
            dictionary.add(str);
            gameNouns.add(str);

            let words = str.split(" ");
            for (let i = 0; i < words.length; ++i)
            {
                dictionary.add(words[i]);
                gameNouns.add(words[i]);
            }
        }
    }

    for (let str of actions.keys())
    {
        let words = str.split(" ");
        for (let i = 0; i < words.length; ++i)
            dictionary.add(words[i]);
    }

    return dictionary;
}

export {
    dummyObject, ambiguousMap, currentObjects, currentObjectNames,
    objectNameMap, fillDictionary, worldMap, objectList, gameItems
};
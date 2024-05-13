export const presetInfos = {
  logic: {
    logic_mode: {
      name: "Logic Mode",
      description: [
        "Normal        - Standard gameplay, no tricky item use or glitches. If unsure, choose this.",
        "Hard          - Adds tricks that aren't technically glitches. Lamp + Net considered as weapons. No glitches.",
        "Glitched      - Includes the above plus a selection of easy-to-learn glitches.",
        'Adv. Glitched - Includes the above plus "advanced" glitches that may be a challenge to master.',
        "Hell          - Includes every known RTA-viable glitch, including the insane ones. Don't choose this.",
        "No Logic      - Items are placed with no logic at all. Seeds are likely to not be completable.",
      ],
      choises: ["Normal", "Hard", "Glitched", "AdvGlitched", "Hell", "NoLogic"],
      adder: 1,
    },
    randomize_dungeon_prizes: {
      name: "Randomize Dungeon Prizes",
      description: [
        "This shuffles all Sage Portraits, Pendants, and the Charm among themselves.",
      ],
      type: Boolean,
    },
    vanilla_charm: {
      name: "Vanilla Charm",
      description: [
        "Enabling this forces one of the two Pendant of Courage Upgrades to be in Zelda's Throne Room.",
        "Otherwise, a random Sage Portrait or Pendant will be placed in Zelda's Throne Room.",
      ],
      type: Boolean,
    },
    lc_requirement: {
      name: "Lorule Castle Requirement",
      description: [
        "Choose how many Portraits are needed to enter Lorule Castle and fight Yuganon:",
      ],
      min: 0,
      max: 7,
    },
    ped_requirement: {
      name: "Pedestal Requirement",
      description: [
        "Choose which Pendants are required to reach the Master Sword Pedestal:",
        "Vanilla  - Only the Pendants of Power and Wisdom are required",
        "Charmed  - All three Pendants are required, but Charm may substitute for the Pendant of Courage",
        "Standard - All Pendants are required",
      ],
      choises: ["Vanilla", "Charmed", "Standard"],
      adder: 2,
    },
    hyrule_castle_setting: {
      name: "Hyrule Castle Setting",
      description: [
        "Choose how the Dungeon portion of Hyrule Castle should be handled:",
        "Early Lorule Castle - Completing Hyrule Castle allows early access to Lorule Castle via the Trial's Door.",
        "Closed              - The Dungeon is closed off completely, and removed from all logic.",
      ],
      choises: ["EarlyLoruleCastle", "Closed"],
      adder: 1,
    },
    nice_mode: {
      name: "Shuffle Nice Items",
      description: [
        "This shuffles a second progressive copy of each Ravio Item into the general item pool.",
      ],
      type: Boolean,
    },
    super_items: {
      name: "Shuffle Super Items",
      description: [
        "This shuffles a second progressive copy of the Lamp and Net into the general item pool.",
      ],
      type: Boolean,
    },
    reverse_sage_events: {
      name: "Reverse Sage Events",
      description: [
        "Ties Sage-related checks and events to actually rescuing that Sage.",
        "Makes the following changes:",
        "- Irene => Unlocks the Irene check (instead of Pendant of Courage)",
        "- Rosso => Unlocks Rosso's House and his two checks (instead of Pendant of Courage)",
        "- Oren  => Unlocks the Smooth Gem check and the Shady Guy Event",
        "- Impa  => Unlocks the front door to Hyrule Castle",
      ],
      type: Boolean,
    },
    no_progression_enemies: {
      name: "No Progression Enemies",
      description: [
        "Removes Enemies from dungeons that are themselves Progression (e.g.: Bawbs, the bomb enemy).",
        "Logic will be adjusted to require the player's items instead.",
      ],
      type: Boolean,
    },
    start_with_merge: {
      name: "Start with Merge",
      description: [
        "Start with the ability to Merge into walls, without Ravio's Bracelet.",
      ],
      type: Boolean,
    },
    bell_in_shop: {
      name: "Bell in Shop",
      description: ["If enabled the Bell will be placed in Ravio's Shop."],
      type: Boolean,
    },
    pouch_in_shop: {
      name: "Pouch in Shop",
      description: ["If enabled the Pouch will be placed in Ravio's Shop."],
      type: Boolean,
    },
    sword_in_shop: {
      name: "Sword in Shop",
      description: [
        "If enabled at least one Sword will be placed in Ravio's Shop.",
        "Note: This option is incompatible with Swordless Mode, which removes all Swords from the game.",
      ],
      type: Boolean,
    },
    boots_in_shop: {
      name: "Boots in Shop",
      description: [
        "If enabled the Pegasus Boots will be placed in Ravio's Shop.",
      ],
      type: Boolean,
    },
    assured_weapon: {
      name: "Assured Weapon in Shop",
      description: [
        "If enabled at least one weapon is guaranteed to be placed in Ravio's Shop.",
      ],
      type: Boolean,
    },
    maiamai_madness: {
      name: "Maiamai Madness",
      description: [
        "This shuffles Maiamai into the pool, adding 100 more locations.",
      ],
      type: Boolean,
    },
    minigames_excluded: {
      name: "Exclude Minigames",
      description: [
        "Excludes the following: Octoball Derby, Dodge the Cuccos, Hyrule Hotfoot, Treacherous Tower, and both Rupee Rushes",
      ],
      type: Boolean,
    },
    skip_big_bomb_flower: {
      name: "Skip Big Bomb Flower",
      description: [
        "Skips the Big Bomb Flower by removing the 5 Big Rocks in Lorule Field.",
        "(Does not affect Lorule Castle Bomb Trial)",
      ],
      type: Boolean,
    },
    skip_trials: {
      name: "Skip Trials",
      description: ["Automatically opens the Lorule Castle Trials door."],
      type: Boolean,
    },
    bow_of_light_in_castle: {
      name: "Bow of Light in Castle",
      description: [
        "Limits the Bow of Light's placement to somewhere in Lorule Castle (including possibly Zelda).",
      ],
      type: Boolean,
    },
    weather_vanes_activated: {
      name: "Pre-Activated Weather Vanes",
      description: [
        "Begin the game with all Weather Vanes activated.",
        "The logic may expect players to use the Bell to reach otherwise unreachable locations this way.",
        "Note: Trackers do not currently support this feature.",
      ],
      type: Boolean,
    },
    dark_rooms_lampless: {
      name: "Dark Room Crossing (advanced)",
      description: [
        "If enabled the logic may expect players to cross Dark Rooms without the Lamp.",
        "Not for beginners and those who like being able to see things.",
      ],
      type: Boolean,
    },
    swordless_mode: {
      name: "Swordless Mode (advanced)",
      description: [
        "Removes *ALL* Swords from the game.",
        "The Bug Net becomes a required item to play Dead Man's Volley against Yuga Ganon.",
      ],
      type: Boolean,
    },
    hint_ghost_price: {
      name: "Hint Ghost Price",
      description: [
        "Set the price of Hints from a Hint Ghost:",
        "Recommended Price: 30",
      ],
      min: 0,
      max: 9999,
    },
  },
  options: {
    chest_size_matches_contents: {
      name: "Chest Size Matches Contents",
      description: [
        "All chests containing progression or unique items will become large, and others will be made small.",
        "Note: Some large chests will have a reduced hitbox to prevent negative gameplay interference.",
      ],
      type: Boolean,
    },
    night_mode: {
      name: "Night Mode",
      description: [
        "Enables certain shaders on the overworld that make it look like nighttime in Hyrule.",
      ],
      type: Boolean,
    },
  },
};

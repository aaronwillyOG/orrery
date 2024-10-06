const planets = {
    //       [Name,         size,  dist sol,  orbit,  x coord, y coord, radius, sAngle, eAngle, colour,     textColour]
    sun:     ["Sun",        15,    0,         0,      375,     375,     30,     0,      2,      "yellow",   "black"],
    mercury: ["Mercury",    1,     2,         88,     335,     375,     5,      0,      2,      "silver",   "yellow"],
    venus:   ["Venus",      2,     4,         225,    305,     375,     10,     0,      2,      "purple",   "yellow"],
    earth:   ["Earth",      2.5,   6,         365,    275,     375,     12,     0,      2,      "green",    "white"],
    mars:    ["Mars",       1.25,  8,         687,    245,     375,     10,     0,      2,      "red",      "white"],
    jupiter: ["Jupiter",    27.5,  10,        4331,   205,     375,     20,     0,      2,      "orange",   "black"],
    saturn:  ["Saturn",     24.75, 12,        10747,  155,     375,     18,     0,      2,      "moccasin", "black"],
    uranus:  ["Uranus",     0,     0,         0,      105,     375,     16,     0,      2,      "aqua",     "black"],
    neptune: ["Neptune",    0,     0,         0,      55,      375,     12,     0,      2,      "blue",     "white"]
};

const properties = {
    canvasName: "orrery",
    canvasContext: "2d",
    canvasWidth: 750,
    canvasHeight: 750
};
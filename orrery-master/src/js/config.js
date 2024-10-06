const planets = {
    //       [Name,         size,  dist sol,  orbit,  x coord, y coord, radius, sAngle, eAngle, colour,     textColour]
    sun:     ["Sun",        15,    0,         0,      775,     775,     30,     0,      2,      "yellow",    "black"],
    mercury: ["Mercury",    1,     1.5,         88,     750,     750,     5,      0,      2,      "silver",    "white"],
    venus:   ["Venus",      2,     3,         225,    740,     740,     10,     0,      2,      "purple",    "white"],
    earth:   ["Earth",      2.5,   4.5,         365,    650,     650,     12,     0,      2,      "blue",    "white"],
    mars:    ["Mars",       1.25,  6,         687,    600,     600,     10,     0,      2,      "red",      "white"],
    jupiter: ["Jupiter",    27.5,  7.5,        4331,   550,     550,     20,     0,      2,      "orange",    "white"],
    saturn:  ["Saturn",     24.75, 9,        10747,  500,     500,     18,     0,      2,      "moccasin",  "white"],
    uranus:  ["Uranus",     2,     10.5,         500,  450,     450,     16,     0,      2,      "aqua",     "white"],
    neptune: ["Neptune",    3,     12,         2000,  400,     400,     12,     0,      2,      "blue",     "white"]
};

const properties = {
    canvasName: "orrery",
    canvasContext: "2d",
    canvasWidth: 1550,
    canvasHeight: 1500
};

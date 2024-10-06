function main() {
    const c = initCanvas();
    animate(c);  // Start the animation loop
    generateStars(c);

    for (let p in planets) {
        drawOrbit(c, planets[p]);
        drawPlanet(c, planets[p]);
    }
    infoTable()
}

function initCanvas() {
    const canvas = document.getElementById(properties.canvasName);
    canvas.width = 1000;
    canvas.height = 1000;
    var ctx = canvas.getContext(properties.canvasContext);
    return ctx;
}

// Function to update planet positions based on time
function updatePlanetPosition(planet, time) {
    // Ensure orbit time isn't zero to avoid division by zero
    const orbitTime = planet[3] || 1;  
    const distanceFromSun = planet[2]; // Distance from the sun (dist sol)
    const angle = (time / orbitTime) * 2 * Math.PI;  // Calculate angle based on orbit time
    
    // Update planet x and y positions using trigonometry for orbit
    planet[4] = planets.sun[4] + distanceFromSun * 50 * Math.cos(angle); // Update x position, scale by 50
    planet[5] = planets.sun[5] + distanceFromSun * 50 * Math.sin(angle); // Update y position, scale by 50
}

function animate(c) {
    const time = Date.now() * 0.001;  // Get current time in seconds
    
    // Clear the canvas before each frame
    c.clearRect(0, 0, c.canvas.width, c.canvas.height);

    // Generate stars once (they don’t move)
    generateStars(c);

    // Draw the sun (it doesn’t move)
    drawPlanet(c, planets.sun);
    
    // Update and draw each planet
    for (let p in planets) {
        if (p !== "sun") {
            updatePlanetPosition(planets[p], time);  // Update planet position based on orbit time
            drawOrbit(c, planets[p]);  // Draw orbit path
            drawPlanet(c, planets[p]);  // Draw the planet
        }
    }
    
    // Call `animate` again on the next frame
    requestAnimationFrame(() => animate(c));
}

function generateStars(c) {
    var x, y = Math.random();
    var dia = c.canvas.clientWidth;

    for (; y < dia; y++) {
        for (x = Math.random(); x < dia; x++) {
            c.fillStyle = "white";
            c.fillRect(
                (Math.floor(Math.random() * c.canvas.clientWidth) * (200 * Math.random())), 
                (Math.floor(Math.random() * c.canvas.clientHeight) * (150 * Math.random())), 1, 1
            );
        }
    }
}

// Draw planet and its label
function drawPlanet(c, planet) {
    drawArc(c, planet[4], planet[5], planet[6], planet[7], planet[8], planet[9], planet[0], planet[10]);
}

// Draw circular orbit around the sun
function drawOrbit(c, planet) {
    if (planet[0] !== 'Sun') {
        c.beginPath();
        // Use planet[2], which is the distance from the sun, as the radius for the orbit
        c.arc(planets.sun[4], planets.sun[5], planet[2] * 50, 0, 2 * Math.PI);  // Multiply by 50 to scale the orbits
        c.lineWidth = 1;
        c.strokeStyle = "white";
        c.stroke();
    }
}

// Function to draw an arc representing the planet's body
function drawArc(c, x, y, r, sAngle, eAngle, colour, name, textColour) {
    c.fillStyle = colour;
    c.beginPath();
    c.arc(x, y, r, sAngle, eAngle * Math.PI);
    c.fill();
    c.font = '20pt Arial';
    c.fillStyle = textColour;
    c.textAlign = 'center';
    c.fillText(name, x, y);
}

// Generate info table in HTML
function infoTable() {
    var info = document.getElementById('info-table');
    info.innerHTML += `
    <tr>
        <th>Planet</th>
        <th>Size</th>
        <th>Distance from Sun</th>
        <th>Time for orbit</th>
        <th>Colour</th>
    </tr>
    `;
    for (let p in planets) {
        info.innerHTML += 
        "<tr>"+
           "<td>"+planets[p][0]+"</td>" +
           "<td>"+planets[p][1]+"</td>" +
           "<td>"+planets[p][2]+"</td>" +
           "<td>"+planets[p][3]+"</td>" +
           "<td>"+planets[p][9]+"</td>" + 
        "</tr>";
    }
}

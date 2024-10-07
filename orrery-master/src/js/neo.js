const neos = [
    { name: "NEO1", size: 2, distanceFromEarth: 0.05 }, // distance from Earth in AU
    { name: "NEO2", size: 1, distanceFromEarth: 0.07 },
    { name: "NEO3", size: 3, distanceFromEarth: 0.10 },
];

function drawNEOs() {
    const canvas = document.getElementById('neoCanvas');
    canvas.width = 750;
    canvas.height = 750;
    const c = canvas.getContext('2d');

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // Positioning Earth for reference in the middle of the canvas
    const earthX = canvas.width / 2; // Earth position on X
    const earthY = canvas.height / 2; // Earth position on Y
    const earthSize = 80; // Increased size for Earth representation

    // Draw Earth
    c.fillStyle = 'blue';
    c.beginPath();
    c.arc(earthX, earthY, earthSize, 0, 2 * Math.PI);
    c.fill();
    c.fillStyle = 'white';
    c.fillText("Earth", earthX, earthY - earthSize - 5);

    neos.forEach((neo, index) => {
        // Position the NEOs around Earth in a circular pattern
        const angle = (index / neos.length) * 2 * Math.PI; // Spread them evenly around a circle
        const distance = (neo.distanceFromEarth / 0.1) * 50; // Scale the distance for visualization
        const x = earthX + (distance + earthSize) * Math.cos(angle); // Add Earth's size to distance
        const y = earthY + (distance + earthSize) * Math.sin(angle); // Add Earth's size to distance

        const size = neo.size * 5; // Scale the size for visibility

        // Draw the NEO
        c.beginPath();
        c.arc(x, y, size, 0, 2 * Math.PI);
        c.fillStyle = 'white';
        c.fill();

        // Draw the NEO's name
        c.fillStyle = 'yellow';
        c.fillText(neo.name, x, y - size - 5);
    });
}

window.onload = drawNEOs;

const neos = [
    { name: "NEO1", size: 2, distance: 0.05 },
    { name: "NEO2", size: 1, distance: 0.07 },
    { name: "NEO3", size: 3, distance: 0.02 },
];

function drawNEOs() {
    const canvas = document.getElementById('neoCanvas');
    canvas.width = 750;
    canvas.height = 750;
    const c = canvas.getContext('2d');

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    neos.forEach(neo => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = neo.size * 10;  // Scale the size for visibility

        c.beginPath();
        c.arc(x, y, size, 0, 2 * Math.PI);
        c.fillStyle = 'white';
        c.fill();

        c.fillStyle = 'yellow';
        c.fillText(neo.name, x, y - size - 5);
    });
}

window.onload = drawNEOs;

const input = `
0,0,0,0
3,0,0,0
0,3,0,0
0,0,3,0
0,0,0,3
0,0,0,6
9,0,0,0
12,0,0,0
`;

function manhattanDistance(point1, point2) {
    return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]) + Math.abs(point1[2] - point2[2]) + Math.abs(point1[3] - point2[3]);
}

const points = input.trim().split('\n').map(line => line.split(',').map(Number));

const constellations = [];

for (const point of points) {
    let joinedConstellations = [];

    for (const constellation of constellations) {
        for (const cPoint of constellation) {
            if (manhattanDistance(cPoint, point) <= 3) {
                joinedConstellations.push(constellation);
                break;
            }
        }
    }


    if (joinedConstellations.length === 0) {
        constellations.push([point]);{}
    } else if (joinedConstellations.length === 1) {
        joinedConstellations[0].push(point);
    } else {
        const mergedConstellations = joinedConstellations.flat();
        mergedConstellations.push(point);
        constellations.push(mergedConstellations);
        constellations = splice(constellations.indexOf(joinedConstellations[0]), 1);
    }
}

console.log(`Number of constellations: ${constellations.length}`);


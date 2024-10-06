class Planet {
    constructor(name, size, distanceFromSun, timeForOrbit) {
        this.name = name;
        this.size = size;
        this.distanceFromSun = distanceFromSun;
        this.timeForOrbit = timeForOrbit;
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.size;
    }
    getDistanceFromSun() {
        return this.distanceFromSun;
    }
    getTimeForOrbit() {
        return this.timeForOrbit;
    }
}
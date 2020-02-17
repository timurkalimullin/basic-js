module.exports = function calculateHanoi(disks, turnRate) {
    let obj = {};

    turnRate = turnRate/3600;

    let turns = Math.pow(2,disks)-1;
    obj.turns = turns;

    let seconds = turns/turnRate;

    
    obj.seconds = seconds;

    return obj;
}


module.exports = function calculateHanoi(disks, turnRate) {
    let obj = {};

    turnRate = turnRate/3600;

    obj.turns = Math.pow(2,disks)-1;
    
    obj.seconds = obj.turns/turnRate;

    return obj;
}


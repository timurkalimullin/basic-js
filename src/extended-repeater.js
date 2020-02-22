module.exports = function repeater(str,{repeatTimes, separator = "+", addition, additionRepeatTimes, additionSeparator = "|"}){
    let addBlock = [],
        finalBlock = [];
    

    if (String(addition).length>0) {
        if (additionRepeatTimes>0) {
            while (additionRepeatTimes) {
                addBlock.push(addition===null?"null":String(addition));
                additionRepeatTimes--;
            } 
        } else { addBlock.push(addition)}
    }

    str = String(str) + addBlock.join(additionSeparator);
    
    if (repeatTimes>0) {
        while (repeatTimes) {
            finalBlock.push(str);
            repeatTimes--;
        }
    } else {finalBlock.push(str)};
    
    return finalBlock.join(separator)
};
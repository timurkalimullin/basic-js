module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {throw Error};
    const mod = {disn: "--discard-next", disp:"--discard-prev", dbn:"--double-next", dbp:"--double-prev"};

    let mas = [];
    
     for (let i=0; i<arr.length; i++) {
        if (arr[i] == mod.dbn) {
            if (i!=arr.length-1) {mas.push(arr[i+1])} ;
        }
        else if (arr[i] == mod.disn) {
          
            i++;
        }
        else if (arr[i] == mod.dbp) {
            if (i!=0) {mas.push(arr[i-1])} ;
        }
        else if (arr[i] == mod.disp) {
            if (i!=0) {mas.pop()};
        } else {mas.push(arr[i])}
    }
    return mas;
};


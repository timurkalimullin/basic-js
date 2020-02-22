module.exports = class DepthCalculator {
  calculateDepth(arr, depth) {
    let temp = 1;
            
    if (!Array.isArray(arr)) return 0;

        for ( let i of arr) {
        depth = 1 + this.calculateDepth(i); 
        temp<depth?temp=depth:temp;
        } 
    return temp;    
    }
};
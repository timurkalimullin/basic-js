module.exports = function countCats(arr) {
  let count = 0;
   for (let i in arr) {
    for (let j of arr[i]) {
      if (j =="^^") {
        count++;
      }
    }
   }
   return count;
};


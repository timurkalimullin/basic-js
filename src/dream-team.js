module.exports = function createDreamTeam(arr) {
  let result =[];

  if (Array.isArray(arr)) {
    for (let i of arr) {
      if (typeof(i) == "string" && /^[a-z\s_]+$/i.test(i))  {
          result.push(i);
      }
    } 
  } else {return false}
  let res=[];
  for (i of result) {
      res.push((i.match(/\S/)[0]))
  }
  res = res.map(i => i.toUpperCase());

  return res.sort().join("");
};
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(final) {
  let res ;
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof(final)=="string" && parseFloat(final)>0 && parseFloat(final)<=15 ) {
    res = (Math.log(15 / parseFloat(final)))/ k;
    res =  Math.ceil(res);}
  else {
    return false;
 }
 return res;
};




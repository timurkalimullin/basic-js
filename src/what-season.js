module.exports = function getSeason(dateValue) {
  if (dateValue == undefined || !dateValue.toDateString()) {return "Unable to determine the time of year!"};
  let seas = dateValue.getMonth();
  return seas< 2 || seas >10?"winter":seas<5?"spring":seas<8?"summer":"autumn";
};

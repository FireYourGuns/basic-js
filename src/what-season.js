const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (date === undefined) {
  return "Unable to determine the time of year!"
}

var month = date.getMonth();


    if ([11, 0, 1].includes(month)) {
        return 'winter'
    } 
    if ([2, 3, 4].includes(month)) {
      return 'spring'
    } 
    if ([5, 6, 7].includes(month)) {
      return 'summer'
    } 
    if ([8, 9, 10].includes(month)) {
      return 'autumn'
    }

    throw new Error('Неправильно введена дата')
};
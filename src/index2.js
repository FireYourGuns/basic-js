function getSeason(date) {
  
  if (date === undefined) {
    return "Unable to determine the time of year!"
  }
 /* if (isNAN(date)) {
    throw new Error('Неправильно введена дата')
  }*/

 var month = date.getMonth();
 
  
      if ([0, 1, 2].includes(month)) {
          return 'winter'
      } 
      if ([3, 4, 5].includes(month)) {
        return 'spring'
      } 
      if ([6, 7, 8].includes(month)) {
        return 'summer'
      } 
      if ([9, 10, 11].includes(month)) {
        return 'autumn'
      }
  
      throw new Error('Неправильно введена дата')
};

//const springDate = new Date(1354, 4, 17, 11, 27, 4, 321)
console.log(      getSeason(new Date(2019, 11, 22, 23, 45, 11, 500))      )
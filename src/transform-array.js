const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (arr.length == 0) {
    return []
  };
  if (!Array.isArray(arr)) {
    throw new Error('Введено не верное значение!')
  }

  var new_Array = [];
  var X = arr.length;
      for (var i = 0; i < X; i++) {
        

          if (arr[i] === '--double-next') {
            if (i+1 < X) {
              new_Array.push(arr[i+1]);
            }
          }  else

          if (arr[i] === '--discard-prev') {
            if (arr[i-2] !== '--discard-next') {
            new_Array.pop();
            }
          }  else

          if (arr[i] === '--discard-next') {
              i += 1;
                if (i >= X) {
                  break
                }
          }  else

          if (arr[i] === '--double-prev') {
                 
                if (arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
                new_Array.push(arr[i-1]);
              }
              
          }  else {
            new_Array.push(arr[i]);
            }
          
         
      }
return new_Array;
};

const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var new_Array = [];
  var X = arr.length;
      for (var i = 0; i < X; i++) {
        new_Array.push(arr[i]);
          if (arr[i] === '--double-next') {
            arr[i+1] == undefined ? new_Array.pop() : new_Array[i] = arr[i+1]
          } 
          if (arr[i] === '--discard-prev') {
            new_Array.pop();
            new_Array.pop();
          }
          if (arr[i] === '--discard-next') {
            new_Array.pop();
          }
           if (arr[i-1] === '--discard-next') {
            new_Array.pop();
          }
          if (arr[i] === '--double-prev') {
            if (arr[i-1] !== undefined) {
                if (arr[i-2] !=='--discard-next') {
                                new_Array.push(new_Array[new_Array.length-1]);
                }
            }
            new_Array.pop();
              
              
            // ? new_Array.pop() : new_Array[i] = arr[i-1]
          }
         
      }
return new_Array;
};

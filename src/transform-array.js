const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var new_Array = [];
  var X = arr.length;
      for (var i = 0; i < X; i++) {
          if (arr[i] === '--double-next' && arr[i+1]) {
            new_Array.push(arr[i]);
            new_Array[i] = arr[i+1];
          } else 
          if (arr[i] === '--discard-prev' && arr[i-1]) {
            new_Array.pop();
          } else
          if (arr[i] === '--discard-next' && arr[i+1]) {
            i+= 1;
          } else
          if (arr[i] === '--double-prev' && arr[i-1]) {
            new_Array.push(arr[i-1]);
          } else {
            new_Array.push(arr[i]);
          }
      }
return new_Array;
};

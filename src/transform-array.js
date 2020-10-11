const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var new_Array = [];
    var X = arr.length;
        for (var i = 0; i < X; i++) {
          new_Array.push(arr[i]);
            if (arr[i] === '--double-next') {
              new_Array[i] = arr[i+1];
            }
            if (arr[i] === '--discard-prev') {
              new_Array.pop();
              new_Array.pop();
            }
            if (arr[i] === '--discard-next') {
              new_Array.pop();
              i+= 1;
            }
            if (arr[i] === '--double-prev') {
              new_Array[i] = arr[i-1];
            }
        }
return new_Array;
};

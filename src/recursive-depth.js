const CustomError = require("../extensions/custom-error");
var Depth = 1;
module.exports = class DepthCalculator {
  calculateDepth(arr) {
      for (var i = 0; i < arr.length; i++) {
          if (arr[i].constructor === Array) {
            Depth += 1;
            calculateDepth(arr[i]);
          } else {
            return Depth;
            }
          
      }
      
  }
};
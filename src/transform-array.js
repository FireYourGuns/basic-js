const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  throw new RangeError('Error');
  // remove line with error and write your code here
};

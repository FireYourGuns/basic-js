const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    throw new RangeError('Error');
    // remove line with error and write your code here
  },
  addLink(value) {
    throw new RangeError('Error');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new RangeError('Error');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new RangeError('Error');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new RangeError('Error');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;

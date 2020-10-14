const CustomError = require("../extensions/custom-error");
var Depth = 1;
module.exports = class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.count = 1;
  }
      calculateDepth(arr) {
          arr.forEach(element => {
              if (Array.isArray(element)) {     // если проверка "element.length !== undefined" выдаст 
                  this.count++;                 // ошибку при наличии 'строки' в массиве
                  this.calculateDepth(element);
              }
          });

          if (this.count > this.depth) {
            this.depth = this.count;
          }
      this.count = 1;
      return this.depth;
      }
      
};
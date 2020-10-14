class DepthCalculator {
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



console.log(        new DepthCalculator().calculateDepth(    [1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]   )    )
         
       /*
    calculateDepth(deep_Arr) {
        for (var i = 0; i < deep_Arr.length; i++) {
          this.vspom_Depth = 1;
          this.pomogator(deep_Arr[i]);
        }
        return this.depth;
    }

    pomogator(arr) {
      if (arr.length !== undefined) {
              this.vspom_Depth++;
              arr.forEach(element => {
                  this.pomogator(element);
              });
      } else {
        if (this.vspom_Depth > this.depth) {
          this.depth = this.vspom_Depth;
        }
      }
    }*/
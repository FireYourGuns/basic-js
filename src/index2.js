function transform(arr) {

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
            if (arr[i+1] !== undefined) {
              new_Array.push(arr[i+1]);
            }
          }  

          if (arr[i] === '--discard-prev') {
            new_Array.pop();
          }  

          if (arr[i] === '--discard-next') {
              i += 2;
              if (i >= X) {break}
          }  

          if (arr[i] === '--double-prev') {
              if (arr[i-2] === '--discard-next') {
                i += 2;
              }
              if (arr[i-1] !== undefined) {
                new_Array.push(arr[i-1]);
              }
              
          }  

          if (arr[i] !== '--double-next' && arr[i] !== '--discard-next'
              && arr[i] !== '--double-prev' && arr[i] !== '--discard-prev') {
            new_Array.push(arr[i]);
            }
          
         
      }
return new_Array;
};

console.log(    transform(  [ 3.14 ]  )      )
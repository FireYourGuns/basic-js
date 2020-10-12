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

console.log(    transform(["--discard-next",1.233,"--double-prev",false,"--double-next",0,
"--discard-next",8.963,"--discard-prev"])     )


console.log(    transform(["--discard-next",1.233,"--double-prev",false,"--double-next",0,
                           "--discard-next",8.963,"--discard-prev","somebody","told","me",
                           "--double-next","GHI","--discard-next",0,
                           "--discard-next",3.14,
                           "--double-next",false,22,"GHI",3.14,"GHI","GHI",1,"DEF",false,
                           "--discard-next"])     )
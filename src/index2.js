function createDreamTeam(arr) {
  if (arr === null) {return false}  
  if (!Array.isArray(arr)) {return false}
  if (arr.length == 0) {return false}
  
  var name="";
  var str = "";

    for (var i = 0; i < arr.length; i++) {
      var Y = "";
      Y += arr[i]; 
        str += Y.split("").splice(0,1);
    }
  var X = str.split("").sort();
  if (X === undefined || X === []) {return false}   //
  for (i = 0; i < X.length; i++) {
    var Z = X[i];
    if (isNaN(Z)) {
      name += X[i];
    }
  }

return name.toUpperCase();
};

console.log(    createDreamTeam(    {'foo': 'bar'}   )     )



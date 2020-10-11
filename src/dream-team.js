const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (arr === undefined || arr === []) {return false}   //
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
    if (X[i] === X[i].toUpperCase() && isNaN(Z)) {
      name += X[i];
    }
  }

return name;
};

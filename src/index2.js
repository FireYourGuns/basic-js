function createDreamTeam(arr) {
  if (arr === null) {return false}  
  if (!Array.isArray(arr)) {return false}
  if (arr.length == 0) {return false}

  var name="";
  var str = "";

    for (var i = 0; i < arr.length; i++) {
      var Y = "";
      Y += arr[i]; 
      if (typeof arr[i] === 'string') {
        
        str += Y.split("").splice(Y.search(/[A-Za-z]/g),1);
        var H = str.toUpperCase()
      }
        
    }
    
  var X = H.split("").sort();
  if (X === undefined || X === []) {return false}   //
  for (i = 0; i < X.length; i++) {
    var Z = X[i];
    if (isNaN(Z)) {
      name += X[i];
    }
  }

return name.toUpperCase();
};

console.log(    createDreamTeam(    [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]   )     )



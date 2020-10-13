function repeater(str, options) {
  var answer = str;
  var aRT = "";
 
  if (!options.separator && !options.addition && !options.additionsRepeatTimes) {
    for (var i = 1; i < options.repeatTimes; i++)  {
      answer += "+" + str
    }
      
    return answer
  }

  if (!options.addition && !options.additionsRepeatTimes) {
    for (var i = 1; i < options.repeatTimes; i++)  {
      answer += options.separator + str
    }
      
    return answer
  }



  //вычисляем "aRT" ---------
  if (options.addition && options.additionSeparator) {
    for (var l = 0; l < options.additionRepeatTimes-1; l++) {
      aRT += options.addition + options.additionSeparator
    }
                                      //aRT += options.addition; // к "aRT" добавляем "а"
  }  
  // ------------

 // вычисление строки
  if (options.repeatTimes > 0 || options.repeatTimes==undefined) {
      for (let i = 1; i < options.repeatTimes; i++ ) {
          answer += aRT + options.addition + options.separator + str;
      }
      answer += aRT + options.addition
  }
  // ----------

    return answer;
};

console.log(         repeater    ('аГуСиК ', { repeatTimes: 3, separator: '♥♥♥  ', addition: ' пОкАкУнЬкАл ', additionRepeatTimes: 5, additionSeparator: '( ͡° ͜ʖ ͡°)' })      )
         
         'TESTstrADD!'
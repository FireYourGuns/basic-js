const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var answer = str;
  var aRT = "";
  if (options.addition===false) {
    options.addition = 'false'
  }
  if (options.addition===null) {
    options.addition = 'null'
  }
 
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

/*
  var answer = str;
  if (options.repeatTimes > 1) {
      for (let i = 1; i < options.repeatTimes; i++ ) {
        if (options.addition && options.additionRepeatTimes) {
            answer += options.addition + options.separator + str;
          } else
          if (options.separator) {
            answer += options.separator + str ;
          } else {
          answer += "+" + str;
          }
      }
  }
  if (options.addition) {
        answer += options.addition
      }
    return answer;*/
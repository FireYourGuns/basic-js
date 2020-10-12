function repeater(str, options) {
  var answer = str;
  if (options.repeatTimes > 1) {
      for (let i = 1; i < options.repeatTimes; i++ ) {
          if (options.separator) {
            answer += options.separator + str ;
          } else {
          answer += "+" + str;
          }
          
      }
  }
    return answer;
};

console.log(      repeater('la', { repeatTimes: 3, separator: 's' })      )
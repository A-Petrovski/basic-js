const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var result = [];
  options.separator = options.separator || '\+';
  options.additionSeparator = options.additionSeparator || '|';
  options.repeatTimes = options.repeatTimes || 1;
  for ( var i = 0; i < options.repeatTimes; i++) {
    result.push(str);
    for ( var j = 0; j < options.additionRepeatTimes; j++ ){
      result.push(options.addition);
      if ( j - 1 < options.additionRepeatTimes && options.additionRepeatTimes !== 1)  result.push(options.additionSeparator);
    }
    if (i -1 < options.repeatTimes) result.push(options.separator)
  }
  return result.join('') + ' -->' + options.repeatTimes + ' ' + options.separator + ' ' + options.additionRepeatTimes + ' ' +String(options.additionSeparator);
};
  
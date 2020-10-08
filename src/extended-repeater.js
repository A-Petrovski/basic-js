const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var result = [];
  options.separator = options.separator || '\+';
  options.additionSeparator = options.additionSeparator || '|';
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  str = (typeof str === 'string') ? str : String(str);
  options.addition = (typeof options.addition === 'string') ? options.addition : String(options.addition);
  for ( var i = 0; i < options.repeatTimes; i++) {
    if (str) result.push(str);
    for ( var j = 0; j < options.additionRepeatTimes; j++ ){
      if (options.addition &&  options.addition !== 'undefined') result.push(options.addition);
      if ( j +1 < options.additionRepeatTimes && options.additionRepeatTimes !== 1)  result.push(options.additionSeparator);
    }
    if (i+1 < options.repeatTimes) result.push(options.separator)
  }
  return result.join(''); 
  //return result.join('') + ' -->' + options.repeatTimes + ' ' + options.separator + ' '+ options.addition+ ' ' + options.additionRepeatTimes + ' ' +String(options.additionSeparator);
};
  
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(typeof date === 'undefined') return 'Unable to determine the time of year!';
  if(isNaN(date.getTime())) throw new Error('THROWN');
  switch (date.getMonth()) {
    case 0:
      return 'winter';      
      break;
    case 1:
      return 'winter';      
      break;
    case 2:
      return 'spring';      
      break;
    case 3:
      return 'spring';      
      break;
    case 4:
      return 'spring';      
      break;
    case 5:
      return 'summer';      
      break;
    case 6:
      return 'summer';      
      break;
    case 7:
      return 'summer';      
      break;
    case 8:
      return 'fall';      
      break;
    case 9:
      return 'fall';      
      break;
    case 10:
      return 'fall';      
      break;
    case 11:
      return 'winter';      
      break;
    default:
      break;
  }

};

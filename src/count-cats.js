const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here


  return Number([].concat(...matrix).reduce((acc, item) => acc + ((item === '^^') ? 1 : 0) ,0 ));
  
};

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    var result = 1;
    var deep = [];
    if ( arr === [] ) return result;

    arr.forEach(item => Array.isArray(item) ? deep.push(this.calculateDepth(item)): result );
    result += deep.length != 0 ? Math.max(...deep) : 0;
    return result;
  }
};
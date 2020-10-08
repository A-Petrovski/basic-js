const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [], 
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.result.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
       this.result.push('' + value);
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (position < 1 || position > this.result.length) {
      this.result =[];
      throw new Error();    
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.result.reverse();
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    var main = '( ' + this.result.join( ' )~~( ' ) + ' )';
    this.result =[];
    return main;
  }
};

module.exports = chainMaker;

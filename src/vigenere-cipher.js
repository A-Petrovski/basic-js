const CustomError = require("../extensions/custom-error");
const CODE_A = 65;
const LENGTH_ALPHABET = 26;
class VigenereCipheringMachine {
  constructor (type){
    this.reverseType = type === false;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error()
  }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let flag = 0;
  key = key.toUpperCase().split('').map( item => item.charCodeAt(0) - CODE_A );
  message = message.toUpperCase().split('').map( (item,i) => (/[A-Z]/.test(item)) ? String.fromCharCode((item.charCodeAt(0) - CODE_A + key[(i - flag) % key.length]) % LENGTH_ALPHABET + CODE_A) : (flag++, item));
  return this.reverseType ? message.reverse().join('') : message.join('');


  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error()
  }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let flag = 0;
    key = key.toUpperCase().split('').map( item => item.charCodeAt(0) - CODE_A );
    message = message.toUpperCase().split('').map( (item,i) => (/[A-Z]/.test(item)) ? String.fromCharCode((item.charCodeAt(0) - CODE_A +LENGTH_ALPHABET - key[(i - flag) % key.length]) % LENGTH_ALPHABET + CODE_A) : (flag++, item));
    return this.reverseType ? message.reverse().join('') : message.join('');




  }
}

module.exports = VigenereCipheringMachine;

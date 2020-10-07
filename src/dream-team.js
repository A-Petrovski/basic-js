const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false; // don't understand
  return members.filter(item => typeof item === 'string').reduce((acc,item) => acc + item.trim()[0], '').toUpperCase().split('').sort().join('');
 
};

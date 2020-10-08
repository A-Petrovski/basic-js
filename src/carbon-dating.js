const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string' ||  parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY || isNaN(parseFloat(sampleActivity))) return false;
  return Math.ceil(Math.log10(MODERN_ACTIVITY/Number(sampleActivity))*HALF_LIFE_PERIOD/0.693);
};

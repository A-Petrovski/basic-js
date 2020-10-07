const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) throw new Error('ERROR');


    var index = arr.findIndex(item => (item === '--discard-next' || item === '--discard-prev' || item === '--double-next' || item === '--double-prev'));
    if ( index === -1 )return arr;
    var result = [];
    var flag = 0;
    var flagI = 0;

    for ( var i = 0; i < arr.length ; i++ ){
      switch (arr[i]) {
        case '--double-next':
          if (i+1 < arr.length) result.push(arr[i+1]);
          break;
        case '--double-prev':
          if (i > 0 ) result.push(arr[i-1]);
          if (i > 1  && arr[i-2] === '--discard-next')
            result.pop();
          break;
        case '--discard-next':
          if (i+1 < arr.length) i++;
          break;
        case '--discard-prev':
          if (i > 0 && arr[i-2] !== '--discard-next') result.pop();
          break;
        default:
          result.push(arr[i]);
          break;
      }
    }
    return result;

    
/*
      if ( arr[i] === '--double-next' && i+1 < arr.length){
        result.push(arr[i+1]);
        flag++;
      }
      if ( arr[i] === '--double-next' && i+1 === arr.length) flag++;
      if ( arr[i] === '--double-prev' && i > 0 ) {
        result.push(arr[i-1]);
        flag++;
      }
      if ( arr[i] === '--double-prev' && i > 1  && arr[i-2] === '--discard-next') {
        result.pop(); 
      }
      if ( arr[i] === '--double-prev' && i === 0 ) flag++;
      if ( arr[i] === '--discard-next' && i+1 < arr.length) {
        flagI++;
        flag++;
      }
      if ( arr[i] === '--discard-next' && i+1 === arr.length) flag++;
      if ( arr[i] === '--discard-prev' && i > 0) { 
        result.pop();  
        flag++;
      }
      if ( arr[i] === '--discard-prev' && i === 0) flag++;
      if (flag === 0) result.push(arr[i]);
      else flag = 0;
      i += flagI;
      flagI = 0;
    }
    */
   
};

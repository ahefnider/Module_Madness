var randomNum = require('./module1');

var dollaredNumber = function() {
  var number = '$' + randomNum.toLocaleString();
  return number;
}
module.exports = dollaredNumber;

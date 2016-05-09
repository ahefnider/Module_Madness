var dollaredNumber = require('./module2');

var accountBalance = function() {
  return "Account balance\n" + dollaredNumber();
}
module.exports = accountBalance;

var randomNum = randomNumber(100, 1000000);

  //random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};
module.exports = randomNum;

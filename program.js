var play = require("./dice");
var dice = play.game; 
dice.size = 10;
console.log(dice.roll());
console.log(dice.roll());
console.log(dice.roll());
console.log("the total number of rolls is "+ dice.totalroll);
console.log(dice);
// new line added 
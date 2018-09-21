var moment = require('moment');

var date = moment();

console.log(date.format('MMM Do, YYYY hh:mm:ss A'));

console.log(date.format('h:mm a'));

var createdAt = 999345668899;
var date2 = moment(createdAt);
console.log(date2.format('MMM Do, YYYY hh:mm:ss A'));
   
var sometimeStamp = moment().valueOf();
console.log(sometimeStamp);
 
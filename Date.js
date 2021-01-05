
console.log('New Date', new Date());

console.log('new Date(0)', new Date(0));

const moonLanding = new Date('July 20, 69 00:20:18');
console.log('Moon Landing Date', moonLanding);
console.log('date.getFullYear()', moonLanding.getFullYear()); //4 digits
console.log('date.getMonth()', moonLanding.getMonth());   // 0 to 11
console.log('date.getDate()', moonLanding.getDate()); //20
console.log('date.getHours()', moonLanding.getHours()); // 0
console.log('date.getMinutes()', moonLanding.getMinutes()); // 20
console.log('date.getSeconds()', moonLanding.getSeconds()); //18
console.log('date.getMilliseconds()', moonLanding.getMilliseconds()); // 0
console.log('date.getDay()', moonLanding.getDay()); // 0 to 6 (Sunday to  Saturday)
console.log('date.getTime()', moonLanding.getTime()); // a number of milliseconds passed from the January 1st of 1970 UTC+0.
console.log('date.getTimezoneOffset()', moonLanding.getTimezoneOffset()); // Returns the difference between UTC and the local time zone, in minutes:
console.log('Date.parse("2012-01-26T13:51:50.417-07:00")', Date.parse('2012-01-26T13:51:50.417-07:00')); // timestamp else Invalid returns NaN


// Date becomes timestamp when converted in number
//getter fucntions are usually more optimized. Ex: date difference  and getTime



// TO DO
// UTC ?
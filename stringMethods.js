let str = 'Thisi5 sate1 tst5ingh1';
console.log('destruct', ...str);
console.log('charAt', str.charAt(1000) ); 
for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

console.log( str.indexOf('sate1') );
let pos= 0
//count how many a target repeated in a string
console.log('str.length', str.length);
while (pos < str.length+1) {
    let foundPos = str.indexOf('s', pos);
    if (foundPos == -1) break;
  
    console.log( `Found at ${foundPos}` );
    pos = foundPos + 1; // continue the search from the next position
}
let [firstName, surname] = "Ilya Kantor".split(' ');
console.log('firstName', firstName);
console.log('surname', surname);
let user = new Map();
user.set("name", "John");
user.set("age", "30");
for (let [key, value] of user.entries()) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

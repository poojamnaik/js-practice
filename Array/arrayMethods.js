let array = [1,2, 5,8];
// Push -- returns length of array
const push = array.push(10); 
log(['Array :: Push', push, array])

// Pop -- returns popped value
const pop = array.pop();
log(['Array :: Pop', pop,  array])

// Shift - returns deleted item
const shift = array.shift();
log(['Array :: shift', shift, array])

// unShift - returns length of array
const unshift = array.unshift(1); // if empty nothing
log(['Array :: unshift', unshift, array])

const splice = array.splice(1, 3, 200, 67) //index+1, length, elementsToInsert
log(['Array :: splice', splice, array])

const slice1 = array.slice(2, 4) //index+1, length, elementsToInsert
log(['Array :: slice1', slice1, array])

const slice = array.slice(1, 4) //index+1, length, elementsToInsert
log(['Array :: slice', slice, array])


function log(message){
    console.log(...message);
}


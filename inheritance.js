

console.log(`
********************************************************************************************************

Searches for property in self and then fetches from parent
If the property of teh parent is changed after setting proto child will pick parent proto 
Change in one object referencing the same parent doesnot affect the other object
Multilevel inheritance allowed, not multiple
Cannot change by assigning to property of parent
Create a property in child given its not accessor, wil bother looking in proto only if accessor 
Can set only accessor functions. 
Accessor copy is created and changes in local object and will only affect child property
this will always refer to the child object calling the parent object in the accessor
Cannot change or delete property form parent
Object.keys returns only child object property
for..in of the parent and child object
to check if the property is inherited or not use obj.hasOwnProperty('propertyName')


new empty obj has obj.toString() how ?
When a new Object is created, the __prototype__ of it is set to Object.prototype
Object doesnot have any __proto__ and  gives null

Native prototypes : built in contructor fucntions, ie native fucntions, have prototypes
Other built in objects also have there own __proto__ like Array, Number, Function
Array , Fucntions etc have theer own toString function
strings , numbers and booleans are not objects but temporary warpper objects are created using built in constructors String, Number etc.
They provide methods and disappear.

native prototypes can be modified but not encouraged except for pollyfills case
Values null and undefined have no object wrappers
We can inherit only one obj at a time so can inherit only once. ---?



we 
********************************************************************************************************

Refer code to understand illustrations below:

********************************************************************************************************`)


  // Parent object

  let creature = {
    planet: 'Earth',
    species: 'earthDwellers',

    set location(countryContinent) {
      [this.country, this.continent] = countryContinent.split(' ');
      // console.log('Before changing species', species); // trying to access species will throw error because itl search for a normal local var
      console.log('Before changing species', this.species); // Will not throw error
      species = 'localSpecies'; // will only set a normal local var
      console.log('Before changing species', species); // will show the val of local var
      console.log('Before changing species', this.species); // Will show the value of the child object var
    },

    get location() {
      return `${this.country} ${this.continent}`;
    },
  };


  // Child object 1
  // creates copy of the parent objet and stores in child proto
  let snake = {
    __proto__: creature,
    isExtinct: false,
  };

  console.log(`
--------------------------------------------------
** Searches for property in self and then fetches from parent **
    `);
  console.log('snake.planet:: ', snake.planet); 
  console.log(`
--------------------------------------------------
** If the property of teh parent is changed after setting proto child will pick parent proto **
`);
    creature.planet = 'planetEarth';
    console.log('snake.planet:: ', snake.planet); 

  console.log(`
  --------------------------------------------------
  ** Change in one object referencing the same parent doesnot affect the other object **
  `);
  
      // Child object 2
      let bird = {
          __proto__: creature,
          isExtinct: false,
        };
      
  bird.planet = 'birdPlanet';
  console.log('snake.planet',snake.planet );
    

  console.log(`
  --------------------------------------------------
  ** Multilevel inheritance allowed**
  `);
  let lizard = {
      __proto__ :snake
  }
  console.log('lizard.species', lizard.species)


  console.log(`
--------------------------------------------------
** Cannot change by assigning to property of parent
   Create a property in child given its not accessor, wil bother looking in proto only if accessor **
  `);
  // Cannot change by assigning to property of parent
  snake.planet = 'AnotherEarth'; // this will create a property in child given its not accessor, wil bother looking in proto only if accessor
  console.log('snake.planet:: ', snake.planet); 
  console.log('creature.planet:: ', creature.planet); 
  

  console.log(`
--------------------------------------------------
** Can set only accessor functions. 
   Accessor copy is created and changes in local object and will only affect child property **
** this will always refer to the child object calling the parent object in the accessor **
  `);
  // Can set only accessor functions which will affect only the child property
  // accessor copy is created and changes in local object
  snake.location = 'Asia India'
  console.log('snake.location:: ', snake.location);
  console.log('creature.location:: ', creature.location);
  console.log('snake.species', snake.species);
  console.log('creature.species', creature.species);

  console.log(`
--------------------------------------------------
** Cannot change or delete property form parent **
`);
  // Cannot change or delete property form parent
  delete snake.planet;
  console.log('snake.planet::  ', snake.planet);

  // Cannot change or delete property form parent
  delete snake.isExtinct;
  console.log('snake.isExtinct::  ', snake.isExtinct);



  let obj = {};

console.log(obj.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString == Object.prototype.toString


console.log(Object.prototype.__proto__); // null



let arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
console.log( arr.__proto__.__proto__.__proto__ ); // null

// then from Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

String.prototype.show = function() {
  console.log(this);
};

"BOOM!".show(); // BOOM!

// We can burrow from method from one oject to others
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert( obj.join(',') ); // Hello,world!
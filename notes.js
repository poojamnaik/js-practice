// 'use strict';
// console.log('**Welcome to Javascript World**\n**Enter your name and a number to show factorial no using anonymous fucntion as a property of a variable');
var input=[] ;
var count=0;
var name="Mital"
var a=2;
main(name,a);
process.stdin.on('data', function (data) {
    let input = String(data).split(new RegExp("[\n ]+"));
    if(count<2){
        main(input[0], +(input[1]), +(input[2]));
    }
    else{
        count++;
    } 
});
function readLine() { return input; }

function main(name, a) { 
    count++; console.log('**Functions**'); 
console.log('Fibonacci= ' + fibonacciVariable(a)); // 0 1 1 2 3 5 8 13 21.... 
console.log('Factorial= ' + factorialVariable.factorialProperty(a));
/** 
// Normal Smaple function sample(); function sample(){ console.log("\nNormal fucntion called by code."); } 
// IIFE --Imediately Invoked Fucntion Expression 
(function iife(){ console.log('\nIIFE : Doesnot require trigger') })();
 // Function Expression 
 var var_Fucn= function(){ console.log('Var Fucntion '); } 
 console.log('\nvar_Fun : ' + var_Fucn); console.log('\n"var_Fun()" : '+var_Fucn()); 
 */ 
// Fucntion, Method and variable 
obj_name ={ 
    attr_name:'Mac', 
    meth_name:function(){ 
        console.log('Mac of this Object : '+this.attr_name) 
        } 
        } 
        var var1_fucn=obj_name.meth_name(); 
        // obj_name.attr_name. 
        var var2_fucn=obj_name.meth_name; 
        console.log('ob_name.met_name'+obj_name.meth_name); // console.log('var1_fun' + var1_fucn ); // console.log('var2_fun' + var2_fucn ); // console.log('ob_name.met_name() : '+obj_name.meth_name()); // console.log('var1_fun()' + var1_fucn() ); // console.log('var2_fun()' + var2_fucn() );/*** function talk(){ console.log('\nthis.bark : '+ this.bark); } var sound={ bark:'Woof', speak:talk }
 talk();//Will call bark which it doensot know where it references let talkFucn=talk.bind(sound)//Will bind to object talkFucn();//Woof sound.speak();//Woof
 function soundMade(){ 
     console.log(this.sound); 
     // console.log(this); 
    } 
    let boromir= { sound:'originalSound', makeSound:soundMade } 
    let Gollum= { sound:"GHHHOOLLLUMMM", badSound:boromir.makeSound } 
    boromir.makeSound(); 
    soundMade();  //Error soundMade.bind(boromir)(); //originalSound 
    Gollum.badSound();//GHHHOOLLLUMMM
    console.log('\n\n******prototype *****');
    function getHouse(){ 
            console.log(this.head); 
        } 
    let hogwarts={ getHouse, house:'Gryffindor' }
    let harry= { head:"Dumbledore" } 
    Object.setPrototypeOf(harry,hogwarts) //TO set the property getHouse which is property of another object harry.getHouse(); console.log(harry.house);

 */// }
 /**
  //anonymous function as a variablevar factorialVariable = { 
      // property of the factorial variable is a named factorial method factorialProperty: //Named fucntion function factorialMethod(a) { while (a > 1) { //dont decrement the value using unary,retain the orignal value return a * factorialMethod(a - 1); } return a; }}//Unnamed fucntion(Anonymous fucntion)// var fibonacciVariable = function fibonacciVariable(a) { if (a > 1) { //dont decrement the value using unary,retain the orignal value return fibonacciVariable(a - 1) + fibonacciVariable(a - 2); } if (a == 0) { return 0; } if (a == 1) { return 1; } */ console.log('isNaN : '+ isNaN(null));}

//Type anntations 
// What we'll approach here: 
-Constants  && variables
-Enumarations && Constant Enumaration
-Union Types 
-Literal Types
-Insertion Types
-Array and typing 
-Tuple Types
-Dictionary Types 
-Mapped Types 
-Type Assertions
-Type Guards 
-Discriminarted Unions
-Destructuring && Spreading 


#Starting with const and variables ;
Don't bother about the phrases unquoted !

// Conststants are variables that follow the scope rule of the let  keyword, but tha cannot be reassigner. 
// When you declare a variable with  eh const keyword.

Example 1.1 (Contants and type annotations)
const name  = 'noname';
If you try reassign this variable the outcome will be the following: 
name = 'Jessica'
// Error! Cannot assign to name because it is a constant
const digits = [1,3,5];//the way we're cah
digits.push(4,5,6)

//typing annotations: 
//primitive type annotation 
let sayHello:(name:string|any) => string|any //function  annotation with parameter and return type annotation
sayHello = function(name){
    return name;
}//implementation

let person:{ name:string,color:string,age:number}//object type annotation;
person = {name:'Jessica',color:'brown',age:23}//implementation
interface Person{
    name:string;
    age:number;
    married:boolean;
}// interface annotation 
type PersonT = {
    person:Person
}
let samey:Person | PersonT = {
    ...person,
    married:false
}

/**
    Primitive types 

        -strings 
        -boolean 
        -number
        -symbol

        special types 
        -undefined 
        -null 
        -void
        -never
        -unknown
    #Object and dynamic types

*/

// Enumerations 

 enum Vehicle{
     pedal,
     motor,
     car,
     bus
 }
 enum status{
     PENDING='PENDING',
     DONE='DONE',
     STOPPED= 'STOPPED'
 }

 const enum genre{
     male =1,
     female=2
 }
//the above declaration was how we can declare enumerations 


//Union types 
/**
A union type widens the allowable values by specifying that the value can be of more than a single type. 
*/
let union: never | unknown|void |undefined ;
let func: ()=>string| string|number;
let obj:{name:string,id:number} | {id:number|string}[]
let arr:Array<string>|[string|number]
let err: Error | Promise<string|boolean|number>

//Using literal types instead enumeration ;

type Status = 'Done'|'IN_PROGRESS'|'STOPPED';
let projectStatus:Status = 'Done';
let fibo = 1|2|3|5|8|13;

//Insertion types 
/***
Unlike union typing Intersection types combine seveal different types into a single supertype that includes 
the member from all participating types.
*/

interface Skier{
    slide(): void;
}
interface Shooter{
    shoot(): void;
}
type Both = Skier & Shooter;
let which: Both;
which.shoot();
which.slide();

// now which variable holds both shoot and slide function 



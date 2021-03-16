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
let syHello:(name:string|any) => string|any //function  annotation with parameter and return type annotation
let person:{ name:string,color:string,age:number}//object type annotation;
interface Person{
    name:string;
    age:number;
    married:boolean;
}// interface annotation 
type PersonT = {
    person:Person
}

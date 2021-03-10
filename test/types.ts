// import * as Rxjs from './rxjs';
const enum animals{
  watery,
  earthy,
  air,
}
enum DiscFlags {
  None = 0,
  Drive = 1,
  Influence = 2,
  Steadiness = 4,
  Conscientnousness = 8
}
const enum VehicleType{
  PedalCycle,
  MotorCycle,
  Car,
  Van,
  Bus,
  Lorry
}

enum Quissangua {
  white ,
  yellow
}
enum Hair{

}

enum Health {

}
// union types onts 
var QuissanguaPromisse:string  | Promise<Quissangua>;
 type white  = Quissangua.white;
  type yellow = Quissangua.yellow;
let QuissanguaTypes:white | yellow;
 type joinded = Quissangua | white | string | boolean ;
 type ErrorProne = Error | any;
 type HealthState = Health;
 type HairStyle = Hair;
 
 var human_bein: HairStyle & HealthState & white;
console.log(Quissangua.yellow);
// litteral types 

type kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia';
type fibonacci = 1 | 2 | 3 | 5| 8 | 13;
var Fibonacci:fibonacci;
var Kingdom:kingdom = 'Bacteria';
console.log(Kingdom);

// Intersection type 
interface Skier { 
  slide: ()=>void | void;
}
interface Shooter{
  shoot():void;
}

interface Men{
name:string;
dick:void;
hair;
}
interface Fish {
rear:string
}
var fishMan:Men & Fish;
var outSourced: Skier & Shooter;

// that upside was The intersction type where you can create an intersaction point that everyone may find each ones
// using everything to creat arrays 


interface Monument{
  name:string;
  heightInMeters:number;
}

const monuments:Monument[] = [ {
  name:'dani',
  heightInMeters:43
},{
  name:'jessica',
  heightInMeters:53
}
]
// another way to do that is using another type annotation like 

const mon:Array<Monument[]> = [ monuments];
// using tupple type it allows you to create allowed type 'cause here you'll be setting up the allowed types
let rabbit:[Hair,HealthState];
let student:[string,number,boolean]=
['name',32,false];
//

// here's one of my favs 
// Dictionary types 
interface Cephalopod {
  hasInk:boolean;
  arms:number;
  tentacle:number;
}
interface CephalopodDictionary{
  [index:string]: Cephalopod;
}

let dictionary:CephalopodDictionary = {};
dictionary['octopus vulgaris'] = {hasInk:true,arms:8,tentacle:0};

interface Animals{
  name:string;
  size:number;
}

interface animalDictionary{
  [index:string]:Animals;
}
var a:NodeList;

// using dictionary to simulate enum functions

interface Flags {
  name:string;
  timestamp:Date;
  enumeration:DiscFlags;
}

interface flagDictionary{
  [index:number]:Flags;
}

// var flags:flagDictionary;
// flags[1] = {name:'',timestamp:Date.now(),enumeration:DiscFlags.Conscientnousness}
// delete flags[1]
// using mapped types



interface Options{
  material:string;
  backligth:boolean;
}
// Manally created readonly interface
interface ManualReadonlyOptions{
  readonly materia:string;
  readonly backlight:boolean;
}

// Manually created  optional interface 
interface ManualOptionalOptions{
  material?:string;
  backlight?:string;
}

// Manually created  nullable interface 

interface ManualNullableOptions{
  material:string | null;
  backlight:string | null;
}

// the main idea behind Mapped type is avoid repetition  doing so 
// embedding all in one 

type readonly<T> = {readonly [k in keyof T ]:T[k]; }
type Optional<T> = { [k in keyof T]?: T[k];};
type Nullable<T> = { [k in keyof T]: T[k] | null}
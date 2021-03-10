Exporting
how do we deal with this in old js

function messsage(text){
  function printMessage(){
    return text;
  }
  return {
    print: printMessage,
    echo:()=>{return text}
    log:()=>console.log(text)
  }
}

and how do I import this to use

var msg = message('Myname');
msg.print();
msg.echo()
msg.log()
//this is how we dealt with fake modules in old js


in ES6 to deal with this is a bit different :

export var text = "Name here";
export let name = "texthaer";
export const cox = 6;
export married = false;


export function add(a,b){
  return a+b;
}

function mutliply(a,b){
  return a*b;
}
export {multiply};

exporting functions as a default one

export default function format(text){
  return "welcome "+text;
}

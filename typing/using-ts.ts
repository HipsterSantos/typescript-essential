var input1 = document.querySelector('#num1')! as HTMLInputElement;
var input2 = document.querySelector('#num2')! as HTMLInputElement;
var button = document.querySelector('.btn');

function add(num1:number,num2:number):number{
    return  (num1+num2) ;
}
button.addEventListener('click',()=>{
    console.log(add( input1.value,input2.value ));
}

)


function reverse<T,B extends string | number>(list: T[]): B | T[]{
    const reversedList: T[] = [];
    for(let i = (list.length -1); i>= 0 ; i--){
        reversedList.push(list[i]);
    }

    return reversedList;
}

const letters = ['a','b','c','d'];
const reversedLetters = reverse<string,number>(letters);
// generic interfaces

class CustomerId{
    constructor(private customerIdValue: number){
    }

    get value(){
        return this.customerIdValue;
    }

}

class Customer{
    constructor(public id: CustomerId,public name: string){
    }
}

interface Repository<T, TId>{
    getById(id: TId):T;
    persist(model: T):TId;
}

class CustomerRepositorty implements Repository<Customer,CustomerId>{
    constructor(private customer: Customer[]){}
    getById(id: CustomerId){
        return  this.customer[id.value];
    }

    persist(customer:Customer){
        this.customer[customer.id.value] = customer;
        return customer.id;
    }
}

const repo: CustomerRepositorty = new CustomerRepositorty(
    [ new Customer(new CustomerId(3),"name "),
      new Customer(new CustomerId(5),"name "),
      new Customer(new CustomerId(34),"name "),
      new Customer(new CustomerId(322),"name "),
      new Customer(new CustomerId(23),"name ")
     ]
    
    );
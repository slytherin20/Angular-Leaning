export interface User  {
    name:string;
    age:number;
}
let user1:User;

user1 = {
    name:"Sonali",
    age:26
}

interface Employees extends User{
    designation:string;
    address: string;
}

let Employee1:Employees;
 Employee1 =  {
    designation:"SE",
    address:"India",
    name:"Sonali",
    age: 26
}

export interface Login{
    login(): User
}
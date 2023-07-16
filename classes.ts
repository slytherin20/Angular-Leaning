import { Login, User } from "./interfaces";

class Employee implements Login {
    #id:number;          //private property accessile only inside the classs
    protected name: string;            //Accessible inside class and other classes that inhrit this class
    designation:string
    constructor(id:number,name:string,desig:string){
        this.#id = id;
        this.name = name;
        this.designation = desig;
    }

    printDetails():string{
        return `The Employee whose name is ${this.name} with EmpId:${this.#id} is designated as ${this.designation}`
    }

    static printNumber():number{        //Accessible through Class name and not instance
        return 50
    }

    get empId():number{         //getter function
        return this.#id;
    }

    set empId(num:number){      //setter function
        this.#id = num;
    }

    login(): User {
        return {
            name:this.name,
            age: 26
        }
    }
}

let John = new Employee(1,'John','Engineer')
console.log(John.printDetails())
console.log(Employee.printNumber())
John.empId = 100;
console.log(John.empId)
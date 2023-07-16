function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log(add(1,2))

const sub = (num1:number,num2:number):number => num2-num1
console.log(sub(2,6))

const mul = function(num1:number,num2:number):number {
    return num1*num2
}
console.log(mul(2,5))

//Generic functions
function concatType<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items)
}

console.log(concatType<number>([1,2,3,4,5]))
console.log(concatType<string>(['ad','adfs','ughdg']))
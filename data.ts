"use strict";
let data:string;
//data=10;  //returns error
data = "Some text"
console.log(data.length);
let empNames:String[];
empNames=["x","y","z"]
console.log(empNames)
let deepList:Array<String>  //generic synax

enum Color{
    Red,
    Green,
    Blue
}
let c:Color = Color.Blue

const enum Parts{
    Hands, Feet, Mouth
}
const bodyPart:Parts = Parts.Hands    // Adding  const in front of enums makes its copiled code simpler


//Tuples
let swapNumbs:[first:Number,second:Number]  //tuple
function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
}

swapNumbs = swapNumbers(1,2)
console.log(swapNumbs[0])
//console.log(swapNumbs[4])  Gives error at 4 as 4 index is not present. This cannot be detected by array type but by tuple type
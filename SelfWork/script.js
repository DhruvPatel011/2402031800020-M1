//Q-1 : OP: true //if([] = true) then Op is false because 0 is not equl to 1 but if([]) then OP is true because empty array is truthy value in JavaScript
/* if([]){
     console.log("true");
 }else {
     console.log("false");
} */


//Q-2 : OP: 25undefined
/* var abc = 25;
if(function f(){}) {
     abc = abc+typeof f;
}
console.log(abc); */


//Q-3 : OP: 6
/* 
const add = (a) => (b) =>
    b === undefined ? a : add(a + b);

console.log(add(1)(2)(3)()); */



//PR-1: Use Arrow Function
document.write("<h3>1. Use Arrow Function</h3>");
let a = () => document.write("Arrow");
a();
document.write("<br><br>");

//PR-2: Normal Function
document.write("<h3>2. Normal Function</h3>");
let b = function(){
    document.write("Normal");
}
b();
document.write("<br><br>");

//PR-3: Math Method
document.write("<h3>3. Math Method</h3>");
document.write(Math.E);
document.write("<br><br>");

//PR-4: Date Object
const d = new Date();
document.write("<h3>4. Date Object</h3>");
document.write(d);
document.write("<br>");
const o = new Date(2022,6,31,10,33,30,0);
document.write(o);
document.write("<br><br>");

//PR-5: Objest creation
document.write("<h3>5. Creating Object Using new Object()</h3>");
var person = new Object();
person.firstName = "Dhruv";
person.lastName = "Patel";
person.sayHi = ()=>{
    document.write("Welcome " + person.firstName + "  " + person.lastName);
}
person.sayHi();
document.write("<br><br>");

//PR-6: Objest Using Literal Notation
document.write("<h3>6. Creating Object Using Literal Notation</h3>");
var person1 = {firstName: "Dhruv", lastName: "Patel",
    sayHi : function() 
    {
        document.write("Hellow " + person1.firstName + " " + person1.lastName);
    }
}
person1.sayHi();
document.write("<br><br>");

//PR-7: 
document.write("<h3>7. </h3>");



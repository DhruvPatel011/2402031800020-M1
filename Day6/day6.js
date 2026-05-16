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




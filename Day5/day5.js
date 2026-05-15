// PR-1: Even Numbers (1 to 10)
document.write("<h4>1. Even Numbers Between 1 to 10</h4>");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write(i + " ");
    }
}
document.write("<br><br>");


// PR-2: Odd Numbers (1 to 10)
document.write("<h4>2. Odd Numbers Between 1 to 10</h4>");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        document.write(i + " ");
    }
}
document.write("<br><br>");


// PR-3: Factorial
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
document.write("<h4>3. Factorial of a Number</h4>");
document.write("Factorial of " + n + " = " + fact);
document.write("<br><br>");


// PR-4: Multiplication Table
let tb = 4;
document.write("<h4>4. Multiplication Table of " + tb + "</h4>");
for (let i = 1; i <= 10; i++) {
    document.write(tb + " x " + i + " = " + (tb * i) + "<br>");
}
document.write("<br>");


//PR-5: Reverse Number
let nb = 1234;
let rev = 0;
while ( nb > 0 ){
    let dgt = nb % 10;
    rev = rev * 10 + dgt;
    nb= parseInt(nb/10);
}
document.write("<h4>5. Reverse Number</h4>");
document.write("Original Nummber = "+nb);
document.write("<br>");
document.write("Reverse Number = " + rev);
document.write("<br><br>");

//PR-6: Sum of Digits
let num1 = 1234;
let sum = 0;
let temp1 = num1;
        while (temp1 > 0) {
            let digit = temp1 % 10;
            sum = sum + digit;
            temp1 = parseInt(temp1 / 10);
        }
document.write("<h3>6. Sum of Digits</h3>");
document.write("Number = " + num1 + "<br>");
document.write("Sum of Digits = " + sum);
document.write("<br><br>");

//PR-7: Find Armstrong Nummber
let num2 = 153;
let temp2 = num2;
let armstrong = 0;
    while (temp2 > 0) {
        let digit = temp2 % 10;
        armstrong = armstrong + (digit * digit * digit);
        temp2 = parseInt(temp2 / 10);
    }
document.write("<h4>7. Armstrong Number</h4>");
document.write("Original Nummber = "+num2);
document.write("<br>");
    if (armstrong == num2) {
        document.write(num2 + " is an Armstrong Number");
    } else {
        document.write(num2 + " is not an Armstrong Number");
    }
document.write("<br><br>");


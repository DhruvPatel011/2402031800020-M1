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

//PR-7: Dom Properties
document.write("<h3>7. Using GetElementById/Name</h3>");
function mf(){
    var txt = document.getElementById("mt");
    alert(txt.value);
}

// PR-8: Form Using DOM
function f() {
    var aa = document.forms["myf"];
    var uu = aa.un.value;
    var pp = aa.pwd.value;

    if (uu == "admin" && pp == "123") {
        alert("Valid");
    } else {
        alert("Invalid");
    }
}

// PR-9: Email Validation
function checkMail() {
    var a1 = document.getElementById("mytext").value;
    var pattern = "^[\\w-_.]*[\\w-_.]\\@[\\w]\\.+[\\w]+[\\w]$";
    var regex = new RegExp(pattern);

    if (regex.test(a1)) {
        alert("Valid");
    } else {
        alert("Invalid");
    }
}

//PR-10 Form Validation
function validate() {
var form1 = document.getElementById("RegForm");
var name = form1.Name.value;
var email = form1.EMail.value;
var phone = form1.Telephone.value;
var what = form1.Subject.value;
var password = form1.Password.value;
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
var regPhone=/^\d{10}$/;
if (name == "") {
            window.alert("Please Enter Your Name");
            return false;
        }
        else if (email == "" || !regEmail.test(email)) {
            window.alert("Please enter a valid e-mail address.");
            return false;
        }
        else if (password == "") {
            alert("Please enter your password");
            return false;
        }
        else if(password.length <6){
            alert("Password should be atleast 6 character long");
            return false;
        }
        else if (phone == "" || !regPhone.test(phone)) {
            alert("Please enter valid phone number.");
            return false;
        }
        else if (what.selectedIndex == -1) {
            alert("Please enter your course.");
            return false;
        }
    }






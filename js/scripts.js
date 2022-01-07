//window.alert("Operators in JavaScript");
// var x=10,y=5,z;
// var z=x+y;

// document.write(z);
// console.log(z);console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);
// console.log(x+=5);

// let num1=100;let num2=50;let num3="100";

// console.log(num1>num2);
// console.log(num1>=num2);
// console.log(num1<num2);
// console.log(num1<=num2);

// let age=prompt("Enter your age");

// let result=age>18?"Eligible to Vote":"Ineligible"
// alert(result);

// let letter="p";

// switch(letter)
// {
//     case "a":{
//         alert("Letter a is a vowel.");
//         break;
//     }
//     case "e":{
//         alert("Letter e is a vowel.");
//         break;
//     }
//     case "i":{
//         alert("Letter i is a vowel.");
//         break;
//     }
//     case "o":{
//         alert("Letter o is a vowel.");
//         break;
//     }
//     case "u":{
//         alert("Letter u is a vowel.");
//         break;
//     }
//     default:{
//         alert("Letter is  a consonant.")
//     }
// }

let num1=prompt("Enter first number:");
let num2=prompt("Enter second number");
console.log(typeof num1);
num1=parseInt(num1,10);
console.log(num1, typeof num1);
num2=parseInt(num2,10);

let operator=prompt("Enter the operation to be performed \n + for addition,* for multiplication and - for subtraction");

switch(operator){
   case '+' :  {
       alert(`Result of Addition is ${num1+num2}`);
       break;
   }
   case '*' :  {
    alert(`Result of Multiplication is ${num1*num2}`);
    break;
   }
   case '-' :  {
    alert(`Result of Subtraction is ${num1-num2}`);
    break;
   }
   default:{
       alert("Invalid operation");
       break;
   }

}
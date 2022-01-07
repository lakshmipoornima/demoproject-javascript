// function getName(){
//     alert(document.getElementById("username").value);
// }

// function addition(){
//     let num1=document.getElementById("num1").value;
//     let num2=document.getElementById("num2").value;
//     let result=parseInt(num1)+parseInt(num2);

//    document.getElementById("result").value=result;

    
// }


// let s="hello"
// let s1=s+"world"
// console.log(s);
// console.log(s1);
// console.log(s1,typeof s1);
// let a=String("hello world");
// console.log(a,typeof a);
// let b=String(123)
// console.log(b,typeof b);
// let i=9000;
// let i1=Number(70);
// //new
let obj=new String("hello");
 console.log(obj);
// console.log(typeof obj);
// let obj1=obj.concat("world");
// console.log(obj1);
// console.log(obj);
// console.log(obj1.toUpperCase());



let i=new Number(123)
let i1=i.valueOf();
console.log(typeof i,i);
console.log(typeof i1,i1);

let s1=" javascript is interpreted";
console.log(s1.length);
console.log(s1.trim());
console.log(s1.trim().length);


let word="hello world";

console.log("of keyword\n");
for (let letter of word){
    console.log(letter);

}
console.log("In keyword\n");
for (let letter in word){
    console.log(letter);

}

let sub_str=word.substring(3,8);
console.log(sub_str);
console.log(word.charAt(6));
console.log(word[6]);
console.log(word.indexOf("l"));
console.log(word.lastIndexOf("l"));
console.log(word.indexOf("l",3));












function checkOccurrence(){

    let stmt=document.getElementById("stmt").value;
    let letter=document.getElementById("letter").value;


        let indices="";
       
            for(i=stmt.indexOf(letter);i<=stmt.lastIndexOf(letter);i++)
            {
                
                if(stmt[i]===letter){
                  indices=indices+" "+i;
                    console.log(indices);
                }
                   
                
            }
            if(stmt.indexOf(letter)!=-1)
            {
                document.getElementById("p1").innerText="The character "+letter+" has occurrences at the indices "+indices;
            }
            else
            document.getElementById("p1").innerText="The character "+letter+" has no occurrences in the entered string";
        }


        function wCount(){
            let sent=document.getElementById("sent").value;
            let count=0;
            for(let character of sent)
            {
                if(character==' ')
                {
                    count++;
                }
                else
                {
                    continue;
                }
            }

            document.getElementById("p2").innerText="The number of words in this sentence is "+(count+1);
        }

    
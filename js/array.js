// let arr=[]
// console.log(arr,typeof arr);
// let arr1=new Array();
// console.log(arr1,typeof arr1);
let names=["Rachel","Bob","Ben","Rose"];
console.log(names);
console.table(names);
console.log(names.length);
for (let name of names){
    console.log(name);
}
for (let index in names){
    console.log(index," ",names[index]);
    
}
names.push("Anna");
console.log(names);
let d=names.pop();
console.log(d);
names.unshift("Bibin");
console.log(names);
names.shift();
console.log(names);
let names_new =names.concat(["Anju","Aby","Ram","Raj"]);
console.log(names_new);
names_new.splice(3,1);
console.log(names_new);
names_new.splice(4,1,"Devin");
console.log(names_new);

console.log(names_new.indexOf("Devin"));
console.log(names_new.includes("Ram"));
console.log(names_new.sort());
console.log(names_new.reverse());

let myarray=["hi","hello","how","are","you"];
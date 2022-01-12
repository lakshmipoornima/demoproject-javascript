let names=["Rachel","Bob","Ben","Rose"];
console.log(names);

let data="";
for(let name of names)
{
    data+= `<li>${name}</li>`
    console.log(names[name]);
    
}

document.getElementById("names").innerHTML=data;
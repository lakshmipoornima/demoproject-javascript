let studentRecord=["Poornima","Aswathi","Lakshmi","Arsha"];
let approvedStudents=[];
let element="";

let studentdata=[];


function arrayInsertion(){
   let name= document.getElementById("names").value;
   studentRecord.push(name);
   console.table(studentRecord);
    
}


function arrayDisplay(){
   
    console.log("Display Student function...");
    let i=0;
    for (element of studentRecord){
        studentdata[i]=`<li>${element}<button  onclick="removeStudent(element)">Remove</button><button  onclick="approveStudent(element)">Approve</button></li>`;
        
       i++;
        
    }
    console.table(studentdata);
    
    document.getElementById("listnames").innerHTML=studentdata;
    
}

function removeStudent(studentid){
    
    console.log("Remove Student function...");
    //let studentid="Lakshmi";
    console.log("Student id"+studentid);
    let index=studentRecord.indexOf(studentid);
    console.log("Index: "+index);
    studentRecord.splice(index,1);

    console.log("Table after remove");
    console.table(studentRecord);


}

function approveStudent(studentid){
    
    console.log("Approve Student function...");
    //let studentid="Arsha";
    console.log(studentid);
    let index=studentRecord.indexOf(studentid);
    console.log("Index: "+index);
    let approve=studentRecord.splice(index,1);
    approvedStudents.push(approve);
    console.log("Table after approve");
    console.table(approvedStudents);
    console.table(studentRecord);
}
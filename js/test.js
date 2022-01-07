
 
 
 function changeBg(){
    
    
    
        document.getElementById("mydiv").style.backgroundColor="green";
        document.getElementById("mydiv").style.border="dotted";
    
    
}

function setAlert(){
    alert("You have this button clicked.")
}

function setContent(){
    document.getElementById("para1").innerText="Hi, This is the new paragraph that has been inserted from js file"
    document.getElementById("para1").style.color="yellow";
}

// function flipImage(){
//     document.getElementById("second").src="images/second.jpg"

//     document.getElementById("hboat").style.display="none";
//     document.getElementById("second").style.display="block";


    
// }
// function flipBack(){
//     document.getElementById("hboat").src="images/Houseboats.jpg"

//     document.getElementById("second").style.display="none";
//     document.getElementById("hboat").style.display="block";

// }

                            //Flipping Image by Source
var imageId=document.getElementById("hboat");
var path1="file:///C:/Poornima/ExpertzLab/Javascript/images/Houseboats.jpg";
var path2="file:///C:/Poornima/ExpertzLab/Javascript/images/second.jpg"

function flipImage(){

    
    if(imageId.src===path1)
    {
        imageId.src=path2;
    }
    else{
        imageId.src=path1;
    }
}

                //Flipping image by Style



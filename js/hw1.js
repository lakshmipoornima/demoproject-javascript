function count(){
    let string=document.getElementById("string").value;
    let inputword=document.getElementById("word").value;
    let words=string.split(" ");
    let count=0;
    for (let arrayword of words){
        if(arrayword===inputword){
            count++;
        }
        else
        {
            continue;
        }
    }

    document.getElementById("para1").innerText="Total number of occurrences of the word "+ inputword+" is "+count;


}
const inputbox =document.getElementById("input-box");
const button = document.getElementById("btn");
const listContainer =document.getElementById("list-container");

function addvalue(){
    if(inputbox.value ===''){
        alert("you must write something");
    }
    else{
        const li =document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);

    }
    inputbox.value ='';
}
var all_items=document.getElementById("all-items");
var user_input=document.getElementById("userInput");
user_input.addEventListener("click",function(){all_items.innerHTML='';})
user_input.addEventListener("keydown",function (event){ 
if(event.key=="Enter"){
    add_items();
  
}

})

function add_items(){
    var h2=document.createElement("h2");
    h2.innerHTML="-"+ user_input.value;
  

all_items.insertAdjacentElement("beforeend",h2);

user_input.value='';
}


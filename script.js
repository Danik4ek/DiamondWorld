var balId = document.getElementById("balance");
var buttonId = document.getElementById("button");
var counter = 0;
buttonId.addEventListener("click",function(){
    counter++;
    balId.textContent=counter
});

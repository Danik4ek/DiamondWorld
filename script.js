var balId = document.getElementById("balance");
var buttonId = document.getElementById("button");
var counter = 0;
buttonId.addEventListener("click",function(){
    counter++;
    balId.textContent=counter
});
const AdController =  window.AdsModulePgram;
        AdController.show({ AppId: "6399538" }).then((result) => {
    console.log(result); // Logged result in the console
}).catch((error) => {
    console.log(error); // Logged error in the console
});

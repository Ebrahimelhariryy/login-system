// var emailInput=document.getElementById("emailInput");
// var passwordInput=document.getElementById("passwordInput");
// var Input=document.getElementById("input");
// var msg=document.getElementById("msg2");

// var saveAccount = JSON.parse(localStorage.getItem("container")) || [];



// function login(){
//     if( checkpaasEmail()){
//         // window.location.href='login.html'
//         console.log("log sucsess")

//     }
//     else{
//         console.log("log failed")
//         msg.classList.replace('d-none','d-block');
//     } 
// }

// function checkpaasEmail(){
//     for(var i =0;i<saveAccount.length;i++){
//          if(saveAccount[i].email==emailInput.value && saveAccount[i].password==passwordInput.value){
//             console.log("yess");
//             return true;
//          }
           
           
// }
// console.log("noooo")
// return false;
// }
// Input.addEventListener('click',function(){
//     login();

   
// })



var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var inputButton = document.getElementById("input");
var msg = document.getElementById("msg2");

var saveAccount = JSON.parse(localStorage.getItem("container")) ;

function login() {
    if (checkPassEmail()) {
        console.log("Login successful");
        window.location.href = 'login.html'; // Ensure this is the correct page
    } else {
        console.log("Login failed");
        msg.classList.remove('d-none');
        msg.classList.add('d-block');
    }
}

function checkPassEmail() {
    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();

    console.log("Entered email:", emailValue);
    console.log("Entered password:", passwordValue);
    console.log("Stored accounts:", saveAccount);

    for (var i = 0; i < saveAccount.length; i++) {
        console.log("Checking against stored account:", saveAccount[i]);
        if (saveAccount[i].email === emailValue && saveAccount[i].password === passwordValue) {
            console.log("Match found!");
            return true;  // Match found
        }
    }
    console.log("No match found.");
    return false;  // No match found
}

inputButton.addEventListener('click', function() {
    login();
});

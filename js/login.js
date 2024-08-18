

// var emailInput=document.getElementById("emailInput");
// var passwordInput=document.getElementById("passwordInput")
// var nameInput=document.getElementById("nameInput");
// var Input=document.getElementById("input")
// var msg=document.getElementById("msg")


// var saveAccount = JSON.parse(localStorage.getItem("container")) || [];

// function addAcount(){
//     if(nameInput.value==''|| emailInput.value==''||passwordInput.value=='' ){
//         msg.classList.remove('d-none');
//         msg.classList.add('d-block');
//     }
//     else{ msg.classList.add('d-none');}
    
//     var account={
//         name:nameInput.value,
//         email:emailInput.value,
//         password:passwordInput.value,
//     }
//     saveAccount.push(account);
//     localStorage.setItem("cotainer",JSON.stringify(saveAccount));
// }


// Input.addEventListener('click',function(){
   
//     addAcount();
  
    
// })


var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var nameInput = document.getElementById("nameInput");
var inputButton = document.getElementById("input");
var msg = document.getElementById("msg");

var saveAccount = JSON.parse(localStorage.getItem("container")) || [];

function addAccount() {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        msg.classList.remove('d-none');
        msg.classList.add('d-block');
    } else {
        msg.classList.add('d-none');

        var account = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        };

        saveAccount.push(account);
        localStorage.setItem("container", JSON.stringify(saveAccount));

        // Log the saved data for verification
        console.log("Account added:", account);
        console.log("Current saved accounts:", saveAccount);

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    }
}

inputButton.addEventListener('click', function() {
    addAccount();
});


const newFirstName = document.getElementById("firstName");
const newLastName = document.getElementById("lastName");
const newEmail = document.getElementById("email");
const newPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");
const submitNewUser = document.getElementById("submitNewUser");
const registerError = document.getElementById("registerError");

// const emailError = document.getElementById("email").innerHTML;
const submitNewUser_registration = async () => {
   if (confirmPassword.value !== password.value) {
       passwordError.style.display = "block";
   }
   else {
       passwordError.style.display = "none";

       let link = "http://localhost:6001/submit";
       data =
       {
           "firstName": firstName.value,
           "lastName": lastName.value,
           "email": email.value,
           "password": confirmPassword.value
           // "password": Password.value,
           // "confirmpassword": confirmPassword.value
       }

    
    let response = await fetch(link, {
        method: 'POST',    
        mode: 'cors',      
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',      
        referrer: 'no-referrer',    
        body: JSON.stringify(data)  
    }); 

    let resp = await response.json();
        if (resp === "registration successful") {
            location.href = "index.html";
        }
        else {
            registerError.style.display = "block";
        }
    }
        // console.log(resp);
    }


submitNewUser.addEventListener("click",submitNewUser_registration);

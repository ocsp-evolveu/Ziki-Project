

const newEmail = document.getElementById("email");
const newPassword = document.getElementById("password");
const signInNewUser = document.getElementById("signInNewUser");
const registerError = document.getElementById("registerError");


const signIn_registration = async () => {
   
    let link = "http://localhost:6001/signin";
    data =
    {
        "email": email.value,
        "password": password.value
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
        if (resp === "sign in successful") {
            location.href = "index.html";
        }
        else {
            registerError.style.display = "block";
        }
        console.log(resp);
    }


signInNewUser.addEventListener("click",signIn_registration);

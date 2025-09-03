// signin
function signIn() {
    const userName = document.getElementById("userName").value.trim();
    const userEmail = document.getElementById("userEmail").value.trim();
    const userPassword = document.getElementById("userPassword").value.trim();


    if (userName === "" || userEmail === "" || userPassword === "") {
        alert("Please enter your email.");
    } else {
        alert("sign in successful")
        // Save localStorage
        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userPassword", userPassword);

    }

}


// login


function login() {
    
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    const userEmail = document.getElementById("email").value.trim();
    const userPassword = Number(document.getElementById("password").value.trim());

    if (userEmail === "") {
        alert("Please enter your email.");
        return;
    }

    if (userEmail === savedEmail && userPassword === savedPassword) {
        alert("Login successful");

        // Save to localStorage
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userPassword", userPassword);

        // Optional: clear inputs
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    } else {
        alert("Please check your email or password. Incorrect.");
    }

}


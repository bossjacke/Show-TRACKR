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

// const userName = document.getElementById("userName").value.trim();
// const userEmail = document.getElementById("userEmail").value.trim();
// const userPassword = document.getElementById("userPassword").value.trim();



// login


function login() {
    // const userEmail1 = document.getElementById("userEmail").value.trim();
    // const userPassword1 = document.getElementById("userPassword").value.trim();
    // localStorage.setItem("userEmail", userEmail1);
    // localStorage.setItem("userPassword", userPassword1);


    const savedEmail = JSON.parse(localStorage.getItem("userEmail")) || [];
    const savedPassword = JSON.parse(localStorage.getItem("userPassword")) || [];
    console.log(savedPassword);

    const userEmail = document.getElementById("email").value.trim();
    const userPassword = Number(document.getElementById("password").value.trim());

    if (userEmail === "") {
        alert("Please enter your email.");
        return;
    }

    if (userEmail === savedEmail && userPassword === savedPassword) {
        alert("Login successful");
         console.log("done");
        // Save to localStorage
        // localStorage.setItem("userEmail", userEmail);
        // localStorage.setItem("userPassword", userPassword);

        // Optional: clear inputs
        // document.getElementById("email").value = "";
        // document.getElementById("password").value = "";
    } else {
        alert("Please check your email or password. Incorrect.");
    }
    console.log("done");

}


// ==========================
// LOGIN VALIDATION
// ==========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let message = document.getElementById("loginMessage");

        if (username === "" || password === "") {

            message.style.color = "red";
            message.innerHTML = "Please fill all fields.";

        }

        else if (password.length < 8) {

            message.style.color = "red";
            message.innerHTML = "Password must be at least 8 characters.";

        }

        else {

            message.style.color = "lightgreen";
            message.innerHTML = "Login Successful!";

        }

    });

}


// ==========================
// SIGNUP VALIDATION
// ==========================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("signupPassword").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        let message = document.getElementById("signupMessage");

        if (name === "" || email === "" || password === "" || confirmPassword === "") {

            message.style.color = "red";
            message.innerHTML = "Please fill all fields.";

        }

        else if (password.length < 8) {

            message.style.color = "red";
            message.innerHTML = "Password must be at least 8 characters.";

        }

        else if (password !== confirmPassword) {

            message.style.color = "red";
            message.innerHTML = "Passwords do not match.";

        }

        else {

            message.style.color = "lightgreen";
            message.innerHTML = "Account Created Successfully!";

        }

    });

}
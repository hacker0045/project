function validateForm() {
    // Get input values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    // Reset all error messages
    document.getElementById("nameerror").style.display = "none";
    document.getElementById("emailerror").style.display = "none";
    document.getElementById("pwderror").style.display = "none";
    document.getElementById("cpwderror").style.display = "none";

    // Validate Username
    if (username) {
        document.getElementById("nameerror").style.display = "none";
    } else {
        document.getElementById("nameerror").style.display = "block";
    }

    // Validate Email
    if (email) {
        if (/\S+@\S+\.\S+/.test(email)) { // Simple email validation
            document.getElementById("emailerror").style.display = "none";
        } else {
            document.getElementById("emailerror").textContent = "Please enter a valid email";
            document.getElementById("emailerror").style.display = "block";
        }
    } else {
        document.getElementById("emailerror").style.display = "block";
    }

    // Validate Password
    if (password) {
        document.getElementById("pwderror").style.display = "none";
    } else {
        document.getElementById("pwderror").style.display = "block";
    }

    // Validate Confirm Password
    if (cpassword) {
        if (password === cpassword) {
            document.getElementById("cpwderror").style.display = "none";
        } else {
            document.getElementById("cpwderror").textContent = "Passwords do not match";
            document.getElementById("cpwderror").style.display = "block";
        }
    } else {
        document.getElementById("cpwderror").style.display = "block";
    }
}
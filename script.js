function showRegistration() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
}

function showTerms() {
    document.getElementById('termsModal').style.display = 'block';
}

function hideTerms() {
    document.getElementById('termsModal').style.display = 'none';
}

function validateRegistration() {
    var fullName = document.getElementById('fullName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var terms = document.getElementById('terms').checked;

    if (!fullName || !username || !email || !password || !confirmPassword || !phoneNumber || !terms) {
        alert("Please fill in all required fields and agree to the Terms and Conditions.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Your passwords do not match. Please try again.");
        return false;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.match(passwordPattern)) {
        alert("Your password must include at least 8 characters, one uppercase letter, one number, and one special character.");
        return false;
    }

    return true;
}

function validateLogin() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    if (!loginEmail || !loginContent) {
        alert("Both email/username and password are required to log in.");
        return false;
    }

    alert("Welcome back! Your login was successful.");
    return true;
}

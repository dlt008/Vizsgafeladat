function showPassword(event) {
    const passwordInput = document.querySelector('.password-container input');
    if (event.type === "mousedown") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

const passwordButton = document.querySelector('.password-btn');
if (passwordButton) {
    passwordButton.addEventListener('mousedown', showPassword);
    passwordButton.addEventListener('mouseup', showPassword);
    passwordButton.addEventListener('mouseleave', showPassword);
}
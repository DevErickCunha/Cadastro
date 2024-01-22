var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var form = document.getElementById("form");
var username = document.getElementById("username");
var Datebirth = document.getElementById("Datebirth");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirmation = document.getElementById("password-confirmation");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkForm();
});
form.addEventListener("blur", function (event) {
    event.preventDefault();
    checkInputDatebirth();
});
email.addEventListener("blur", function () {
    checkInputEmail();
});
username.addEventListener("blur", function () {
    checkInputUsername();
});
function checkInputUsername() {
    var usernameValue = username.value;
    if (usernameValue === "") {
        errorInput(username, "Preencha com seu nome completo!");
    }
    else {
        var formItem = username.parentElement;
        formItem.className = "form-content";
    }
}
function checkInputDatebirth() {
    var DatebirthValue = Datebirth.value;
    if (DatebirthValue === "") {
        errorInput(Datebirth, "Preencha sua data de nascimento!");
    }
    else {
        var formItem = Datebirth.parentElement;
        formItem.className = "form-content";
    }
}
function checkInputEmail() {
    var emailValue = email.value;
    if (emailValue === "") {
        errorInput(email, "O email é obrigatório.");
    }
    else {
        var formItem = email.parentElement;
        formItem.className = "form-content";
    }
}
function checkInputPassword() {
    var passwordValue = password.value;
    if (passwordValue === "") {
        errorInput(password, "A senha é obrigatória.");
    }
    else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
    }
    else {
        var formItem = password.parentElement;
        formItem.className = "form-content";
    }
}
function checkInputPasswordConfirmation() {
    var passwordValue = password.value;
    var confirmationPasswordValue = passwordConfirmation.value;
    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
    }
    else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não são iguais.");
    }
    else {
        var formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}
function checkForm() {
    checkInputUsername();
    checkInputDatebirth();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();
    var formItems = form.querySelectorAll(".form-content");
    var isValid = __spreadArray([], formItems, true).every(function (item) {
        return item.className === "form-content";
    });
    if (isValid) {
        alert("CADASTRADO COM SUCESSO!");
    }
}
function errorInput(input, message) {
    var formItem = input.parentElement;
    var textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    formItem.className = "form-content error";
}

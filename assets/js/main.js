var user = document.getElementById("username");
var phone = document.getElementById("phone");
var userror = document.querySelector(`label[for="username"]`);
var phonerror = document.querySelector(`label[for="phone"]`);
var mailerror = document.querySelector(`label[for="email"]`);
var mail = document.getElementById("email");
var textD = document.querySelector(".text-danger");
var textS = document.querySelector(".text-success");
var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
var ePattern = /\S+@\S+\.\S+/;


document.querySelector(".btn").addEventListener("click", () => {

    if (user.value !== "") {
        if (phone.value !== "") {
            if (mail.value !== "") {
                if (user.value.length > 2) {
                    if (phone.value.match(pattern)) {
                        if (mail.value.match(ePattern)) {
                            alert("You are welcome");
                            textS.innerText = "Welcome";
                            userror.classList.remove("effects");
                            phonerror.classList.remove("effects");
                            mailerror.classList.remove("effects");
                            textD.innerText = "";
                        } else {
                            mailerror.classList.add("effects");
                            textS.innerText = "";
                            textD.innerText = "E-mail not match please write correct version";
                        }
                    } else {
                        phonerror.classList.add("effects");
                        textS.innerText = "";
                        textD.innerText = "Phone not correct version";
                    }

                } else {
                    userror.classList.add("effects");
                    textS.innerText = "";
                    textD.innerText = "Username length very low";
                }
            } else {
                mailerror.classList.add("effects");
                userror.classList.remove("effects");
                phonerror.classList.remove("effects");
                textS.innerText = "";
                textD.innerText = "Please add mail";
            }
        } else {
            textS.innerText = "";
            textD.innerText = "Please add phone";
            phonerror.classList.add("effects");
            userror.classList.remove("effects");
            mailerror.classList.remove("effects");
        }
    } else {
        userror.classList.add("effects");
        phonerror.classList.remove("effects");
        mailerror.classList.remove("effects");
        textS.innerText = "";
        textD.innerText = "Please add username";
    }


})
    //&& typeof user !== 'undefined' && typeof phone !== null && typeof phone !== 'undefined' && typeof mail !== null && typeof mail !== 'undefined'




function validate_form() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;

    if (name.length < 3) {
        text = "Please enter a valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length !== 10) {
        text = "Please enter a valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }



    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        text = "Please enter a valid E-mail ID.";
        error_message.innerHTML = text;
        return false;
    }

    return true;
}


document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', function () {
        if (validate_form()) {
            // Form validation passed
            window.location.href = "/";
            alert('YOUR REGISTRATION IS CONFIRMED, WE WILL CONTACT YOU SOON!');
           
        } else {
            // Form validation failed
            alert('Please fill in all fields correctly before submitting.');
            window.location.reload();
        }
    });
});

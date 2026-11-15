// Get the contact form
var contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var destination = document.getElementById("destination").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        alert("Please enter your name");
    }
    else if (name.length < 3) {
        alert("Name must have at least 3 letters");
    }
    else if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Name should contain only letters");
    }
    else if (email == "" || destination == "" || message == "") {
        alert("Please fill all the fields");
    }
    else {
        alert("Form submitted successfully");
        contactForm.reset();
    }
});

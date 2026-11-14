
// 1. Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});


// 2. Booking Form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(bookingForm);

    let message = "Hello Grandevents! I want to book an event.\n\n";

    for (let [key, value] of formData.entries()) {
        message += key + ": " + value + "\n";
    }

    const whatsappURL =
        "https://wa.me/923360269949?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    bookingForm.reset();
});


// 3. Sign Up Form
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = signupForm.signupName.value;

    alert("Welcome " + name + "! Your demo registration is successful.");

    signupForm.reset();
});


// 4. Login Form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = loginForm.loginEmail.value;
    const password = loginForm.loginPassword.value;

    if (email !== "" && password.length >= 6) {
        alert("Login form submitted successfully! (Demo)");
        loginForm.reset();
    } else {
        alert("Please enter correct details.");
    }
});


// 5. Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = contactForm.contactName.value;
    const email = contactForm.contactEmail.value;
    const message = contactForm.message.value;

    const text =
        "Hello Grandevents!\nName: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message;

    const url =
        "https://wa.me/923360269949?text=" +
        encodeURIComponent(text);

    window.open(url, "_blank");

    contactForm.reset();
});
  

// === Part 1: Event Handling Example ===
// Show message when button is clicked
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Hello! You just clicked the button 🎉";
});

// === Part 2.1: Light/Dark Mode Toggle ===
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// === Part 2.2: Counter Game ===
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// === Part 2.3: FAQ Collapse/Expand ===
const questions = document.querySelectorAll(".faq-question");
questions.forEach(q => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("show"); // toggle answer visibility
  });
});

// === Part 3: Form Validation ===
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error message containers
  let valid = true;
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Validate name (must not be empty)
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    valid = false;
  }

  // Validate email (regex for basic email pattern)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  }

  // Validate password (min 6 chars, at least one number)
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!password.match(passwordPattern)) {
    document.getElementById("passwordError").textContent = "Password must be 6+ chars and include a number.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully ✅";
    form.reset();
  }
});

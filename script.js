document.addEventListener("DOMContentLoaded", function () {
    const typing = document.querySelector(".typing");

    if (!typing) {
        console.log("Typing element not found");
        return;
    }

    const text = "Sainath Lingampalli";
    let i = 0;

    function type() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        }
    }

    type();
});
window.onload = typeEffect;

// Form Validation (Contact Page)
function validateForm(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting!");
  } else {
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    document.querySelector("form").reset();
  }
}

// Dark Mode Only Toggle (Button only enables dark mode)
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Check if user had a saved theme preference (force dark if not)
if (localStorage.getItem('theme') !== 'dark') {
  body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  toggleBtn.textContent = '☀️';  // Indicate dark mode is active
} else {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  // Always set to dark mode (no toggle back to light)
  body.classList.add('dark');
  toggleBtn.textContent = '☀️';
  localStorage.setItem('theme', 'dark');
});

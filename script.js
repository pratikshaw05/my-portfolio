
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const result = document.getElementById("formResult");

        if (!name || !email || !message) {
            result.textContent = "Please fill in all fields.";
            return;
        }

        result.textContent =
            "Form validated successfully! This demo does not send messages.";
        form.reset();
    });
}

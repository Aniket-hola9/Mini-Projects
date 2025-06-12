document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value.trim();
  const gender = document.querySelector("input[name='gender']:checked")?.value;
  const skills = [...document.querySelectorAll("input[name='skills']:checked")].map(skill => skill.value);
  const errorBox = document.getElementById("errorMsg");

  // Reset error box
  errorBox.classList.add("hidden");
  errorBox.innerText = "";

  // Validation
  if (!name) return showError("Name is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError("Enter a valid email.");
  if (password !== confirmPassword) return showError("Passwords do not match.");
  if (!/^\d{10}$/.test(phone)) return showError("Phone number must be 10 digits.");
  if (!gender) return showError("Please select your gender.");
  if (skills.length === 0) return showError("Please select at least one skill.");

  // Success — hide error and show summary
  document.getElementById("summary").innerHTML = `
    <h3>Registration Summary</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Skills:</strong> ${skills.join(", ")}</p>
  `;

  function showError(msg) {
    errorBox.innerText = msg;
    errorBox.classList.remove("hidden");
  }
});

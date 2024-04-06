const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");
const menuIcon = document.querySelector(".menu-icon");
const dropdownContent = document.querySelector(".dropdown-content");
const passwordGeneratorLink = document.getElementById("password-generator");

// Toggle dropdown menu on menu icon click
menuIcon.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

// Close dropdown menu if clicking outside of it
window.addEventListener("click", (event) => {
  if (!event.target.matches(".menu-icon") && !event.target.matches(".menu-icon *")) {
    dropdownContent.classList.remove("show");
  }
});

const requirements = [
  { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
  { regex: /[0-9]/, index: 1 }, // At least one number
  { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
  { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
  { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
  requirements.forEach(item => {
      // Check if the password matches the requirement regex
      const isValid = item.regex.test(e.target.value);
      const requirementItem = requirementList[item.index];

      // Updating class and icon of requirement item if requirement matched or not
      if (isValid) {
          requirementItem.classList.add("valid");
          requirementItem.firstElementChild.className = "fa-solid fa-check";
      } else {
          requirementItem.classList.remove("valid");
          requirementItem.firstElementChild.className = "fa-solid fa-circle";
      }
  });
});

// Navigate to password generation tool on link click
passwordGeneratorLink.addEventListener("click", () => {
  // Hide password validation tool
  document.querySelector(".wrapper").style.display = "none";
  // Show password generation tool
  document.querySelector(".container").style.display = "block";
});

// Navigate back to password validation tool
const backToValidationTool = () => {
  // Show password validation tool
  document.querySelector(".wrapper").style.display = "block";
  // Hide password generation tool
  document.querySelector(".container").style.display = "none";
};

// Password visibility toggle
eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});

// Password validation and strength checking
const validatePassword = () => {
  // Your validation logic here
};

// Password generation
const generatePassword = () => {
  const display = document.querySelector(".container input");
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let randomPassword = "";
  for (let i = 0; i < 16; i++) {
    randomPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  display.value = randomPassword;
};

// Copy generated password to clipboard
const copy = () => {
  const copyBtn = document.querySelector(".container .far");
  const copyActive = document.querySelector(".container .fas");
  copyBtn.style.display = "none";
  copyActive.style.display = "block";
  const display = document.querySelector(".container input");
  display.select();
  document.execCommand("copy");
};

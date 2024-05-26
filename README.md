---


# Password Validation and Generation Tool

This project provides a web-based tool for validating and generating passwords. It includes two main features: password validation and password generation. The validation tool ensures that a password meets specific security criteria, while the generation tool creates a random, secure password.

## Features

- **Password Validation**: Checks if a password meets the following criteria:
  - At least 8 characters in length
  - Contains at least one number
  - Contains at least one lowercase letter
  - Contains at least one special symbol
  - Contains at least one uppercase letter
- **Password Generation**: Creates a random password that includes letters, numbers, and special characters.
- **Responsive Design**: The interface is designed to be responsive and user-friendly.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/password-tool.git
   ```
2. Navigate to the project directory:
   ```bash
   cd password-tool
   ```
3. Open `index_p.html` in your web browser.

## Usage

### Password Validation

1. Open `index_p.html` in your web browser.
2. Enter a password in the input field to check its validity.
3. The requirements will be marked as valid or invalid in real-time.

### Password Generation

1. Click on the "Password Generation Tool" link in the dropdown menu.
2. Click the "Generate Password" button to create a random password.
3. Use the copy icon to copy the generated password to the clipboard.

### Example

```
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Validation and Generation Tool</title>
  <link rel="stylesheet" href="style_p.css">
  <script src="script_p.js" defer></script>
</head>
<body>
  <div class="menu-icon">
    <i class="fas fa-bars"></i>
    <div class="dropdown-content">
      <a href="#" id="password-generator">Password Generation Tool</a>
      <a href="index_p.html">Password Validation Tool</a>
    </div>
  </div>
  <!-- Password Validation Tool -->
  <div class="wrapper">
    <div class="pass-field">
      <input type="password" placeholder="Create password">
      <i class="fa-solid fa-eye"></i>
    </div>
    <div class="content">
      <p>Password must contain</p>
      <ul class="requirement-list">
        <li><i class="fa-solid fa-circle"></i><span>At least 8 characters length</span></li>
        <li><i class="fa-solid fa-circle"></i><span>At least 1 number (0...9)</span></li>
        <li><i class="fa-solid fa-circle"></i><span>At least 1 lowercase letter (a...z)</span></li>
        <li><i class="fa-solid fa-circle"></i><span>At least 1 special symbol (!...$)</span></li>
        <li><i class="fa-solid fa-circle"></i><span>At least 1 uppercase letter (A...Z)</span></li>
      </ul>
    </div>
  </div>
  <!-- Password Generator Tool -->
  <div class="container" style="display: none;">
    <div class="text">Random Password Generator in HTML CSS & JavaScript</div>
    <div class="input-data">
      <div class="display">
        <input type="text">
        <span class="far fa-copy" onclick="copy()"></span>
        <span class="fas fa-copy" onclick="copy()"></span>
      </div>
      <button onclick="generatePassword()">Generate Password</button>
    </div>
  </div>
</body>
</html>
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact [puspendrachawlax@gmail.com](mailto:yourname@yourdomain.com).

---

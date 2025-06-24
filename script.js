console.log('Hello!');

Here’s a simple implementation of a dark theme toggle switch using JavaScript, HTML, and CSS:

1. HTML

  <div class="theme-switch">
    <label>
      <input type="checkbox" id="theme-toggle">
      <span class="slider"></span>
    </label>
    <p>Toggle Dark Mode</p>
  </div>
  <script src="script.js"></script>
</body>
</html>

2. CSS
Kopier koden
/* styles.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s, color 0.3s;
}

body.light {
  background-color: #ffffff;
  color: #000000;
}

body.dark {
  background-color: #121212;
  color: #ffffff;
}

.theme-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}

label {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 25px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 19px;
  width: 19px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(25px);
}

3. JavaScript
Kopier koden
// script.js
const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  toggleSwitch.checked = savedTheme === 'dark';
}

// Toggle theme on switch change
toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
});

Key Features:
Smooth Transition: The transition property in CSS ensures a smooth color change.
LocalStorage: Saves the user's theme preference, so it persists across page reloads.
Responsive Design: Works seamlessly on all screen sizes.

This setup is lightweight and easy to integrate into any project!  
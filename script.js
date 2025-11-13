// ------------------------------
// HOME PAGE: "View More" Button
// ------------------------------
const viewMoreBtn = document.getElementById('viewMore');
if (viewMoreBtn) {
  viewMoreBtn.addEventListener('click', function () {
    window.location.href = "about.html";
  });
}

// ------------------------------
// ABOUT PAGE: "Learn More" Button
// ------------------------------
const learnMoreBtn = document.getElementById('learnMoreBtn');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', function () {
    alert('💖 Thank you for your interest! More about Where Lilies Read coming soon 🌷');
  });
}

// ------------------------------
// LOGIN PAGE: Form Handling
// ------------------------------
const loginForm = document.querySelector('.login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
      alert('Please fill in both username and password.');
      return;
    }

    const demoUser = 'user123';
    const demoPass = '12345';

    if (username === demoUser && password === demoPass) {
      alert(`Welcome back, ${username}! 🌷`);
      window.location.href = 'index.html';
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  });
}

// ------------------------------
// REGISTER PAGE: Form Handling
// ------------------------------
const registerForm = document.querySelector('.register-form');
if (registerForm) {
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('new-username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('new-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert(`🎉 Welcome to Where Lilies Read, ${username}! Your account has been created successfully.`);
    window.location.href = 'login.html';
  });
}

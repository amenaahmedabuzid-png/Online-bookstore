// ------------------------------
// HOME PAGE: "View More" Button
// ------------------------------
const viewMoreBtn = document.getElementById('viewMore');
if (viewMoreBtn) {
  viewMoreBtn.addEventListener('click', function () {
    window.location.href = "about.html";
  });
}
// عناصر السلايدر
const bookImg = document.querySelector(".hero .book img");
const bookTitle = document.querySelector(".hero .book-info h1");
const bookDesc = document.querySelector(".hero .book-info p");

// البيانات – تقدري تضيفي كتب أكتر براحتك
const slides = [
  {
    img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    title: "Wild Reverence",
    desc: "Set in the world of the gods first introduced in Divine Rivals, bestselling author Rebecca Ross delivers a sweeping, beautiful novel filled with tension, romance, and dark secrets."
  },
  {
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    title: "The Night Garden",
    desc: "A magical tale that blends fantasy, mystery, and emotional depth into one enchanting story."
  },
  {
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    title: "Starborn Vows",
    desc: "An epic fantasy romance full of fate, celestial magic, and unforgettable battles."
  }
];

let index = 0;

// تغيير السلايد
function updateSlide() {
  bookImg.src = slides[index].img;
  bookTitle.textContent = slides[index].title;
  bookDesc.textContent = slides[index].desc;
}

// Auto slide كل 6 ثواني
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlide();
}, 6000);


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


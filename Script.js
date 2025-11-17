// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.product-card button');

  // Get the cart icon (assuming it's the 🛒 span in the header)
  const cartIcon = document.querySelector('.icons span:first-child');

  // Load cart count from localStorage (default to 0 if none)
  let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
  updateCartDisplay();

  // Add event listener to each button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the book title from the card
      const bookTitle = this.parentElement.querySelector('h3').textContent;
      
      // Alert the user with the book name
      alert(`${bookTitle} has been added to your cart!`);
      
      // Increment cart count
      cartCount++;
      
      // Save to localStorage
      localStorage.setItem('cartCount', cartCount);
      
      // Update the cart display
      updateCartDisplay();
    });
  });

  // Function to update the cart display (e.g., show count next to 🛒)
  function updateCartDisplay() {
    if (cartIcon) {
      cartIcon.textContent = `🛒 (${cartCount})`;
    }
  }
});

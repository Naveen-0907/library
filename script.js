// Get elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Add click event to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the visibility of the menu
  menu.classList.toggle('show-menu');
});

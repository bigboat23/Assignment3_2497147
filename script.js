// Smooth Scrolling
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile Menu
const menuIcon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// Scroll to Top Button
const scrollButton = document.querySelector('.scroll-to-top');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Portfolio Slider
const portfolioItems = document.querySelectorAll('.portfolio-item');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Remove active class from all dots and portfolio items
    dots.forEach(dot => dot.classList.remove('active'));
    portfolioItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked dot and corresponding portfolio item
    dot.classList.add('active');
    portfolioItems[index].classList.add('active');
  });
});

// Show or hide scroll to top button
window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

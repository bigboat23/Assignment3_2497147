// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a.smooth-scroll');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
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

// Select the scroll-to-top button
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show or hide the scroll-to-top button based on the scroll position
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Smooth Dropdown
function toggleDropdown(week) {
  const dropdownContent = document.getElementById(week);
  const isDisplayed = getComputedStyle(dropdownContent).display !== 'none';
  dropdownContent.style.display = isDisplayed ? 'none' : 'block';

  if (isDisplayed) {
    dropdownContent.style.maxHeight = '0';
  } else {
    dropdownContent.style.maxHeight = `${dropdownContent.scrollHeight}px`;
  }
}


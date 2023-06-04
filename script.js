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

// Scroll to Top Button
const scrollButton = document.querySelector('.scroll-to-top');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
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

// Scroll to Element
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}



// Get the current page URL
const currentPage = window.location.href;

// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through each link and check if it matches the current page
navLinks.forEach(link => {
  if (link.href === currentPage) {
    // Add the active class to the parent li element
    link.parentNode.classList.add('active');
    
    // Add the glowing or lighting effect to the link icon
    const icon = link.querySelector('i');
    icon.classList.add('glow'); // Replace 'glow' with the desired CSS class name for the effect
  }
});

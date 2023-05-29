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

// Blog Post Content
const blogButtons = document.querySelectorAll('.week-button');
const blogContent = document.querySelector('.blog-content');

blogButtons.forEach(button => {
  button.addEventListener('click', () => {
    const week = button.dataset.week;
    const weekContent = getBlogContent(week);
    blogContent.textContent = weekContent;
  });
});

function getBlogContent(week) {
  // Here, you can define the content for each week
  // You can use a switch statement or an object to map the weeks to their content
  // Replace the placeholder content below with the actual content for each week
  switch (week) {
    case 'week1':
      return 'Week 1 Content';
    case 'week2':
      return 'Week 2 Content';
    case 'week3':
      return 'Week 3 Content';
    // Add more cases for each week
    default:
      return 'No content available';
  }
});


// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a.smooth-scroll');

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
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
const blogLinks = document.querySelectorAll('.week-link');
const blogContent = document.querySelector('.blog-content');

blogLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const week = link.getAttribute('href');
    const weekContent = getBlogContent(week);
    blogContent.textContent = weekContent;
    document.getElementById(week.substring(1)).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Helper function to retrieve blog content based on week
function getBlogContent(week) {
  
}

//Track MouseCLick

const track= document.getElementById("image-track");
window.onmousedown = e =>{
if(track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
         maxDelta = window.innerWidth/2;

  const percentage = (mouseDelta/ maxDelta)*100;
        nextPercentage = parseFloat(track.dataset.prevPercentage)+percentage;

        track.dataset.percentage= nextPercentage;
        track.style.transform  = 'translate(${percentage}%,-50%)';
}



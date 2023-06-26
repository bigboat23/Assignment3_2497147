// Select the navigation container
const navigationContainer = document.querySelector('nav ul');

// Add event listener to the navigation container
navigationContainer.addEventListener('click', (event) => {
  const targetButton = event.target.closest('button');
  if (targetButton) {
    const targetId = targetButton.id;
    switch (targetId) {
      case 'profileButton':
        GoToPage('profile.html');
        break;
      case 'blogButton':
        GoToPage('blog.html');
        break;
      case 'essayButton':
        GoToPage('essay.html');
        break;
      case 'designButton':
        GoToPage('design.html');
        break;
      case 'portfolioButton':
        GoToPage('portfolio.html');
        break;
      case 'homeButton':
        GoToPage('index.html');
        break;
    }
  }
});

// Navigation function
function GoToPage(page) {
  window.location.href = page;
}

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
// scroll to element

function scrollToElement(elementId) {
  const targetElement = document.getElementById(elementId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Lightbox Gallery
const images = document.querySelectorAll('#image-track img');

images.forEach((image) => {
  let gifPlaying = false;

  image.addEventListener('click', () => {
    // Check if the clicked image is the one you want to trigger the GIF animation
    if (image.src === 'https://giffiles.alphacoders.com/995/99544.gif' && !gifPlaying) {
      // Play the GIF animation
      gifPlaying = true;
      image.src = 'https://giffiles.alphacoders.com/995/99544.gif';
    } else {
      // Create a lightbox overlay element
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');

      // Create an image element for the lightbox
      const lightboxImage = document.createElement('img');
      lightboxImage.src = image.src;
      lightboxImage.classList.add('lightbox-image');

      // Append the lightbox image to the overlay
      overlay.appendChild(lightboxImage);

      // Add the overlay to the document body
      document.body.appendChild(overlay);

      // Remove the overlay when clicked
      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
    }
  });
});

// Automatically play the "Snake Eater" theme
const snakeEaterImage = document.querySelector('a[data-caption="Kept You Waiting Huh "] img');

snakeEaterImage.addEventListener('click', (event) => {
  event.preventDefault();
  const audio = new Audio('SnakeEater.mp3');
  audio.play();
});


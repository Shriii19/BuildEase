// =====================================
// MOBILE MENU FUNCTIONALITY
// =====================================

// Get mobile menu elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

// Toggle mobile menu when button is clicked
mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// =====================================
// SMOOTH SCROLLING FOR LINKS
// =====================================

// Make all anchor links scroll smoothly
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================
// NAVBAR BACKGROUND ON SCROLL
// =====================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// =====================================
// FADE IN ANIMATIONS
// =====================================

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add fade-in class to elements
const fadeElements = document.querySelectorAll('.service-card, .feature-card, .stat-item');
fadeElements.forEach(element => {
    element.classList.add('fade-in');
});

// Check scroll and add visible class
function checkScroll() {
    fadeElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Run on scroll and page load
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// =====================================
// SIMPLE CONTACT FORM (if you add one)
// =====================================

// Example function for handling contact form
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        // Here you would typically send the data to a server
    } else {
        alert('Please fill in all fields.');
    }
}

// =====================================
// HELPFUL TIPS FOR BEGINNERS
// =====================================

/*
HOW TO CUSTOMIZE THIS WEBSITE:

1. COLORS:
   - Go to the :root section in CSS
   - Change the color values (like --primary-color: #3b82f6;)
   - All colors will update automatically!

2. CONTENT:
   - Change text in the HTML file
   - Replace company name "BUILDEASE" with your name
   - Update phone numbers, emails, and addresses

3. IMAGES:
   - Add your images to an "images" folder
   - Update the image sources in HTML (src="images/yourimage.jpg")

4. FONTS:
   - Change 'Poppins' to any Google Font you like
   - Update the Google Fonts link in HTML head section

5. SECTIONS:
   - Add new sections by copying existing section structure
   - Remove sections you don't need

6. NAVIGATION:
   - Add new menu items in the nav-menu ul
   - Make sure to add corresponding sections with matching IDs

Remember: Always test your changes on mobile devices!
*/

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
// ENHANCED NAVBAR ANIMATIONS
// =====================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// =====================================
// ADVANCED INTERSECTION OBSERVER ANIMATIONS
// =====================================

// Create intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation delay for children
            const children = entry.target.querySelectorAll('.service-card, .feature-card, .stat-card, .testimonial-card, .portfolio-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('visible');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .services-preview, .stats, .why-choose-us, .portfolio, .testimonials, .process-overview');
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// =====================================
// COUNTER ANIMATION FOR STATISTICS
// =====================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-count'));
            
            if (target && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter, target);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// =====================================
// BUTTON HOVER EFFECTS AND INTERACTIONS
// =====================================

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Apply ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .login-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});

// =====================================
// FLOATING ANIMATION FOR HERO CARDS
// =====================================

document.addEventListener('DOMContentLoaded', function() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Add initial animation delay
        card.style.animationDelay = `${index * 0.2}s`;
        card.style.animation = 'float 3s ease-in-out infinite';
        
        // Stagger the floating animation
        setTimeout(() => {
            card.style.animationDelay = `${index * 0.5}s`;
        }, 1000);
    });
});

// =====================================
// PARALLAX SCROLLING EFFECT
// =====================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// =====================================
// LOADING ANIMATION
// =====================================

window.addEventListener('load', function() {
    // Add loaded class to body for any load-specific animations
    document.body.classList.add('loaded');
    
    // Animate navigation menu items with staggered delay
    const navItems = document.querySelectorAll('.nav-menu li');
    navItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
});

// =====================================
// ENHANCED MOBILE MENU ANIMATIONS
// =====================================

// Enhanced mobile menu toggle
if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        const isActive = navMenu.classList.contains('active');
        
        if (!isActive) {
            navMenu.classList.add('active');
            // Animate menu items
            const menuItems = navMenu.querySelectorAll('li');
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateY(0)';
                    item.style.opacity = '1';
                }, index * 100);
            });
        } else {
            navMenu.classList.remove('active');
        }
    });
}

// =====================================
// SCROLL TO TOP BUTTON
// =====================================

// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =====================================
// SIMPLE CONTACT FORM (if you add one)
// =====================================

// Example function for handling contact form
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
    
    // Simple validation
    if (name && email && message) {
        // Add success animation
        const form = event.target;
        form.style.transform = 'scale(1.02)';
        setTimeout(() => {
            form.style.transform = 'scale(1)';
            alert('Thank you for your message! We will get back to you soon.');
        }, 200);
    } else {
        alert('Please fill in all fields.');
    }
}

// =====================================
// PERFORMANCE OPTIMIZATION
// =====================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Any scroll-heavy animations can go here
}, 10);

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

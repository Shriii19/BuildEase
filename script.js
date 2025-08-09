// Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        function toggleMobileMenu() {
            const navMenu = document.getElementById('nav-menu');
            const menuBtn = document.querySelector('.mobile-menu-btn i');
            
            navMenu.classList.toggle('show');
            
            if (navMenu.classList.contains('show')) {
                menuBtn.classList.remove('fa-bars');
                menuBtn.classList.add('fa-times');
            } else {
                menuBtn.classList.remove('fa-times');
                menuBtn.classList.add('fa-bars');
            }
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navMenu = document.getElementById('nav-menu');
                    const menuBtn = document.querySelector('.mobile-menu-btn i');
                    if (navMenu.classList.contains('show')) {
                        navMenu.classList.remove('show');
                        menuBtn.classList.remove('fa-times');
                        menuBtn.classList.add('fa-bars');
                    }
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Counter animation
        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
            }, 16);
        }

        // Animate counters when visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target.querySelector('.stat-number');
                    if (counter && !counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounter(counter);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.stat-item').forEach(item => {
            counterObserver.observe(item);
        });

        // Notification system
        function showNotification(message, type = 'info') {
            // Remove existing notification
            const existing = document.querySelector('.notification');
            if (existing) existing.remove();

            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}-circle"></i>
                ${message}
            `;

            document.body.appendChild(notification);

            setTimeout(() => notification.classList.add('show'), 100);

            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 4000);
        }

        // Login modal simulation
        function showLoginModal() {
            showNotification('Login feature coming soon! Stay tuned for updates.', 'info');
        }

        // Button click effects
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 150);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navMenu = document.getElementById('nav-menu');
                const menuBtn = document.querySelector('.mobile-menu-btn i');
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                }
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            showNotification('Welcome to BUILDEASE - Your Construction Partner!', 'success');
        });
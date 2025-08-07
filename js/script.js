/* ==========================================================================
BUILDEASE INTERACTIVITY SCRIPT
==========================================================================
*/

// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                primaryHover: 'var(--primary-hover-color)',
                secondary: 'var(--secondary-color)',
                background: 'var(--background-color)',
                card: 'var(--card-background-color)',
                text: 'var(--text-color)',
                heading: 'var(--heading-color)',
                subtle: 'var(--subtle-text-color)',
                border: 'var(--border-color)',
                accent: 'var(--accent-color)',
            }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 OpenWeb Starter initialized successfully!');
    
    // --- Live Editor Demo ---
    initLiveEditor();
    
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        mobileMenu.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    // --- Auth Modal ---
    const authModal = document.getElementById('auth-modal');
    const modalTitle = document.getElementById('modal-title');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toggleForm = document.getElementById('toggle-form');
    const toggleText = document.getElementById('toggle-text');
    const closeModal = document.getElementById('close-modal');
    
    // Only initialize modal functionality if elements exist
    if (authModal && modalTitle && loginForm && signupForm && toggleForm && toggleText && closeModal) {
        // Open modal for login
        const loginBtn = document.getElementById('login-btn');
        const mobileLoginBtn = document.getElementById('mobile-login-btn');
        const signupBtn = document.getElementById('signup-btn');
        const mobileSignupBtn = document.getElementById('mobile-signup-btn');
        const ctaSignup = document.getElementById('cta-signup');
        
        const openAuthModal = (showSignup = false) => {
            if (showSignup) {
                showSignupForm();
            } else {
                showLoginForm();
            }
            authModal.classList.remove('hidden');
            authModal.classList.add('flex');
            document.body.classList.add('menu-open');
        };
        
        if (loginBtn) loginBtn.addEventListener('click', () => openAuthModal(false));
        if (mobileLoginBtn) mobileLoginBtn.addEventListener('click', () => openAuthModal(false));
        if (signupBtn) signupBtn.addEventListener('click', () => openAuthModal(true));
        if (mobileSignupBtn) mobileSignupBtn.addEventListener('click', () => openAuthModal(true));
        if (ctaSignup) ctaSignup.addEventListener('click', () => openAuthModal(true));
        
        // Toggle between login and signup
        toggleForm.addEventListener('click', () => {
            if (loginForm.classList.contains('hidden')) {
                showLoginForm();
            } else {
                showSignupForm();
            }
        });
        
        // Close modal
        closeModal.addEventListener('click', closeAuthModal);
        
        // Close modal when clicking outside
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                closeAuthModal();
            }
        });
        
        // Form submissions with validation
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateLoginForm()) {
                alert('Login functionality would be implemented here!');
            }
        });
        
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateSignupForm()) {
                alert('Signup functionality would be implemented here!');
            }
        });
        
        function showLoginForm() {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            modalTitle.textContent = 'Login to Your Account';
            toggleText.textContent = "Don't have an account?";
            toggleForm.textContent = "Sign Up";
        }
        
        function showSignupForm() {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
            modalTitle.textContent = 'Create Your Account';
            toggleText.textContent = "Already have an account?";
            toggleForm.textContent = "Sign In";
        }
        
        function closeAuthModal() {
            authModal.classList.add('hidden');
            authModal.classList.remove('flex');
            document.body.classList.remove('menu-open');
        }
        
        function validateLoginForm() {
            let isValid = true;
            const email = document.getElementById('login-email');
            const password = document.getElementById('login-password');
            const emailError = document.getElementById('login-email-error');
            const passwordError = document.getElementById('login-password-error');
            
            // Reset errors
            email.classList.remove('error');
            password.classList.remove('error');
            emailError.textContent = '';
            passwordError.textContent = '';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            
            // Validate email
            if (!email.value || !validateEmail(email.value)) {
                email.classList.add('error');
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            }
            
            // Validate password
            if (!password.value) {
                password.classList.add('error');
                passwordError.textContent = 'Please enter your password';
                passwordError.style.display = 'block';
                isValid = false;
            }
            
            return isValid;
        }
        
        function validateSignupForm() {
            let isValid = true;
            const name = document.getElementById('signup-name');
            const email = document.getElementById('signup-email');
            const password = document.getElementById('signup-password');
            const confirm = document.getElementById('signup-confirm');
            const terms = document.getElementById('terms');
            
            const nameError = document.getElementById('signup-name-error');
            const emailError = document.getElementById('signup-email-error');
            const passwordError = document.getElementById('signup-password-error');
            const confirmError = document.getElementById('signup-confirm-error');
            const termsError = document.getElementById('terms-error');
            
            // Reset errors
            [name, email, password, confirm].forEach(el => el.classList.remove('error'));
            [nameError, emailError, passwordError, confirmError].forEach(el => {
                el.textContent = '';
                el.style.display = 'none';
            });
            termsError.textContent = '';
            termsError.style.display = 'none';
            
            // Validate name
            if (!name.value.trim()) {
                name.classList.add('error');
                nameError.textContent = 'Please enter your full name';
                nameError.style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            if (!email.value || !validateEmail(email.value)) {
                email.classList.add('error');
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            }
            
            // Validate password
            if (!password.value) {
                password.classList.add('error');
                passwordError.textContent = 'Please enter a password';
                passwordError.style.display = 'block';
                isValid = false;
            } else if (password.value.length < 8) {
                password.classList.add('error');
                passwordError.textContent = 'Password must be at least 8 characters';
                passwordError.style.display = 'block';
                isValid = false;
            }
            
            // Validate password confirmation
            if (password.value !== confirm.value) {
                confirm.classList.add('error');
                confirmError.textContent = 'Passwords do not match';
                confirmError.style.display = 'block';
                isValid = false;
            }
            
            // Validate terms agreement
            if (!terms.checked) {
                termsError.textContent = 'You must agree to the terms';
                termsError.style.display = 'block';
                isValid = false;
            }
            
            return isValid;
        }
        
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
    
    /* ==========================================================================
    GEMINI AI-POWERED FEATURES
    ==========================================================================
    This section handles the calls to the Gemini API for content generation.
    */
    const API_KEY = ""; // Your API key is automatically handled.
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
    
    /**
     * A generic function to call the Gemini API with a given prompt.
     * @param {string} prompt - The prompt to send to the AI.
     * @param {HTMLElement} button - The button that triggered the call, for UI feedback.
     * @returns {Promise<string|null>} - The generated text or null on error.
     */
    async function generateContent(prompt, button) {
        // Check if API key is available
        if (!API_KEY || API_KEY.trim() === "") {
            alert("🔑 AI features require an API key. Please add your Gemini API key to the API_KEY variable in the script section.");
            return null;
        }

        const originalButtonText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = '<span class="animate-pulse">Generating...</span>';
        const payload = {
            contents: [{
                role: "user",
                parts: [{ text: prompt }]
            }]
        };
        
        let response = null;
        try {
            response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            
            if (result.candidates && result.candidates.length > 0 && result.candidates[0].content.parts[0].text) {
                return result.candidates[0].content.parts[0].text.trim();
            } else {
                console.error("API response was successful but did not contain expected content.", result);
                return null;
            }
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            alert("An error occurred while generating content. Please check the console for details.");
            return null;
        } finally {
            button.disabled = false;
            button.innerHTML = originalButtonText;
        }
    }
    
    // --- Feature 1: Suggest a new headline ---
    const suggestHeadlineBtn = document.getElementById('suggest-headline-btn');
    const heroHeading = document.getElementById('hero-heading');
    
    if (suggestHeadlineBtn && heroHeading) {
        suggestHeadlineBtn.addEventListener('click', async () => {
            const currentHeadline = heroHeading.innerText;
            const prompt = `Generate 5 alternative, catchy, and professional website headlines for a company. The current headline is "${currentHeadline}". Return only the best one, without any extra formatting, quotes, or numbering.`;
            
            const newHeadline = await generateContent(prompt, suggestHeadlineBtn);
            if (newHeadline) {
                heroHeading.innerText = newHeadline;
            }
        });
    }
    
    // --- Feature 2: Generate service descriptions ---
    const generateDescBtns = document.querySelectorAll('.generate-desc-btn');
    
    generateDescBtns.forEach(button => {
        button.addEventListener('click', async (e) => {
            const card = e.target.closest('.bg-card');
            const title = card.querySelector('h3').innerText;
            const descriptionP = card.querySelector('[data-service-desc]');
            
            const prompt = `Write a compelling, short (1-2 sentence) marketing description for a service called "${title}". The tone should be professional and benefit-oriented. Do not use quotes or any prefix like "Description:".`;
            const newDescription = await generateContent(prompt, button);
            if (newDescription) {
                descriptionP.innerText = newDescription;
            }
        });
    });
    
    // --- Easy Editing Features ---
    // Add click-to-edit functionality for beginners
    document.querySelectorAll('.editable-content').forEach(element => {
        element.addEventListener('click', function() {
            // Simple alert with editing instructions
            if (this.tagName === 'H1') {
                alert('💡 Editing Tip: To change this headline, look for the heading in the HTML file, or use the "✨ Suggest a new headline" button below!');
            } else if (this.tagName === 'P') {
                alert('💡 Editing Tip: To change this text, find this content in the HTML file and replace it with your own message.');
            } else if (this.tagName === 'A' || this.closest('a')) {
                alert('💡 Editing Tip: To change your company name and logo, look for "BuildEase" in the navigation section.');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Live Editor Demo Functionality
function initLiveEditor() {
    const editorForm = document.getElementById('live-editor-form');
    if (!editorForm) return;
    
    const inputs = {
        name: document.getElementById('editor-name'),
        title: document.getElementById('editor-title'),
        bio: document.getElementById('editor-bio'),
        email: document.getElementById('editor-email'),
        color: document.getElementById('editor-color')
    };
    
    const preview = {
        name: document.getElementById('preview-name'),
        title: document.getElementById('preview-title'),
        bio: document.getElementById('preview-bio'),
        email: document.getElementById('preview-email')
    };
    
    // Update preview in real-time
    function updatePreview() {
        if (inputs.name && preview.name) preview.name.textContent = inputs.name.value;
        if (inputs.title && preview.title) preview.title.textContent = inputs.title.value;
        if (inputs.bio && preview.bio) preview.bio.textContent = inputs.bio.value;
        if (inputs.email && preview.email) {
            preview.email.textContent = inputs.email.value;
            preview.email.href = `mailto:${inputs.email.value}`;
        }
        
        // Update color theme
        if (inputs.color) {
            const color = inputs.color.value;
            const previewContainer = document.getElementById('live-preview');
            if (previewContainer) {
                const avatar = previewContainer.querySelector('.bg-primary');
                const title = previewContainer.querySelector('#preview-title');
                const email = previewContainer.querySelector('#preview-email');
                
                if (avatar) {
                    avatar.style.backgroundColor = color;
                }
                if (title) {
                    title.style.color = color;
                }
                if (email) {
                    email.style.color = color;
                }
            }
        }
    }
    
    // Add event listeners for real-time updates
    Object.values(inputs).forEach(input => {
        if (input) {
            input.addEventListener('input', updatePreview);
            input.addEventListener('change', updatePreview);
        }
    });
    
    // Initial update
    updatePreview();
}

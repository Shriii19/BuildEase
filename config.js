// OpenWeb Starter Configuration File
// Edit the values below to customize your website

const config = {
    // Site Information
    siteName: "OpenWeb Starter",
    tagline: "Simple. Customizable. Open Source.",
    description: "Launch your personal portfolio, resume, or landing page in minutes. Just edit config.js with your info and you're ready to go.",
    
    // Personal Information
    name: "Your Name",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    
    // Bio/About
    bio: "A passionate developer and designer who loves creating amazing web experiences. I specialize in modern web technologies and always strive to build user-friendly, responsive websites.",
    
    // Social Links
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        instagram: "https://instagram.com/yourusername",
        facebook: "https://facebook.com/yourusername",
        dribbble: "https://dribbble.com/yourusername",
        behance: "https://behance.net/yourusername"
    },
    
    // Skills
    skills: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "UI/UX Design",
        "Git/GitHub",
        "Responsive Design"
    ],
    
    // Projects
    projects: [
        {
            title: "Project One",
            description: "A responsive web application built with modern technologies",
            image: "https://via.placeholder.com/400x250",
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project-one"
        },
        {
            title: "Project Two",
            description: "An innovative mobile-first design solution",
            image: "https://via.placeholder.com/400x250",
            technologies: ["React", "Node.js", "MongoDB"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project-two"
        },
        {
            title: "Project Three",
            description: "A full-stack application with real-time features",
            image: "https://via.placeholder.com/400x250",
            technologies: ["Vue.js", "Express", "Socket.io"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/yourusername/project-three"
        }
    ],
    
    // Services/Experience
    services: [
        {
            title: "Web Development",
            description: "Creating responsive, fast, and user-friendly websites",
            icon: "fas fa-code"
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive and beautiful user interfaces",
            icon: "fas fa-paint-brush"
        },
        {
            title: "Mobile Development",
            description: "Building cross-platform mobile applications",
            icon: "fas fa-mobile-alt"
        }
    ],
    
    // Testimonials
    testimonials: [
        {
            name: "Client Name",
            role: "CEO, Company Name",
            text: "Outstanding work! Professional, timely, and exceeded expectations.",
            avatar: "https://via.placeholder.com/80"
        },
        {
            name: "Another Client",
            role: "Marketing Director",
            text: "Incredible attention to detail and great communication throughout.",
            avatar: "https://via.placeholder.com/80"
        }
    ],
    
    // Contact Information
    contact: {
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Your City, State 12345",
        availability: "Available for freelance projects"
    },
    
    // Theme Colors (CSS Custom Properties)
    theme: {
        primary: "#3b82f6",
        secondary: "#10b981",
        accent: "#8b5cf6",
        background: "#f9fafb",
        text: "#1f2937"
    }
};

// Apply configuration to the website
function applyConfig() {
    // Update site name and title
    document.title = `${config.siteName} | ${config.name}`;
    
    // Update elements with config data
    updateElement('site-name', config.siteName);
    updateElement('hero-heading', config.tagline);
    updateElement('user-name', config.name);
    updateElement('user-bio', config.bio);
    updateElement('user-email', config.contact.email);
    updateElement('user-phone', config.contact.phone);
    
    // Apply theme colors
    applyTheme();
    
    // Generate dynamic content
    generateProjects();
    generateServices();
    generateSkills();
    generateSocialLinks();
    generateTestimonials();
}

function updateElement(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = content;
    }
}

function applyTheme() {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', config.theme.primary);
    root.style.setProperty('--secondary-color', config.theme.secondary);
    root.style.setProperty('--accent-color', config.theme.accent);
    root.style.setProperty('--background-color', config.theme.background);
    root.style.setProperty('--text-color', config.theme.text);
}

function generateProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = config.projects.map(project => `
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">${tech}</span>
                    `).join('')}
                </div>
                <div class="flex gap-4">
                    <a href="${project.liveUrl}" target="_blank" class="text-blue-600 hover:underline">Live Demo</a>
                    <a href="${project.githubUrl}" target="_blank" class="text-gray-600 hover:underline">GitHub</a>
                </div>
            </div>
        </div>
    `).join('');
}

function generateServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    container.innerHTML = config.services.map(service => `
        <div class="text-center p-6 bg-white rounded-xl shadow-md">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="${service.icon} text-blue-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
            <p class="text-gray-600">${service.description}</p>
        </div>
    `).join('');
}

function generateSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = config.skills.map(skill => `
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">${skill}</span>
    `).join('');
}

function generateSocialLinks() {
    const container = document.getElementById('social-links');
    if (!container) return;
    
    const socialIcons = {
        github: 'fab fa-github',
        linkedin: 'fab fa-linkedin',
        twitter: 'fab fa-twitter',
        instagram: 'fab fa-instagram',
        facebook: 'fab fa-facebook',
        dribbble: 'fab fa-dribbble',
        behance: 'fab fa-behance'
    };
    
    container.innerHTML = Object.entries(config.social)
        .filter(([platform, url]) => url)
        .map(([platform, url]) => `
            <a href="${url}" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
                <i class="${socialIcons[platform]} text-xl"></i>
            </a>
        `).join('');
}

function generateTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    
    container.innerHTML = config.testimonials.map(testimonial => `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <p class="text-gray-600 mb-4 italic">"${testimonial.text}"</p>
            <div class="flex items-center">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-3">
                <div>
                    <div class="font-semibold">${testimonial.name}</div>
                    <div class="text-sm text-gray-500">${testimonial.role}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', applyConfig);

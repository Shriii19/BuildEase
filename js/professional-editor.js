/**
 * Professional Template Editor
 * Enhanced user experience with guided tutorials and intuitive interface
 * Version: 2.0
 */

class ProfessionalTemplateEditor {
    constructor() {
        this.currentTemplate = null;
        this.originalCode = '';
        this.isFirstVisit = localStorage.getItem('editor_tutorial_completed') !== 'true';
        this.autoSaveInterval = null;
        this.undoStack = [];
        this.redoStack = [];
        this.maxUndoSteps = 50;
        
        // Initialize templates with enhanced metadata
        this.templates = this.initializeTemplates();
        
        // Initialize the editor
        this.init();
    }

    initializeTemplates() {
        return {
            portfolio: {
                name: 'Professional Portfolio',
                description: 'Perfect for showcasing your work and skills',
                difficulty: 'Beginner',
                features: ['Responsive Design', 'Modern Layout', 'Contact Forms', 'Project Gallery'],
                category: 'Personal',
                estimatedTime: '15 minutes',
                preview: 'A beautiful portfolio to showcase your projects and skills',
                code: this.getPortfolioTemplate()
            },
            business: {
                name: 'Business Website',
                description: 'Professional business presence online',
                difficulty: 'Intermediate',
                features: ['Company Info', 'Services', 'Team Section', 'Testimonials'],
                category: 'Business',
                estimatedTime: '20 minutes',
                preview: 'Complete business website with all essential sections',
                code: this.getBusinessTemplate()
            },
            resume: {
                name: 'Digital Resume',
                description: 'Stand out with a modern online resume',
                difficulty: 'Beginner',
                features: ['ATS Friendly', 'Print Ready', 'Contact Links', 'Skills Section'],
                category: 'Career',
                estimatedTime: '10 minutes',
                preview: 'Professional resume that works online and in print',
                code: this.getResumeTemplate()
            },
            landing: {
                name: 'Landing Page',
                description: 'High-converting landing page template',
                difficulty: 'Advanced',
                features: ['Hero Section', 'Features', 'CTA Buttons', 'Social Proof'],
                category: 'Marketing',
                estimatedTime: '25 minutes',
                preview: 'Conversion-optimized landing page for products or services',
                code: this.getLandingTemplate()
            }
        };
    }

    getPortfolioTemplate() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="John Doe - Professional Full Stack Developer Portfolio">
    <title>John Doe - Portfolio</title>
    <style>
        /* Modern Portfolio Styles */
        :root {
            --primary-color: #667eea;
            --secondary-color: #764ba2;
            --accent-color: #f093fb;
            --text-dark: #2d3748;
            --text-light: #718096;
            --bg-light: #f7fafc;
            --white: #ffffff;
            --shadow: 0 10px 25px rgba(0,0,0,0.1);
            --shadow-hover: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background: var(--bg-light);
            scroll-behavior: smooth;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            padding: 1rem 0;
            transition: all 0.3s ease;
        }
        
        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
            color: var(--primary-color);
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: var(--white);
            padding: 8rem 0 5rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="1.5" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="white" opacity="0.1"/></svg>') repeat;
            animation: float 20s linear infinite;
        }
        
        @keyframes float {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(10px); }
            100% { transform: translateY(0px) translateX(0px); }
        }
        
        .hero-content {
            position: relative;
            z-index: 1;
        }
        
        .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin: 0 auto 2rem;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 5rem;
            border: 4px solid rgba(255, 255, 255, 0.3);
            box-shadow: var(--shadow);
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .hero .subtitle {
            font-size: 1.4rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .btn-primary {
            background: var(--white);
            color: var(--primary-color);
        }
        
        .btn-secondary {
            background: transparent;
            color: var(--white);
            border-color: var(--white);
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        /* Sections */
        .section {
            padding: 5rem 0;
        }
        
        .section:nth-child(even) {
            background: var(--white);
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--text-dark);
            font-weight: 700;
        }
        
        .section-subtitle {
            text-align: center;
            font-size: 1.2rem;
            color: var(--text-light);
            margin-bottom: 4rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        /* About Section */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .about-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-light);
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem;
        }
        
        .skill-item {
            background: var(--bg-light);
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .skill-item:hover {
            transform: translateY(-5px);
        }
        
        /* Projects Section */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }
        
        .project-card {
            background: var(--white);
            border-radius: 15px;
            padding: 2rem;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;
        }
        
        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-hover);
        }
        
        .project-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .project-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-right: 1rem;
        }
        
        .project-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-dark);
        }
        
        .project-description {
            color: var(--text-light);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        
        .project-link {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .project-link:hover {
            color: var(--secondary-color);
        }
        
        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, var(--text-dark) 0%, #1a202c 100%);
            color: var(--white);
        }
        
        .contact .section-title {
            color: var(--white);
        }
        
        .contact-content {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 3rem;
            flex-wrap: wrap;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 1.5rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            transition: background 0.3s ease;
        }
        
        .contact-item:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .contact-item a {
            color: var(--white);
            text-decoration: none;
        }
        
        /* Footer */
        .footer {
            background: #1a202c;
            color: var(--white);
            text-align: center;
            padding: 2rem 0;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .about-content {
                grid-template-columns: 1fr;
            }
            
            .contact-info {
                flex-direction: column;
                align-items: center;
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <nav>
        <div class="container">
            <div class="nav-content">
                <div class="logo">JD</div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="profile-image">👨‍💻</div>
                <h1>John Doe</h1>
                <p class="subtitle">Full Stack Developer & Creative Problem Solver</p>
                <div class="cta-buttons">
                    <a href="#projects" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="section">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <p class="section-subtitle">Passionate about creating digital experiences that make a difference</p>
            
            <div class="about-content">
                <div class="about-text">
                    <p>I'm a dedicated full-stack developer with over 5 years of experience building scalable web applications. My passion lies in creating user-centered digital solutions that solve real-world problems.</p>
                    
                    <p>I specialize in modern JavaScript frameworks, cloud technologies, and agile development practices. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or mentoring aspiring developers.</p>
                </div>
                
                <div class="skills-grid">
                    <div class="skill-item">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚛️</div>
                        <div>React</div>
                    </div>
                    <div class="skill-item">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🟢</div>
                        <div>Node.js</div>
                    </div>
                    <div class="skill-item">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🐍</div>
                        <div>Python</div>
                    </div>
                    <div class="skill-item">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">☁️</div>
                        <div>AWS</div>
                    </div>
                    <div class="skill-item">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🗄️</div>
                        <div>MongoDB</div>
                    </div>
                    <div class="skill-item">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎨</div>
                        <div>UI/UX</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="section">
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-subtitle">A showcase of my recent work and creative solutions</p>
            
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">🛒</div>
                        <h3 class="project-title">E-Commerce Platform</h3>
                    </div>
                    <p class="project-description">
                        A full-featured online marketplace built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and real-time analytics.
                    </p>
                    <a href="#" class="project-link">
                        View Project <span>→</span>
                    </a>
                </div>
                
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">📊</div>
                        <h3 class="project-title">Project Management Tool</h3>
                    </div>
                    <p class="project-description">
                        A collaborative workspace application with real-time updates, task tracking, file sharing, and team communication features. Built for remote teams.
                    </p>
                    <a href="#" class="project-link">
                        View Project <span>→</span>
                    </a>
                </div>
                
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">🌤️</div>
                        <h3 class="project-title">Weather Analytics Dashboard</h3>
                    </div>
                    <p class="project-description">
                        An interactive weather application with location-based forecasts, historical data analysis, and beautiful data visualizations powered by machine learning.
                    </p>
                    <a href="#" class="project-link">
                        View Project <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section contact">
        <div class="container">
            <div class="contact-content">
                <h2 class="section-title">Let's Build Something Amazing</h2>
                <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 2rem;">
                    Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
                </p>
                
                <div class="contact-info">
                    <div class="contact-item">
                        <span style="font-size: 1.2rem;">📧</span>
                        <a href="mailto:john@example.com">john@example.com</a>
                    </div>
                    <div class="contact-item">
                        <span style="font-size: 1.2rem;">📱</span>
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </div>
                    <div class="contact-item">
                        <span style="font-size: 1.2rem;">💼</span>
                        <a href="https://linkedin.com/in/johndoe" target="_blank">LinkedIn</a>
                    </div>
                    <div class="contact-item">
                        <span style="font-size: 1.2rem;">🐙</span>
                        <a href="https://github.com/johndoe" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 John Doe. Built with passion and lots of coffee ☕</p>
        </div>
    </footer>
</body>
</html>`;
    }

    getBusinessTemplate() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="TechCorp - Leading Digital Solutions Provider">
    <title>TechCorp - Digital Solutions</title>
    <style>
        :root {
            --primary: #1e40af;
            --secondary: #3b82f6;
            --accent: #f59e0b;
            --dark: #1f2937;
            --light: #f8fafc;
            --white: #ffffff;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--dark);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        header {
            background: var(--white);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--primary);
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--primary);
        }
        
        /* Hero */
        .hero {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: var(--white);
            padding: 8rem 0 5rem;
            text-align: center;
            margin-top: 80px;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
        }
        
        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .cta-button {
            display: inline-block;
            background: var(--accent);
            color: var(--white);
            padding: 15px 30px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: transform 0.3s;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        /* Services */
        .services {
            padding: 5rem 0;
            background: var(--light);
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--dark);
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .service-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            text-align: center;
            transition: transform 0.3s;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
        }
        
        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        /* About */
        .about {
            padding: 5rem 0;
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        /* Contact */
        .contact {
            background: var(--dark);
            color: var(--white);
            padding: 5rem 0;
            text-align: center;
        }
        
        .contact .section-title {
            color: var(--white);
        }
        
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .about-content { grid-template-columns: 1fr; }
            .nav-links { display: none; }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <div class="logo">TechCorp</div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="container">
            <h1>Digital Solutions for Modern Business</h1>
            <p>We help companies transform their digital presence with cutting-edge technology</p>
            <a href="#contact" class="cta-button">Get Started Today</a>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Our Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>Web Development</h3>
                    <p>Custom websites and web applications built with modern technologies</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📱</div>
                    <h3>Mobile Apps</h3>
                    <p>Native and cross-platform mobile applications for iOS and Android</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">☁️</div>
                    <h3>Cloud Solutions</h3>
                    <p>Scalable cloud infrastructure and deployment solutions</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div>
                    <h2>About TechCorp</h2>
                    <p>With over 10 years of experience, we've helped hundreds of businesses succeed in the digital world. Our team of experts combines technical excellence with creative thinking to deliver solutions that drive results.</p>
                </div>
                <div style="text-align: center; font-size: 8rem;">🚀</div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Ready to Get Started?</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Contact us today for a free consultation</p>
            <p>📧 hello@techcorp.com | 📞 (555) 123-4567</p>
        </div>
    </section>
</body>
</html>`;
    }

    getResumeTemplate() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
        }
        
        .resume {
            max-width: 800px;
            margin: 2rem auto;
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .header {
            background: #2c3e50;
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        
        .header .title {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
            flex-wrap: wrap;
        }
        
        .content {
            padding: 2rem;
        }
        
        .section {
            margin-bottom: 2rem;
        }
        
        .section h2 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .experience-item {
            margin-bottom: 1.5rem;
        }
        
        .experience-item h3 {
            color: #2980b9;
            margin-bottom: 0.25rem;
        }
        
        .meta {
            color: #7f8c8d;
            font-style: italic;
            margin-bottom: 0.5rem;
        }
        
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .skill {
            background: #ecf0f1;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="resume">
        <header class="header">
            <h1>John Doe</h1>
            <p class="title">Senior Full Stack Developer</p>
            <div class="contact-info">
                <span>📧 john@example.com</span>
                <span>📱 (234) 567-890</span>
                <span>🌐 johndoe.dev</span>
                <span>📍 San Francisco, CA</span>
            </div>
        </header>

        <div class="content">
            <section class="section">
                <h2>Professional Summary</h2>
                <p>Experienced Full Stack Developer with 8+ years of expertise in building scalable web applications using modern technologies. Proven track record of leading development teams and delivering high-quality software solutions.</p>
            </section>

            <section class="section">
                <h2>Work Experience</h2>
                <div class="experience-item">
                    <h3>Senior Full Stack Developer</h3>
                    <div class="meta">TechCorp Inc. | 2020 - Present</div>
                    <ul>
                        <li>Led development of microservices architecture serving 1M+ users</li>
                        <li>Mentored team of 5 junior developers</li>
                        <li>Reduced application load time by 40% through optimization</li>
                        <li>Implemented CI/CD pipelines improving deployment efficiency</li>
                    </ul>
                </div>
                
                <div class="experience-item">
                    <h3>Full Stack Developer</h3>
                    <div class="meta">StartupXYZ | 2018 - 2020</div>
                    <ul>
                        <li>Built responsive web applications using React and Node.js</li>
                        <li>Collaborated with UX team to implement user-centered designs</li>
                        <li>Integrated third-party APIs and payment systems</li>
                    </ul>
                </div>
            </section>

            <section class="section">
                <h2>Education</h2>
                <div class="experience-item">
                    <h3>Bachelor of Science in Computer Science</h3>
                    <div class="meta">University of Technology | 2012 - 2016</div>
                    <p>Graduated Magna Cum Laude, GPA: 3.8/4.0</p>
                </div>
            </section>

            <section class="section">
                <h2>Technical Skills</h2>
                <div class="skills">
                    <span class="skill">JavaScript</span>
                    <span class="skill">React</span>
                    <span class="skill">Node.js</span>
                    <span class="skill">Python</span>
                    <span class="skill">PostgreSQL</span>
                    <span class="skill">AWS</span>
                    <span class="skill">Docker</span>
                    <span class="skill">Git</span>
                </div>
            </section>
        </div>
    </div>
</body>
</html>`;
    }

    getLandingTemplate() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazing Product - Transform Your Business</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 5rem 0;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .cta-button {
            display: inline-block;
            background: #ff6b6b;
            color: white;
            padding: 18px 36px;
            text-decoration: none;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: bold;
            transition: transform 0.3s;
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
        }
        
        /* Features */
        .features {
            padding: 5rem 0;
            background: #f8f9fa;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #333;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .feature {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        /* Social Proof */
        .social-proof {
            padding: 3rem 0;
            background: white;
            text-align: center;
        }
        
        .testimonial {
            max-width: 600px;
            margin: 0 auto;
            padding: 2rem;
            background: #f8f9fa;
            border-radius: 15px;
        }
        
        /* Final CTA */
        .final-cta {
            background: #2c3e50;
            color: white;
            padding: 4rem 0;
            text-align: center;
        }
        
        .final-cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .features-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="container">
            <h1>Transform Your Business Today</h1>
            <p>The ultimate solution that helps companies grow 3x faster</p>
            <a href="#cta" class="cta-button">Start Free Trial</a>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <h2 class="section-title">Why Choose Our Solution?</h2>
            <div class="features-grid">
                <div class="feature">
                    <div class="feature-icon">⚡</div>
                    <h3>Lightning Fast</h3>
                    <p>Get results in minutes, not hours. Our optimized platform delivers instant insights.</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🔒</div>
                    <h3>Secure & Reliable</h3>
                    <p>Bank-level security with 99.9% uptime guarantee. Your data is always safe.</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">📊</div>
                    <h3>Powerful Analytics</h3>
                    <p>Deep insights and actionable data to drive your business forward.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="social-proof">
        <div class="container">
            <h2 class="section-title">What Our Customers Say</h2>
            <div class="testimonial">
                <p style="font-style: italic; font-size: 1.2rem; margin-bottom: 1rem;">
                    "This product completely transformed how we operate. We saw a 300% increase in efficiency within the first month!"
                </p>
                <div style="font-weight: bold;">Sarah Johnson</div>
                <div style="color: #666;">CEO, TechStartup Inc.</div>
            </div>
        </div>
    </section>

    <section id="cta" class="final-cta">
        <div class="container">
            <h2>Ready to Get Started?</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Join thousands of satisfied customers today</p>
            <a href="#" class="cta-button">Start Your Free Trial</a>
        </div>
    </section>
</body>
</html>`;
    }

    init() {
        this.bindEvents();
        this.loadSavedProject();
        this.setupAutoSave();
        this.showGuidedIntro();
    }

    bindEvents() {
        // Template selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.select-template-btn')) {
                const card = e.target.closest('.template-card');
                const templateType = card.dataset.template;
                this.selectTemplate(templateType);
            }
        });

        // Editor actions
        const codeEditor = document.getElementById('code-editor');
        if (codeEditor) {
            codeEditor.addEventListener('input', () => {
                this.addToUndoStack();
                this.debounce(() => this.updatePreview(), 300);
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey) {
                switch (e.key) {
                    case 's':
                        e.preventDefault();
                        this.saveProject();
                        break;
                    case 'z':
                        e.preventDefault();
                        this.undo();
                        break;
                    case 'y':
                        e.preventDefault();
                        this.redo();
                        break;
                }
            }
        });

        // Button actions
        this.bindButton('back-to-templates', () => this.showTemplateSelection());
        this.bindButton('download-code', () => this.downloadCode());
        this.bindButton('save-project', () => this.saveProject());
        this.bindButton('deploy-website', () => this.showDeployModal());
        this.bindButton('reset-code', () => this.resetCode());
    }

    bindButton(id, handler) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', handler);
        }
    }

    selectTemplate(templateType) {
        const template = this.templates[templateType];
        if (!template) return;

        this.currentTemplate = templateType;
        this.originalCode = template.code;
        
        const codeEditor = document.getElementById('code-editor');
        if (codeEditor) {
            codeEditor.value = this.originalCode;
            this.addToUndoStack();
            this.updatePreview();
        }

        this.showEditor();
        this.showSuccessMessage(`${template.name} loaded successfully! Start editing to see live changes.`);
    }

    showEditor() {
        const templateSection = document.getElementById('template-selection');
        const editorSection = document.getElementById('editor-panel');
        
        if (templateSection) templateSection.style.display = 'none';
        if (editorSection) {
            editorSection.classList.add('active');
            editorSection.style.display = 'block';
        }
    }

    showTemplateSelection() {
        const templateSection = document.getElementById('template-selection');
        const editorSection = document.getElementById('editor-panel');
        
        if (templateSection) templateSection.style.display = 'block';
        if (editorSection) {
            editorSection.classList.remove('active');
            editorSection.style.display = 'none';
        }
        
        this.currentTemplate = null;
    }

    updatePreview() {
        const codeEditor = document.getElementById('code-editor');
        const previewFrame = document.getElementById('preview-frame');
        
        if (!codeEditor || !previewFrame) return;

        const code = codeEditor.value;
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        previewFrame.src = url;
        
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    addToUndoStack() {
        const codeEditor = document.getElementById('code-editor');
        if (!codeEditor) return;

        if (this.undoStack.length >= this.maxUndoSteps) {
            this.undoStack.shift();
        }
        
        this.undoStack.push(codeEditor.value);
        this.redoStack = [];
    }

    undo() {
        if (this.undoStack.length === 0) return;

        const codeEditor = document.getElementById('code-editor');
        if (!codeEditor) return;

        this.redoStack.push(codeEditor.value);
        const previousState = this.undoStack.pop();
        codeEditor.value = previousState;
        this.updatePreview();
        this.showSuccessMessage('Undone!');
    }

    redo() {
        if (this.redoStack.length === 0) return;

        const codeEditor = document.getElementById('code-editor');
        if (!codeEditor) return;

        this.undoStack.push(codeEditor.value);
        const nextState = this.redoStack.pop();
        codeEditor.value = nextState;
        this.updatePreview();
        this.showSuccessMessage('Redone!');
    }

    resetCode() {
        if (!this.originalCode) return;

        if (confirm('Are you sure you want to reset all changes? This cannot be undone.')) {
            const codeEditor = document.getElementById('code-editor');
            if (codeEditor) {
                codeEditor.value = this.originalCode;
                this.updatePreview();
                this.showSuccessMessage('Code reset to original template');
            }
        }
    }

    saveProject() {
        if (!this.currentTemplate) return;

        const codeEditor = document.getElementById('code-editor');
        if (!codeEditor) return;

        const projectData = {
            template: this.currentTemplate,
            code: codeEditor.value,
            lastModified: new Date().toISOString()
        };

        localStorage.setItem('saved_project', JSON.stringify(projectData));
        this.showSuccessMessage('Project saved successfully!');
    }

    loadSavedProject() {
        const savedData = localStorage.getItem('saved_project');
        if (!savedData) return;

        try {
            const projectData = JSON.parse(savedData);
            this.currentTemplate = projectData.template;
            this.originalCode = this.templates[projectData.template].code;
            
            const codeEditor = document.getElementById('code-editor');
            if (codeEditor) {
                codeEditor.value = projectData.code;
                this.updatePreview();
                this.showEditor();
                this.showSuccessMessage('Loaded saved project');
            }
        } catch (error) {
            console.error('Failed to load saved project:', error);
        }
    }

    downloadCode() {
        const codeEditor = document.getElementById('code-editor');
        if (!codeEditor || !this.currentTemplate) return;

        const code = codeEditor.value;
        const templateName = this.templates[this.currentTemplate].name;
        
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${templateName.toLowerCase().replace(/\s+/g, '-')}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showSuccessMessage('Website downloaded successfully! 🎉');
    }

    showDeployModal() {
        const modal = document.getElementById('deploy-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    }

    setupAutoSave() {
        this.autoSaveInterval = setInterval(() => {
            if (this.currentTemplate) {
                this.saveProject();
            }
        }, 30000); // Auto-save every 30 seconds
    }

    showGuidedIntro() {
        if (this.isFirstVisit) {
            setTimeout(() => {
                this.showWelcomeModal();
            }, 1000);
        }
    }

    showWelcomeModal() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-xl p-8 max-w-md mx-4 text-center">
                <div class="text-6xl mb-4">🎉</div>
                <h2 class="text-2xl font-bold mb-4">Welcome to Template Editor!</h2>
                <p class="text-gray-600 mb-6">Create professional websites in minutes with our easy-to-use editor.</p>
                <div class="space-y-2 text-left mb-6">
                    <div class="flex items-center gap-3">
                        <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                        <span>Choose a template</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                        <span>Customize the content</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                        <span>Download or deploy</span>
                    </div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                    Let's Get Started!
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        localStorage.setItem('editor_tutorial_completed', 'true');
    }

    showSuccessMessage(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform';
        notification.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="text-lg">✅</span>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    debounce(func, wait) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(func, wait);
    }

    destroy() {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }
    }
}

// Initialize the editor when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.templateEditor = new ProfessionalTemplateEditor();
});

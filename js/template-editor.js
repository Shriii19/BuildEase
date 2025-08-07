// Template Editor JavaScript
class TemplateEditor {
    constructor() {
        this.currentTemplate = null;
        this.originalCode = '';
        this.templates = {
            portfolio: {
                name: 'Portfolio Template',
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe - Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 0; text-align: center; }
        .profile-img { width: 150px; height: 150px; border-radius: 50%; margin: 0 auto 2rem; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 3rem; }
        h1 { font-size: 3rem; margin-bottom: 1rem; }
        .subtitle { font-size: 1.2rem; opacity: 0.9; }
        .section { padding: 4rem 0; }
        .section:nth-child(even) { background: #f8f9fa; }
        h2 { font-size: 2.5rem; text-align: center; margin-bottom: 3rem; color: #667eea; }
        .projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .project { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s; }
        .project:hover { transform: translateY(-5px); }
        .contact { text-align: center; background: #333; color: white; }
        .contact a { color: #667eea; text-decoration: none; }
        .contact a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="profile-img">👨‍💻</div>
            <h1>John Doe</h1>
            <p class="subtitle">Full Stack Developer & Designer</p>
        </div>
    </header>

    <section class="section">
        <div class="container">
            <h2>About Me</h2>
            <p style="text-align: center; max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
                I'm a passionate developer with 5 years of experience creating beautiful and functional web applications. 
                I love turning ideas into reality through code and design.
            </p>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2>My Projects</h2>
            <div class="projects">
                <div class="project">
                    <h3>E-Commerce Platform</h3>
                    <p>A full-featured online store built with React and Node.js. Features include user authentication, payment processing, and inventory management.</p>
                </div>
                <div class="project">
                    <h3>Task Management App</h3>
                    <p>A collaborative project management tool with real-time updates, file sharing, and team communication features.</p>
                </div>
                <div class="project">
                    <h3>Weather Dashboard</h3>
                    <p>A responsive weather application with location-based forecasts, interactive maps, and weather alerts.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section contact">
        <div class="container">
            <h2>Get In Touch</h2>
            <p>Ready to work together? Let's create something amazing!</p>
            <p style="margin-top: 2rem;">
                Email: <a href="mailto:john@example.com">john@example.com</a><br>
                Phone: <a href="tel:+1234567890">+1 (234) 567-890</a><br>
                LinkedIn: <a href="#">linkedin.com/in/johndoe</a>
            </p>
        </div>
    </section>
</body>
</html>`
            },
            resume: {
                name: 'Resume Template',
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; line-height: 1.6; color: #333; background: #f5f5f5; }
        .resume { max-width: 800px; margin: 2rem auto; background: white; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        .header { background: #2c3e50; color: white; padding: 3rem 2rem; text-align: center; }
        .header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .header p { font-size: 1.1rem; opacity: 0.9; }
        .content { padding: 2rem; }
        .section { margin-bottom: 2rem; }
        .section h2 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 0.5rem; margin-bottom: 1rem; }
        .experience-item, .education-item { margin-bottom: 1.5rem; }
        .experience-item h3, .education-item h3 { color: #2980b9; margin-bottom: 0.25rem; }
        .meta { color: #7f8c8d; font-style: italic; margin-bottom: 0.5rem; }
        .skills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .skill { background: #ecf0f1; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; }
        .contact-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem; }
        .contact-info div { text-align: center; }
    </style>
</head>
<body>
    <div class="resume">
        <header class="header">
            <h1>John Doe</h1>
            <p>Senior Full Stack Developer</p>
            <div class="contact-info">
                <div>📧 john@example.com</div>
                <div>📱 +1 (234) 567-890</div>
                <div>🌐 johndoe.dev</div>
                <div>📍 San Francisco, CA</div>
            </div>
        </header>

        <div class="content">
            <section class="section">
                <h2>Professional Summary</h2>
                <p>Experienced Full Stack Developer with 8+ years of expertise in building scalable web applications. 
                Proven track record of leading development teams and delivering high-quality software solutions. 
                Passionate about modern technologies and best practices.</p>
            </section>

            <section class="section">
                <h2>Work Experience</h2>
                
                <div class="experience-item">
                    <h3>Senior Full Stack Developer</h3>
                    <div class="meta">TechCorp Inc. | 2020 - Present</div>
                    <ul>
                        <li>Led development of microservices architecture serving 100k+ daily users</li>
                        <li>Mentored junior developers and established coding standards</li>
                        <li>Reduced application load time by 40% through optimization</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <h3>Full Stack Developer</h3>
                    <div class="meta">StartupXYZ | 2018 - 2020</div>
                    <ul>
                        <li>Built responsive web applications using React and Node.js</li>
                        <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                        <li>Collaborated with designers to create intuitive user interfaces</li>
                    </ul>
                </div>

                <div class="experience-item">
                    <h3>Frontend Developer</h3>
                    <div class="meta">WebSolutions Ltd. | 2016 - 2018</div>
                    <ul>
                        <li>Developed interactive frontend components for e-commerce platforms</li>
                        <li>Ensured cross-browser compatibility and mobile responsiveness</li>
                        <li>Improved site performance through code optimization</li>
                    </ul>
                </div>
            </section>

            <section class="section">
                <h2>Education</h2>
                <div class="education-item">
                    <h3>Bachelor of Science in Computer Science</h3>
                    <div class="meta">University of Technology | 2012 - 2016</div>
                    <p>Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems.</p>
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
                    <span class="skill">MongoDB</span>
                    <span class="skill">AWS</span>
                    <span class="skill">Docker</span>
                    <span class="skill">Git</span>
                    <span class="skill">TypeScript</span>
                </div>
            </section>
        </div>
    </div>
</body>
</html>`
            },
            landing: {
                name: 'Landing Page Template',
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazing Product - Landing Page</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 6rem 0; text-align: center; }
        .hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.3rem; margin-bottom: 2rem; opacity: 0.9; }
        .cta-button { display: inline-block; background: #ff6b6b; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 50px; font-size: 1.1rem; font-weight: bold; transition: transform 0.3s; }
        .cta-button:hover { transform: translateY(-2px); }
        .section { padding: 4rem 0; }
        .section:nth-child(even) { background: #f8f9fa; }
        h2 { font-size: 2.5rem; text-align: center; margin-bottom: 3rem; color: #667eea; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .feature { text-align: center; padding: 2rem; background: white; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .feature-icon { font-size: 3rem; margin-bottom: 1rem; }
        .testimonial { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center; max-width: 600px; margin: 0 auto; }
        .footer { background: #333; color: white; text-align: center; padding: 2rem 0; }
    </style>
</head>
<body>
    <section class="hero">
        <div class="container">
            <h1>Transform Your Business</h1>
            <p>The ultimate solution for modern businesses. Increase productivity by 300% with our innovative platform.</p>
            <a href="#" class="cta-button">Get Started Free</a>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2>Why Choose Us?</h2>
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">⚡</div>
                    <h3>Lightning Fast</h3>
                    <p>Experience blazing fast performance with our optimized platform. Load times under 1 second guaranteed.</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🔒</div>
                    <h3>Secure & Reliable</h3>
                    <p>Bank-level security with 99.9% uptime. Your data is protected with enterprise-grade encryption.</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">📱</div>
                    <h3>Mobile First</h3>
                    <p>Perfect experience across all devices. Native mobile apps available for iOS and Android.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2>What Our Customers Say</h2>
            <div class="testimonial">
                <p style="font-style: italic; font-size: 1.2rem; margin-bottom: 1rem;">
                    "This product completely transformed how we work. Our team productivity increased by 250% in just the first month!"
                </p>
                <div style="font-weight: bold;">Sarah Johnson</div>
                <div style="color: #666;">CEO, TechStartup Inc.</div>
            </div>
        </div>
    </section>

    <section class="section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div class="container" style="text-align: center;">
            <h2 style="color: white;">Ready to Get Started?</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Join thousands of satisfied customers today</p>
            <a href="#" class="cta-button" style="background: white; color: #667eea;">Start Your Free Trial</a>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Amazing Product. All rights reserved.</p>
            <p style="margin-top: 0.5rem;">
                <a href="#" style="color: #ccc; text-decoration: none; margin: 0 1rem;">Privacy Policy</a>
                <a href="#" style="color: #ccc; text-decoration: none; margin: 0 1rem;">Terms of Service</a>
                <a href="#" style="color: #ccc; text-decoration: none; margin: 0 1rem;">Contact Us</a>
            </p>
        </div>
    </footer>
</body>
</html>`
            }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateUI();
    }

    bindEvents() {
        // Template selection
        document.querySelectorAll('.select-template-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const templateCard = e.target.closest('.template-card');
                const templateType = templateCard.dataset.template;
                this.selectTemplate(templateType);
            });
        });

        // Back to templates
        document.getElementById('back-to-templates').addEventListener('click', () => {
            this.showTemplateSelection();
        });

        // Code editor
        const codeEditor = document.getElementById('code-editor');
        codeEditor.addEventListener('input', () => {
            this.updatePreview();
        });

        // Reset code
        document.getElementById('reset-code').addEventListener('click', () => {
            this.resetCode();
        });

        // Action buttons
        document.getElementById('deploy-website').addEventListener('click', () => {
            this.showDeployModal();
        });

        document.getElementById('download-code').addEventListener('click', () => {
            this.downloadCode();
        });

        document.getElementById('save-project').addEventListener('click', () => {
            this.saveProject();
        });

        // Deploy modal
        document.getElementById('close-deploy-modal').addEventListener('click', () => {
            this.hideDeployModal();
        });

        // Deploy options
        document.querySelectorAll('#deploy-modal button:not(#close-deploy-modal)').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const platform = e.target.textContent.trim();
                this.deployTo(platform);
            });
        });
    }

    selectTemplate(templateType) {
        this.currentTemplate = templateType;
        const template = this.templates[templateType];
        
        if (template) {
            this.originalCode = template.code;
            document.getElementById('code-editor').value = template.code;
            this.updatePreview();
            this.showEditor();
        }
    }

    showTemplateSelection() {
        document.getElementById('template-selection').style.display = 'block';
        document.getElementById('editor-panel').classList.remove('active');
        this.currentTemplate = null;
    }

    showEditor() {
        document.getElementById('template-selection').style.display = 'none';
        document.getElementById('editor-panel').classList.add('active');
    }

    updatePreview() {
        const code = document.getElementById('code-editor').value;
        const previewFrame = document.getElementById('preview-frame');
        
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;
        
        // Clean up previous URL
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    resetCode() {
        if (this.originalCode) {
            document.getElementById('code-editor').value = this.originalCode;
            this.updatePreview();
        }
    }

    showDeployModal() {
        document.getElementById('deploy-modal').classList.remove('hidden');
        document.getElementById('deploy-modal').classList.add('flex');
    }

    hideDeployModal() {
        document.getElementById('deploy-modal').classList.add('hidden');
        document.getElementById('deploy-modal').classList.remove('flex');
    }

    deployTo(platform) {
        this.hideDeployModal();
        
        // Simulate deployment process
        const deployButton = document.getElementById('deploy-website');
        const originalText = deployButton.innerHTML;
        
        deployButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Deploying...';
        deployButton.disabled = true;
        
        setTimeout(() => {
            deployButton.innerHTML = '<i class="fas fa-check mr-2"></i>Deployed!';
            deployButton.className = 'bg-green-600 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center';
            
            // Show success message
            this.showNotification(`Successfully deployed to ${platform}!`, 'success');
            
            setTimeout(() => {
                deployButton.innerHTML = originalText;
                deployButton.disabled = false;
                deployButton.className = 'bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center';
            }, 3000);
        }, 2000);
    }

    downloadCode() {
        const code = document.getElementById('code-editor').value;
        const templateName = this.currentTemplate || 'website';
        
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${templateName}-website.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('Website downloaded successfully!', 'success');
    }

    saveProject() {
        const code = document.getElementById('code-editor').value;
        const templateName = this.currentTemplate || 'website';
        
        // Save to localStorage for now
        const projectData = {
            template: this.currentTemplate,
            code: code,
            lastModified: new Date().toISOString()
        };
        
        localStorage.setItem(`project_${templateName}`, JSON.stringify(projectData));
        this.showNotification('Project saved successfully!', 'success');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium transition-all transform translate-x-full`;
        
        if (type === 'success') {
            notification.className += ' bg-green-500';
        } else if (type === 'error') {
            notification.className += ' bg-red-500';
        } else {
            notification.className += ' bg-blue-500';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    updateUI() {
        // Update any UI elements based on current state
        if (this.currentTemplate) {
            this.showEditor();
        } else {
            this.showTemplateSelection();
        }
    }
}

// Initialize the template editor when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TemplateEditor();
});

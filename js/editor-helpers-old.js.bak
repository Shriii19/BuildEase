// Enhanced Editor Helper Functions
class EditorHelpers {
    constructor(templateEditor) {
        this.templateEditor = templateEditor;
        this.init();
    }

    init() {
        this.bindHelperFunctions();
        this.setupKeyboardShortcuts();
        this.setupCursorPosition();
        this.setupCodeFormatting();
    }

    bindHelperFunctions() {
        // Copy code functionality
        const copyBtn = document.getElementById('copy-code');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyCodeToClipboard());
        }

        // Format code functionality
        const formatBtn = document.getElementById('format-code');
        if (formatBtn) {
            formatBtn.addEventListener('click', () => this.formatCode());
        }

        // New project functionality
        const newProjectBtn = document.getElementById('new-project');
        if (newProjectBtn) {
            newProjectBtn.addEventListener('click', () => this.confirmNewProject());
        }

        // Help keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if (e.key === '?' && !e.ctrlKey && !e.altKey) {
                const activeElement = document.activeElement;
                if (activeElement.tagName !== 'TEXTAREA' && activeElement.tagName !== 'INPUT') {
                    e.preventDefault();
                    this.templateEditor.toggleHelpPanel();
                }
            }
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Global shortcuts
            if (e.ctrlKey || e.metaKey) {
                switch (e.key.toLowerCase()) {
                    case 's':
                        e.preventDefault();
                        this.templateEditor.saveProject();
                        break;
                    case 'd':
                        e.preventDefault();
                        this.templateEditor.downloadCode();
                        break;
                    case 'n':
                        e.preventDefault();
                        this.confirmNewProject();
                        break;
                    case 'f':
                        if (e.shiftKey) {
                            e.preventDefault();
                            this.formatCode();
                        }
                        break;
                }
            }

            // Escape key shortcuts
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    setupCursorPosition() {
        const codeEditor = document.getElementById('code-editor');
        const positionIndicator = document.getElementById('cursor-position');
        
        if (codeEditor && positionIndicator) {
            const updatePosition = () => {
                const textarea = codeEditor;
                const text = textarea.value;
                const cursorPos = textarea.selectionStart;
                
                // Calculate line and column
                const lines = text.substring(0, cursorPos).split('\n');
                const line = lines.length;
                const col = lines[lines.length - 1].length + 1;
                
                positionIndicator.textContent = `Line ${line}, Col ${col}`;
            };

            codeEditor.addEventListener('keyup', updatePosition);
            codeEditor.addEventListener('mouseup', updatePosition);
            codeEditor.addEventListener('focus', updatePosition);
        }
    }

    setupCodeFormatting() {
        // Basic HTML/CSS formatter
        this.formatter = {
            formatHTML: (html) => {
                // Simple HTML formatting - add proper indentation
                let formatted = html
                    .replace(/></g, '>\n<')
                    .replace(/^\s+|\s+$/g, '');
                
                const lines = formatted.split('\n');
                let indentLevel = 0;
                const indentSize = 2;
                
                return lines.map(line => {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('</') && !trimmed.includes('</script>') && !trimmed.includes('</style>')) {
                        indentLevel = Math.max(0, indentLevel - 1);
                    }
                    
                    const indented = ' '.repeat(indentLevel * indentSize) + trimmed;
                    
                    if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>') && !this.isSelfClosing(trimmed)) {
                        indentLevel++;
                    }
                    
                    return indented;
                }).join('\n');
            },

            isSelfClosing: (tag) => {
                const selfClosingTags = ['br', 'hr', 'img', 'input', 'meta', 'link'];
                return selfClosingTags.some(selfTag => tag.includes(`<${selfTag}`));
            }
        };
    }

    async copyCodeToClipboard() {
        const codeEditor = document.getElementById('code-editor');
        if (!codeEditor || !codeEditor.value.trim()) {
            this.templateEditor.showStatusIndicator('No code to copy!', 'warning');
            return;
        }

        try {
            await navigator.clipboard.writeText(codeEditor.value);
            this.templateEditor.showStatusIndicator('Code copied to clipboard! 📋', 'success');
            
            // Visual feedback on button
            const copyBtn = document.getElementById('copy-code');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check mr-1"></i>Copied!';
            copyBtn.className = copyBtn.className.replace('text-white/90', 'text-green-400');
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.className = copyBtn.className.replace('text-green-400', 'text-white/90');
            }, 2000);
            
        } catch (error) {
            // Fallback for older browsers
            codeEditor.select();
            document.execCommand('copy');
            this.templateEditor.showStatusIndicator('Code copied to clipboard!', 'success');
        }
    }

    formatCode() {
        const codeEditor = document.getElementById('code-editor');
        if (!codeEditor || !codeEditor.value.trim()) {
            this.templateEditor.showStatusIndicator('No code to format!', 'warning');
            return;
        }

        try {
            const originalCode = codeEditor.value;
            const formattedCode = this.formatter.formatHTML(originalCode);
            
            // Add to undo stack before formatting
            this.templateEditor.addToUndoStack();
            
            codeEditor.value = formattedCode;
            this.templateEditor.updatePreview();
            this.templateEditor.showStatusIndicator('Code formatted successfully! ✨', 'success');
            
            // Visual feedback on button
            const formatBtn = document.getElementById('format-code');
            const originalText = formatBtn.innerHTML;
            formatBtn.innerHTML = '<i class="fas fa-check mr-1"></i>Formatted!';
            
            setTimeout(() => {
                formatBtn.innerHTML = originalText;
            }, 2000);
            
        } catch (error) {
            this.templateEditor.showStatusIndicator('Failed to format code: ' + error.message, 'error');
        }
    }

    confirmNewProject() {
        if (this.templateEditor.currentTemplate) {
            const confirmed = confirm(
                'Starting a new project will lose all unsaved changes. Are you sure?\n\n' +
                'Tip: Click "Save Project" first to keep your current work!'
            );
            
            if (confirmed) {
                this.startNewProject();
            }
        } else {
            this.startNewProject();
        }
    }

    startNewProject() {
        // Clear current state
        this.templateEditor.currentTemplate = null;
        this.templateEditor.originalCode = '';
        this.templateEditor.undoStack = [];
        this.templateEditor.redoStack = [];
        
        // Clear editor
        const codeEditor = document.getElementById('code-editor');
        if (codeEditor) {
            codeEditor.value = '';
        }
        
        // Clear preview
        const previewFrame = document.getElementById('preview-frame');
        if (previewFrame) {
            previewFrame.src = 'about:blank';
        }
        
        // Show template selection
        this.templateEditor.showTemplateSelection();
        this.templateEditor.showStatusIndicator('Ready to start a new project! Choose a template below.', 'success');
        
        // Remove any saved projects (optional)
        if (confirm('Would you also like to clear all saved projects from this browser?')) {
            this.clearAllSavedProjects();
        }
    }

    clearAllSavedProjects() {
        try {
            const projectKeys = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('project_')) {
                    projectKeys.push(key);
                }
            }
            
            projectKeys.forEach(key => localStorage.removeItem(key));
            
            if (projectKeys.length > 0) {
                this.templateEditor.showStatusIndicator(`Cleared ${projectKeys.length} saved projects`, 'success');
            }
        } catch (error) {
            this.templateEditor.showStatusIndicator('Failed to clear saved projects', 'error');
        }
    }

    closeAllModals() {
        // Close deploy modal
        const deployModal = document.getElementById('deploy-modal');
        if (deployModal && !deployModal.classList.contains('hidden')) {
            this.templateEditor.hideDeployModal();
        }
        
        // Close help panel
        const helpPanel = document.getElementById('help-panel');
        if (helpPanel && !helpPanel.classList.contains('hidden')) {
            helpPanel.classList.add('hidden');
        }
        
        // Close any tutorial overlays
        document.querySelectorAll('.tutorial-highlight, .tutorial-tooltip').forEach(el => el.remove());
    }

    // Enhanced error handling
    handleError(error, context = 'general') {
        console.error(`Error in ${context}:`, error);
        
        const errorMessages = {
            'clipboard': 'Failed to copy to clipboard. Please select and copy manually.',
            'format': 'Failed to format code. Please check for syntax errors.',
            'save': 'Failed to save project. Please try again.',
            'load': 'Failed to load project. The file may be corrupted.',
            'general': 'An unexpected error occurred. Please refresh the page.'
        };
        
        const message = errorMessages[context] || errorMessages.general;
        this.templateEditor.showStatusIndicator(message, 'error');
    }

    // Update last saved time
    updateLastSavedTime() {
        const lastSavedElement = document.getElementById('last-saved');
        if (lastSavedElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            lastSavedElement.textContent = `Last saved: ${timeString}`;
        }
    }

    // Validate user input
    validateProjectName(name) {
        if (!name || name.trim().length === 0) {
            return { valid: false, message: 'Project name cannot be empty' };
        }
        
        if (name.length > 50) {
            return { valid: false, message: 'Project name is too long (max 50 characters)' };
        }
        
        const invalidChars = /[<>:"/\\|?*]/;
        if (invalidChars.test(name)) {
            return { valid: false, message: 'Project name contains invalid characters' };
        }
        
        return { valid: true };
    }

    // Performance monitoring
    startPerformanceMonitoring() {
        this.performanceMetrics = {
            startTime: performance.now(),
            previewUpdates: 0,
            totalEditTime: 0
        };
        
        // Monitor preview update frequency
        const originalUpdatePreview = this.templateEditor.updatePreview.bind(this.templateEditor);
        this.templateEditor.updatePreview = (...args) => {
            this.performanceMetrics.previewUpdates++;
            return originalUpdatePreview(...args);
        };
    }

    getPerformanceReport() {
        if (!this.performanceMetrics) return null;
        
        const now = performance.now();
        const sessionTime = (now - this.performanceMetrics.startTime) / 1000;
        
        return {
            sessionDuration: Math.round(sessionTime),
            previewUpdates: this.performanceMetrics.previewUpdates,
            averageUpdateFrequency: Math.round(this.performanceMetrics.previewUpdates / (sessionTime / 60))
        };
    }
}

// Auto-initialize when template editor is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait for template editor to be ready
    const checkEditor = setInterval(() => {
        if (window.templateEditor) {
            window.editorHelpers = new EditorHelpers(window.templateEditor);
            clearInterval(checkEditor);
        }
    }, 100);
});

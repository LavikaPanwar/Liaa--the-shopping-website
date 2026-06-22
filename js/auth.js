// Authentication System
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        // Check if user is already logged in
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.showWebsite();
            this.updateUIForLoggedInUser();
        } else {
            this.hideWebsite();
        }

        // Setup event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Tab switching
        const loginTab = document.getElementById('loginTab');
        const signupTab = document.getElementById('signupTab');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        if (loginTab) {
            loginTab.addEventListener('click', () => {
                loginTab.classList.add('active');
                signupTab.classList.remove('active');
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
            });
        }

        if (signupTab) {
            signupTab.addEventListener('click', () => {
                signupTab.classList.add('active');
                loginTab.classList.remove('active');
                signupForm.classList.add('active');
                loginForm.classList.remove('active');
            });
        }

        // Password toggle
        const togglePasswordBtns = document.querySelectorAll('.toggle-password');
        togglePasswordBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const input = btn.previousElementSibling;
                const icon = btn.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });

        // Form submissions
        const loginFormElement = document.getElementById('loginFormElement');
        const signupFormElement = document.getElementById('signupFormElement');

        if (loginFormElement) {
            loginFormElement.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        if (signupFormElement) {
            signupFormElement.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignup();
            });
        }

        // User profile dropdown
        const userProfile = document.getElementById('userProfile');
        if (userProfile) {
            userProfile.addEventListener('click', () => {
                const dropdown = document.getElementById('userDropdown');
                dropdown.classList.toggle('active');
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const userProfile = document.getElementById('userProfile');
            const dropdown = document.getElementById('userDropdown');
            if (userProfile && dropdown && !userProfile.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const errorMsg = document.getElementById('loginError');

        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Find user
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            this.currentUser = {
                name: user.name,
                email: user.email
            };
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            
            this.showSuccess('loginSuccess', 'Login successful! Welcome back.');
            setTimeout(() => {
                this.closeAuthModal();
                this.showWebsite();
                this.updateUIForLoggedInUser();
                showNotification(`Welcome back, ${user.name}!`);
            }, 1000);
        } else {
            this.showError(errorMsg, 'Invalid email or password.');
        }
    }

    handleSignup() {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const errorMsg = document.getElementById('signupError');

        // Validation
        if (password !== confirmPassword) {
            this.showError(errorMsg, 'Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            this.showError(errorMsg, 'Password must be at least 6 characters long.');
            return;
        }

        // Get existing users
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if email already exists
        if (users.some(u => u.email === email)) {
            this.showError(errorMsg, 'Email already registered. Please login.');
            return;
        }

        // Add new user
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Auto login
        this.currentUser = { name, email };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        this.showSuccess('signupSuccess', 'Account created successfully!');
        setTimeout(() => {
            this.closeAuthModal();
            this.showWebsite();
            this.updateUIForLoggedInUser();
            showNotification(`Welcome to LIAA, ${name}!`);
        }, 1000);
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.hideWebsite();
        this.updateUIForLoggedOutUser();
        
        // Clear cart on logout
        if (typeof cart !== 'undefined') {
            cart = [];
            updateCartUI();
        }
        
        // Show auth modal again
        const authModal = document.getElementById('authModal');
        if (authModal) {
            authModal.classList.add('active');
        }
    }

    showWebsite() {
        document.body.classList.remove('not-authenticated');
        const authModal = document.getElementById('authModal');
        if (authModal) {
            authModal.classList.remove('active');
        }
    }

    hideWebsite() {
        document.body.classList.add('not-authenticated');
        const authModal = document.getElementById('authModal');
        if (authModal) {
            authModal.classList.add('active');
        }
    }

    updateUIForLoggedInUser() {
        const userProfile = document.getElementById('userProfile');
        const userName = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');

        if (userProfile) userProfile.classList.add('active');
        
        if (this.currentUser) {
            if (userName) userName.textContent = this.currentUser.name.split(' ')[0];
            if (userAvatar) userAvatar.textContent = this.currentUser.name.charAt(0).toUpperCase();
        }
    }

    updateUIForLoggedOutUser() {
        const userProfile = document.getElementById('userProfile');
        if (userProfile) userProfile.classList.remove('active');
    }

    showError(element, message) {
        if (element) {
            element.textContent = message;
            element.classList.add('show');
            setTimeout(() => {
                element.classList.remove('show');
            }, 5000);
        }
    }

    showSuccess(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
            element.classList.add('show');
            setTimeout(() => {
                element.classList.remove('show');
            }, 5000);
        }
    }

    closeAuthModal() {
        const authModal = document.getElementById('authModal');
        if (authModal) {
            authModal.classList.remove('active');
        }
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// Initialize auth system
let authSystem;
document.addEventListener('DOMContentLoaded', () => {
    authSystem = new AuthSystem();
});

// Global functions for buttons
function openAuthModal() {
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.classList.add('active');
    }
}

function closeAuthModal() {
    // Don't allow closing modal if not logged in
    if (authSystem && !authSystem.isLoggedIn()) {
        return;
    }
    
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.classList.remove('active');
        // Clear forms
        document.getElementById('loginFormElement')?.reset();
        document.getElementById('signupFormElement')?.reset();
        // Hide error messages
        document.querySelectorAll('.error-message, .success-message').forEach(el => {
            el.classList.remove('show');
        });
    }
}

function handleLogout() {
    if (authSystem) {
        authSystem.logout();
    }
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

function viewProfile() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
    
    if (authSystem && authSystem.getCurrentUser()) {
        const user = authSystem.getCurrentUser();
        alert(`Profile Information:\n\nName: ${user.name}\nEmail: ${user.email}`);
    }
}

function viewOrders() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
    alert('Orders feature coming soon!');
}

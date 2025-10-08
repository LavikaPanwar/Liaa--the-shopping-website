# Liaa--the-shopping-website
A sophisticated full-stack e-commerce solution built with modern web technologies, featuring a complete shopping experience with dynamic product management and seamless user interactions.

🚀 Live Demo - https://liaa-the-shopping-website.vercel.app/
 _____________________________________________________________________________________________________________________________________________________________________________________________________________________________
 ✨ Key Features
🛒 Core Shopping Experience
Dynamic Product Catalog - 28+ fashion items across Clothing, Shoes, and Accessories
Smart Shopping Cart - Real-time cart management with persistent storage
Advanced Filtering - Category-based filtering and search functionality
Product Details Modal - Comprehensive product information with size options
Responsive Design - Flawless experience across all devices
______________________________________________________________________________________________________________________________________________________________________________________________________________________________
💻 Technical Information
Full-Stack Architecture - Frontend + Backend + Database integration
MySQL Database - Robust product management with relational data structure
RESTful API - PHP backend serving JSON responses
Modern JavaScript - ES6+ features with async/await patterns
Professional UI/UX - Clean, modern interface with smooth animation
______________________________________________________________________________________________________________________________________________________________________________________________________________________________
🛠️ Technology Stack
Frontend
HTML5 - Semantic markup structure
CSS3 - Modern styling with Flexbox/Grid
JavaScript ES6+ - Dynamic functionality and API integration

Backend
PHP - Server-side logic and database operations
MySQL - Relational database management
REST API - Clean data communication layer

Development Tools
XAMPP - Local development environment
Git - Version control
phpMyAdmin - Database administration
______________________________________________________________________________________________________________________________________________________________________________________________________________________________
📁 Project Structure
liaa-shoppingwebsite/
├── 📄 index.html                 # Main application entry point
├── 🎨 css/
│   └── style.css                # Comprehensive styling system
├── ⚡ js/
│   ├── products.js              # Product management & display logic
│   ├── cart.js                  # Shopping cart functionality
│   └── main.js                  # Application initialization
├── 🖼️ images/                   # Product image assets (28+ items)
├── 🔧 backend/
│   ├── config.php              # Database configuration
│   └── get_products.php        # Products API endpoint
└── 📖 README.md                # Project documentation
______________________________________________________________________________________________________________________________________________________________________________________________________________________________
📁 Database Schema
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    category VARCHAR(100)
);
______________________________________________________________________________________________________________________________________________________________________________________________________________________________
Prerequisites
XAMPP (Apache + MySQL)
Modern web browser
Git (optional)
_____________________________________________________________________________________________________________________________________________________________________________________________________________________________
Installation Steps

Clone Repository

bash
git clone https://github.com/your-username/liaa-shoppingwebsite.git
Setup XAMPP

Start Apache and MySQL services
Navigate to http://localhost/phpmyadmin
Create database shopping_db
Import Database
Execute the provided SQL schema
Insert sample product data
Run Application
Place project in htdocs folder
Access via http://localhost/liaa-shoppingwebsite/

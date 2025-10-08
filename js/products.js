// Fetch products from MySQL database
async function loadProducts() {
    try {
        console.log("Loading products from database...");
        const response = await fetch('backend/get_products.php');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const products = await response.json();
        console.log("Products loaded:", products);
        
        displayProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
        const productsContainer = document.getElementById('products-container');
        if (productsContainer) {
            productsContainer.innerHTML = '<p>Sorry, products could not be loaded. Please check if XAMPP is running.</p>';
        }
    }
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        console.error('Products container not found!');
        return;
    }
    
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">$${product.price}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', loadProducts);

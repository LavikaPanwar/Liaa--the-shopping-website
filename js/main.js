document.addEventListener('DOMContentLoaded', function() {
    // Initialize products
    renderProducts();
    
    // Setup filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            if (filter === 'all') {
                renderProducts();
            } else {
                const filteredProducts = products.filter(product => product.category === filter);
                renderProducts(filteredProducts);
            }
        });
    });
    
    // Setup navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
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
    
    // Setup search functionality
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function() {
        const searchTerm = prompt('Search for products:');
        if (searchTerm) {
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            renderProducts(filteredProducts);
            
            // Update filter buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Scroll to products section
            document.getElementById('products').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('productModalBody');
    
    selectedSize = product.sizes[0];
    selectedQuantity = 1;
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}" class="modal-product-img">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <p class="product-detail-category">${product.category}</p>
                <div class="product-detail-price">₹${product.price.toFixed(2)}</div>
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-sizes">
                    <h4>Size:</h4>
                    <div class="size-options">
                        ${product.sizes.map(size => `
                            <button class="size-option ${size === selectedSize ? 'selected' : ''}" 
                                    onclick="selectSize('${size}')">${size}</button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="quantity-selector">
                    <h4>Quantity:</h4>
                    <div class="quantity-input">
                        <button onclick="changeQuantity(-1)">-</button>
                        <input type="number" id="quantityInput" value="1" min="1" max="10" 
                               onchange="selectedQuantity = parseInt(this.value)">
                        <button onclick="changeQuantity(1)">+</button>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCartFromModal(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
}

function selectSize(size) {
    selectedSize = size;
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.textContent === size) {
            option.classList.add('selected');
        }
    });
}
function changeQuantity(change) {
    const input = document.getElementById('quantityInput');
    const newValue = parseInt(input.value) + change;
    if (newValue >= 1 && newValue <= 10) {
        input.value = newValue;
        selectedQuantity = newValue;
    }
}

function addToCartFromModal(productId) {
    addToCart(productId, selectedSize, selectedQuantity);
    closeProductModal();
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function closeNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}

function handleContactForm(event) {
    event.preventDefault();
    showNotification('Thank you for your message! We\'ll get back to you soon.');
    event.target.reset();
}

function handleNewsletter(event) {
    event.preventDefault();
    showNotification('Thank you for subscribing to our newsletter!');
    event.target.reset();
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const cartModal = document.getElementById('cartModal');
    const productModal = document.getElementById('productModal');
    
    if (event.target === cartModal) {
        cartModal.classList.remove('active');
    }
    
    if (event.target === productModal) {
        productModal.classList.remove('active');
    }
});

// Initialize cart UI
updateCartUI();

let cart = [];
let selectedSize = '';
let selectedQuantity = 1;

function addToCart(productId, size = 'One Size', quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            size: size,
            quantity: quantity
        });
    }
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCartUI();
}

function updateQuantity(productId, size, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId, size);
        return;
    }
    
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <i class="${getIconForProduct(item.category)}"></i>
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity + 1})">+</button>
                        <span style="margin-left: 10px; font-size: 0.9rem;">Size: ${item.size}</span>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</button>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) return;
    
    alert(`Thank you for your order! Total: ₹${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`);
    cart = [];
    updateCartUI();
    toggleCart();
}s

const products = [
    {
        id: 1,
        name: "Classic Shirt",
        category: "clothing",
        price: 889.99,
        image: "images/shirt.jpg",
        description: "A timeless white shirt crafted from premium cotton. Perfect for both casual and formal occasions.",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 2,
        name: "Leather Handbag",
        category: "accessories",
        price: 2449.99,
        image: "images/handbag.jpg",
        description: "Elegant leather handbag with premium finish. Spacious interior with multiple compartments.",
        sizes: ["One Size"]
    },
    {
        id: 3,
        name: " New-Balance Designer Sneakers",
        category: "shoes",
        price: 7189.99,
        image: "images/newbalance.jpg",
        description: "Contemporary sneakers with superior comfort and style. Made with sustainable materials.",
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43"]
    },
    {
        id: 4,
        name: "Silk Scarf",
        category: "accessories",
        price: 8129.99,
        image: "images/silkScarf.jpg",
        description: "Luxurious silk scarf with intricate patterns. Add elegance to any outfit.",
        sizes: ["One Size"]
    },
    {
        id: 5,
        name: " Levi's Denim Jacket",
        category: "clothing",
        price: 5159.99,
        image: "images/denimjac.jpg",
        description: "Classic denim jacket with modern fit. Versatile piece for layering.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
        id: 6,
        name: "Dress Shoes",
        category: "shoes",
        price: 5299.99,
        image: "images/leathershoe.jpg",
        description: "Handcrafted leather dress shoes. Perfect for formal occasions and business meetings.",
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"]
    },
    {
        id: 7,
        name: "Summer Dress",
        category: "clothing",
        price: 5149.99,
        image: "images/summerdress.jpg",
        description: "Light and breezy summer dress. Perfect for warm weather and casual outings.",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 8,
        name: " Cartier tank - louis Watch",
        category: "accessories",
        price: 3399.99,
        image: "images/watch.jpg",
        description: "Sophisticated timepiece with Swiss movement. Elegant design meets precision.",
        sizes: ["One Size"]
    },
    {
        id: 9,
        name: "Canvas Tote Bag",
        category: "accessories",
        price: 599.99,
        image: "images/totebag.jpg",
        description: "Eco-friendly canvas tote bag perfect for daily errands or casual outings.",
        sizes: ["One Size"]
    },
    {
        id: 10,
        name: "Slim Fit Chinos",
        category: "clothing",
        price: 3124.99,
        image: "images/chinos.jpg",
        description: "Comfortable yet stylish slim fit chinos. Ideal for work or casual wear.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 11,
        name: " Nike Running Shoes",
        category: "shoes",
        price: 43229.99,
        image: "images/runningshoes.jpg",
        description: "Lightweight and breathable running shoes for maximum performance.",
        sizes: ["37", "38", "39", "40", "41", "42", "43", "44"]
    },
    {
        id: 12,
        name: "Woolen Beanie",
        category: "accessories",
        price: 8549.99,
        image: "images/beanie.jpg",
        description: "Warm and cozy woolen beanie. Ideal for cold-weather days.",
        sizes: ["One Size"]
    },
    {
        id: 13,
        name: "Oversized Hoodie",
        category: "clothing",
        price: 9179.99,
        image: "images/hoddie.jpg",
        description: "Ultra-comfy oversized hoodie with fleece lining. Stay warm in style.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 14,
        name: "Ankle Boots",
        category: "shoes",
        price: 9349.99,
        image: "images/ankleboots.jpg",
        description: "Stylish ankle boots made from genuine leather. Ideal for everyday wear.",
        sizes: ["36", "37", "38", "39", "40", "41"]
    },
    {
        id: 15,
        name: "Elegant Earrings",
        category: "accessories",
        price: 4389.99,
        image: "images/earrings.jpg",
        description: "Minimalist gold-tone earrings to complement any outfit.",
        sizes: ["One Size"]
    },
    {
        id: 16,
        name: "Graphic T-shirt",
        category: "clothing",
        price: 4469.99,
        image: "images/graphictee.jpg",
        description: "Trendy cotton t-shirt with vibrant print. Comfortable and stylish.",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 17,
        name: "Classic Loafers",
        category: "shoes",
        price: 8279.99,
        image: "images/loafers.jpg",
        description: "Elegant loafers that blend tradition with modern comfort.",
        sizes: ["39", "40", "41", "42", "43", "44", "45"]
    },
    {
        id: 18,
        name: "Aviator Sunglasses",
        category: "accessories",
        price: 1349.99,
        image: "images/aviators.jpg",
        description: "Timeless aviator sunglasses with UV protection. Complete your summer look.",
        sizes: ["One Size"]
    },
    {
        id: 19,
        name: "Knit Cardigan",
        category: "clothing",
        price: 3199.99,
        image: "images/cardigan.jpg",
        description: "Soft knit cardigan for layering. Features a relaxed fit and open front.",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 20,
        name: "Formal Oxford Shoes",
        category: "shoes",
        price: 8329.99,
        image: "images/oxfordshoes.jpg",
        description: "Polished oxford shoes crafted from Italian leather. The epitome of formalwear.",
        sizes: ["40", "41", "42", "43", "44", "45"]
    },
    {
        id: 21,
        name: "Statement Necklace",
        category: "accessories",
        price: 6159.99,
        image: "images/necklace.jpg",
        description: "Bold and elegant necklace to elevate any ensemble.",
        sizes: ["One Size"]
    },
    {
        id: 22,
        name: "Flannel Shirt",
        category: "clothing",
        price: 9109.99,
        image: "images/flannelshirt.jpg",
        description: "Soft flannel shirt with plaid design. A winter essential.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 23,
        name: "Casual Slip-Ons",
        category: "shoes",
        price: 4199.99,
        image: "images/slipons.jpg",
        description: "Easy-to-wear slip-ons with breathable fabric and cushioned sole.",
        sizes: ["37", "38", "39", "40", "41", "42", "43"]
    },
    {
        id: 24,
        name: "Bucket Hat",
        category: "accessories",
        price: 3359.99,
        image: "images/buckethat.jpg",
        description: "Trendy cotton bucket hat for sunny days and casual looks.",
        sizes: ["One Size"]
    },
    {
        id: 25,
        name: "Wrap Dress",
        category: "clothing",
        price: 2189.99,
        image: "images/wrapdress.jpg",
        description: "Flattering wrap dress with a soft silhouette. Ideal for both day and evening.",
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 26,
        name: "High-Heeled Sandals",
        category: "shoes",
        price: 2639.99,
        image: "images/heels.jpg",
        description: "Elegant heels with ankle strap. Designed for sophistication and comfort.",
        sizes: ["36", "37", "38", "39", "40"]
    },
    {
        id: 27,
        name: "Leather Belt",
        category: "accessories",
        price: 1139.99,
        image: "images/belt.jpg",
        description: "Durable leather belt with sleek buckle. Versatile for formal or casual use.",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 28,
        name: "Puffer Jacket",
        category: "clothing",
        price: 2979.99,
        image: "images/pufferjacket.jpg",
        description: "Insulated puffer jacket for maximum warmth during winter.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    }
];

// Try to load from database first, fallback to static products
async function loadProducts() {
    try {
        console.log("Loading products from database...");
        const response = await fetch('backend/get_products.php');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const products = await response.json();
        console.log("Products loaded from database:", products);
        
        // If database returns products, use them
        if (products && products.length > 0) {
            renderProducts(products);
        } else {
            // If database is empty, use static products
            renderProducts(staticProducts);
        }
    } catch (error) {
        console.error('Error loading products from database:', error);
        // Use static products as fallback
        renderProducts(products);
    }
}

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    if (!grid) {
        console.error('Products grid not found!');
        return;
    }
    
    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-price">₹${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn-secondary" onclick="openProductModal(${product.id})">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', loadProducts);

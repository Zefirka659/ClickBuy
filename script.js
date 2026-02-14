// shoppingCart.js

let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
    saveCartToLocalStorage();
}

function removeFromCart(item) {
    cart = cart.filter(cartItem => cartItem.id !== item.id);
    updateCartDisplay();
    saveCartToLocalStorage();
}

function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - $${item.price}`;
        cartDisplay.appendChild(itemElement);
    });
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('hidden');
}

function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartDisplay();
    }
}

// Load cart from local storage on startup
loadCartFromLocalStorage();
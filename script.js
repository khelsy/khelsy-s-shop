let cart = [];

const menuDetails = {
    "Casual T-Shirt": "Comfortable and stylish t-shirt for everyday wear.",
    "Denim Jeans": "Classic blue denim jeans that never go out of style.",
    "Stylish Jacket": "Keep warm and trendy with our stylish jacket.",
    "Elegant Dress": "Perfect for special occasions, our elegant dress will make you shine.",
    "Fashionable Shoes": "Step out in style with our latest fashionable shoes.",
    "Cozy Sweater": "Stay warm with our cozy and comfortable sweater."
};

function showDetails(item) {
    document.getElementById('modal-title').innerText = item;
    document.getElementById('modal-description').innerText = menuDetails[item];
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function addToCart(item, price, quantity) {
    cart.push({ item, price, quantity });
    alert(quantity + " x " + item + " has been added to your cart!");
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ""; // Clear existing items

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(({ item, price, quantity }, index) => {
        cartItems.innerHTML += `<p>${quantity} x ${item} - $${(price * quantity).toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to your cart before checking out.");
        return;
    }
    alert("Thank you for your order! Your items will be processed.");
    cart = []; // Clear cart after
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        alert('Thank you for your message, ' + name + '!');
        document.getElementById('contact-form').reset(); // Reset form fields
    } else {
        alert('Please fill in all fields.');
    }
});
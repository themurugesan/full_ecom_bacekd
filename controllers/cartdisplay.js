const axios = require('axios');
const fs = require('fs');

// Initial state for cart
let cartdisplay = [];

// Function to fetch cart details from the backend API
const fetchCart = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/cartget');
       console.log(response)
        cart = fetchedCart;
        console.log('Cart details fetched successfully:', cart);
    } catch (error) {
        console.error('Error fetching the cart data:', error);
    }
};

// Call the fetchCart function to get cart details
fetchCart();

module.exports = cartdisplay;

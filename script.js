// Array of product objects
const products = [
    { id: 1, name: "Product 1", price: "$20", description: "This is product 1." },
    { id: 2, name: "Product 2", price: "$30", description: "This is product 2." },
    { id: 3, name: "Product 3", price: "$40", description: "This is product 3." },
    { id: 4, name: "Product 4", price: "$50", description: "This is product 4." }
];

// Function to render product cards
function renderProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear existing content

    products.map(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p>${product.description}</p>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;

        productContainer.appendChild(productCard);
    });
}

// Function to delete a product
function deleteProduct(productId) {
    const updatedProducts = products.filter(product => product.id !== productId);
    products.length = 0; // Clear the original array
    products.push(...updatedProducts); // Push the updated products back
    renderProducts();
}

// Initial rendering of products
renderProducts();

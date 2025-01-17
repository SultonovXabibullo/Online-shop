const products = [
      {
        _id: '1',
        name: 'iPhone 12 Pro "BLUE" 256GB Memory',
        image: 'images/Apple products/iphone12problue.jpg',
        description:
          'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
        brand: 'Apple',
        category: 'Electronics',
        price: 1299.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
      },
      {
        _id: '2',
        name: 'iPhone 12 Pro "GOLD" 256GB Memory',
        image: 'images/Apple products/iphone12progold.jpg',
        description:
          'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
        brand: 'Apple',
        category: 'Electronics',
        price: 1299.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
      },
    
      {
        _id: '3',
        name: 'iPhone 12 Pro "WHITE" 256GB Memory',
        image: 'images/Apple products/iphone12prowhite.png',
        description:
          'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
        brand: 'Apple',
        category: 'Electronics',
        price: 1299.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
      },
      {
        _id: '4',
        name: 'Samsung S21 Ultra Memories 512Gb',
        image: 'images/samsung products/samsungsilver.webp',
        description:
          'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
        brand: 'Samsung',
        category: 'Electronics',
        price: 1199.99,
        countInStock: 5,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '5',
        name: 'Samsung S21 Ultra Memories 512Gb',
        image: 'images/samsung products/samsungblack.webp',
        description:
          'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
        brand: 'Samsung',
        category: 'Electronics',
        price: 1199.99,
        countInStock: 5,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '6',
        name: 'Samsung S21 Ultra Memories 512Gb',
        image: 'images/samsung products/samsungbrown.webp',
        description:
          'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
        brand: 'Samsung',
        category: 'Electronics',
        price: 1199.99,
        countInStock: 5,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '7',
        name: 'Sony Playstation 4 Pro White Version',
        image: 'images/mouse& another/playstation.jpg',
        description:
          'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
        brand: 'Sony',
        category: 'Electronics',
        price: 399.99,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '8',
        name: 'Sony Playstation 4 Pro Black Version',
        image: 'images/mouse& another/playstationblack.webp',
        description:
          'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
        brand: 'Sony',
        category: 'Electronics',
        price: 399.99,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '9',
        name: 'Sony Playstation 4 Pro Red Version',
        image: 'images/mouse& another/playstationRed.jpg',
        description:
          'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
        brand: 'Sony',
        category: 'Electronics',
        price: 399.99,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '10',
        name: 'Xiaomi 11 silver version Memories 512Gb',
        image: 'images/mi products/mi11 silver.jpg',
        description:

    'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
        brand: 'Redmi',
        category: 'Electronics',
        price: 799.99,
        countInStock: 5,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '11',
        name: 'Xiaomi 11 black version Memories 512Gb',
        image: 'images/mi products/mi11black.png',
        description:
          'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
        brand: 'Redmi',
        category: 'Electronics',
        price: 799.99,
        countInStock: 5,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '12',
        name: 'Xiaomi 11 white version Memories 512Gb',
        image: 'images/mi products/mi11white.jpg',
        description:
          'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
        brand: 'Redmi',
        category: 'Electronics',
        price: 799.99,
        countInStock: 5,
        rating: 5,
        numReviews: 12,
      },
      {
        _id: '13',
        name: 'Logitech G-Series Gaming Mouse',
        image: 'images/mouse& another/mouse.jpg',
        description:
          'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
        brand: 'Logitech',
        category: 'Electronics',
        price: 49.99,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
      },
      {
        _id: '14',
        name: 'Logitech G-Series Gaming Mouse',
        image: 'images/mouse& another/mouse black.png',
        description:
          'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
        brand: 'Logitech',
        category: 'Electronics',
        price: 49.99,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
      },
      {
        _id: '15',
        name: 'Logitech G-Series Gaming Mouse',
        image: 'images/mouse& another/mouse blue.webp',
        description:
          'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
        brand: 'Logitech',
        category: 'Electronics',
        price: 49.99,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
      },
      {
        _id: '16',
        name: 'Cannon EOS 80D DSLR Camera',
        image: 'images/mouse& another/camera.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Cannon',
        category: 'Electronics',
        price: 899.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '17',
        name: 'Cannon EOS 80D DSLR Camera',
        image: 'images/mouse& another/camera 2.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Cannon',
        category: 'Electronics',
        price: 899.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '18',
        name: 'Cannon EOS 80D DSLR Camera',
        image: 'images/mouse& another/camera3.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Cannon',
        category: 'Electronics',
        price: 899.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '19',
        name: 'Samsung buds for younger boys',
        image: 'images/samsung products/samsung buds.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Samsung',
        category: 'Electronics',
        price: 72.99,
        countInStock: 5,
        rating: 4.5,
        numReviews: 12,
      },
      {
        _id: '20',

    name: 'Samsung buds for younger boys',
        image: 'images/samsung products/samsung budsblue.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Samsung',
        category: 'Electronics',
        price: 72.99,
        countInStock: 4,
        rating: 4.5,
        numReviews: 12,
      },
      {
        _id: '21',
        name: 'Samsung buds for younger boys',
        image: 'images/samsung products/samsung budsYellow.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Samsung',
        category: 'Electronics',
        price: 72.99,
        countInStock: 0,
        rating: 4.5,
        numReviews: 12,
      },
      {
        _id: '22',
        name: 'apple watch',
        image: 'images/Apple products/watch.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Apple',
        category: 'Electronics',
        price: 255.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '23',
        name: 'apple watch',
        image: 'images/Apple products/apple watchblue.png',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Apple',
        category: 'Electronics',
        price: 255.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '24',
        name: 'apple watch',
        image: 'images/Apple products/apple watchblue1.png',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Apple',
        category: 'Electronics',
        price: 255.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '25',
        name: 'Mackbook Air',
        image: 'images/Apple products/mackbook.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Apple',
        category: 'Electronics',
        price: 2100.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '26',
        name: 'Mackbook Air',
        image: 'images/Apple products/mackbook black.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Apple',
        category: 'Electronics',
        price: 2100.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '27',
        name: 'Mackbook Air',
        image: 'images/Apple products/mackbook pink.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Apple',
        category: 'Electronics',
        price: 2100.99,
        countInStock: 3,
        rating: 4,
        numReviews: 12,
      },
      {
        _id: '28',
        name: 'Redmi monitor',
        image: 'images/mi products/mi600.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Redmi',
        category: 'Electronics',
        price: 300.99,
        countInStock: 3,
        rating: 4.5,
        numReviews: 12,
      },
      {
        _id: '29',
        name: 'Redmi monitor',
        image: 'images/mi products/mi monitors.jpg',
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Redmi',
        category: 'Electronics',
        price: 300.99,
        countInStock: 3,
        rating: 4.5,
        numReviews: 12,
      },
      {
        _id: '30',
        name: 'Redmi monitor',
        image: 'images/mi products/mi monitors2.jpg',
        description:

    'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand : 'Redmi',
        category: 'Electronics',
        price: 300.99,
        countInStock: 3,
        rating: 4.5,
        numReviews: 12,
      },
    ];

function displayProducts(productList) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <div class = "img"> 
        <img src="${product.image}" alt="${product.name} class ="img1">
        </div>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button>Buy</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function searchProducts(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

document.getElementById('search').addEventListener('input', searchProducts);

displayProducts(products);

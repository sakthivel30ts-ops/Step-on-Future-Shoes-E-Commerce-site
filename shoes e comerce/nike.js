 // Thumbnail gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        // Update main image
        const imgSrc = this.querySelector('img').getAttribute('src');
        mainImage.setAttribute('src', imgSrc);
        
        // Update active thumbnail
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Update active button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Update active tab pane
        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
      });
    });
    
    // Color options
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
    
    // Size options
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
      option.addEventListener('click', function() {
        sizeOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
    
    // Quantity buttons
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-input');
    
    minusBtn.addEventListener('click', function() {
      let value = parseInt(quantityInput.value);
      if (value > 1) {
        quantityInput.value = value - 1;
      }
    });
    
    plusBtn.addEventListener('click', function() {
      let value = parseInt(quantityInput.value);
      quantityInput.value = value + 1;
    });
    
    // Add to cart button
    document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
      let cartCount = document.querySelector('.cart-count');
      let currentCount = parseInt(cartCount.innerText);
      let quantity = parseInt(quantityInput.value);
      cartCount.innerText = currentCount + quantity;
      
      this.innerHTML = "Added to Cart ✓";
      setTimeout(() => {
        this.innerHTML = "Add to Cart";
      }, 2000);
    });
    
    // Wishlist button toggle
    const wishlistBtn = document.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        this.style.color = '#ff006e';
      } else {
        this.style.color = 'var(--gray)';
      }
    });
    
    // Cart icon click event
    document.querySelector('.cart-icon').addEventListener('click', function() {
      window.location.href = 'cart.html';
    });
    
    // Add to cart functionality for related products
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        let cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.innerText);
        cartCount.innerText = currentCount + 1;
        
        // Button feedback
        this.innerText = "Added ✓";
        setTimeout(() => {
          this.innerText = "Add to Cart";
        }, 1500);
      });
    });
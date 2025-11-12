   // Quantity buttons
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const subtotals = document.querySelectorAll('.subtotal');
    const unitPrices = document.querySelectorAll('.unit-price');
    const removeButtons = document.querySelectorAll('.remove-btn');
    
    // Calculate all subtotals initially
    function updateSubtotals() {
      let grandTotal = 0;
      
      for(let i = 0; i < quantityInputs.length; i++) {
        const quantity = parseInt(quantityInputs[i].value);
        const price = parseFloat(unitPrices[i].innerText.replace('$', ''));
        const subtotal = (quantity * price).toFixed(2);
        
        subtotals[i].innerText = `$${subtotal}`;
        grandTotal += parseFloat(subtotal);
      }
      
      // Update order summary
      document.querySelector('.summary-item:first-child span:last-child').innerText = `$${grandTotal.toFixed(2)}`;
      
      // Calculate tax (8% for example)
      const tax = (grandTotal * 0.08).toFixed(2);
      document.querySelector('.summary-item:nth-child(3) span:last-child').innerText = `$${tax}`;
      
      // Update total
      const total = (parseFloat(grandTotal) + parseFloat(tax)).toFixed(2);
      document.querySelector('.summary-total span:last-child').innerText = `$${total}`;
    }
    
    // Initialize the page with correct values
    updateSubtotals();
    
    // Setup event listeners for quantity buttons
    minusButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        let value = parseInt(quantityInputs[index].value);
        if (value > 1) {
          quantityInputs[index].value = value - 1;
          updateSubtotals();
        }
      });
    });
    
    plusButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        let value = parseInt(quantityInputs[index].value);
        quantityInputs[index].value = value + 1;
        updateSubtotals();
      });
    });
    
    // Update when quantity is changed directly
    quantityInputs.forEach((input) => {
      input.addEventListener('change', updateSubtotals);
    });
    
    // Remove item functionality
    removeButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        // Get the cart row to remove
        const cartRow = this.parentElement;
        
        // Animate removal
        cartRow.style.transition = "all 0.3s";
        cartRow.style.opacity = "0";
        cartRow.style.height = "0";
        cartRow.style.overflow = "hidden";
        
        // Remove after animation
        setTimeout(() => {
          cartRow.remove();
          
          // Update cart count
          const cartCount = document.querySelector('.cart-count');
          cartCount.innerText = parseInt(cartCount.innerText) - 1;
          
          // If cart is empty, show empty cart message
          if (document.querySelectorAll('.cart-row').length === 0) {
            const emptyCart = document.createElement('div');
            emptyCart.className = 'empty-cart';
            emptyCart.innerHTML = `
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any shoes to your cart yet.</p>
              <a href="index.html" class="btn">Start Shopping</a>
            `;
            document.querySelector('.cart-items').appendChild(emptyCart);
            document.querySelector('.cart-header').style.display = 'none';
          }
          
          // Update totals
          updateSubtotals();
        }, 300);
      });
    });
    
    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', function() {
      window.location.href = 'checkout.html';
    });
    
    // Add to cart functionality for recommended products
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        cartCount.innerText = parseInt(cartCount.innerText) + 1;
        
        // Button feedback
        this.innerText = "Added ✓";
        setTimeout(() => {
          this.innerText = "Add to Cart";
        }, 2000);
      });
    });
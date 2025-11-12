 // Simple JavaScript for demonstration
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        let cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.innerText);
        cartCount.innerText = currentCount + 1;
        
        // Animation effect
        button.innerText = "Added ✓";
        setTimeout(() => {
          button.innerText = "Add to Cart";
        }, 1500);
      });
    });
    
    // Cart icon click event
    document.querySelector('.cart-icon').addEventListener('click', function() {
      window.location.href = 'cart.html';
    });
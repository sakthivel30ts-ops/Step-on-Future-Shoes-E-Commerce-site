 // Form validation
    const form = document.getElementById('checkout-form');
    const placeOrderBtn = document.querySelector('.place-order-btn');
    
    placeOrderBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Check if form is valid
      if (validateForm()) {
        // Show confirmation or redirect to confirmation page
        alert('Order placed successfully! Redirecting to confirmation page...');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1500);
      }
    });
    
    function validateForm() {
      // Simple validation - just checking if required fields are filled
      const requiredFields = document.querySelectorAll('[required]');
      let valid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'red';
          valid = false;
        } else {
          field.style.borderColor = '#ddd';
        }
      });
      
      // Specific validations could be added here (email format, credit card format, etc.)
      
      if (!valid) {
        alert('Please fill in all required fields.');
      }
      
      return valid;
    }
    
    // Input formatting
    const cardNumberInput = document.getElementById('card-number');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');
    
    // Format card number with spaces
    cardNumberInput.addEventListener('input', function() {
      let value = this.value.replace(/\s+/g, '');
      let formattedValue = '';
      
      for(let i = 0; i < value.length; i++) {
        if(i > 0 && i % 4 === 0) {
          formattedValue += ' ';
        }
        formattedValue += value[i];
      }
      
      this.value = formattedValue;
    });
    
    // Format expiry date with slash
    expiryInput.addEventListener('input', function() {
      let value = this.value.replace(/\//g, '');
      
      if(value.length > 2) {
        this.value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
    });
    
    // Limit CVV to 3 or 4 digits
    cvvInput.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, '').substring(0, 4);
    });
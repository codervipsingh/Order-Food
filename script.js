//  function  foodOrder(){

//   // get selected items
//   const selectItem =Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(checkbox => checkbox.value);

//   if (selectItem===0){
//     alert('Please select at least one item to order.')
//     return;
//   }

//  }
function orderFood() {
    // Get selected food items
    const selectedItems = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
     .map(checkbox => checkbox.value);

    if (selectedItems.length === 0) {
      alert('Please select at least one item to order.');
      return;
    }

    // Disable the order button to prevent multiple orders
    document.querySelector('button').disabled = true;

    // Simulate order processing with a promise
    const orderPromise = new Promise((resolve) => {
      const processingTime = Math.floor(Math.random() * 5) + 1; // Random processing time in seconds
      setTimeout(() => {
        resolve();
      }, processingTime * 1000);
    });

    // Update order status
    document.getElementById('order-status').innerText = 'Order processing...';

    orderPromise.then(() => {
      // Re-enable the order button
      document.querySelector('button').disabled = false;

      // Display ordered food
      document.getElementById('ordered-food').style.display = 'block';

      // Show a random food image (replace with actual images)
      const foodImages = ['burger.png', 'fries.png', 'coldrink.png'];
      const randomImage = foodImages[Math.floor(Math.random() * foodImages.length)];
      document.getElementById('food-image').src = randomImage;

      // Display order ID
      const orderId = generateOrderId();
      document.getElementById('order-id').innerText = 'Order ID: ' + orderId;

      // Update order status
      document.getElementById('order-status').innerText = 'Order completed!';
    });
  }

  function generateOrderId() {
    return Math.floor(Math.random() * 1000000) + 1; // Generate a random order ID
  }
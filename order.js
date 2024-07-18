// Define the confirmOrder function
function confirmOrder() {
    // Use window.confirm to show a confirmation dialog
    var isConfirmed = window.confirm("Are you sure you want to order this dish?");
    
    // Check if the user clicked OK in the confirmation dialog
    if (isConfirmed) {
        // If confirmed, show an alert indicating the order has been confirmed
        alert("Order confirmed!");
    } else {
        alert("Order is not confirmed");
    }
}

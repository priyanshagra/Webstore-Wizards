export default async function displayRazorpay() {
    // Fetch order details from your Node.js server
    const data = await fetch("http://localhost:8000/razorpay", {
        method: 'POST'
    }).then((response) => response.json());

    console.log(data);

    // Define options for Razorpay payment
    const options = {
        key: "rzp_test_ATIDqpJJTUeTEw",
        currency: data.currency,
        amount: data.amount,
        description: 'Wallet Transaction',
        image: 'http://localhost:8000/logo.jpg',
        order_id: data.id,
        handler: function(response) {
            alert("Payment ID: " + response.razorpay_payment_id);
            alert("Order ID: " + response.razorpay_order_id);
        },
        prefill: {
            // Fill out the customer details
            name: 'Amrisha',
            email: 'amrisha.24.2k26@gmail.com',
            contact: '9329996069'
        }
    };

    // Initialize Razorpay payment object and open payment window
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
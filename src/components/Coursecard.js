import React from 'react'
import displayRazorpay from '../utils/paymentintgate';

function CourseCard() {
    return (
        <div>
            <br></br>
            <h1 style={{textAlign:"center"}}>Razorpay Payment Integration in React</h1>
            <br></br>
            <button type ='button' onClick={displayRazorpay} className='product-payment-button'>
                Buy Now
            </button>
        </div>
    )
}



export default CourseCard;
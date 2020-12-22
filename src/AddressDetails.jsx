import React from 'react'

export default function AddressDetails() {
    return (
        <div className="Address_details">
            <div className="address_form">
            <form className="" method="POST" action="/">
               <h2>Address Details</h2>
               <input type="text" placeholder="Name" required/><br/>
               <input type="text" placeholder="Address" required/><br/>
               <input type="text" placeholder="State" required/><br/>
               <input type="number" placeholder="Pincode" required/><br/>
               <input type="email" placeholder="abc@gmail.com" required/><br/>
               <input type="text" placeholder="mobile no.." required/><br/>
               <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

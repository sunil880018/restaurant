import React from 'react'

export default function AddRiview() {
    return (
        <div className="addreview">
            <form className="review" method="POST" action="/restaurant/">
               <h3 style={{color:"#666666",marginBottom:"10px"}}>Add a review</h3>
               <input type="text" placeholder="Write a review.." required/>
               <button type="submit">Review</button>
            </form>
        </div>
    )
}

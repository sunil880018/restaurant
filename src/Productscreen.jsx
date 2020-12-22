import React from 'react'
import { Link } from 'react-router-dom';
import Data, { SoupData ,DrinkData} from './Data';

export default function Productscreen(props) {
    let value = Data.find(x => x._id === props.match.params.id);
    if(value === undefined){
        value = SoupData.find(x => x._id === props.match.params.id);
    }
    if(value === undefined){
        value = DrinkData.find(x => x._id === props.match.params.id);
    }
    return (
        <div className="product" id="food_scroll">
            <h2>Product Details</h2>
            <img src={process.env.PUBLIC_URL+ value.image} alt="" />
            <p>{value.para}</p>
            <div style= {{fontWeight:"bold",color:"#fc8019"}}>&#8377; {value.price}</div>
            <Link to={"/address/"}><button>Order Now</button></Link>
        </div>
    )
}

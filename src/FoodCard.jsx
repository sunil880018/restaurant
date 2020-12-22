import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Data from './Data';
import { Link } from 'react-router-dom';
export default function FoodCard(props) {
   console.log(props);
    return (
        <>
            {
                Data.map((val)=> {

                return (
                
                <div className="food_card">
                <Link to={"/product/" + val._id}>
                    <img src={process.env.PUBLIC_URL + val.image} alt=""/>
                     <p>{val.para}</p>
                     <div className="price">
                         <div style= {{fontWeight:"bold"}}>&#8377; {val.price}</div>
                         <div><ShoppingCartIcon/></div>
                     </div>
                     <div className="rating">
                          <span><StarIcon/></span>
                          <span><StarIcon/></span>
                          <span><StarIcon/></span>
                          <span><StarIcon/></span>
                          <span><StarIcon/></span>
                          <span><StarHalfIcon/></span>
                    </div>
                </Link>
               </div>
               
                )
              })
           }
       </>
    )
}


             
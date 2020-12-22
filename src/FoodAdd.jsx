import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function FoodAdd() {
    return (
        <div className="food_add">
            <div className="food_add_lines">
               <h1>ASIAN FOOD</h1>
               <p>JAPANESE STYLE RESTAURANT</p>
               <h3>The Chef creates divine combinations.</h3>
               <div className="scroll_icon">
                 <a href="#food_scroll">
                  <ExpandMoreIcon/>
                </a>
               </div>
            </div>
        </div>
    )
}

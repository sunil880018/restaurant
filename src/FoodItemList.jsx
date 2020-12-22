import React from 'react'
import FoodCard from './FoodCard'
import OptionMenu from './OptionMenu'

export default function Food_items_list() {
    return (
        <div className="food_items_list" id="food_scroll">
            <OptionMenu/>
            <div className="item_list">
              <FoodCard/>
            </div>
        </div>
    )
}

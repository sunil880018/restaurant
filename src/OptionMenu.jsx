import React from 'react'
import { Link } from 'react-router-dom';
export default function OptionMenu() {
    return (
        <div className="option_menu">
             <h1>MENU</h1>
            <div><Link to="/restaurant/">Food</Link></div>
            <div><Link to="/soupsalad/">Soup and Salad</Link></div>
            <div><Link to="/desertdrink/">Drink and Desert</Link></div>
        </div>
    )
}

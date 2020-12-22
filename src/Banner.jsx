import React from 'react'
import FoodAdd from './FoodAdd'
import Header from './Header'

export default function Banner() {
    return (
        <div className="banner_background" style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/banner.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat' }}>

            <div className="banner_background_color">
                <Header/>
                <FoodAdd/>
            </div>
        </div>
    )
}

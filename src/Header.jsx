import React from 'react'
import { Link } from 'react-router-dom';
import RoomIcon from '@material-ui/icons/Room';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export default function Header() {
   const home = () =>{
      document.getElementById("home").style.color="#fc8019";
      document.getElementById("login").style.color="#fff";
      document.getElementById("aboutus").style.color="#fff";
   }
   const login = () =>{
      document.getElementById("home").style.color="#fff";
      document.getElementById("login").style.color="#fc8019";
      document.getElementById("aboutus").style.color="#fff";
   }
   const About = () =>{
      document.getElementById("home").style.color="#fff";
      document.getElementById("login").style.color="#fff";
      document.getElementById("aboutus").style.color="#fc8019";
   }
    return (
        <header>
            <div className="menus">
               <div className="menus_items">
               <div className="menu_list">
                  <Link to="/restaurant/"><RoomIcon className="logo"/></Link>
               </div>
               <div className="menu_list">
                  <Link to="/restaurant/" id="home" onClick={home} className="active">Home</Link>
               </div>
               <div className="menu_list">
                  <Link to="/login/" id="login" onClick={login}>Login</Link>
               </div>
               <div className="menu_list">
                  <Link to="/aboutus" id="aboutus" onClick={About}>About Us</Link>
               </div>
               </div>
            <div className="search_items">
               <form className="form" method="POST" action="#">
                  <div className="input_bar">
                     <input type="text" placeholder="search.." required/>
                  </div>
                  <div>
                      <button type="submit">Search</button>
                  </div>
               </form>
            </div>

            </div>
            
            <div className="cart_items">
             <button>
             <p>0</p>
              <div className="cart_product"><span><ShoppingCartIcon/></span><span>cart</span></div>
             </button>
            </div>
        </header>
    )
}

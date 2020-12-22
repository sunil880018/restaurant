import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default function Login() {
    
    return (
        <div className="login_form" id="food_scroll">
            <form className="login" method="POST" action="/restaurant/">
               <h2> <span><AccountCircleIcon/></span>User Login</h2>
               <input type="email" placeholder="abc@gmail.com" required/><br/>
               <input type="password" placeholder="************" required/><br/>
               <button type="submit">Login</button>
            </form>
        </div>
    )
}

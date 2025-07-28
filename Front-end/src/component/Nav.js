import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () =>{
    let user = localStorage.getItem('user')
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('user');
        navigate('/register')
        console.warn('logout');
    }
    return(
        <div>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                 <li>
                    <Link to="/product">Product</Link>
                </li>
                 <li>
                    <Link to="/add">Add Product</Link>
                </li>
                 <li>
                    <Link to="/update">Update Product</Link>
                </li>
                 {/* <li>
                   
                </li> */}
                 <li>
                    <Link to="/profile">Profile</Link>
                </li>
                 <li>
                   { user ?  <Link to="/register" onClick={logOut}>Logout</Link> : <Link to="/register">Register</Link> } 
                </li>
            </ul>
        </div>
    )
}

export default Nav;

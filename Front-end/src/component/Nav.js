import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    let user = localStorage.getItem('user')
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('user');
        navigate('/register')
        console.warn('logout');
    }
    return (
        <div>
            {user ? <ul className="nav add">
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

                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/register" onClick={logOut}>Logout</Link>
                </li>
            </ul>
                : <ul className="nav add right-menu">
                    <li>
                        <> <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </>
                    </li>
                </ul>
            }
        </div>
    )
}

export default Nav;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() =>{
        let user = localStorage.getItem('user');
        if(user){
            navigate('/')
        }
    },[])

    const Login = async () => {
        const response = await fetch('http://localhost:3007/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        const result = await response.json();
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            console.log(result, "result");
            setEmail('');
            setPassword('');
        }
    }
    return (
        <div className="login-page">
            <h2>Login Page</h2>
            <form>
                <input className="input-field" value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input className="input-field" value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className="submit-button" onClick={Login} type="button">Login</button>
            </form>
        </div>
    )
}
export default Login;
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let user = localStorage.getItem('user')
const navigate = useNavigate();
useEffect(()=>{
    if (user){
        navigate('/')
    }
},[])
    const handleSubmit = async () => {
        let responce = await fetch('http://localhost:3007/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, password
            })

        }
        )
        if (responce.ok){
            responce = await responce.json()
            localStorage.setItem('user', JSON.stringify(responce))
            console.log(responce, "responce");
            Navigate('/'); 
        }

        setEmail('');
        setPassword('');
        setName('');
    }
    return (
        <div className="register-page">
            <h2>Register Page</h2>
            <form>
                <input className="input-field" value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Name" />
                <input className="input-field" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" />
                <input className="input-field" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                <button className="submit-button" type="button" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

export default Register;
import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Validate() {
    const Navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/validate", { email, password });
            console.log(response.data.success);
            if (response.data.success) {
                Navigate('/Skilladd');
            } else {
                Navigate('/');
            }
        } catch (err) {
            console.log(err);
        }   
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'blue' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <button type='submit' className='loginButton' style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Login</button>
            </form>
        </div>
    )
}

export default Validate

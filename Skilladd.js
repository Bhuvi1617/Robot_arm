import React, { useState } from 'react';
import axios from "axios";

function Skilladd() {
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState("option1"); // Default value set to "Beginner"
    const [desc, setDesc] = useState("");
    const [out, setOut] = useState("");

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post("/api/add", { skill, level, desc });
            setOut(response.data);
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <form className='skill' onSubmit={handleSubmit} style={{ width: '40%', padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add Skill</h2>
                <input type="text" placeholder='Skill' value={skill} onChange={(e) => setSkill(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <select value={level} onChange={(e) => setLevel(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}>
                    <option value="option1">Beginner</option>
                    <option value="option2">Intermediate</option>
                    <option value="option3">Advanced</option>
                </select>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                <button type='submit' className='addButton' style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Add</button>
            </form>
            {out && <h2 style={{ marginLeft: '20px', color: '#333' }}>{out}</h2>}
        </div>
    )
}

export default Skilladd;

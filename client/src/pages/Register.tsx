import { register } from "../api/auth";
import React, { useState } from "react";

const Register: React.FC = () => {

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        const confirmPassword = e.currentTarget.confirmPassword.value;

        if(password !== confirmPassword) {
            setError("Passwords do not match.");
        }

        const token = await register(username, password);
    
        localStorage.setItem("token", token);
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
        
        <button type="submit">Register</button>
        {error && <br/> && <span>{error}</span>}
        </form>
    );
};

export default Register;

import React from 'react';
import LoginForm from '../components/LoginForm';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Login : React.FC = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        const token = await login(username, password);

        if(!token) {
            console.error("Invalid login");
            return;
        }

        navigate("/dashboard");
    }

    

    return (
        <LoginForm onSubmit={handleSubmit} />
    );
}

export default Login;

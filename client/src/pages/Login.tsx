import React from 'react';
import LoginForm from '../components/LoginForm';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Login : React.FC = () => {

    const navigate = useNavigate();

    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        const token = await login(username, password);

        if(!token) {
            console.error("Invalid login");
            setError("Invalid login");
            return;
        }

        window.localStorage.setItem("token", token);
        navigate("/dashboard");
        console.log("Logged in");
    }

    return (
        <>
            <LoginForm onSubmit={handleSubmit} />
            {error && <br/> && <span>{error}</span>}
        </>
    );
}

export default Login;

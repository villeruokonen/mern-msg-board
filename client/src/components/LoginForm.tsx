import { useState } from 'react';

interface LoginData {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginData> = ({ onSubmit }: LoginData) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;

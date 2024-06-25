import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setAuth(true);
        }
    }, []);

    return auth;
}
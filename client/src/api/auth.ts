import axios from "axios";

export const login = async (username: string, password: string) => {

    if(!username || !password) 
        return console.error("Email and password are required");

    try {
        const { data } = await axios.post("/api/auth/login", {
            username,
            password,
        });

        return data.token;
    } catch (error) {
        console.error(error);
    }
};

export const register = async (username: string, password: string) => {
    const { data } = await axios.post("/api/auth/register", {
        username,
        password,
    });

    return data.token;
};

export const logout = async () => {
    await axios.post("/api/auth/logout");
};
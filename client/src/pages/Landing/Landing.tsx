import { useState } from "react";
import Login from "../Login";
import Register from "../Register";
import './Landing.css'

const Landing : React.FC = () => {

    const [registerClicked, setRegisterClicked] = useState(false);

    const onLogin = () => {
        console.log("Logged in");
    }

    const onRegister = () => {
        console.log("Registered");
    }
    
    return (
        <>
        <h1>Welcome!</h1>
            <div className="landing">
                {registerClicked ? <Register/> : <Login/>}
                <button onClick={() => setRegisterClicked(!registerClicked)}>
                    {registerClicked ? "Already have an account?" : "New user?"}
                </button>
            </div>
        </>
    );
}

export default Landing;
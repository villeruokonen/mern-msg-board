import { useState } from "react";
import Login from "../Login";
import Register from "../Register";
import './Landing.css'

const Landing : React.FC = () => {

    const [registerClicked, setRegisterClicked] = useState(false);
    
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
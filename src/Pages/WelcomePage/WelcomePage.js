import React, {useState} from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

function WelcomePage() {
    const[loginOpen, setLoginOpen] = useState(false);
    const[registerOpen, setRegisterOpen] = useState(false);

    return(
        <div className="container">

            <h1>Welcome to foodkeeper</h1>
            <h3>Keep track of all your recipes</h3>

            <div className="box-controller">

                <button
                    className={"controller" + (loginOpen ? "selected-controller" : "")}
                     onClick={() => { setLoginOpen(true); setRegisterOpen(false)}}
                >
                    Sign In
                </button>

            <button
                className={"controller" + (registerOpen ? "selected-controller" : "")}
                onClick={() => {setRegisterOpen(true); setLoginOpen(false)}}
            >
                Sign up
            </button>

            </div>

            <div className="box-container">
                {loginOpen && <SignIn/>}
                {registerOpen && <SignUp/>}
            </div>

        </div>
    );
}

export default WelcomePage;
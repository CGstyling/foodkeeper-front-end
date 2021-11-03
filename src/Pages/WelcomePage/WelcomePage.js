import React, {useState} from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import logo from "../../Assets/logo-groot.png"

function WelcomePage() {
    const[loginOpen, setLoginOpen] = useState(false);
    const[registerOpen, setRegisterOpen] = useState(false);

    return(
        <div className="container">
            <img src={logo} alt="logo"/>

            <h1>Welcome to foodkeeper</h1>
            <h3>Keep track of all your recipes</h3>

            <div className="box-controller">

                <div
                    className={"controller" + (loginOpen ? "selected-controller" : "")}
                     onClick={() => { setLoginOpen(true); setRegisterOpen(false)}}
                >
                    Sign In
                </div>

            <div
                className={"controller" + (registerOpen ? "selected-controller" : "")}
                onClick={() => {setRegisterOpen(true); setLoginOpen(false)}}
            >
                Sign up
            </div>

            </div>

            <div className="box-container">
                {loginOpen && <SignIn/>}
                {registerOpen && <SignUp/>}
            </div>

        </div>
    );
}

export default WelcomePage;
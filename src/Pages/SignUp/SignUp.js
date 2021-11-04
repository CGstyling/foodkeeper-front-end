import React from "react";
import "./SignUp.css";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

function SignUp({setLoginOpen, setRegisterOpen}) {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    function handleFormSubmit(data) {
        // history.push("/signin")
        setLoginOpen(true);
        setRegisterOpen(false);
        console.log("ik heb mij geregistreerd")
    }

    return(
        <div className="inner-container">
            <h1 className="header-login">Sign up</h1>

            <form className="box" onSubmit={handleSubmit(handleFormSubmit)}>

                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        className="login-input"
                        type="text"
                        id="username"
                        placeholder="Your username"
                        {...register("username")}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="emailadress">Email:</label>
                    <input
                        className="login-input"
                        type="text"
                        id="emailadress"
                        placeholder="Your email-adress"
                        {...register("email")}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        className="login-input"
                        type="password"
                        id="password"
                        placeholder="Your password"
                        {...register("password")}
                    />
                </div>
                <button
                    type="submit"
                    className="login-btn"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
import React, {useContext} from 'react';
import "./SignIn.css"
import {AuthContext} from "../../Context/AuthContext";
import {useForm} from "react-hook-form";

function SignIn() {
    const {register, handleSubmit} = useForm();
    const {signInTrue} = useContext(AuthContext);

    function handleFromSubmit(data) {
        console.log(data);
        signInTrue();
    }

    return(
        <div className="inner-container">
            <h1 className="header-login">Sign in</h1>

            <form className="box" onSubmit={handleSubmit(handleFromSubmit)}>

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
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default SignIn;
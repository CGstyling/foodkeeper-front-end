import React from "react";
import "./Header.css";
// import logo from "/src/Assets/logo.png";

function Header() {
    return(
        <nav className="header">

           <span className="logo-container">
              {/*<img src={logo} alt="logo"/>*/}
               <h1>Foodkeeper</h1>
           </span>

            <span className="header-buttons">
             <button
                 type="button"
             >
                +
            </button>
            <button type="button">
                Profile
            </button>
            </span>

        </nav>
    );
}

export default Header;
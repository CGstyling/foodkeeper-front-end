import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png"
import logoGroot from "../../Assets/logo-groot.png"

function Header() {
    return(
        <nav className="header">

           <span className="logo-container">
              <img src={logoGroot} alt="logo"/>
           </span>

            <span className="header-buttons">
             <button
                 type="button"
             >
                +
            </button>
            <button
                type="button"
            >
                Profile
            </button>
            </span>

        </nav>
    );
}

export default Header;
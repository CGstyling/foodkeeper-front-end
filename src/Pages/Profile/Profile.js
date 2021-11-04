import React from "react";
import "./Profile.css"


function Profile() {
    return(
        <div className="profile-container">

            <div className="header-profile">
                <h1>Profiel pagina</h1>
                {/*<img src="" alt=""/>*/}
                <h2>Gegevens:</h2>
                <p>Gebruikersnaam:</p>
                <p>Bio:</p>
            </div>
            <div className="buttons-profile">
                <button>
                    All recipes
                </button>
                <button>
                    category
                </button>
                <button>
                    edit profile
                </button>
                <hr/>
            </div>

            <div className="grid">

            </div>
        </div>
    );
}

export default Profile;
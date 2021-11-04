import React from "react";
import "./RecipeCard.css"
import soep from "../../Assets/soep.jpg"

function RecipeCard() {
    return(
        //hard coded
        <div className="card">
            <div className="card-body">
                <img className="card-img" src={soep} alt="soep"/>
                <h2 className="card-title"> Asian Soup </h2>
                <p className="card-description"> Amazing soup from asia</p>
            </div>
            <button className="card-button">View recipe</button>
        </div>
    );
}

export default RecipeCard;
import React from "react";
import "./Home.css"
import RecipeCard from "../../Compotents/RecipeCard/RecipeCard";

function Home() {
    return(
        <div className="recipe-wrapper">
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </div>
    );
}

export default Home;
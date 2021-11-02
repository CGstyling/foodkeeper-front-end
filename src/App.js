import React from "react";
import './App.css';
import Header from "./Compotents/Header/Header";
import {Switch, Route,} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import Recipe from "./Pages/Recipe/Recipe";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

function App() {

    return (
        <>
            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/add-recipe">
                    <AddRecipe/>
                </Route>
                <Route path="/recipe">
                    <Recipe/>
                </Route>
                <Route path="/welcome">
                    <WelcomePage/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/login">
                    <SignIn/>
                </Route>
            </Switch>
        </>

    );
}

export default App;

import React from "react";
import "./AddRecipe.css"
import {useForm} from "react-hook-form";

function AddRecipe() {
    const {register, handleSubmit} = useForm();

    function onFormSubmit(data) {
        console.log(data)
    }

    return(
        <div className="add-recipe-container">
            <h1>Upload here a recipe</h1>

            <form className="add-recipe-form" onSubmit={handleSubmit(onFormSubmit)}>

                <label htmlFor="title">
                    <p>Name your recipe:</p>
                    <input
                        type="text"
                        id="title"
                        {...register("recipe-title")}
                    />
                </label>

                <label htmlFor="img-upload">
                    <p>Upload here your food picture!</p>
                    <input
                        type="file"
                        id="img-upload"
                        {...register("image")}
                    />
                </label>

                <label htmlFor="ingredients">
                    <p>Your special ingredients:</p>
                    <textarea
                        {...register("ingredients")}
                        id="ingredients"
                        cols="80"
                        rows="10"
                        placeholder="Your ingredients.."
                    >
                    </textarea>
                </label>

                <label htmlFor="method">
                    <p>Write here what needs to be done to make this recipe perfect:</p>
                    <textarea
                        {...register("method")}
                        id="method"
                        cols="80"
                        rows="10"
                        placeholder="Your method: step 1:... step2..."
                    >
                    </textarea>
                </label>
                <br/>
                <button
                    type="submit"
                >
                    Save recipe!
                </button>
            </form>
        </div>
    );
}

export default AddRecipe;
import React from "react";
import './recipe.scss'

const Recipe = ({
    id,
    name,
    tagline,
    description,
    image_url,
}) => {
    return (
        <div className="recipe">
            <div className="recipe__img"><img src={image_url} alt="" /></div>
            <div className="recipe__text">
                <h3>{name}</h3>
                <h3>{tagline}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Recipe;

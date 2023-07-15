import React from "react";

const Recipe = ({
    id,
    name,
    tagline,
    first_brewed,
    description,
    image_url,
}) => {
    return (
        <div>
            <h4>{id}</h4>
            <img src={image_url} alt="" />
            <h3>{name}</h3>
            <h3>tagline: {tagline}</h3>
            <p>{description}</p>
            <p>first brewed: {first_brewed}</p>
        </div>
    );
};

export default Recipe;

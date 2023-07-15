import React from "react";
import { useStore } from "../../zustand/store";
import Recipe from "./Recipe/Recipe";
import './repices.scss'


const Recipes = () => {
    const recipes = useStore((state)=>state.recipes);
    return (
        <div className="repices">
            {recipes.map((el) => (
                <Recipe
                    id={el.id}
                    key={el.id}
                    name={el.name}
                    tagline={el.tagline}
                    description={el.description}
                    image_url={el.image_url}
                />
            ))}
        </div>
    );
};

export default Recipes;

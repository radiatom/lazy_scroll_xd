import React from "react";
import { useStore } from "../../zustand/store";
import Recipe from "./Recipe/recipe";

const Recipes = () => {
    const recipes = useStore((state)=>state.recipes);
    return (
        <div>
            {recipes.map((el) => (
                <Recipe
                    id={el.id}
                    key={el.id}
                    name={el.id}
                    tagline={el.tagline}
                    first_brewed={el.first_brewed}
                    description={el.description}
                    image_url={el.image_url}
                />
            ))}
        </div>
    );
};

export default Recipes;

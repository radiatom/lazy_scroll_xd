import React, { useEffect, useState } from "react";
import { useStore } from "../../zustand/store";
import Recipe from "./Recipe/Recipe";
import './repices.scss'


const Recipes = () => {
    const [page,setPage]=useState(1)
    const fetchData=useStore((state)=>state.fetchData)
    const recipes = useStore((state)=>state.data);
    useEffect(() => {
        if(recipes.length===0){fetchData(page)}
    });
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

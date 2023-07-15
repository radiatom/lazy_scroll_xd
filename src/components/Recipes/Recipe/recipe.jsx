import React, { useState } from "react";
import './recipe.scss'
import { useRecip } from "../../../zustand/storeRecip";

const Recipe = ({
    click3,
    id,
    name,
    tagline,
    description,
    image_url,
}) => {
    const fetchDataOneRecipe=useRecip((state) => state.fetchDataOneRecipe)//відправити запит на отриманння більшої інфи по рецепту
    const [sel, setSel]=useState(false)
    const click=(id)=> (event)=>{
        event.preventDefault(); //вимикаємо меню
        click3(id)
        setSel(!sel)//for css
    }
const click2=(id)=>{
    fetchDataOneRecipe(id)
}
    return (
        <div className={sel?'recipeActive recipe':"recipe"} onContextMenu={click(id)} onClick={()=>click2(id)}>
            <div className="recipe__img"><img src={image_url} alt="" /></div>
            <div className="recipe__text">
                <h3>{name}{id}</h3>
                <h3>{tagline}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Recipe;

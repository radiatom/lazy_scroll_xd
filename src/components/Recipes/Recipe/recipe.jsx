import React, {  useState } from "react";
import "./recipe.scss";
import { useRecip } from "../../../zustand/storeRecip";

const Recipe = ({
    selectDelete,
    id,
    name,
    tagline,
    description,
    image_url,
}) => {
    const fetchDataOneRecipe = useRecip((state) => state.fetchDataOneRecipe); //відправити запит на отриманння більшої інфи по рецепту
    const [sel, setSel] = useState(false);//зміна стилю

    const clickOnRecipe = (id) => (event) => {
        event.preventDefault(); //вимикаємо меню
        selectDelete(id);//добавити чи видалити айдішку з масива
        setSel(!sel); //for css
    };

    return (
        <div
            className={sel ? "recipeActive recipe" : "recipe"}
            onContextMenu={clickOnRecipe(id)}
            onClick={() => fetchDataOneRecipe(id)}
        >
            <div className="recipe__img">
                <img src={image_url} alt="foto" />
            </div>
            <div className="recipe__text">
                <h3>
                    {name}{" id: "}
                    {id}
                </h3>
                <h3>{tagline}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Recipe;

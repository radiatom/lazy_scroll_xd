import React, { useEffect, useState } from "react";
import { useStore } from "../../zustand/store";
import Recipe from "./Recipe/Recipe";
import "./repices.scss";

const Recipes = () => {
    const [page, setPage] = useState(1);
    const fetchData = useStore((state) => state.fetchData);//запит на отримання першої сторінки
    const recipes = useStore((state) => state.recipes);//15рецептів
    const data=useStore((state)=>state.data)//стан 25рецептів
    const addrecipes = useStore((state) => state.addrecipes);//сортування з 25 рецептів лише перші 15 
    useEffect(() => {
        if (recipes.length === 0) {
            fetchData(page); //перший запит, перевірка щоб не робило кучу запитів якщо в сторі вже є перша сторінка
        }
    }, []);
    useEffect(() => {
        addrecipes(15);//коли отримаємо всі 25 карточок відсортувати лише 15
    }, [data]);

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

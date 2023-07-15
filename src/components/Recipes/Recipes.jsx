import React, { useEffect, useState } from "react";
import { useStore } from "../../zustand/store";
import Recipe from "./Recipe/Recipe";
import "./repices.scss";

const Recipes = () => {
    const [page, setPage] = useState(1);
    const [dataId, setDataId] = useState([]);
    const fetchData = useStore((state) => state.fetchData); //запит на отримання першої сторінки і відсортування з 25 рецептів лишити 15
    const recipes = useStore((state) => state.recipes); //15рецептів
    const deleteFirstItems = useStore((state) => state.deleteFirstItems);
    useEffect(() => {
        if (recipes.length === 0) {
            fetchData(page); //перший запит, перевірка щоб не робило кучу запитів якщо в сторі вже є перша сторінка
        }
    }, []);
    const click = () => {
        deleteFirstItems(); //видалення перших 5 рецептів
    };
    const click2 = () => {
        setPage(page + 1); //оновлюємо номер сторінки яку ми бедемо загружати
        fetchData(page); //відправляємо запит по нову сторінку
    };
    const click3 = (id)  => {
        setDataId([...dataId,id])
        console.log([...dataId,id]);
    };
    return (
        <div className="repices">
            <button onClick={click}>видалити перші рецепти</button>
            <button onClick={click2}>
                відправити запит на ще одну сторінку
            </button>
            {recipes.slice(0, 15).map((el) => (
                <Recipe
                    click3={click3}
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

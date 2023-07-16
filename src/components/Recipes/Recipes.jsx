import React, { useEffect, useState } from "react";
import { useRecip } from "../../zustand/storeRecip";
import Recipe from "./Recipe/Recipe";
import "./repices.scss";

const Recipes = (props) => {
    const [page, setPage] = useState(1);
    const [dataId, setDataId] = useState([]);
    const fetchData = useRecip((state) => state.fetchData); //запит на отримання першої сторінки і відсортування з 25 рецептів лишити 15
    const recipes = useRecip((state) => state.recipes); //15рецептів
    const deleteFirstItems = useRecip((state) => state.deleteFirstItems); //видалення перших 5 рецептів
    const deleteRecipe = useRecip((state) => state.deleteRecipe); //видалення конкретних рецептів

    // useEffect(() => {
    //     console.log(page);
    // }, [page]);

    useEffect(() => {
        if (recipes.length === 0) {
            fetchData(1); //перший запит, перевірка щоб не робило кучу запитів якщо в сторі вже є перша сторінка
        }
    }, [props]);
    const click = () => {
        deleteFirstItems(); //видалення перших 5 рецептів
    };
    const click2 = () => {
        fetchData(page); //відправляємо запит по нову сторінку
        setPage(page + 1); //оновлюємо номер сторінки яку ми бедемо загружати в майбутньому
    };
    const click3 = (id) => {
        const addOrRemoveNumber = (array, number) => {
            const newArray = [...array]; // Створюємо копію масиву
            const index = newArray.indexOf(number);
            if (index === -1) {
                newArray.push(number); //добавляємо число якщо його нема
            } else {
                newArray.splice(index, 1); //видаляємо число якщо воно є
            }
            console.log(newArray); //відображуємо в консолі які id у нас в масиві
            return newArray; // Повертаємо оновлений масив
        };
        setDataId([...addOrRemoveNumber(dataId, id)]);
    };
    const click4 = () => {
        deleteRecipe(dataId); //видаляємо рецепти які ми вибрали в масив
        setDataId([]); //очищаємо масив айдішок що ми  хотіли видалити
    };

    useEffect(() => {
        const container = document.getElementById("scroll-container");
        container.addEventListener("scroll", scrollHandler);

        return function cleanup() {
            container.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = (e) => {
        // console.log("scrollHeight", e.target.scrollHeight); //загальна висота компонента з урахуванням скролу
        // console.log('scrollTop', e.target.scrollTop);//тепершінє положення скролу від початку компонетна
        // console.log('innerHeight', window.innerHeight);//висота видимої області сторінки (розмір екрану висота)
        if (e.target.scrollTop > 1598) {
            deleteFirstItems();
        } //при висоті скролу 1622 виконуємо фукцію видалення перших пяти рецептів
        if (e.target.scrollHeight < 2400) {
            fetchData(page); //відправляємо запит по нову сторінку
            setPage(page + 1); //оновлюємо номер сторінки яку ми бедемо загружати в майбутньому
        }
    };

    return (
        <div className="repices" id="scroll-container">
            {/* <button onClick={click}>видалити перші рецепти</button> */}
            <button onClick={click2}>
                відправити запит на ще одну сторінку
            </button>
            {dataId.length > 0 ? <button onClick={click4}>delete</button> : ""}
            {/* в масиві айдішок які треба видалити є значення тоді відобразити кнопку */}
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

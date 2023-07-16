import React, { useEffect, useState } from "react";
import { useRecip } from "../../zustand/storeRecip";
import Recipe from "./Recipe/Recipe";
import "./repices.scss";

const Recipes = (props) => {
    const [page, setPage] = useState(1);//номер сторінки які ми хочемо завантажити
    const [dataId, setDataId] = useState([]);//пустий масив айдішок які ми хочемо видалити
    const fetchData = useRecip((state) => state.fetchData); //запит на отримання першої сторінки і відсортування з 25 рецептів лишити 15
    const recipes = useRecip((state) => state.recipes); //15рецептів
    const deleteFirstItems = useRecip((state) => state.deleteFirstItems); //видалення перших 5 рецептів
    const deleteRecipe = useRecip((state) => state.deleteRecipe); //видалення конкретних рецептів

    useEffect(() => {
        if (recipes.length === 0) {
            fetchData(page); 
            setPage(page+1)
        }
    }, [props]);//перший запит, перевірка щоб не робило кучу запитів якщо в сторі вже є перша сторінка

    useEffect(() => {
        if (recipes.length === 15) {
            fetchData(page); 
            setPage(page+1)
        }
    }, [recipes]);//слідкуєм за рецептами, якщо їх лишилось 15 штук то робимо запит по нову сторінку

    useEffect(() => {
        const container = document.getElementById("scroll-container");
        container.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            container.removeEventListener("scroll", scrollHandler);
        };
    }, []);//слідкувати за скролом

    const selectDelete = (id) => {
        const addOrRemoveNumber = (array, number) => {
            const newArray = [...array]; // Створюємо копію масиву
            const index = newArray.indexOf(number);
            if (index === -1) {
                newArray.push(number); //добавляємо число якщо його нема
            } else {
                newArray.splice(index, 1); //видаляємо число якщо воно є
            }
            return newArray; // Повертаємо оновлений масив з айдійшками які ми хочемо видалити
        };
        setDataId([...addOrRemoveNumber(dataId, id)]);// вставляємо цей масив в стан
    };//добавити чи видалити айдішку з масива

    const deleteBtn = () => {
        deleteRecipe(dataId); //видаляємо рецепти які ми вибрали в масив (стан)
        setDataId([]); //очищаємо масив айдішок що ми  хотіли видалити (встановлюємо що масив в стані пустий)
    };

    const scrollHandler = (e) => {
        if (e.target.scrollTop > 1598) {
            deleteFirstItems();
        } //при висоті скролу 1622 виконуємо фукцію видалення перших пяти рецептів
    };//реакція на скрол

    return (
        <div className="repices" id="scroll-container">
            {dataId.length > 0 ? <button className="repices__delete" onClick={deleteBtn}>delete</button> : ""}
            {/* в масиві айдішок які треба видалити є значення тоді відобразити кнопку */}
            {recipes.slice(0, 15).map((el) => (
                <Recipe
                selectDelete={selectDelete}
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

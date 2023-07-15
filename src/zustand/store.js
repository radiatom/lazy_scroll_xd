import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
    devtools((set) => ({
        recipes: [],

        fetchData: async (page) => {
            const res = await fetch(
                `https://api.punkapi.com/v2/beers?page=${page}`
            );
            const result = await res.json();//отримання результата запиту 25 рецептів

            const newRecipes = result.map(
                ({ id, name, tagline, description, image_url }) => ({
                    id,
                    name,
                    tagline,
                    description,
                    image_url,
                })
            );//фільтрування 25 рецептів щоб не мати всіх значень
            set((state) => {
                return {
                    recipes: [...state.recipes, ...newRecipes],
                };
            });//добавлення 25 відфільтрованих рецептів в стейт який використовуєм для рендиренгу
        },
        deleteFirstItems:()=>{
            set((state) => {
                const newData = state.recipes.slice(); // Копіюємо масив
                newData.splice(0, 5); // Видаляє перші 5 об'єктів з newData
                return {
                    recipes: [...newData],
                };//вертаємо масив рецептів без 5 перших
            });
        }
    }))
);

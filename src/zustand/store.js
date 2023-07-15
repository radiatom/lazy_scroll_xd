import { create } from "zustand";

export const useStore = create((set) => ({
    recipes: [],
    data: [],
    fetchData: async (page) => {
        const res = await fetch(
            `https://api.punkapi.com/v2/beers?page=${page}`
        );
        const result = await res.json();
        const newData = result.map(
            ({ id, name, tagline, description, image_url }) => ({
                id,
                name,
                tagline,
                description,
                image_url,
            })
        );
        set((state) => {
            return { data: [...state.data, ...newData] };
        });
    },
    addrecipes: (count) =>
        set((state) => {
            const newRecipes = state.data.splice(0, count);
            return {
                recipes: [...newRecipes],
            };
        }),
}));

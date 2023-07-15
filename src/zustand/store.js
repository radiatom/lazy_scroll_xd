import { create } from "zustand";

export const useStore = create((set) => ({
    recipes: [],
    //     deleteRecipes:(id)=>set(state=>{
    //       const updatedRecipes = state.recipes.filter((el) => !id.includes(recipe.id))
    //       return {recipes:[...updatedRecipes]}
    //     }),
    data: [],
    fetchData: async () => {
        const res = await fetch("https://api.punkapi.com/v2/beers?page=1");
        const newData = await res.json();
        set({
            data: newData.map(
                ({ id, name, tagline, description, image_url }) => ({
                    id,
                    name,
                    tagline,
                    description,
                    image_url,
                })
            ),
        });
    },

}));

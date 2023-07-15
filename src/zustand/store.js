import { create } from "zustand";

export const useStore = create((set) => ({
    recipes: [
        {
            id: 1,
            name: "Buzz",
            tagline: "A Real Bitter Experience.",
            description:
                "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
            image_url: "https://images.punkapi.com/v2/keg.png",
        },
        {
            id: 2,
            name: "Trashy Blonde",
            tagline: "You Know You Shouldn't",
            description:
                "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
            image_url: "https://images.punkapi.com/v2/2.png",
        },
        {
            id: 3,
            name: "Berliner Weisse With Yuzu - B-Sides",
            tagline: "Japanese Citrus Berliner Weisse.",
            description:
                "Japanese citrus fruit intensifies the sour nature of this German classic.",
            image_url: "https://images.punkapi.com/v2/keg.png",
        },
        {
            id: 4,
            name: "Pilsen Lager",
            tagline: "Unleash the Yeast Series.",
            description:
                "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
            image_url: "https://images.punkapi.com/v2/4.png",
        },
        {
            id: 5,
            name: "Avery Brown Dredge",
            tagline: "Bloggers' Imperial Pilsner.",
            description:
                "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.",
            image_url: "https://images.punkapi.com/v2/5.png",
        },
        {
            id: 6,
            name: "Electric India",
            tagline: "Vibrant Hoppy Saison.",
            description:
                "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
            image_url: "https://images.punkapi.com/v2/6.png",
        },
    ],
//     deleteRecipes:(id)=>set(state=>{
//       const updatedRecipes = state.recipes.filter((el) => !id.includes(recipe.id))
//       return {recipes:[...updatedRecipes]}
//     }),
    data: [
        
        {
            id: 7,
            name: "AB:12",
            tagline: "Imperial Black Belgian Ale.",
            description:
                "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.",
            image_url: "https://images.punkapi.com/v2/7.png",
        },
        {
            id: 8,
            name: "Fake Lager",
            tagline: "Bohemian Pilsner.",
            description:
                "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.",
            image_url: "https://images.punkapi.com/v2/8.png",
        },
        {
            id: 9,
            name: "AB:07",
            tagline: "Whisky Cask-Aged Scotch Ale.",
            description:
                "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.",
            image_url: "https://images.punkapi.com/v2/9.png",
        },
        {
            id: 10,
            name: "Bramling X",
            tagline: "Single Hop IPA Series - 2011.",
            description:
                "Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.",
            image_url: "https://images.punkapi.com/v2/10.png",
        },
        {
            id: 11,
            name: "Misspent Youth",
            tagline: "Milk & Honey Scotch Ale.",
            description:
                "The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.",
            image_url: "https://images.punkapi.com/v2/keg.png",
        },
    ],
}));

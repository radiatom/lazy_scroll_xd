import React from "react";
import './FullRecipe.scss'
import { useRecip } from "../../zustand/storeRecip";
import MashTemp from "./MashTemp/MashTemp";
import Malt from "./Malt/Malt";
import Hops from "./Hops/Hops";
import FoodPairing from "./FoodPairing/FoodPairing";

const FullRecipe = () => {
    const r = useRecip((state) => state.fullRecipe);
    return (
        <div className="fullRecipe" >
            {r.id > 0 ? (
                <div>
                    <img src={r.image_url} alt="foto" />
                    <h2>Name: {r.name}</h2>
                    <p><b>tagline:</b> {r.tagline}</p>
                    <p><b>first brewed:</b> {r.first_brewed}</p>
                    <p><b>description:</b> {r.description}</p>
                    <p><b>abv:</b> {r.abv}</p>
                    <p><b>ibu:</b> {r.ibu}</p>
                    <p><b>target fg:</b> {r.target_fg}</p>
                    <p><b>target og:</b> {r.target_og}</p>
                    <p><b>ebc:</b> {r.ebc}</p>
                    <p><b>srm:</b> {r.srm}</p>
                    <p><b>ph:</b> {r.ph}</p>
                    <p><b>attenuation_level:</b> {r.attenuation_level}</p>
                    <p><b>brewers tips:</b> {r.brewers_tips}</p>
                    <p><b>contributed by:</b> {r.contributed_by}</p>
                    <p>
                        <b>volume:</b> {r.volume.value}{" "}{r.volume.unit}
                    </p>
                    <p>
                        <b>boil volume:</b> {r.boil_volume.value}{" "}
                        {r.boil_volume.unit}
                    </p>
                    <p><b>mash temp:</b></p>
                    <div className="fullRecipe__select">{r.method.mash_temp.map( el=>(<MashTemp el={el}/>))}</div>
                    <p><b>fermentation:</b> {r.method.fermentation.temp.value}{" "}{r.method.fermentation.temp.unit}</p>
                    <h2>Ingredients:</h2>
                    <p><b>malt:</b></p>
                    <div className="fullRecipe__select">{r.ingredients.malt.map(el=>(<Malt el={el}/>))}</div>
                    <p><b>hops:</b></p>
                    <div className="fullRecipe__select">{r.ingredients.hops.map(el=>(<Hops el={el}/>))}</div>
                    <p><b>yeast:</b> {r.ingredients.yeast}</p>
                    <p><b>food pairing:</b></p>
                    <div className="fullRecipe__select">{r.food_pairing.map(el=>(<FoodPairing el={el}/>))}</div>
                    <p><b>brewers tips:</b> {r.brewers_tips}</p>
                    <p><b>contributed by:</b> {r.contributed_by}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default FullRecipe;

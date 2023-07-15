import React from "react";
import { useRecip } from "../../zustand/storeRecip";

const FullRecipe = () => {
    const r = useRecip((state) => state.fullRecipe);
    return (
        <div>
            {r.id > 0 ? (
                <div>
                    <p>name: {r.name}</p>
                    <p>tagline: {r.tagline}</p>
                    <p>first_brewed: {r.first_brewed}</p>
                    <p>description: {r.description}</p>
                    <p>image_url: {r.image_url}</p>
                    <p>abv: {r.abv}</p>
                    <p>ibu: {r.ibu}</p>
                    <p>target_fg: {r.target_fg}</p>
                    <p>target_og: {r.target_og}</p>
                    <p>ebc: {r.ebc}</p>
                    <p>srm: {r.srm}</p>
                    <p>ph: {r.ph}</p>
                    <p>attenuation_level: {r.attenuation_level}</p>
                    <p>brewers_tips: {r.brewers_tips}</p>
                    <p>contributed_by: {r.contributed_by}</p>
                    <p>
                        volume: {r.volume.value} ' '{r.volume.unit}{" "}
                    </p>
                    <p>
                        boil_volume: {r.boil_volume.value}' '
                        {r.boil_volume.unit}
                    </p>
                    {r.method.mash_temp.map(el=>(<MashTemp/>))}
                    <p>fermentation: {r.method.fermentation.temp.value}''{r.method.fermentation.temp.unit}</p>
                    <p><b>ingredients:</b></p>
                    <p><b>malt:</b></p>
                    
                    <p></p>
                    <p></p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default FullRecipe;
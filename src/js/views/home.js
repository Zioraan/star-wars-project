import React, {useContext} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { SpeciesCard } from "../component/speciesCard";
import { useNavigate } from "react-router";

export const Home = () => {
	const {store} = useContext(Context);
    const navigate = useNavigate();
	

	return (
        <div>
            <div className="m-5">
                <h1>Characters</h1>
                <div className="scrollmenu d-flex">
                    <CharacterCard />
                </div>
            </div>
			<div className="m-5">
                <h1>Species</h1>
                <div className="scrollmenu d-flex">
                    <SpeciesCard />
                </div>
            </div>
			<div className="m-5">
                <h1>Planets</h1>
                <div className="scrollmenu d-flex">
                    <PlanetCard />
                </div>
            </div>
        </div>
    );
};

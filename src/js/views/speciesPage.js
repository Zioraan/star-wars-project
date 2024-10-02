import React, { useState, useEffect, useContext, } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SpeciesPage = () => {
	const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [species, setSpecies] = useState(null);
    
    useEffect(() => {
        const fetchSpecies = async () => {
            await actions.getSpeciesInfo(id);
            setSpecies(store.speciesInfo)
        };
        fetchSpecies();
    }, [])
    
    if (!species) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <h1>{species.name}</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <strong>Classification:</strong>
                            <p>{species.classification}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Average Height:</strong>
                            <p>{species.average_height}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Lifespan:</strong>
                            <p>{species.average_lifespan}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Skin Colors:</strong>
                            <p>{species.skin_colors}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Eye Colors:</strong>
                            <p>{species.eye_colors}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
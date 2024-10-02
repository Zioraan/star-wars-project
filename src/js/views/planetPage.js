import React, { useState, useEffect, useContext, } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetPage = () => {
	const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    
    useEffect(() => {
        const fetchPlanet = async () => {
            await actions.getPlanetInfo(id);
            setPlanet(store.planetInfo)
        };
        fetchPlanet();
    }, [])
    
    if (!planet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <h1>{planet.name}</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <strong>Diameter:</strong>
                            <p>{planet.diameter}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Gravity:</strong>
                            <p>{planet.gravity}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Population:</strong>
                            <p>{planet.population}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Terrain:</strong>
                            <p>{planet.terrain}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Climate:</strong>
                            <p>{planet.climate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
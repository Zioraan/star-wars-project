import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SpeciesCard = () => {
	const { store, actions } = useContext(Context);
    //const [characters, setCharacters] = useState([])
    //const [characterInfo, setCharacterInfo] = useState([])
    
    useEffect(() => {
        actions.getSpecies()
    }, [])

    const handleFavoriteClick = (character) => {
        actions.addFavorite('species', character.uid, character.name);
    }

	return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
            {store.species?.map((character, index) => (
                <div className="col-1 mx-2 border border-dark" style={{minWidth: "15rem", minHeight: "20rem"}}>
                <img className="border-bottom border-dark" src={`https://starwars-visualguide.com/assets/img/species/${character.uid}.jpg`} 
                />
                    <h4>{character.name}</h4>
                <div className="justify-content-between d-flex">
                    <Link 
                    to={`/species/` + character.uid}
                    className="mx-2">Learn More!</Link>
                    <button className="mx-2" onClick={(e) => handleFavoriteClick(character)}><i className="fa fa-heart text-danger" /></button>
                </div>
                </div>
            ))}
        </div>
    )};
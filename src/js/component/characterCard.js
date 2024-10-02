import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharacterCard = () => {
	const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPeople()
    }, [])
    
    const handleFavoriteClick = (character) => {
        actions.addFavorite('people', character.uid, character.name);
    }

	return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
            {store.characters?.map((character, index) => (
                <div className="col-1 mx-2 border border-dark" style={{minWidth: "15rem", minHeight: "20rem"}}>
                <img className="border-bottom border-dark" src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
                />
                    <h4>{character.name}</h4>
                <div className="justify-content-between d-flex">
                    <Link to={"/people/" + character.uid}
                    className="mx-2">Learn More!</Link>
                    <button className="mx-2" onClick={(e) => handleFavoriteClick(character)}><i className="fa fa-heart text-danger" /></button>
                </div>
                </div>
            ))}
        </div>
    )};
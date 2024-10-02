import React, { useState, useEffect, useContext, } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharacterPage = () => {
	const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    
    useEffect(() => {
        const fetchCharacter = async () => {
            await actions.getPersonInfo(id);
            setCharacter(store.characterInfo)
        };
        fetchCharacter();
    }, [])
    
    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <h1>{character.name}</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <strong>Birth Year:</strong>
                            <p>{character.birth_year}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Gender:</strong>
                            <p>{character.gender}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Height:</strong>
                            <p>{character.height}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Skin Color:</strong>
                            <p>{character.skin_color}</p>
                        </div>
                        <div className="col-md-4">
                            <strong>Eye Color:</strong>
                            <p>{character.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
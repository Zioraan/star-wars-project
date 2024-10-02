import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			
			<div className="ml-auto me-5">
				<div>	
					<button className="btn btn-primary dropdown-toggle" id="favoritesButton" data-bs-toggle="dropdown">
						Favorites
					</button>
					<ul className="ml-auto dropdown-menu nav-item mb-5" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((item, index) => 
						<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
							<Link to={item.url}>{item.name}</Link>
							<button className="btn btn-outline-danger btn-sm" onClick={(e) => actions.removeFavorite(item.name)}>
                                <i className="fa fa-trash"></i>
                            </button>
						</li>
						)}
					</ul>
				</div>
			</div>
			<Link to="/">
				<span className="navbar-brand me-5 h1">Home</span>
			</Link>
		</nav>
	);
};

import { useNavigate, Link } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			characterInfo: [],
			planets: [],
			planetInfo: [],
			species: [],
			speciesInfo: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				const store = getStore()
				const response = await fetch("https://www.swapi.tech/api/people")
				const data = await response.json()
				//const characterListInfo = []
				setStore({characters: data.results})
				//const characterList = store.characters
				//for(const character of characterList) {
					//const infoResponse = await fetch(character.url)
					//const infoData = await infoResponse.json()
					//characterListInfo.push(infoData.result)
					//console.log(infoData.result.properties.name)
				//};
				//setStore({characterInfo: characterListInfo})
			},
			getPlanets: async () => {
				const store = getStore()
				const response = await fetch("https://www.swapi.tech/api/planets")
				const data = await response.json()
				const planetListInfo = []
				setStore({planets: data.results})
				const planetList = store.planets
				for(const planet of planetList) {
					const infoResponse = await fetch(planet.url)
					const infoData = await infoResponse.json()
					//const infoDataFilter = infoData.result
					//const infoDataProperites = infoDataFilter.properties
					planetListInfo.push(infoData.result)
				};
				setStore({planetInfo: planetListInfo})
			},
			getSpecies: async () => {
				const store = getStore()
				const response = await fetch("https://www.swapi.tech/api/species")
				const data = await response.json()
				const speciesListInfo = []
				setStore({species: data.results})
				const speciesList = store.species
				for(const species of speciesList) {
					const infoResponse = await fetch(species.url)
					const infoData = await infoResponse.json()
					//const infoDataFilter = infoData.result
					//const infoDataProperites = infoDataFilter.properties
					speciesListInfo.push(infoData.result)
				};
				setStore({speciesInfo: speciesListInfo})			
			},
			getPersonInfo: async (id) => {
				const store = getStore();
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				let data = await response.json();
				setStore({characterInfo: data.result.properties})
			},
			getSpeciesInfo: async (id) => {
				const store = getStore();
				const response = await fetch(`https://www.swapi.tech/api/species/${id}`);
				let data = await response.json();
				setStore({speciesInfo: data.result.properties})
			},
			getPlanetInfo: async (id) => {
				const store = getStore();
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
				let data = await response.json();
				setStore({planetInfo: data.result.properties})
			},
			addFavorite: (type, id, name) => {
				const store = getStore();
				const url = `/${type}/${id}`;
				if (!store.favorites.find(favorite => favorite.name === name)) {
					const newFavorites = [...store.favorites, {type, id, name, url}];
					setStore({favorites: newFavorites});
				}
			},
			removeFavorite: (name) => {
                const store = getStore();
                const newFavorites = store.favorites.filter(fav => fav.name !== name);
                setStore({ favorites: newFavorites });
            }
		}
	}
};


export default getState;

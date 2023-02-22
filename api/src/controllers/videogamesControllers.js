const axios = require("axios");
const e = require("express");
const { Videogame } = require("../db");


// Clean array
const cleanArray = (arr) =>
    arr.map(e => {
        return {
            id: e.id,
            name: e.name,
            description: e.description_raw,
            released: e.released,
            rating: e.rating,
            genres: e.genres.map((e) => e.name),
            platforms: e.platforms.map(element => element.platform.name).join(", "), 
            image: e.background_image,
            createInDB: false,

        }
    })

//---------------------------------Traer todos los videojuegos-----------------------------------------------
const getAllVideogames = async () => {
    const databaseVideogames = await Videogame.findAll()
    const apiVideogamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=3487ada969f248bdb1d933a22978e705&page_size=100`));
    const result = apiVideogamesRaw.data.results
    const apiVideogames = cleanArray(result)
    return [...databaseVideogames, ...apiVideogames]
}

//--------------------------------Traer videojuego por nombre--------------------------------------------------
const getVideogameByName = async (name) => {
    const databaseVideogames = await Videogame.findAll({where: { name: name }})
    const apiVideogamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=3487ada969f248bdb1d933a22978e705`));
    const result = apiVideogamesRaw.data.results
    const apiVideogames = cleanArray(result)
    const filteredApi = apiVideogames.filter((videogame) => videogame.name === name);
    return [...filteredApi, databaseVideogames]
}

//----------------------------------Traer videojuego por ID---------------------------------------------------
const getVideogameById = async(id, source) => {
    const videogame = source === "api"
    ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=3487ada969f248bdb1d933a22978e705`)).data
    : await Videogame.findByPk(id)

    return videogame
}

//-----------------------------------Crear videojuego---------------------------------------------------------
const createVideogame = async(
    name,
    description,
    released,
    rating,
    genres,
    platforms,
    image,
    ) => {
        return await Videogame.create({
            name,
            description,
            released,
            rating,
            genres,
            platforms,
            image, 
        })
    };

module.exports = { createVideogame, getVideogameById, getAllVideogames, getVideogameByName };
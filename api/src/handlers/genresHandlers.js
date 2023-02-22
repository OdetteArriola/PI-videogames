const { default: axios } = require("axios");
const { getGenres } = require("../controllers/genresControllers");
const { Genress } = require("../db");


const getGenresHandler = async (req, res) => {
    try {
        const response = await getGenres()
        res.status(200).json(response);
    } catch {
        res.status(400).json({error: error}) 
    }
}

module.exports = {getGenresHandler};
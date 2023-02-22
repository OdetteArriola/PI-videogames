const { Router } = require("express");
const { getGenresHandler } = require("../handlers/genresHandlers");

const genresRouter = Router();

//RUTA PARA MOSTRAR LOS GÉNEROS

genresRouter.get("/", getGenresHandler);


module.exports = genresRouter
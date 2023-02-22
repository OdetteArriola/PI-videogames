const { Router } = require("express");
const {getVideogamesHandler,getVideogameHandler,createVideogameHandler} = require("../handlers/videogamesHandlers");

const videogamesRouter = Router();

//RUTA PARA MOSTRAR TODOS LOS VIDEOJUEGOS
videogamesRouter.get("/", getVideogamesHandler); 

//RUTA PARA TRAER VIDEOJUEGOS POR ID
videogamesRouter.get("/:id", getVideogameHandler);

//RUTA PARA CREAR VIDEOJUEGO
videogamesRouter.post("/", createVideogameHandler);


module.exports = videogamesRouter
const {createVideogame, getVideogameById, getVideogameByName, getAllVideogames } = require ("../controllers/videogamesControllers");


//TRAER TODOS LOS VIDEOGAMES
const getVideogamesHandler = async (req, res) => {
    const {name} = req.query;
    try{
        const response = name ? await getVideogameByName(name) : await getAllVideogames()
        res.status(200).send(response);
    } catch {
        res.status(400).json({error: error.message}); 
    }
}

//TRAER DETAIL POR ID
const getVideogameHandler = async (req, res) => {
    const { id } = req.params
    const source = isNaN(id) ? "bdd" : "api"
    
    try {
        const response = await getVideogameById(id, source)
        res.status(200).send(response)   
    } catch (error) {
        res.status(400).json({error: error.message})    
    }
}

//CREAR VIDEOGAME
const createVideogameHandler = async (req, res) => {
    const { name, description, released, rating, genres, platforms, image } = req.body
    try {
        const newVideogame = await createVideogame(
            name,
            description,
            released,
            rating,
            genres,
            platforms,
            image,
        )
        res.status(201).json("The new videogame has been created")

    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


module.exports = {
    getVideogameHandler,
    getVideogamesHandler,
    createVideogameHandler
}


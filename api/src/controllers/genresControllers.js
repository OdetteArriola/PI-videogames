const axios = require("axios");
const { Genress } = require("../db");


const getGenres = async () => {
      
    const genres = []
    const allGenres = await axios.get(`https://api.rawg.io/api/genres?key=3487ada969f248bdb1d933a22978e705`)
        .then(response => response.data)
        allGenres.results.forEach(e => {
            genres.push({
                name: e.name,
            })
        })
        genres.forEach(e => {
            Genress.findOrCreate({
                where: {name: e.name}
            })
        })

        return genres;


    // const allGenresRaw = await axios.get(`https://api.rawg.io/api/genres?key=3487ada969f248bdb1d933a22978e705`)
  
    // const allGenres = allGenresRaw.data.results.map((genre) => genre.name)

    // allGenres.map(async (element) => {
    //     await Genress.findOrCreate({
    //         where: { name: element }
    //     }) 
    // })

    // const allGenresFinal = await Genress.findAll()
    // return allGenresFinal
     
    }
       
    
    
   

module.exports = { getGenres };
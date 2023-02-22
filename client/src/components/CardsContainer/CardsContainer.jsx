import React from "react"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card"
import styles from "./CardsContainer.module.css";
import { getVideogames, createVideogame, getVideogamesByName, getDetail, getGenres, filterCreated, filterGenres, orderByAlphabet, orderByRating } from "../../redux/actions";

const CardsContainer = () => {
//     const videogames = [
//         {
//             "id": 3498,
//             "name": "Grand Theft Auto V",
//             "released": "2013-09-17",
//             "rating": 4.47,
//             "genres": [
//                 "Action",
//                 "Adventure"
//             ],
//             "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, PlayStation 3, Xbox 360, Xbox One",
//             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 3328,
//             "name": "The Witcher 3: Wild Hunt",
//             "released": "2015-05-18",
//             "rating": 4.66,
//             "genres": [
//                 "Action",
//                 "Adventure",
//                 "RPG"
//             ],
//             "platforms": "Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One, PlayStation 5",
//             "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 4200,
//             "name": "Portal 2",
//             "released": "2011-04-18",
//             "rating": 4.62,
//             "genres": [
//                 "Shooter",
//                 "Puzzle"
//             ],
//             "platforms": "Xbox 360, Linux, macOS, PlayStation 3, PC, Xbox One",
//             "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 5286,
//             "name": "Tomb Raider (2013)",
//             "released": "2013-03-05",
//             "rating": 4.05,
//             "genres": [
//                 "Action",
//                 "Adventure"
//             ],
//             "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox 360, PlayStation 3",
//             "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 4291,
//             "name": "Counter-Strike: Global Offensive",
//             "released": "2012-08-21",
//             "rating": 3.56,
//             "genres": [
//                 "Action",
//                 "Shooter"
//             ],
//             "platforms": "PC, Xbox 360, PlayStation 3",
//             "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 3498,
//             "name": "Grand Theft Auto V",
//             "released": "2013-09-17",
//             "rating": 4.47,
//             "genres": [
//                 "Action",
//                 "Adventure"
//             ],
//             "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, PlayStation 3, Xbox 360, Xbox One",
//             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 3328,
//             "name": "The Witcher 3: Wild Hunt",
//             "released": "2015-05-18",
//             "rating": 4.66,
//             "genres": [
//                 "Action",
//                 "Adventure",
//                 "RPG"
//             ],
//             "platforms": "Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One, PlayStation 5",
//             "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 4200,
//             "name": "Portal 2",
//             "released": "2011-04-18",
//             "rating": 4.62,
//             "genres": [
//                 "Shooter",
//                 "Puzzle"
//             ],
//             "platforms": "Xbox 360, Linux, macOS, PlayStation 3, PC, Xbox One",
//             "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 5286,
//             "name": "Tomb Raider (2013)",
//             "released": "2013-03-05",
//             "rating": 4.05,
//             "genres": [
//                 "Action",
//                 "Adventure"
//             ],
//             "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox 360, PlayStation 3",
//             "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 4291,
//             "name": "Counter-Strike: Global Offensive",
//             "released": "2012-08-21",
//             "rating": 3.56,
//             "genres": [
//                 "Action",
//                 "Shooter"
//             ],
//             "platforms": "PC, Xbox 360, PlayStation 3",
//             "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 3498,
//             "name": "Grand Theft Auto V",
//             "released": "2013-09-17",
//             "rating": 4.47,
//             "genres": [
//                 "Action",
//                 "Adventure"
//             ],
//             "platforms": "PlayStation 5, Xbox Series S/X, PlayStation 4, PC, PlayStation 3, Xbox 360, Xbox One",
//             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 3328,
//             "name": "The Witcher 3: Wild Hunt",
//             "released": "2015-05-18",
//             "rating": 4.66,
//             "genres": [
//                 "Action",
//                 "Adventure",
//                 "RPG"
//             ],
//             "platforms": "Xbox Series S/X, PlayStation 4, Nintendo Switch, PC, Xbox One, PlayStation 5",
//             "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 4200,
//             "name": "Portal 2",
//             "released": "2011-04-18",
//             "rating": 4.62,
//             "genres": [
//                 "Shooter",
//                 "Puzzle"
//             ],
//             "platforms": "Xbox 360, Linux, macOS, PlayStation 3, PC, Xbox One",
//             "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 5286,
//             "name": "Tomb Raider (2013)",
//             "released": "2013-03-05",
//             "rating": 4.05,
//             "genres": [
//                 "Action",
//                 "Adventure"
//             ],
//             "platforms": "PlayStation 4, macOS, PC, Xbox One, Xbox 360, PlayStation 3",
//             "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
//             "createInDB": false
//         },
//         {
//             "id": 4291,
//             "name": "Counter-Strike: Global Offensive",
//             "released": "2012-08-21",
//             "rating": 3.56,
//             "genres": [
//                 "Action",
//                 "Shooter"
//             ],
//             "platforms": "PC, Xbox 360, PlayStation 3",
//             "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
//             "createInDB": false
//         }
//     ]
// const dispatch = useDispatch()
// const videogames = useSelector((state) => state.videogames);
// const genres = useSelector((state) => state.genres);


 ///Me trae del estado la información cuando el componente se monta
//  useEffect(() => {
//     dispatch(getVideogames());
// }, []);

 //Variables para ordenamiento
//  const [orden, setOrden] = useState("");
    

    return (
        // <div className={styles.CardsContainer}> {
        //     videogames.map(videogame => {
        //         return (
        //             <Card
        //             name={videogame.name} 
        //             image={videogame.image} 
        //             genres={videogame.genres}
        //             />
        //         )
        //     })
        //     }</div>
    )
}



export default CardsContainer
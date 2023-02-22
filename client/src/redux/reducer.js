import {
    GET_VIDEOGAMES,
    CREATE_VIDEOGAME,
    GET_VIDEOGAME_BY_NAME,
    GET_DETAIL,
    GET_GENRES,
    FILTER_CREATED,
    FILTER_GENRES,
    ORDER_BY_RATING,
    ORDER_BY_ALPHABET,
} from "./actions";

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    detail: [],
    error: [],
 };
 
 const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                allVideogames:action.payload,
            };
        // case GET_VIDEOGAME_BY_NAME:
        //     return {
        //         ...state,
        //         videogames: action.payload,
        //     };

        // case CREATE_VIDEOGAME:
        //     return {
        //         ...state
        //     }
         
        //  case GET_DETAIL:
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         detail: action.payload,
        // }

        // case GET_GENRES:
        //     return {
        //         ...state,
        //         genres: action.payload,
        //         error: ""
        //     }
        
/////FILTROS

        // case FILTER_CREATED:
        //     const videogames = state.allVideogames;
        //     let apiDbFiltered = [];
        //     if (action.payload === "all") {
        //         apiDbFiltered = videogames;
        //     } else if (action.payload === "database") {
        //         apiDbFiltered = videogames.filter((el) => el.createInDB);
        //     } else {
        //         apiDbFiltered = videogames.filter((el) => !el.createInDB);
        //     }
        //     return {
        //         ...state,
        //         videogames: apiDbFiltered,
        //     };
        
        // case FILTER_GENRES:
        //         return {
        //             ...state,
        //             allVideogames: action.payload
        //         }
        // case ORDER_BY_ALPHABET:
        //     const allVideogamesFilterAlphabet = state.allVideogames;
        //     let sortedArr;
        //      if (action.payload === "Nombre") {
        //           sortedArr = allVideogamesFilterAlphabet;
        //     } else {
        //           sortedArr =
        //             action.payload === "A-Z"
        //               ? state.dogs.sort(function (a, b) {
        //                   if (a.name > b.name) {
        //                     return 1;
        //                   }
        //                   if (b.name > a.name) {
        //                     return -1;
        //                   }
        //                   return 0;
        //                 })
        //               : state.videogames.sort(function (a, b) {
        //                     if (a.name > b.name) {
        //                         return -1;
        //                     }
        //                     if (b.name > a.name) {
        //                         return 1;
        //                     }
        //                         return 0;
        //                     });
        //             }
        //             return {
        //                 ...state,
        //                 dogs: sortedArr,
        //             };  
        
        // case ORDER_BY_RATING:
        //     let weight = [];
        //     if(action.payload === "min"){
        //         weight = state.videogames.sort((a, b) => {
        //             if(a.weight_min < b.weight_min) return -1; // si el peso de a es menor que el de b, a va antes que b
        //             if(a.weight_min > b.weight_min) return 1; // si el peso de a es mayor que el de b, a va despues que b
        //                 return 0;
        //         })
        //         } else {
        //             weight = state.dogs.sort((a, b) => {
        //                 if(a.weight_max > b.weight_min) return -1; // si el peso de a es mayor que el de b, a va antes que b
        //                 if(a.weight_max < b.weight_min) return 1; // si el peso de a es menor que el de b, a va despues que b
        //                 return 0;
        //             })
        //         }
        
        //         return{
        //             ...state,
        //             dogs: weight
        //         }
        
        default:
        return state
 }
 }
 export default rootReducer;
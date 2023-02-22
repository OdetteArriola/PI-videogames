import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES"; 
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME"
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAMES_BY_NAME"; 
export const GET_DETAIL = "GET_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_GENRES = "FILTER_GENRES"
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";


export const getVideogames = () => {
    return async (dispatch) => {
        const apiData = await axios.get("http://localhost:3001/videogames")
        dispatch({type: GET_VIDEOGAMES, payload: apiData.data})
    }
};

export const createVideogame = (payload) => {
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3001/videogames", payload)
        return response
    }
};

export const getVideogamesByName = (name) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({
            type: "GET_VIDEOGAMES_BY_NAME",
            payload: data
        });
    };
};

export const getDetail = (id) => {
    console.log(id)
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/videogames/${id}`)  
        console.log(apiData.data[0])
        return dispatch({
            type: GET_DETAIL, payload: apiData.data[0] 
        })
    }
};

export const getGenres = () => {
    return async (dispatch) => {
        const apiData = await axios.get("http://localhost:3001/genres")
        return dispatch({
            type: GET_GENRES, payload: apiData.data
        })
    }
};

/////FILTROS////

export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function filterGenres (payload)  {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`http://localhost:3001/genres=${payload}`);
            return dispatch({
                type: FILTER_GENRES,
                payload: apiData.data
            })
        } catch (error) {
            console.log(error, "Error on the filters in actions file")
        }
    }
};

///ORDENAMIENTOS

export const orderByRating = (payload) => {
    return {
      type: ORDER_BY_RATING,
      payload,
    };
};

export const orderByAlphabet = (payload) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload: payload
    }
}


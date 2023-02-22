import React from "react";
import styles from "./Card.module.css"


const Card = (props) => {
    return (
        <div className={styles.Card}>
            <h4>Name: {props.name}</h4>
            <div>  
                <img 
                    src={props.image} 
                    height="140px"
                /> 
            </div>
            <h4>Genres: {props.genres}</h4>
        </div>
    )
}

export default Card
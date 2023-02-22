import { useState } from "react";

const Form = () => {

    const [form, setForm ] = useState(0)

    // const changeHandler = () => {

    // }


    return(
        <h1></h1>

            /* <div >
                <label>Name: </label>
                <input type="text" value={form.name} name="name" placeholder="Name" />
            </div>

            <div >
                <label>Description: </label>
                <input type="text" value={form.description}  name="description" placeholder="Description"/>
            </div>

            <div >
                <label>Released: </label>
                <input type="text" value={form.released}  name="released" placeholder="Released"/>
            </div>

            <div >
                <label>Rating: </label>
                <input type="text" value={form.rating} name="rating" placeholder="Rating" />
            </div>

            <div >
                <label>Platforms: </label>
                <input type="text" value={form.platforms}  name="platforms" placeholder="Platforms" />
            </div>

            <div >
                <label>Genres: </label>
                <input type="text" value={form.genres} />
            </div>

            
            <div >
                <label>Image: </label>
                <input type="text" value={form.image}  />
            </div>             */
    
    )
}








// import React from "react"
// import React, { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"

// const Form = () => {

//     const [form, setForm] = useState ({
//         name:"",
//         description:"",
//         released:"",
//         rating:"",
//         platforms:[],
//         genres:[],
//         image:"",
//     })

//     const changeHandler = (e) => {
//         setForm({
//             ...form,
//             [e.target.name] : e.target.value
//         })
//         console.log(form)
//     }

//     return (
//         <form>
            // <div >
            //     <label>Name: </label>
            //     <input type="text" value={form.name} onChange={changeHandler} name="name" placeholder="Name" />
            // </div>

            // <div >
            //     <label>Description: </label>
            //     <input type="text" value={form.description} onChange={changeHandler} name="description" placeholder="Description"/>
            // </div>

            // <div >
            //     <label>Released: </label>
            //     <input type="text" value={form.released} onChange={changeHandler} name="released" placeholder="Released"/>
            // </div>

            // <div >
            //     <label>Rating: </label>
            //     <input type="text" value={form.rating} onChange={changeHandler} name="rating" placeholder="Rating" />
            // </div>

            // <div >
            //     <label>Platforms: </label>
            //     <input type="text" value={form.platforms} onChange={changeHandler} name="platforms" placeholder="Platforms" />
            // </div>

            // <div >
            //     <label>Genres: </label>
            //     <input type="text" value={form.genres} onChange={changeHandler} />
            // </div>

            
            // <div >
            //     <label>Image: </label>
            //     <input type="text" value={form.image} onChange={changeHandler} />
            // </div>
//         </form>
//     )
// }


export default Form;
import React, { Fragment, useState } from "react";
import { CardFilms } from "../Component/CardFilms/CardFilms";
import { getMovies } from "../service/movieService";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/listeFilm.css'


export const ListeFilm = (props) => {
    const [movies, setMovies] = useState([])
    if(movies.length === 0){
        getMovies().then(res => {
                setMovies(res);
        })
    }
    return ( 
        <Fragment>
            <div className="d-flex flex-row justify-content-start w-75 text-center m-4">
                <div className="row">
                        {movies.map((item,index)=>{
                            return (<CardFilms key={index} id={item.id} titre={item.title} image={item.image}></CardFilms>)
                        })}
                </div>
            </div>
        </Fragment>
    )
};

export default ListeFilm;
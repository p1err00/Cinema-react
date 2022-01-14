import React, { Fragment, useState } from "react";
import { CardFilms } from "../Component/CardFilms/CardFilms";
import { getMovies } from "../service/movieService";
import '../assets/css/accueil.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Accueil = (props) => {
    const [movies, setMovies] = useState([])
    if(movies.length === 0){
        getMovies().then(res => {
                setMovies(res);
        })
    }

    return ( 
        <Fragment>
            <div className="card m-4">

                <div className="infoCinema">

                    <div className="card-header">
                        <h1 className="text-dark">
                            Mon Super Cinéma
                        </h1>
                    </div>
                    <div className="card-body">

                    <h3 className="text-warning border-bottom p-4">
                        Film en salle :
                    </h3>
                    </div>
                    <div className="row">
                        {movies.slice(0,3).map((item,index)=>{
                            return (
                            <CardFilms 
                            key={index}
                            id={item.id}
                            titre={item.title}
                            image={item.image}>
                                
                            </CardFilms>)
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Accueil;
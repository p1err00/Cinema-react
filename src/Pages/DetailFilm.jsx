import React, { Fragment, useState } from "react";
import { useParams } from 'react-router-dom'
import { getMovieById } from "../service/movieService";
import '../assets/css/detailFilm.css';


export const DetailFilm = (props) => {

    const [movie, setMovie] = useState()
    let params = useParams();
    
    // Récupère le film sélectionné par rapport à l'id passé en paramètre
    if(!movie){
        getMovieById(params).then(res => {
            setMovie(res);
        });        
    }

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <div className="card text-center w-50 mt-4 border-3">
                    {movie && (
                        <>

                            <div className="card-header">
                                <h3>{movie.fullTitle}</h3>
                            </div>

                            <div className="card-body d-flex">
                                <div className="w-25">
                                    <img src={movie.image} alt="" className="w-25 image" />
                                </div>

                                <h5>{movie.crew}</h5>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </Fragment>
    )
};

export default DetailFilm;
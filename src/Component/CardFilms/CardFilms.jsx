import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { deleteMovieById } from '../../service/movieService';


import "./cardFilm.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export function CardFilms(props) {

    const handleDelete = (e) => {
        e.stopPropagation();
        deleteMovieById(props.id)
        .then(res=>{
            console.log(res);
            window.location.reload();
        })
        .catch(e=>{
            console.error(e)
        })
    }

        return (
              <Fragment>
                  <div className="d-flex flex-column justify-content-center w-25 card m-2 p-2">
      
                              {
                              /* 
                                  Affichage des infos du film
                               */}
      
                               <div className="card-header">
                               <h3 className='text-center text-success border-bottom border-5 border-success'>
                                      {props.titre}
                                  </h3>
                               </div>
                              <img className='image' src={props.image} alt="" />
                              <div className="d-flex flex-row justify-content-around">
      
                                  
                                  
                                  <Link className='link' key={props.id} to={'/DetailFilm/' + props.id}>
                                      <button className='btn btn-primary mt-3'>En savoir +</button>
                                  </Link>
                                  <button className="btn btn-danger mt-3" onClick={handleDelete}>Supprimer</button>
                              </div>
                      
                  </div>
              </Fragment>
        )
    }

export default CardFilms;
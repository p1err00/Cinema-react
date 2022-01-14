import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import { postMovie } from "../service/movieService";


import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/formulaire.css';

export const FormulaireAjoutFilm = (props) => {
    const history= useNavigate();

    const handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const movie={
            title:e.target.titre.value,
            image:e.target.image.value
        }
        postMovie(movie)
        .then((res) =>{
            history("/ListeFilm");
            console.log(res);
        })
        .catch((e)=>{
            console.error(e);
        });
    }
    return ( 
        <Fragment>
            <div className="container formulaire">
                <div className="row">
                <h2 className="text-center"> Formulaire d'ajout de film </h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="col-12 text-center mt-2 mb-2">
                            <label>Titre </label>
                            <input type="text"  name="titre" ref={props.titre} />
                        </div>
                        <div className="col-12 text-center">
                            <label>Image </label>
                            <input type="text"  name="image" ref={props.image}/>
                        </div>
                        <div className="col-12 btnEnregistrer">
                            <input type="submit" value="Enregistrer" />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default FormulaireAjoutFilm;
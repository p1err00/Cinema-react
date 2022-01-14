// Import des outils de routing
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import React, { Fragment } from "react";
import Accueil from "../../Pages/Accueil";
import ListeFilm from "../../Pages/ListeFilm";
import Formulaire from "../../Pages/Formulaire";
import Error404 from "../../Pages/Error404";
import DetailFilm from "../../Pages/DetailFilm";
import NavBar from "./Navbar";

let pages = [
    {
        to: "/Accueil",
        nom :"Accueil"
    },
    {
        to: "/ListeFilm",
        nom :"Liste des films"
    },
    {
        to: "/Formulaire",
        nom :"Formulaire"
    },

]

export const Routing = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <NavBar pages={pages} />
                <Routes>
                    <Route path="/" element={<Navigate to="/Accueil" />} />
                    <Route path="/Accueil" element={<Accueil/>} />
                    <Route path="/ListeFilm" element={<ListeFilm/>} />
                    <Route path="/Formulaire" element={<Formulaire/>} />
                    <Route path="/DetailFilm/:id" element={<DetailFilm/>}>
                        {/* <Route path="/:id" element={<DetailFilm/>}/> */}
                    </Route>
                    <Route path="*" element={<Error404/>} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}
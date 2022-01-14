import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./app.css";

export const NavBar = (props) => {
  return (
    <Fragment>
      <nav>
        {props.pages &&
          props.pages.map((pages, index) => {
            return (
              <Link key={index} to={pages.to}>
                {" "}
                {pages.nom}{" "}
              </Link>
            );
          })}
      </nav>
    </Fragment>
  );
};

export default NavBar;
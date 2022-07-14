import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import logo from "../../images/logoPokemon.png";


function Landing (){
    return(
        <div className="containerLanding">
            <div className="titulo">
                <Link to="/home">
                <img src={logo} alt="logo" className="logoLanding" />
                </Link>
            </div>
        </div>
    )
}


export default Landing 
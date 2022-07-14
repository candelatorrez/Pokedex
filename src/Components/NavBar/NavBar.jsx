import "./NavBar.css";

import pokeball1 from "../../images/pokeball.png";
import pokeball2 from "../../images/pokeballblack.png";
import {Link} from "react-router-dom"
import logo from "../../images/logoPokemon.png";

import React from "react";

function NavBar () {
    return (
        <div className="container">
            <div className="titleLeft">
                <Link to="/">
                <img  className="logo" src={logo} alt="logo" />
                </Link>
                <div className="caught_seen">
                    <div className="caught"> Captured: 320 
                     <img src={pokeball1} className="poke1" alt="pokeball" style={{width: "30px", marginRight: "10px"}} />   
                    </div>
                    <div className="seen"> To capture: 834 
                        <img src={pokeball2} className="poke2" alt="pokeball" style={{width: "30px", marginRight: "10px" }} />
                    </div>
                </div>
            </div>
            <p>A-Z</p>
        </div>
    )
}

export default NavBar;
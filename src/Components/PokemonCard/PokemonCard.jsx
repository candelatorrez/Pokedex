import React, { useState } from "react";
import "./PokemonCard.css";
import pokeball from "../../images/pokebola.png";
import Modal from "../Modal/Modal.jsx"

function PokemonCard({id, name, image, type, weight, height, stats, statsName}){
    const [isShown, setIsShown] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function modalHandler(){
        setModalIsOpen(true)
    }
    function closeModalHandler() {
        setModalIsOpen(false)
    }
    
    return(
     <div className="containerCard">
        {isShown && (
        <div className="show">
            <div className="stat-container-title">
                <img src={image} alt={name} className="image-title" />
                <p style={{width: "180px", color:"black"}}>Nro. {id}</p>
                <p>{name}</p>
                <img src={pokeball} alt="pokeball" className="pokeball-title" />
            </div>
            <img src={image} alt={name} />
            <div style={{display:"flex", width:"100%"}}>
                <div style={{background: "#dbdbd9", textAlign:"center"}} className="stats-left">
                    <p>Type</p>
                    <p>Height</p>
                    <p>Weight</p>
                </div>
                <div style={{background:"#ffffff"}} className="stats-right">
                    <p>{type}</p>
                    <p>{height} cm</p>
                    <p>{weight} lbs</p>
                </div>
            </div>
            <div className="base-stats">
                <div>
                    {statsName.map((stats, index) => (
                        <p key={index} className="stats">{stats}</p>
                    ))}
                </div>
                <div>
                    {stats.map((stats, index) => (
                        <p key={index} className="stats">{stats}</p>
                    ))}
                </div>
            </div>
        </div>
        )}
        <div className="right" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={modalHandler}>
            <img src={image} alt={name} style={{maxHeight:"50px", marginRight:"10px", width:"50px"}} />
            <p style={{width:"270px"}}>Number {id}</p>
            <p>{name}</p>
            <img src={pokeball} alt="pokeball" style={{marginLeft:"auto", width:"40px"}} />
        </div>
        {modalIsOpen && (
            <Modal 
                id={id}
                name={name}
                image={image}
                height={height}
                weight={weight}
                stats={stats}
                statsName={statsName}
                type={type}
                onClick={closeModalHandler}
                />
        )}
     </div>    
    )

}

export default PokemonCard
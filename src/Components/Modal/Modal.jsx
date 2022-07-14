import React from "react";
import "./Modal.css";
import fondo from "../../images/background.jpg";
import pokeball from "../../images/pokebola.png";

function Modal({onClick, id, name, image, type, height, weight, stats, statsName}){
    return (
        <div style={{
            display: "flex",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "10",
            width:"100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div
                onClick={onClick}
                style={{
                    position: "absolute",
                    top: "5opx",
                    right:"50px",
                    borderRadius: "50%",
                    padding: "5px 10px",
                    background: "black",
                    color: "white",
                    fontWeight: "900",
                    cursor: "pointer"
                }}
            >X</div>
            <div>
                <img src={image} alt={name} style={{filter: "drop-shadow(2px 4px 12px black)"}} />
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
                width: "450px",
                height: "500px"
            }}
            >
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
        </div>
    )
}



export default Modal
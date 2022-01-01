import "./FolioFeatures.css"
import React from 'react'


function LogosGrid() {

    const logos = [
        { className: 'Blue', link: <img id ="folio" src=".\Logos\folio.jpg" alt="Folio"/> },
        { className: 'Blue', link: <img id ="kware" src=".\Logos\kware.png" alt="kware"/> },
        { className: 'Blue', link: <img id ="kintegration" src=".\Logos\kintegration.jpg" alt="kintegration"/> },
        { className: 'Blue', link: <img id ="ebsco" src=".\Logos\ebsco.jpg" alt="ebsco"/> },
        { className: 'Blue', link: <img id ="opensource" src=".\Logos\opensource.jpg" alt="opensource"/> },
    ];

    return (
        <div>
        <div classname="LogosGrid">
        {logos.map(props => (
          <div className={props.className}>{props.link}</div>
        ))}
        </div>
        </div>
        
    )
}

export default LogosGrid

import React from "react";
import '../Stylesheets/Header.css';

export default function Card(props) {
    return(
        <div className="main_compo">
            <section className="sub-compo-1">
                <img src={props.imageUrl} className="pic" alt="Destination"/>
            </section>
            <section className="sub-compo-2">
                <div className="sec-1">
                    <img src="./image/location-pin.png" alt="location pin" width="19px" height="17px" />
                    <p className="country-name">{props.location}</p> 
                    <a href={props.googleMapUrl} className="map"><u>View on Google Maps</u></a>           
                </div>
                <div>
                    <p className="location">{props.title}</p>
                </div>
                <div>
                    <p className="date"><span>{props.startDate}</span> - <sapn>{props.endDate}</sapn></p>
                    <p className="description">{props.description}</p>
                </div>
            </section>
        </div>
    )
}
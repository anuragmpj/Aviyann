import React from "react";

const PricingCard = ({name, price, duration, description, image}) =>{
    return(
        <div className="pricing-card">
            <img src={image} alt={name}/>
            <h3> {name}</h3>
            <div className="price">{price}</div>
            <div className="duration">{duration}</div>
            <p>{description}</p>
            <button> Book Now</button>
            </div>
    );
};
export default PricingCard;
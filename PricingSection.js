import React from "react";
import PricingCard from "./PricingCard"
import "./PricingSection.css"

const pricingData =[
    {
       name: "Basic Plan",
       price: "$99",
       duration: "3 days",
       description: "abchdjekekedjdkwwj",
       image: 'imbjujj',

    },
    {
        name: "Basic Plan",
        price: "$99",
        duration: "3 days",
        description: "abchdjekekedjdkwwj",
        image: 'imbjujj',
 
     },
     {
        name: "Basic Plan",
        price: "$99",
        duration: "3 days",
        description: "abchdjekekedjdkwwj",
        image: 'imbjujj',
 
     }
];

const PricingSection = ()=>{
    return(
        <section className="pricing-section">
            <div className="container"> 
            <h2>Pricing</h2>
            <div className="pricing-cards">
                {pricingData.map(plan => (
                    <PricingCard 
                    key={plan.name}
                    name={plan.name}
                    price={plan.price}
                    duration={plan.duration}
                    description={plan.description}
                    image={plan.image}
                    />
                ))}
            </div>
            </div>
              

                 
        </section>
    );
};
export default PricingSection;
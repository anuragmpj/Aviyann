import DestImg1 from "../assets/5.jpeg"
import DestImg2 from "../assets/6.jpg"
import "./Destinationstyle.css";
import Destinationdata from "./Destinationdata"
 const Destination = () =>{
    return(
        <div className="destination">
            <h1> Popular Destination  </h1>
            <p> Tours give you the opportunity to see a lot, within a time frame.</p>
           <Destinationdata 
            heading= " Shri Jagannath Puri"
            text = " Puri Is famaous for the world famaous Shri Jagannath Temple & Longest Golden Beach. It is one of the Dhamas (HOliest of the holy place) out of four Dhamas i.e. Puri, Dwarika, Badrinath & Rameswar, in India. Mahaprabhu Shri Jagannath also with sister Devi Subhadra and elder brother Mahaprabhu Shri Balabhadra are being worshipped in Puri(The Purusottama Kshetra). The deities are seated on the Bejeweled Pedestal (Ratna Sihassana). Shri Jagannath Puri Temple is one of the most impressing monuments of the Indian State Odisha, was constructed by a famous king bof Ganga Dynasty Ananta Varman Chodagnga Deva dating back to 12th cenetury at the seashore Puri. The main Temple of Shri Jagannath is an impressing and amazing structure constructed in Kalinga architecture, with a height of 65 meters placed on an elevated platform. There are so many festivals of Shri Jagannath during the year observed in Puri. which are Snana Yatra, Netrotsava, Ratha Yatra(car festival), Sayan Ekadasi, Chitalagi Amabasya, Srikrushna Janma, Dussehra etc. The most important festival is the world famous Ratha Yatra(car festival) & Bahuda Yatra. A large crowd is gathered to witness Mahaprabhu Shri Jagannath during this festival "
            img1={DestImg1}
            img2={DestImg2}

           />
           
           
           

        </div>
       
    )
 }

 export default Destination;
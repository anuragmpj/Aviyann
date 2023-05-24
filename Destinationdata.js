import { Component } from "react";
import "./Destinationstyle.css";

import DestImg3 from "../assets/7.jpg"
import DestImg4 from "../assets/13.jpeg"
import DestImg5 from "../assets/9.jpeg"
import DestImg6 from "../assets/12.avif"


class Destinationdata extends Component{
    render(){
        return(   <> 
            <div className="first-des">
            <div className="des-text">
                <h2> {this.props.heading}</h2>
                <p> {this.props.text}  </p>
                </div>    
                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    <img alt="img" src={this.props.img2} />
                </div>
              </div>
              <div className="second-des">
             <div className="des2-text">
                <h2> Dwarika</h2>
                <p> Dwarika located in the west in the state of Gujrat, country in India. The city derives its name from the word 'dvar' meaning door or gate in Sanskrit Language. It is located confluence to where the Gomti River merge into Arabian Sea. However, this river Gomti is not the same Gomti River which is a tributary of Ganga River. The city lies in the westermost part of India. The legendry city of Dvaraka was the dwelling place of Lord Krishna. It is generally believe that due to damage and destruction by the sea, Dvarka had submerged six times and modern day Dwarka is the 7th such city to be built in the area </p>
             </div>
             <div className="image">
                <img alt="img2" src={DestImg3}/>
             </div>
            </div>
            <div className="third-des">
                <div className="des3-text">
                    <h2>  Rameswaram</h2>
                    <p> Indian peninsula. According to legends, this is the place where Lord Ram along with his brother Laxman and devotee Hanuman built a bridge (Rama Setu) to reach Sri Lanka to rescue his wife Sita who had been abducted earlier by Ravan, the ruler of Sri Lanka. The Ramanatha Swamy Temple dedicated to Lord Shiva occupies a major area of Rameswaram. The temple is believed to have been consecrated by Shri Rama Chandra. Rameswaram is significant for the Hindus as a pilgrimage to Benaras is incomplete without a pilgrimage to Rameswaram. The presiding deity here is in the form of a Linga with the name Sri Ramanatha Swamy, it also is one of the twelve Jyotirlingas.</p>
                </div>
                <div className="image"> 
                <img alt="img3" src={DestImg4}/>
                </div>
            </div>
            <div className="fourth-des">
                <div className="des4-text">
                    <h2>Badrinath</h2>
                    <p> Badrinath is located in the state of Uttarakhand. It is in the Garhwal hills, on the banks of the Alaknanda River. The town lies between the Nar and Narayana mountain ranges and in the shadow of Nilkantha peak (6,560 m). There are other interesting sightseeing spots like Mana, Vyas Gufa, Maatamoorti, Charanpaduka, Bhimkund and the Mukh of the Saraswati River, within 3 km of Badrinathjee. Joshimath is situated on the slopes above the confluence of the rivers Alaknanda and Dhauliganga. Of the four Maths established by Adi Shankaracharya, Joshimath is the winter seat of Chardham.
                    </p>
                </div>
                <div className="image">
                    <img alt="img4" src={DestImg5}/>
                </div>
            </div>
            <div className="fiveth-des">
                <div className="des5-text">
                    <h2> Jyotirlinga</h2>
                    <p>According to a Shaiva legend from the Shiva Purana, once, Brahma (the god of creation) and Vishnu (the god of preservation) had an argument over their supremacy.[2] To settle the debate, Shiva pierced the three worlds, appearing as a huge, infinite pillar of light, the jyotirlinga. Brahma and Vishnu decided to ascend and descend across the pillar of light respectively, to find the end of the light in either direction. According to some iterations, Vishnu assumed his Varaha avatar to achieve this task, while Brahma rode a hamsa (swan).[3] Brahma lied that he had discovered the end of the light, producing a ketakī flower as proof, while Vishnu admitted that he could not find the end of the light from his journey.[4] The dishonesty of Brahma angered Shiva, causing him to curse the creator deity that he would not be worshipped; he also declared that Vishnu would be eternally worshipped for his honesty.[5] The jyotirlinga shrines are regarded to be the temples where Shiva appeared as a fiery column of light</p>
                </div>
                <div className="image">
                    <img alt="img5" src={DestImg6}/>
                </div>
            </div>
              </>
                
        )
    }
}
export default Destinationdata;
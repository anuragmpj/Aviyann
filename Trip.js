import "./Tripstyle.css"
import Tripdata from "./Tripdata";
import Trip1 from "../assets/7.jpg"
import Trip2 from "../assets/8.jpeg"
import Trip3 from "../assets/9.jpeg"
import Trip4 from "../assets/6.jpg"
import Trip5 from "../assets/12.avif"
function Trip(){
   return(
    <div className="trip">
        <h1>Recent Trips</h1>
        <p> You can discover unique destination using Google Maps.</p>
        <div className="tripcard">
          <Tripdata  
          image={Trip1}
          heading= "Trip in Dwarika"
          text="The revered city of Dwarka is one of the sacred Char Dham in India as well as one of the Sapta Puri, ancient holy pilgrimage centers in India. It is believed to be the ancient kingdom of Lord Krishna that was referred to as City of Gold. Located at western tip of Saurashtra peninsula, this city holds deep religious significance and attracts millions of devotees every year. "
          />
            <Tripdata  
          image={Trip2}
          heading= "Trip in Rameshwram "
          text="Rameshwaram Yatra is one of the famous Char Dhams in India and a holy pilgrimage tour to Rameshwaram is considered sacred in Hindu religion. Rameshwaram is the holy place where Lord Rama came to search his wife Sita and constructed Rama Setu in order to reach Lanka (now Sri Lanka) to fight Ravana. As per Hindu epic Ramayana, Lord Rama established the Shivlinga here and prayed to Lord Shiva to acquit any sins done in war against Ravana. "
          />
            <Tripdata  
          image={Trip3}
          heading= "Trip in Badrinath "
          text="The Badrinath Temple also known as the Badrinarayan Temple, located in Uttarakhand's Badrinath town, is one of the Char Dhams (four important pilgrimages) in the state. There are four pilgrim-destinations namely Yamunotri, Gangotri, Kedarnath, and Badrinath, collectively known as Char Dham. These pilgrimage centres draw large number of pilgrims each year, thus becoming the most important hubs of religious travel in the whole of Northern India.  "
          />
            <Tripdata  
          image={Trip4}
          heading= "Trip in Jagganath Puri "
          text="Puri is famous for the world famous  Shri Jagannath Temple & Longest Golden Beach. It is one of the Dhamas (Holiest of the holy place) out of four Dhamas i.e. Puri, Dwarika, Badrinath & Rameswar, in India. Mahaprabhu Shri Jagannath alomg with sister Devi Subhadra and elder brother Mahaprabhu Shri Balabhadra are being worshipped in Puri (The Purusottama Kshetra). The deities are seated on the Bejeweled Pedestal (Ratna Simhassana). Shri Jagannath Puri Temple is one of the most impressing monuments of the Indian State Odisha, was constructed by a famous king of Ganga Dynasty Ananta Varman Chodaganga Deva dating back to 12th century at the seashore Puri. "
          />
          <Tripdata  
          image={Trip5}
          heading= "Trip in Jyotirling "
          text="In Hinduism, Brahma, Vishnu and Mahesh's name are taken collectively while referring to creation, sustenance and destruction, respectively. The Universe wouldn't exist without the holy trinity that performs the three diverse yet fundamental duties to keep the cycle of birth, life and death moving. Creation is attributed to Brahma and sustenance is credited to Vishnu, while Mahesh or Lord Shiva represents the infinite power, that is responsible for constructive destruction. "
          />
        </div>
    </div>
   ); 
}


export default Trip;
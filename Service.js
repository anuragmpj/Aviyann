import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import ServiceImg from "../assets/4.png"
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
import PricingSection from "../Components/PricingSection";

function Service(){
    return (
        <>
          <Navbar/>
       <Hero
       cName="hero-mid"
       heroImg={ServiceImg}
          
       btnClass="hide"
       />
       <PricingSection></PricingSection>
      
       <Trip></Trip>
         <Footer></Footer>
        
        
        </>



    )
}




export default Service;
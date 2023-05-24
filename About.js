import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import AboutImg from "../assets/16.jpeg"
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
function About(){
    return (
        <>
          <Navbar/>
       <Hero
       cName="hero-mid"
       heroImg={AboutImg}
       
       btnClass="hide"
       />
       <AboutUs></AboutUs>
        <Footer></Footer>
        
        
        </>



    )
}




export default About;
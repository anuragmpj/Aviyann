import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import ContactImg from "../assets/3.png"
import Footer from "../Components/Footer";
import Contactform from "../Components/Contactform";



function Contact(){
    return (
        <>
           <Navbar/>
       <Hero
       cName="hero-mid"
       heroImg={ContactImg}
       
       btnClass="hide"
       />
       <Contactform></Contactform>
         <Footer></Footer>
        
        </>



    )
}




export default Contact;
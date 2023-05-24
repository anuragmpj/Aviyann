
import Destination from "../Components/Destination";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import HomeImg from "../assets/2.jpg"
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
function Home(){
    return (
        <>
        <Navbar/>
       <Hero
       cName="hero"
       heroImg={HomeImg}
       title="Your Journey Your Story"
       text="Choose Your Favourite Destination"
       buttonText="Travel Plan"
       url="/"
       btnClass="show"
       />


       
       <Destination></Destination>
       <Trip></Trip>
        <Footer></Footer>
        
        
        </>



    )
}




export default Home;
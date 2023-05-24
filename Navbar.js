import { Component } from "react";
import "./Navbarstyle.css"
import { MenuItems } from "./MeuItems";
import { Link } from "react-router-dom";
import Signup from "../routes/Signup";


class Navbar extends Component{
  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked })
  }
  
  render(){
    return(
      
      
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">AVIYAN SPIRITUL INDIA TRAVEL</h1>
        <div className="menu-icons" onClick={this
        .handleClick}>
          <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
           </div>
        <ul className={this.state.clicked ? "nav-menu active": "nav-menu" }>
        {MenuItems.map((item, index)=>{
          return(
            
            
            <li key={index}>
            <Link className={item.cName} to={item.url}>
            <i className={item.icon}></i> {item.title}
            </Link>
            

          </li>
          

          )
          
        })}
        <button onClick={Signup}> Signup</button>    
        </ul>
      </nav>
      
    )
    
  }
}
export default Navbar;
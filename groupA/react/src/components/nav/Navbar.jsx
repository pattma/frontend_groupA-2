import React, { useState, useContext } from "react";
import '../nav/navbar.css';
import Logo from '../../assets/FITBOOK.png';
import { AuthenContext } from '../../contexts/UserContext';

const toggles = [
    {
        id:"menu", 
        tag:<ion-icon name="menu-outline"></ion-icon>
    }, 
    
    {
        id:"close", 
        tag:<ion-icon name="close-outline"></ion-icon>
    }];

const Navbar = function({ token }) {

    const { logout } = useContext(AuthenContext);

    const submitLogout = async (event) => {
        event.preventDefault(); 
        await logout();
    };

    const [toggle, setToggle] = useState([{id:"menu", tag:<ion-icon name="menu-outline"></ion-icon>}]);
    
    const handleClick = function() {
        document.getElementById("nav_menu").classList.toggle("active");
        setToggle((prev) => {
            return toggles.filter(item => item.id !== prev[0].id)
        });
    };

    return (
        <nav>
            <img className="logo" src={Logo} alt="FITBOOK" />
            <ul className="navigation" id="nav_menu">
                <li key="li-01"><a className="active_menu" href="/" >Home</a></li>
                { !token && <li key="li-02"><a href="#custom-cards" >Activities</a></li> }
                { !token && <li key="li-03"><a href="#hanging-icons" >Features</a></li> }
                { token && <li key="li-04"><a href="/dashboard" >Dashboard</a></li> }
                { !token && <li key="li-05"><a href="#about" >About</a></li> }
                { !token && <li key="li-06"><button className="btnLogin-popup"><a href="/login">Login</a></button></li> }
                { token && <li key="li-07"><button onClick={submitLogout} className="btnSignout-popup">Signout</button></li> }
            </ul>
            <div className="toggle_btn" onClick={handleClick} id="toggle_btn">
                {toggle[0].tag}
            </div>
        </nav>
    );
};

export default Navbar;
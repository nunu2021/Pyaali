import {React, useState} from "react";
import "../../styles/navbar.css"
const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
       {/* <img className="nav-logo" src={logo}></img> */}
        {/* <a href="/" className="brand-name">
        Chicago's Famous Chai
        </a> */}
        <button className="hamburger"
        onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
            {/* icon from heroicons.com */}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        <div
            className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }>
            <ul>
            <li>
                {/* <a href="/" activeStyle className="hamburger-text">Home</a> */}
                <button className="regular-button">About Us</button>
            </li>
           
            <li>
            <a href="https://forms.gle/2niDN5CAkR1ehpd9A">
							<button className="action-button">Order Now!</button>

						</a>
                {/* <a href="/about" activeStyle className="hamburger-text">About Us</a> */}
            </li>
           
            {/* <li>
                <a href="/contact" activeStyle className="hamburger-text"></a>
            </li> */}
            </ul>
        </div>
    </nav>

  );
};
  
export default Navbar;
import React, { useState } from "react";

// images ###
import Logo from "../../assets/images/Amazon_logo.svg";
import eng from "../../assets/images/icons/eng.png";
import cart from "../../assets/images/icons/shopping-cart.png"

// styles ###
import "./navbar.scss";

// fontAwesomeIcons ###
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// routes ###
import { Link } from "react-router-dom";

export default function Navbar() {

  const [focusClass, setFocusClass] = useState('')
  const [currentLanguage, setCurrentLanguage] = useState('eng')

  const addFocusClass = () => {
    setFocusClass('onFocus')
  }

  const removeFocusClass = () => {
    setFocusClass('')
  }

  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="navbar-header-logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-header-deliver">
          <span className="navbar-header-deliver-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} color="#FFF" />
          </span>
          <div className="navbar-header-deliver-inner">
            <p>Deliver to</p>
            <h4>Los Angeles 90011</h4>
          </div>
        </div>
        <div className={['navbar-header-search', focusClass].join(' ')}>
          <div className="navbar-header-search-left">
            <div tabIndex="1">
              All
              <FontAwesomeIcon icon={faCaretDown} color="#000" />
            </div>
          </div>
          <div className="navbar-header-search-middle">
            <input type="text" onFocus={addFocusClass} onBlur={removeFocusClass}></input>
          </div>
          <div className="navbar-header-search-right" tabIndex="1">
            <FontAwesomeIcon icon={faSearch} color="#000" size="lg" />
          </div>
        </div>
        <div className="navbar-header-toolbar">
          <div className="navbar-header-toolbar-language">
            <img src={eng} alt="flag" />
            <FontAwesomeIcon icon={faCaretDown} color="#c1c1c1" />
          </div>
          <div className="navbar-header-toolbar-sign_in">
            <p>Hello, Sign in</p>
            <h4>Account & Lists
            <FontAwesomeIcon icon={faCaretDown} color="#c1c1c1" />
            </h4>
          </div>
          <div className="navbar-header-toolbar-orders">
            <p>Returns</p>
            <h4>& Orders</h4>
          </div>
          <div className="navbar-header-toolbar-cart">
            <div className="count">0</div>
            <img src={cart} alt="shopping-cart" />
            <h4>Cart</h4>
          </div>
        </div>

      </div>
    </div >
  );
}

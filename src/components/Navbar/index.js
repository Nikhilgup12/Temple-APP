import { Component } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import NavbarMobile from "../NavbarMobile";
import "./index.css";
class Navbar extends Component {
  state = { ishamburgerOpen: false };

  ontogglebar = () => {
    this.setState((prevState) => ({
      ishamburgerOpen: !prevState.ishamburgerOpen,
    }));
  };

  render() {
    const { ishamburgerOpen } = this.state;
    return (
      <>
        <nav className="nav-container">
          <div className="nav-content">
            <button className="nav-hamburger-icon" onClick={this.ontogglebar}>
              <GiHamburgerMenu aria-label="close" size={28} />
            </button>
            <div className="nav-logo-container">
              <Link to="/">
                {" "}
                <img
                  src="https://templesofindia.org/assets/images/tofi_logo/tofi-logo_navbar.png"
                  className="nav-logo"
                />{" "}
              </Link>

              <h1 className="nav-heading"> Temples of India </h1>
            </div>
            <ul className="nav-menu">
              <Link to="/">
                <li className="nav-items">Home</li>
              </Link>
              <li className="nav-items">Search</li>
              <Link to="/nearby-search">
                <li className="nav-items">Nearby Temple </li>
              </Link>
              <Link to="/addTemple">
                <li className="nav-items">Add Temple</li>
              </Link>

              <Link to="/about">
                <li className="nav-items">About us</li>
              </Link>

              <li className="nav-items">Login </li>
            </ul>
            <button className="home-search-icon-btn">
              <IoSearch size={20} />
            </button>
          </div>
          {ishamburgerOpen && <NavbarMobile closeNavbar={this.ontogglebar} />}
        </nav>
      </>
    );
  }
}

export default Navbar;

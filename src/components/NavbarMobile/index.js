import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdKey } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import "./index.css";

const NavbarMobile = (props) => {
  const { closeNavbar } = props;
  return (
    <>
      <div className="navbar">
        <div>
          <div className="close-button" onClick={closeNavbar}>
            &times;
          </div>
          <div className="user-section">
            <Link to="/">
              <img
                src="https://templesofindia.org/assets/images/Golden-Temple.jpg"
                className="user-avatar"
              />
            </Link>
            <div className="username-container">
              <h1 className="username-heading"> Username </h1>
              <p className="user-profile"> Profile </p>
            </div>
          </div>
          <div className="navbar-mobile-user-detail-container">
            <div>
              <Link to="/">
                <div className="nav-item">
                  <IoMdHome size={20} color={"#A50740"} />
                  <p className="nav-menu-items"> Home </p>
                </div>
              </Link>
              <Link to="">
                <div className="nav-item">
                  <MdKey size={20} color={"#A50740"} />
                  <p className="nav-menu-items"> Login </p>
                </div>
              </Link>
              <Link to="/nearby-search">
                <div className="nav-item">
                  <img src="https://templesofindia.org/assets/images/navbar_logo/namaste.png" />
                  <p className="nav-menu-items"> Nearby Temples </p>
                </div>
              </Link>
              <Link to="/addTemple">
                <div className="nav-item">
                  <FaLocationDot size={20} color={"#A50740"} />
                  <p className="nav-menu-items"> Add Temples </p>
                </div>
              </Link>
              <Link to="/about">
                <div className="nav-item">
                  <IoIosInformationCircle size={20} color={"#A50740"} />
                  <p className="nav-menu-items"> About us </p>
                </div>
              </Link>
              <Link to="/nearby-search">
                <div className="nav-item">
                  <FaStar size={20} color={"#A50740"} />
                  <p className="nav-menu-items"> Download App </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;

import {NavLink} from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="Logo">
              <NavLink to="/">
                <h1>WorldAtlas</h1>
              </NavLink>
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

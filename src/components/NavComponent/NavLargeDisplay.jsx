import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="flex justify-between items-center p-4 sticky w-full top-0 h-13">
          <p className="navName">Othniel</p>
          <div className="navContainer ">
            <ul className="flex justify-between space-x-7 items-center h-full">
              <li>
                <Link to="#Home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#About" smooth>
                  About
                </Link>
              </li>
              <li>
                <Link to="#Work" smooth>
                  Work
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </BrowserRouter>
    </>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  function clickEvent(event) {
    let navLinkButtons = document.getElementsByClassName("nav-link");
    Array.from(navLinkButtons).forEach((element) => {
      element.classList = "nav-link";
    });
    event.target.classList = "nav-link active";
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to href="/">
            NewsRabbit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" onClick={clickEvent} to="/">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={clickEvent} to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={clickEvent}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={clickEvent} to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={clickEvent} to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={clickEvent} to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={clickEvent}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

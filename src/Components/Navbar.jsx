import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          RealEstate
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Buy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sell
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage Property
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Create
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Edit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Delete
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <button className="btn btn-outline-primary m-1">Login</button>
            <button className="btn btn-primary m-1">SignUp</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

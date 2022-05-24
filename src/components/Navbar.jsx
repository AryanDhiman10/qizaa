import React from 'react';
import logo from '../assets/logo.webp'
import title from '../assets/qizaaTitle.webp'                         

const Navbar = () => {
  return(
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white my-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="vstack">
                <img src={logo} style={{width: "auto", height: "auto", maxWidth: "78px", maxHeight: "78px"}} alt="logo" />
                <img src={title} style={{width: "auto", height: "auto", maxWidth: "78px", maxHeight: "78px"}} alt="logo" />
              </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-2 fw-bold">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <a className="nav-link" href="/">Our Store</a>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <a className="nav-link" href="/">Tableware</a>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <a className="nav-link" href="/">Sustainbale Packaging</a>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <a className="nav-link" href="/">Buy Wholesale</a>
                </li>
                <li className="nav-item px-2 fw-bold">
                  <a className="nav-link" href="/">More</a>
                </li>
              </ul>
              <div className="d-flex  flex-row-reverse" style={{fontSize: "1.25rem"}}>
                <i className="bi bi-cart2 bi-2x"> <i className="bi bi-person-circle bi-2x px-2">  Join Community</i></i>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
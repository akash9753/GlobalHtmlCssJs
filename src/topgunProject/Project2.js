import React from "react";
import "./project2.css";

const Project2 = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark " id="top_nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {/* <img src={require(./dog9.png)} alt="" className="img-fluid" /> */}
              <img
                src={require("./media/dog9.png")}
                alt="dog"
                className="img-fluid"
              />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>

              <form className="d-flex" id="searchform">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  id="searchbox"
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  id="searchbtn"
                >
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center" id="banner">
          <div className="col-md-6 col-11" id="bannertext">
            <h1>
              First I wanted to be <br />a veterinarian
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button type="button" className="btn" id="bannerbtn1">Contact Us</button>
            <button type="button" className="btn" id="bannerbtn2">Our Services</button>
          </div>
          <div className="col-md-4 d-none d-md-block" id="bannerimg">
            <img
              src={require("./media/dog1.png")}
              alt="dog"
              className="img-fluid"
            />
          </div>
        </div>
         
         <div className="row justify-content-center" id="service">
          <div className="col-md-5 col-11 " id="service-text">
            <h1>As a veterinarian and<br/>lover of animals.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.</p>
              <button type="button" className="btn" id="service-btn">Our Service</button>
          </div>
          <div className="col-md-5 " id="service-img">
          <img
              src={require("./media/dog2.png")}
              alt="dog"
              className="img-fluid"
            />
          </div>
         </div>


         {/* counter */}
         <div className="row justify-content-center" id="counter-section">
          <div className="col-md-3 text-center text-white mt-5 mb-3">
          <i class="bi bi-heart-half counter-icon"></i>
          <h3>
            +34793<br/>
            Happy Client
          </h3>
          </div>
          <div className="col-md-3 text-center text-white mt-5 mb-3">
          <i class="bi bi-building counter-icon"></i>
          <h3>+45382<br/>
          Department
          </h3>
          </div>
          <div className="col-md-3 text-center text-white mt-5 mb-3">
          <i class="bi bi-eyedropper counter-icon"></i>
          <h3>+54762<br/>
          Vaccinations
          </h3>
          </div>
         </div>

        {/* container-fluid */}
      </div>
      
    </>
  );
};

export default Project2;

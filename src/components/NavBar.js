import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "./Pages/Login.css";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div class="header-bottom " style={{ backgroundColor: "skyblue" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <div class="header-contact">
                <ul>
                  <li>
                    <div class="phone">
                      <i class="fa fa-phone"></i>
                      <a href="tel:18001213367">18001213367</a>
                    </div>
                  </li>
                  <li>
                    <div class="mail">
                      <i className="fa fa-envelope-square"></i>{" "}
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        {" "}
                        Jabeedkhan.aits@email.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3"></div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <div
                class="header-login"
              >
                <a
                  class="login modal-form"
                  data-target="#login-form"
                  data-toggle="modal"
                  href="/sign-up"
                  
                >
                  Login / Sign Up
                </a>
              </div>
              <div className="d-flex pt-3 pb-3 ">
                <div className="social-media d-flex align-item-center">
                  <a href="!#" className="text-black">
                    <i className="fab fa-facebook-f mr-4" />
                  </a>
                  <a href="!#" className="text-black">
                    <i className="fab fa-twitter mr-4" />
                  </a>
                  <a href="!#" className="text-black">
                    <i className="fab fa-instagram mr-4" />
                  </a>
                  <a href="!#" className="text-black">
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* header end */}

      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img
              src="https://magichands.co/assets/final-css-index/images/logo.png"
              title="Find Pro Hands "
              style={{ width: "200px" }}
            />
            {/* <i className="fas fa-home"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <i className="fa fa-home  text-success"></i>

              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <i className="fa fa-user-plus  text-warning"></i>
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Service
              </NavLink>
            </li>

            <li className="nav-item">
              <i className="fa fa-map-marker-alt text-info"></i>
              <NavLink
                exact
                to="/location"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Location
              </NavLink>
            </li>
            <li className="nav-item">
              <i className="fa fa-address-card text-danger"></i>
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <i className="fa fa-phone-square-alt text-primary"></i>
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Login.. </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="Login">
                    <Form>
                      <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          autoFocus
                          type="email"
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          // value={password}
                          // onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Button
                        block
                        size="lg"
                        type="submit"
                        style={{
                          marginTop: "20px",
                          marginLeft: "60px",
                          width: "200px",
                        }}
                        // disabled={!validateForm()}
                      >
                        Login
                      </Button>
                    </Form>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleShow}
              >
                Login
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Register.. </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="Login">
                    <Form>
                      <Form.Group size="lg" controlId="email">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          autoFocus
                          type="name"
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group size="lg" controlId="number">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                          autoFocus
                          type="number"
                          // value={email}
                          // onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          // value={password}
                          // onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Button
                        block
                        size="lg"
                        type="submit"
                        style={{
                          marginTop: "20px",
                          marginLeft: "60px",
                          width: "200px",
                        }}
                        // disabled={!validateForm()}
                      >
                        Register
                      </Button>
                        
                    </Form>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleShow}
              >
                Register
              </NavLink>
            </li> */}
            <li>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

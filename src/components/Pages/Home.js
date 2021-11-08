import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
          <div className="container-fluid">
            {/* <div className="row">
              <div className="col-sm-12">
                <h3 style={{ textAlign: "center", color: "skyblue" }}>
                    Welcome To Magic Hands
                  </h3>
              </div>
            </div> */}
            <div className="row">
              <div className="col-md-12">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/features/03.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{ color: "orange" }}>
                        FIND PROFESSIONAL WORKS
                      </h3>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://magichands.co/Admin/banner_images/2ed7c6fd699a999216fab790c5fdbef1.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3 style={{ color: "orange" }}>
                        FIND PROFESSIONAL WORKS
                      </h3>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://magichands.co/assets/final-css-index/images/banner-2.jpg"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3 style={{ color: "red" }}> FIND PROFESSIONAL WORKS</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12">
                <h3
                  style={{
                    textAlign: "center",
                    color: "skyblue",
                    fontSize: "60px",
                  }}
                >
                  {" "}
                  Our Service
                </h3>
                {/* <hr className="bg-primary" /> */}
                <img
                  style={{ width: "800px", marginLeft: "300px" }}
                  src="https://warcraft.blizzplanet.com/wp-content/uploads/2015/08/Ligne.png"
                />
              </div>
              <div className="row" style={{ padding: "40px" }}>
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src="https://magichands.co/assets/final-css-index/images/Electrical.jpg"
                      class="img-thumbnail"
                      alt="Cinque Terre"
                      
                    />
                    <a style={{ textAlign: "center",height:'30px',padding:'5px' }} href="/about">
                      Electrical
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  {/* https://magichands.co/assets/final-css-index/images/water-purifier.png */}
                  <div className="card">
                    <img
                      src="https://magichands.co/assets/final-css-index/images/water-purifier.png"
                      class="img-thumbnail"
                      alt="Cinque Terre"
                    />
                    <a style={{ textAlign: "center" }} href="/about">
                      water-purifier
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  {/*  src="https://magichands.co/assets/final-css-index/images/Geyser.png" */}
                  <div className="card">
                    <img
                      src="https://magichands.co/assets/final-css-index/images/Geyser.png"
                      class="img-thumbnail"
                      alt="Cinque Terre"
                    />
                    <a style={{ textAlign: "center" }} href="/about">
                      Geyser
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  {/* https://magichands.co/assets/final-css-index/images/Television.png */}
                  <div className="card">
                    <img
                      src="https://magichands.co/assets/final-css-index/images/Television.png"
                      class="img-thumbnail"
                      alt="Cinque Terre"
                    />
                    <a style={{ textAlign: "center" }} href="/about">
                      Television
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ padding: "40px" }}>
              <div className="col-md-3">
                {/*  src="https://magichands.co/assets/final-css-index/images/air-conditioner.png"*/}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/air-conditioner.png"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    air-conditioner
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/fridge.png */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/fridge.png"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    fridge
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/washing-machine.png */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/washing-machine.png"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    washing-machine
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/microwave-oven.png */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/microwave-oven.png"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    microwave-oven
                  </a>
                </div>
              </div>
            </div>

            <div className="row" style={{ padding: "40px" }}>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/Carpentary.jpg */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Carpentary.jpg"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Carpentary
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/Plumbing.jpg */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Plumbing.jpg"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Plumbing
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/Painting.jpg */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Painting.jpg"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Painting
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/Tailor.jpg */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Tailor.jpg"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Tailor
                  </a>
                </div>
              </div>
            </div>
            <div className="row" style={{ padding: "40px" }}>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/corporate-gifting.png */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/corporate-gifting.png"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    corporate-gifting
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/Interior-Design.png */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Interior-Design.png"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                    style={{ height: "220px" }}
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Interior-Design
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/Computer.jpg */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Computer.jpg"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Computer
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                {/* https://magichands.co/assets/final-css-index/images/Tank-Cleaning.png */}

                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Tank-Cleaning.png"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Tank-Cleaning
                  </a>
                </div>
              </div>
            </div>

            <div className="row" style={{ padding: "40px" }}>
              <div className="col-md-4">
                {/* https://magichands.co/assets/final-css-index/images/Deep-House.jpg */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Deep-House.jpg"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Deep-House
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                {/* https://magichands.co/assets/final-css-index/images/Gardening.jpg */}
                <div className="card">
                  <img
                    src="https://magichands.co/assets/final-css-index/images/Gardening.jpg"
                    class="img-thumbnail"
                    alt="Cinque Terre"
                  />
                  <a style={{ textAlign: "center" }} href="/about">
                    Gardening
                  </a>
                </div>
              </div>
            </div>

            <div
              className="row "
              style={{ paddingTop: "20px", textAlign: "center" }}
            >
              <div style={{ fontSize: "100px" }}>
                <span className="text-success">Find pro hands Mobile app</span>
              </div>
              <div
                className="col-md-2 "
                style={{
                  marginRight: "100px",
                  paddingTop: "100px",
                  marginLeft: "40px",
                }}
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.shroak.findprohands_partner"
                  target="_blank"
                >
                  <img src="https://magichands.co/assets/final-css-index/images/googleplayapp.png" />
                </a>
              </div>
              <div
                className="col-md-2"
                style={{
                  marginRight: "100px",
                  paddingTop: "100px",
                  marginLeft: "40px",
                }}
              >
                <a href="#">
                  {" "}
                  <img src="https://magichands.co/assets/final-css-index/images/appstore.png" />
                </a>
              </div>
              <div className="col-md-5">
                <img src="https://magichands.co/assets/final-css-index/images/mobile1.png" />
              </div>
            </div>

            {/* <div className="row bg-light" style={{ paddingTop: "30px" }}>
              <div className="col-md-4"></div>
              <div className="col-md-4 ">
                
              </div>
            </div> */}

            <div className="row">
              <div
                class="col-md-12 "
                style={{ textAlign: "center", marginTop: "70px" }}
              >
                <img src="https://magichands.co/assets/final-css-index/images/logo.png" />
              </div>
              <br />
              <br />
              <br />
              <div className="col-md-3"></div>

              <div className="col-md-1">
                {/* <hr
                  style={{
                    width: "100%",
                    transform: "rotate(90deg)",
                    marginTop: "60px",
                    paddingTop: "2px",
                    color: "#00ff00",
                  }}
                /> */}
              </div>

              <div className="col-md-1">
                <div
                  class="single-brand "
                  style={{ borderColor: "chartreuse", paddingTop: "40px" }}
                >
                  <a href="/privacy" target="_blank">
                    Privacy
                  </a>
                </div>
              </div>
              <div className="col-md-1">
                <hr
                  style={{
                    width: "100%",
                    transform: "rotate(90deg)",
                    marginTop: "60px",
                    paddingTop: "2px",
                    color: " #ff0000",
                  }}
                />
              </div>
              <div className="col-md-1">
                <div
                  class="single-brand "
                  style={{ borderColor: "chartreuse", paddingTop: "40px" }}
                >
                  <a href="/about" target="_blank">
                    About Us
                  </a>
                </div>
              </div>
              <div className="col-md-1">
                <hr
                  style={{
                    width: "100%",
                    transform: "rotate(90deg)",
                    marginTop: "60px",
                    paddingTop: "2px",
                    color: "#cc33ff",
                  }}
                />
              </div>
              <div className="col-md-1">
                <div
                  class="single-brand "
                  style={{ borderColor: "chartreuse", paddingTop: "40px" }}
                >
                  <a href="/contact" target="_blank">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="col-md-2"></div>
            </div>

            <div className="row" style={{ paddingTop: "200px" }}>
              <div class="find-section-wrapper">
                <div class="container">
                  <div class="find-section">
                    <div class="header">
                      <h1 style={{ textAlign: "center" }}>Find</h1>
                      <p style={{ textAlign: "center" }}>
                        the best among the above and get done with your home
                        services
                      </p>
                      <img
                        style={{ width: "700px", marginLeft: "180px" }}
                        src="https://warcraft.blizzplanet.com/wp-content/uploads/2015/08/Ligne.png"
                      />
                    </div>
                    <div class="services-list">
                      <div class="inner-services">
                        <ul class="clearfix">
                          <li>
                            <div class="block">
                              <img
                                src="https://magichands.co/assets/final-css-index/images/Veriﬁed-Professionals.svg"
                                title="Verified Professionals"
                                alt="Verified Professionals"
                              />
                              <span>Verified Professionals</span>
                            </div>
                          </li>
                          <li>
                            <div class="block">
                              <img
                                src="https://magichands.co/assets/final-css-index/images/Insured-Works.svg"
                                title="Insured Works"
                                alt="Insured Works"
                              />
                              <span>Insured Works</span>
                            </div>
                          </li>
                          <li>
                            <div class="block">
                              <img
                                src="https://magichands.co/assets/final-css-index/images/Re-work.svg"
                                title="Re-Works Assurance"
                                alt="Re-Works Assurance"
                              />
                              <span>Re-work Assurance</span>
                            </div>
                          </li>
                          <li>
                            <div class="block">
                              <img
                                src="https://magichands.co/assets/final-css-index/images/Professional.svg"
                                title="Professional Support"
                                alt="Professional Support"
                              />
                              <span>Professional Support</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Footer -->  */}
            <div className="row" style={{ paddingTop: "200px" }}>
              <footer className="bg-warning">
                <div class="container">
                  <div class="row" style={{ paddingTop: "20px" }}>
                    <div class=" col-sm-4 col-md col-sm-4 col-12 col mb-10">
                      <h5 class="mb-4">Reach us</h5>

                      <p>
                        <i class="fa fa-location-arrow mr-2"></i> 38/3, 4th
                        floor, Rashtriya Vidyalaya Rd, opposite to Vijaya
                        College, Basavanagudi, Bengaluru, Karnataka 560004{" "}
                      </p>
                      <p>
                        <i class="fa fa-phone mr-2">
                          <a href="tel:18001213367">1800 121 3367</a>
                        </i>
                      </p>
                      <p>
                        <i class="fa fa fa-envelope mr-2"></i>{" "}
                        info@yourdomain.com{" "}
                      </p>
                    </div>

                    <div class="col-sm-4 col-md  col-6 col mb-4">
                      <h5 class="mb-4">Site links</h5>

                      <ul class="list-inline">
                        <li class="list-block-item mx-2">
                          <a href="/">Home</a>
                        </li>
                        <li class="list-block-item mx-2">
                          <a href="/about">About Us</a>
                        </li>
                        <li class="list-block-item mx-2">
                          <a href="/services">Services</a>
                        </li>
                        <li class="list-block-item mx-2">
                          <a href="/location">Location</a>
                        </li>
                        {/* <li class="list-block-item mx-2">
                          <a href="#">Contant us</a>
                        </li> */}
                      </ul>
                    </div>

                    <div class="col-sm-4 col-md  col-6 col mb-4">
                      <h5 class="mb-4">Quick links</h5>

                      <ul class="list-inline">
                        <li class="list-block-item mx-2">
                          <a href="#">Blog</a>
                        </li>
                        <li class="list-block-item mx-2">
                          <a href="/contact" target="_blank">
                            Contact Us
                          </a>
                        </li>
                        <li class="list-block-item mx-2">
                          <a href="/privacy" target="_blank">
                            Privacy Policy
                          </a>
                        </li>
                        <li class="list-block-item mx-2">
                          <a href="http://.com">Terms & Conditions</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-sm-4 col-md  col-12 col mb-4">
                      <h5 class="mb-4">Follow us</h5>
                      <ul class="social_footer_ul list-inline text-left mb-0">
                        <li class="list-inline-item mx-2">
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="list-inline-item mx-2">
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item mx-2">
                          <a href="#">
                            <i class="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li class="list-inline-item mx-2">
                          <a href="#">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 pt-4">
                      <p class="text-center copyrights">
                        <a class="text-primary" href="/">
                          magichands
                        </a>{" "}
                        by . <br />© All Rights Reserved
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;

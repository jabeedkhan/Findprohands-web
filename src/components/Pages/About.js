import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export const About = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);


  return (
      <>  
        {loading === false ? (
          <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://www.motocms.com/blog/wp-content/uploads/2017/11/about-us-page-concept-illustrati-1.jpg"
                style={{ height: "600px", width: "600px", paddingTop: "30px" }}
              />
            </div>
            <div className="col-md-5">
              <div className="section-header pt-5 pb-5 text-center">
                <h2 className="section-title">
                  <span style={{ color: "orange" }}>
                    <i className="fa fa-user"></i> About{" "}
                  </span>
                  Us
                  <hr
                    style={{
                      border: "2",
                      borderColor: "red",
                      marginLeft: "120px",
                      marginRight: "100px",
                    }}
                  />
                  {/* marginBottom:'0',transform:'rotate(90deg)',borderColor:'red' */}
                </h2>
                <div>
                  <div className="container">
                    <p style={{textAlign:'center',padding:'20px',margin:'15px'}}>
                      Find pro hands is recognized as the fastest growing startup in
                      India. We are a mobile marketplace for local services. We help
                      customers hire trusted professionals for all their service
                      needs. We are staffed with young, passionate people working
                      tirelessly to make a difference in the lives of people by
                      catering them to their service needs at their doorsteps. We
                      provide housekeeping services which consists of electricians,
                      plumbers, house cleaning, carpenters and interior designing.
                      We are a sure shot destination for all your service needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
    
          <div className="row" style={{ paddingTop: "200px" }}>
              <footer className="bg-warning">
                <div class="container">
                  <div class="row" style={{ paddingTop: "20px" }}>
                    <div class=" col-sm-4 col-md col-sm-4 col-12 col mb-10">
                      <h5 class="mb-4">Reach us</h5>
    
                      <p>
                        <i class="fa fa-location-arrow mr-2"></i> 38/3, 4th floor,
                        Rashtriya Vidyalaya Rd, opposite to Vijaya College,
                        Basavanagudi, Bengaluru, Karnataka 560004{" "}
                      </p>
                      <p>
                        <i class="fa fa-phone mr-2">
                          <a href="tel:18001213367">1800 121 3367</a>
                        </i>
                      </p>
                      <p>
                        <i class="fa fa fa-envelope mr-2"></i> info@yourdomain.com{" "}
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
        ) : (
          <Loader />
        )
      }


      </>
  );
};

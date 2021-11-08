import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export const Location = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ?
      (
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1
            style={{
              textAlign: "center",
              color: "skyblue",
              paddingTop: "20px",
            }}
          >
            <i className="fa fa-map-marker-alt text-info"></i> Our Location{" "}
          </h1>
          <hr style={{ border: "2", borderColor: "red" }} />
        </div>
        <div className="col-md-2"></div>

        <div className="col-md-4">
          <h4 style={{ color: "orange" }}>
            <i className="fa fa-map-marker-alt"></i> Addredd Information
          </h4>
          <hr style={{ border: "2", borderColor: "red" }} />
          <p>
            38/3, 4th floor, Rashtriya Vidyalaya Rd, opposite to Vijaya College,
            Basavanagudi, Bengaluru, Karnataka 560004 support@gmail.com
            18001213367
          </p>
        </div>
        <div className="col-md-5">
          <iframe
            title="mapMarker"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4820607945835!2d77.57812501447468!3d12.940975819051769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152546178387%3A0xcbd002a7f2d61790!2sMagic%20Hands!5e0!3m2!1sen!2sin!4v1632997687665!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0, marginBottom: "-7px" }}
            allowFullScreen
          />
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

import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import emailjs from "emailjs-com";

export const Contact = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5m03yxw",
        "template_hwf6xeg",
        e.target,
        "user_ty5G7Gk4MQ8Fs2ZKRdN2x"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Send Successfully", result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
    {
      loading === false ? (
        <div className="container-fluid bg-white">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://www.protinex.com/wp-content/uploads/2020/06/contactus-mob.jpg"
            style={{ height: "600px", width: "600px", paddingTop: "140px" }}
          />
        </div>
        <div className="col-md-8 ">
          <div className="section-header pt-5 pb-5 text-center">
            <h2 className="section-title">
              <span>
                <i className="fa fa-address-card text-primary"></i> Contact{" "}
              </span>
              Us
              <hr
                style={{
                  border: "2",
                  borderColor: "red",
                  marginLeft: "100px",
                  marginRight: "100px",
                }}
              />
            </h2>
            <div>
              <div className="container">
                <form onSubmit={sendEmail}>
                  <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="phone"
                        className="form-control"
                        placeholder="Your Phone Number"
                        name="phone"
                        required
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                      <textarea
                        className="form-control"
                        id=""
                        cols="30"
                        rows="8"
                        placeholder="Your message"
                        name="message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                      <input
                        type="submit"
                        className="btn btn-warning"
                        value="Send Message"
                      ></input>
                    </div>
                  </div>
                </form>
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

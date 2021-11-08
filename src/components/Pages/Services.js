import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";

export class Services extends Component {
  render() {
    const data = [
      {
        url: "https://magichands.co/assets/final-css-index/images/Electrical.jpg",
        title: "Electrical",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Electrical.jpg",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/water-purifier.png",
        title: "water-purifier",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/water-purifier.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Geyser.png",
        title: "Geyser",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Geyser.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Television.png",
        title: "Television",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Television.png",
      },

      {
        url: "https://magichands.co/assets/final-css-index/images/air-conditioner.png",
        title: "air-conditioner",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/air-conditioner.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/fridge.png",
        title: "Fridge",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/fridge.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/washing-machine.png",
        title: "washing-machine",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/washing-machine.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/microwave-oven.png",
        title: "microwave-oven",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/microwave-oven.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Carpentary.jpg",
        title: "Carpentary",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Carpentary.jpg",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Plumbing.jpg",
        title: "Plumbing",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Plumbing.jpg",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Painting.jpg",
        title: "Painting",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Painting.jpg",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Tailor.jpg",
        title: "Tailor",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Tailor.jpg",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/corporate-gifting.png",
        title: "corporate-gifting",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/corporate-gifting.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Interior-Design.png",
        title: "Interior-Design",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Interior-Design.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Computer.jpg",
        title: "Computer",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Computer.jpg",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Tank-Cleaning.png",
        title: "Tank-Cleaning",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Tank-Cleaning.png",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Deep-House.jpg",
        title: "Deep-House",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Deep-House.jpg",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Gardening.jpg",
        title: "Gardening",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Gardening.jpg",
      },
      {
        url: "https://magichands.co/assets/final-css-index/images/Gardening.jpg",
        title: "Gardening",
        thumbUrl:
          "https://magichands.co/assets/final-css-index/images/Gardening.jpg",
      },
    ];

    return (
      <div className="container-fluid p-0">
        <div className="row">
          <DztImageGalleryComponent images={data} />
        </div>

        {/* footer started */}

        <div className="row" style={{ paddingTop: "0px" }}>
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
        {/* footer end */}
      </div>
    );
  }
}

export default Services;
